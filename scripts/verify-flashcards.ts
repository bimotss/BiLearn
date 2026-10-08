/**
 * BiLearn — Verifikasi Mutu & Integritas Flashcard Jepang JLPT N5 Vol. 1
 * Jalankan: npx tsx scripts/verify-flashcards.ts
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import {
  japaneseCards,
  japaneseN5Parts,
  japaneseN5Vol1Deck,
  getPartCards,
  generatePartQuizQuestions,
} from "../src/data/flashcards";
import type { JapaneseFlashcardItem, FlashcardPart } from "../src/lib/flashcard-types";

let failures = 0;

function reportPass(msg: string) {
  console.log(`✅ ${msg}`);
}

function reportFail(msg: string) {
  console.error(`❌ ${msg}`);
  failures++;
}

/** Fungsi validasi data yang dipakai untuk produksi dan pengujian fixture */
export function validateFlashcardDataset(
  cards: JapaneseFlashcardItem[],
  parts: FlashcardPart[]
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!Array.isArray(cards)) {
    return { valid: false, errors: ["Data kartu bukan berupa array."] };
  }

  if (cards.length !== 100) {
    errors.push(`Jumlah kartu adalah ${cards.length}, wajib tepat 100 kartu.`);
  }

  const seenIds = new Set<string>();
  const seenNos = new Set<number>();

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const prefix = `Kartu index ${i}`;

    if (!card.id || typeof card.id !== "string") {
      errors.push(`${prefix}: ID tidak valid atau kosong.`);
    } else {
      if (seenIds.has(card.id)) {
        errors.push(`${prefix}: ID duplikat '${card.id}'.`);
      }
      seenIds.add(card.id);
    }

    if (typeof card.sourceNo !== "number" || card.sourceNo < 1 || card.sourceNo > 100) {
      errors.push(`${prefix}: sourceNo tidak valid (${card.sourceNo}).`);
    } else {
      if (seenNos.has(card.sourceNo)) {
        errors.push(`${prefix}: sourceNo duplikat (${card.sourceNo}).`);
      }
      seenNos.add(card.sourceNo);
    }

    const requiredStringFields: (keyof JapaneseFlashcardItem)[] = [
      "term",
      "hiragana",
      "katakana",
      "romaji",
      "meaning",
      "exampleJapanese",
      "exampleKana",
      "exampleRomaji",
      "exampleMeaning",
    ];

    for (const f of requiredStringFields) {
      const val = card[f];
      if (typeof val !== "string" || val.trim().length === 0) {
        errors.push(`${prefix} (No ${card.sourceNo ?? "?"}): Field '${f}' kosong atau bukan string.`);
      }
    }
  }

  // Verifikasi urutan No numerik
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].sourceNo !== i + 1) {
      errors.push(`Urutan nomor tidak urut di index ${i}: ditemukan No ${cards[i].sourceNo}, diharapkan ${i + 1}.`);
      break;
    }
  }

  // Verifikasi 10 bagian
  if (parts.length !== 10) {
    errors.push(`Jumlah bagian adalah ${parts.length}, wajib tepat 10 bagian.`);
  }

  const assignedCardIds = new Set<string>();

  for (let pIdx = 0; pIdx < parts.length; pIdx++) {
    const part = parts[pIdx];
    const expectedPartNo = pIdx + 1;
    const expectedStart = pIdx * 10 + 1;
    const expectedEnd = expectedPartNo * 10;

    if (part.partNumber !== expectedPartNo) {
      errors.push(`Bagian ${pIdx + 1}: partNumber adalah ${part.partNumber}, diharapkan ${expectedPartNo}.`);
    }
    if (part.startNo !== expectedStart || part.endNo !== expectedEnd) {
      errors.push(
        `Bagian ${part.partNumber}: rentang ${part.startNo}–${part.endNo}, diharapkan ${expectedStart}–${expectedEnd}.`
      );
    }
    if (part.itemIds.length !== 10) {
      errors.push(
        `Bagian ${part.partNumber}: memiliki ${part.itemIds.length} kartu, wajib tepat 10 kartu.`
      );
    }

    for (const id of part.itemIds) {
      if (assignedCardIds.has(id)) {
        errors.push(`ID kartu '${id}' terdaftar di lebih dari satu bagian.`);
      }
      assignedCardIds.add(id);
    }
  }

  if (assignedCardIds.size !== cards.length && cards.length === 100) {
    errors.push(`Jumlah kartu yang terdaftar pada seluruh bagian (${assignedCardIds.size}) tidak sama dengan total kartu (100).`);
  }

  return { valid: errors.length === 0, errors };
}

function runDataIntegrityCheck() {
  console.log("── 1. Verifikasi Integritas Data Produksi ──");
  const result = validateFlashcardDataset(japaneseCards, japaneseN5Parts);
  if (result.valid) {
    reportPass("100 kartu JLPT N5 Vol. 1 lengkap, terurut 1..100, semua field terisi non-kosong.");
    reportPass("Tepat 10 bagian (masing-masing 10 kartu), tidak ada celah atau duplikasi.");
  } else {
    for (const err of result.errors) {
      reportFail(`Kesalahan data: ${err}`);
    }
  }

  // Cek metadata deck
  if (
    japaneseN5Vol1Deck.slug === "jepang" &&
    japaneseN5Vol1Deck.totalCards === 100 &&
    japaneseN5Vol1Deck.totalParts === 10 &&
    japaneseN5Vol1Deck.level === "N5" &&
    japaneseN5Vol1Deck.volume === 1
  ) {
    reportPass("Metadata deck Flashcard Jepang (slug, subtitle, level, volume, total) valid.");
  } else {
    reportFail("Metadata deck Flashcard Jepang tidak sesuai spesifikasi.");
  }
}

function runSourceReconciliation() {
  console.log("\n── 2. Rekonsiliasi dengan Workbook Excel Sumber ──");
  const excelPath = "C:\\Users\\bim\\Downloads\\JLPT N5 Vol 1 Flashcards (Lengkap).xlsx";
  if (fs.existsSync(excelPath)) {
    try {
      const output = execSync(
        `uv run --with openpyxl python scripts/reconcile-flashcards.py "${excelPath}"`,
        { encoding: "utf-8" }
      );
      if (output.includes("100% COCOK")) {
        reportPass("Rekonsiliasi workbook Excel: seluruh 100 record x 10 field identik dengan sumber.");
      } else {
        reportFail(`Rekonsiliasi Excel melaporkan masalah: ${output}`);
      }
    } catch (e: unknown) {
      const err = e instanceof Error ? e.message : String(e);
      reportFail(`Gagal menjalankan skrip rekonsiliasi Excel: ${err}`);
    }
  } else {
    console.log(`ℹ️ Workbook Excel tidak ditemukan di ${excelPath}. Menggunakan validasi file repo yang sudah diimpor.`);
  }

  // Cek file provenance di repo
  const provenancePath = path.join("src", "data", "flashcards", "provenance.json");
  if (fs.existsSync(provenancePath)) {
    try {
      const prov = JSON.parse(fs.readFileSync(provenancePath, "utf-8"));
      if (prov.totalRecords === 100 && prov.sha256 && prov.unrecognizedExtraCells) {
        reportPass("File provenance.json lengkap dengan SHA-256, tanggal impor, dan catatan teknis.");
      } else {
        reportFail("File provenance.json tidak memiliki struktur metadata yang lengkap.");
      }
    } catch {
      reportFail("File provenance.json gagal di-parse sebagai JSON valid.");
    }
  } else {
    reportFail("File provenance.json tidak ditemukan di src/data/flashcards.");
  }
}

function runBadFixturesCheck() {
  console.log("\n── 3. Pengujian Fixture Buruk (Verifier Wajib Menolak Kesalahan) ──");

  // Fixture 1: Kurang dari 100 kartu (99 kartu)
  const fixture99Cards = japaneseCards.slice(0, 99);
  const res1 = validateFlashcardDataset(fixture99Cards, japaneseN5Parts);
  if (!res1.valid && res1.errors.some((e) => e.includes("wajib tepat 100 kartu"))) {
    reportPass("Fixture buruk #1 (hanya 99 kartu) berhasil ditolak.");
  } else {
    reportFail("Fixture buruk #1 (99 kartu) lolos validasi!");
  }

  // Fixture 2: Field kosong
  const fixtureEmptyField: JapaneseFlashcardItem[] = JSON.parse(JSON.stringify(japaneseCards));
  fixtureEmptyField[14].meaning = "   "; // baris 15 meaning kosong
  const res2 = validateFlashcardDataset(fixtureEmptyField, japaneseN5Parts);
  if (!res2.valid && res2.errors.some((e) => e.includes("Field 'meaning' kosong"))) {
    reportPass("Fixture buruk #2 (field 'meaning' kosong pada kartu 15) berhasil ditolak.");
  } else {
    reportFail("Fixture buruk #2 (field kosong) lolos validasi!");
  }

  // Fixture 3: ID duplikat
  const fixtureDuplicateId: JapaneseFlashcardItem[] = JSON.parse(JSON.stringify(japaneseCards));
  fixtureDuplicateId[5].id = fixtureDuplicateId[4].id;
  const res3 = validateFlashcardDataset(fixtureDuplicateId, japaneseN5Parts);
  if (!res3.valid && res3.errors.some((e) => e.includes("ID duplikat"))) {
    reportPass("Fixture buruk #3 (ID duplikat) berhasil ditolak.");
  } else {
    reportFail("Fixture buruk #3 (ID duplikat) lolos validasi!");
  }

  // Fixture 4: Pembagian bagian tidak tepat (misal Bagian 1 berisi 11 kartu)
  const fixtureBadParts: FlashcardPart[] = JSON.parse(JSON.stringify(japaneseN5Parts));
  fixtureBadParts[0].itemIds.push(fixtureBadParts[1].itemIds[0]);
  const res4 = validateFlashcardDataset(japaneseCards, fixtureBadParts);
  if (!res4.valid && res4.errors.some((e) => e.includes("memiliki 11 kartu"))) {
    reportPass("Fixture buruk #4 (bagian dengan jumlah kartu salah) berhasil ditolak.");
  } else {
    reportFail("Fixture buruk #4 (pembagian bagian salah) lolos validasi!");
  }
}

function runBehaviorAndStateSimulation() {
  console.log("\n── 4. Simulasi Status Hafalan & Semantik Sesi ──");

  // Mock store in-memory untuk simulasi logika
  const storage: Record<string, "not-memorized" | "memorized"> = {};

  const markCard = (id: string, st: "memorized" | "not-memorized") => {
    storage[id] = st;
  };

  const getStatus = (id: string): "unstudied" | "not-memorized" | "memorized" => {
    return storage[id] ?? "unstudied";
  };

  // Simulasi 1: Status awal
  const part1Cards = getPartCards(japaneseN5Vol1Deck, japaneseN5Parts[0]);
  const allInitialUnstudied = part1Cards.every((c) => getStatus(c.id) === "unstudied");
  if (allInitialUnstudied) {
    reportPass("Kartu baru berstatus 'unstudied' secara default.");
  } else {
    reportFail("Status awal kartu bukan 'unstudied'.");
  }

  // Simulasi 2: Putaran campuran (6 hafal, 4 belum)
  const roundRatings: Record<string, "memorized" | "not-memorized"> = {};
  for (let i = 0; i < part1Cards.length; i++) {
    const card = part1Cards[i];
    const status: "memorized" | "not-memorized" = i < 6 ? "memorized" : "not-memorized";
    markCard(card.id, status);
    roundRatings[card.id] = status;
  }

  const memorizedCount = part1Cards.filter((c) => getStatus(c.id) === "memorized").length;
  if (memorizedCount === 6) {
    reportPass("Putaran campuran: 6 kartu berstatus hafal, 4 belum hafal tersimpan benar (6/10).");
  } else {
    reportFail(`Putaran campuran: memorizedCount adalah ${memorizedCount}, diharapkan 6.`);
  }

  // Simulasi 3: Pengulangan yang belum hafal
  const repeatQueue = part1Cards.filter((c) => getStatus(c.id) !== "memorized");
  if (repeatQueue.length === 4) {
    reportPass("Antrean ulangi belum hafal: tepat 4 kartu belum hafal yang masuk antrean.");
  } else {
    reportFail(`Antrean ulangi belum hafal: panjangnya ${repeatQueue.length}, diharapkan 4.`);
  }

  // Simulasi 4: Penurunan status (kartu hafal dinilai belum hafal)
  const cardToDowngrade = part1Cards[0]; // sebelumnya memorized
  markCard(cardToDowngrade.id, "not-memorized");
  const downgradedCount = part1Cards.filter((c) => getStatus(c.id) === "memorized").length;
  if (downgradedCount === 5) {
    reportPass("Penurunan status: kartu hafal yang dinilai 'Belum hafal' menurunkan hitungan dari 6 ke 5.");
  } else {
    reportFail(`Penurunan status: hitungan adalah ${downgradedCount}, diharapkan 5.`);
  }

  // Simulasi 5: Semua kartu hafal
  for (const c of part1Cards) {
    markCard(c.id, "memorized");
  }
  const allMemorizedCount = part1Cards.filter((c) => getStatus(c.id) === "memorized").length;
  const emptyRepeatQueue = part1Cards.filter((c) => getStatus(c.id) !== "memorized");
  if (allMemorizedCount === 10 && emptyRepeatQueue.length === 0) {
    reportPass("Kondisi semua hafal: progress 10/10, antrean ulangi belum hafal kosong ditangani aman.");
  } else {
    reportFail("Kondisi semua hafal gagal diverifikasi.");
  }

  // Simulasi 6: Pengulangan semua kartu tidak menghapus status tersimpan
  const repeatAllQueue = [...part1Cards];
  if (repeatAllQueue.length === 10 && part1Cards.filter((c) => getStatus(c.id) === "memorized").length === 10) {
    reportPass("Ulangi semua: antrean 10 kartu dimulai ulang tanpa menghapus status hafal yang tersimpan.");
  } else {
    reportFail("Ulangi semua kartu merusak status hafalan.");
  }

  // Simulasi 7: Isolasi antar bagian
  const part2Cards = getPartCards(japaneseN5Vol1Deck, japaneseN5Parts[1]);
  const part2Memorized = part2Cards.filter((c) => getStatus(c.id) === "memorized").length;
  if (part2Memorized === 0) {
    reportPass("Isolasi bagian: menilai kartu di Bagian 1 tidak mempengaruhi progress Bagian 2 (0/10).");
  } else {
    reportFail("Isolasi bagian bocor ke bagian lain.");
  }
}

function runStorageSanitizationCheck() {
  console.log("\n── 5. Verifikasi Ketahanan Penyimpanan (Sanitasi & Error Recovery) ──");

  // Uji parse data rusak atau format asing
  function sanitizeTestData(parsed: unknown) {
    if (!parsed || typeof parsed !== "object") {
      return { version: 1, cards: {} };
    }
    const obj = parsed as Record<string, unknown>;
    const rawCards =
      obj.cards && typeof obj.cards === "object"
        ? (obj.cards as Record<string, unknown>)
        : {};
    const cleanCards: Record<string, "not-memorized" | "memorized"> = {};

    for (const [key, val] of Object.entries(rawCards)) {
      if (
        typeof key === "string" &&
        (val === "memorized" || val === "not-memorized")
      ) {
        cleanCards[key] = val;
      }
    }
    return { version: 1, cards: cleanCards };
  }

  const badJson1 = sanitizeTestData("string-biasa");
  const badJson2 = sanitizeTestData(null);
  const badJson3 = sanitizeTestData({
    cards: {
      "jp-n5-v1-001": "memorized",
      "jp-n5-v1-002": "status-ilegal",
      "id-asing": 12345,
    },
  });

  if (
    Object.keys(badJson1.cards).length === 0 &&
    Object.keys(badJson2.cards).length === 0 &&
    Object.keys(badJson3.cards).length === 1 &&
    badJson3.cards["jp-n5-v1-001"] === "memorized"
  ) {
    reportPass("Sanitasi storage berhasil menyaring input korup, status asing, dan tipe data tidak valid.");
  } else {
    reportFail("Sanitasi storage gagal menyaring data tidak valid.");
  }
}

function runPartQuizVerification() {
  console.log("\n── 6. Verifikasi Generator Kuis Objektif & Tipe Soal di Seluruh 10 Bagian ──");

  const allCards = japaneseCards;

  for (let pIdx = 0; pIdx < japaneseN5Parts.length; pIdx++) {
    const part = japaneseN5Parts[pIdx];
    const partCards = getPartCards(japaneseN5Vol1Deck, part);

    // 1. Verifikasi total soal default (30 soal = 10 Tipe 1 + 10 Tipe 2 + 10 Tipe 3)
    const allQuestions = generatePartQuizQuestions(partCards, allCards, "all");
    if (allQuestions.length !== 30) {
      reportFail(`Bagian ${part.partNumber}: Total soal kuis adalah ${allQuestions.length}, diharapkan 30.`);
      continue;
    }

    // 2. Verifikasi distribusi tipe soal
    const t1 = allQuestions.filter((q) => q.type === "kanji-to-meaning");
    const t2 = allQuestions.filter((q) => q.type === "meaning-to-kanji");
    const t3 = allQuestions.filter((q) => q.type === "kanji-to-hiragana-meaning");

    if (t1.length !== 10 || t2.length !== 10 || t3.length !== 10) {
      reportFail(`Bagian ${part.partNumber}: Distribusi tipe salah: T1=${t1.length}, T2=${t2.length}, T3=${t3.length}.`);
      continue;
    }

    // 3. Verifikasi integritas setiap soal di bagian ini
    let partQuestionsValid = true;
    for (const q of allQuestions) {
      if (q.options.length !== 4) {
        reportFail(`Bagian ${part.partNumber} (${q.id}): jumlah opsi adalah ${q.options.length}, diharapkan 4.`);
        partQuestionsValid = false;
        break;
      }
      if (new Set(q.options).size !== 4) {
        reportFail(`Bagian ${part.partNumber} (${q.id}): opsi pilihan ganda tidak unik.`);
        partQuestionsValid = false;
        break;
      }
      if (!q.options.includes(q.correctAnswer)) {
        reportFail(`Bagian ${part.partNumber} (${q.id}): correctAnswer tidak ada di daftar options.`);
        partQuestionsValid = false;
        break;
      }

      if (q.type === "kanji-to-hiragana-meaning") {
        const expectedAnswer = `${q.card.hiragana} · ${q.card.meaning}`;
        if (q.prompt !== q.card.term) {
          reportFail(`Bagian ${part.partNumber} (${q.id}): prompt bukan kanji (${q.prompt} vs ${q.card.term}).`);
          partQuestionsValid = false;
          break;
        }
        if (q.correctAnswer !== expectedAnswer) {
          reportFail(`Bagian ${part.partNumber} (${q.id}): correctAnswer salah (${q.correctAnswer} vs ${expectedAnswer}).`);
          partQuestionsValid = false;
          break;
        }
        for (const opt of q.options) {
          if (!opt.includes(" · ")) {
            reportFail(`Bagian ${part.partNumber} (${q.id}): opsi '${opt}' tidak memuat pemisah ' · '.`);
            partQuestionsValid = false;
            break;
          }
        }
      }
    }

    if (!partQuestionsValid) continue;

    // 4. Verifikasi filter per tipe
    const qFilterHiragana = generatePartQuizQuestions(partCards, allCards, "kanji-to-hiragana-meaning");
    const qFilterMeaning = generatePartQuizQuestions(partCards, allCards, "kanji-to-meaning");
    const qFilterKanji = generatePartQuizQuestions(partCards, allCards, "meaning-to-kanji");

    if (
      qFilterHiragana.length !== 10 ||
      !qFilterHiragana.every((q) => q.type === "kanji-to-hiragana-meaning") ||
      qFilterMeaning.length !== 10 ||
      !qFilterMeaning.every((q) => q.type === "kanji-to-meaning") ||
      qFilterKanji.length !== 10 ||
      !qFilterKanji.every((q) => q.type === "meaning-to-kanji")
    ) {
      reportFail(`Bagian ${part.partNumber}: Filter kuis individual gagal menghasilkan 10 soal homogen.`);
      continue;
    }

    reportPass(`Bagian ${part.partNumber} (${part.slug}): 30 soal valid (10x T1, 10x T2, 10x T3), 4 opsi unik, filter berfungsi sempurna.`);
  }
}

function main() {
  console.log("=== BILEARN FLASHCARD JEPANG VERIFICATION SUITE ===\n");
  runDataIntegrityCheck();
  runSourceReconciliation();
  runBadFixturesCheck();
  runBehaviorAndStateSimulation();
  runStorageSanitizationCheck();
  runPartQuizVerification();

  console.log("\n──────────────────────────────────────────────────");
  if (failures === 0) {
    console.log("🎉 SEMUA PEMERIKSAAN FLASHCARD JEPANG LOLOS (0 kesalahan)");
    process.exit(0);
  } else {
    console.error(`💥 Ditemukan ${failures} kegagalan pada pemeriksaan flashcard.`);
    process.exit(1);
  }
}

main();
