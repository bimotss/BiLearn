/**
 * Verifikasi kualitas konten BiLearn (Ronde 2: Pendalaman Konten).
 * Jalankan: npx tsx scripts/verify-konten.ts
 *
 * Aturan yang diperiksa ada di panduan_isi.md dan perintah_kuli.md PERINTAH 0.
 * Skrip ini keluar dengan kode 1 jika ada masalah, agar bisa dipakai di CI.
 */

import { tracks } from "../src/data/tracks/index";
import type { Step, Quiz, Materi } from "../src/lib/types";

let materis = 0;
let steps = 0;
let quizzes = 0;
let questions = 0;
let masalah = 0;
const ids = new Set<string>();

// Allowlist sementara untuk modul pertama (persiapan/instalasi) per track.
// Daftar ini menyusut setiap kali satu track selesai dikerjakan pada Ronde 2.
const instalasiAllowlist = new Set<string>([
  // Ronde 4: daftar ini KOSONG. Semua 16 track sudah punya modul pertama
  // bernama persiapan/instalasi. Jangan menambah entri baru ke sini —
  // itu berarti menyembunyikan pelanggaran aturan #1, bukan menyelesaikannya.
]);

/** Jarak edit Levenshtein — dipakai mencari potongan yang paling mirip. */
function jarakEdit(a: string, b: string): number {
  const baris = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let sebelumnya = baris[0];
    baris[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const simpan = baris[j];
      baris[j] = Math.min(
        baris[j] + 1,
        baris[j - 1] + 1,
        sebelumnya + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
      sebelumnya = simpan;
    }
  }
  return baris[b.length];
}

function lapor(pesan: string) {
  console.log(`❌ ${pesan}`);
  masalah++;
}

function cocok(pattern: string, flags: string | undefined, teks: string) {
  return new RegExp(pattern, flags ?? "i").test(teks);
}

/** Hasil satu tes terhadap sebuah kode, sudah memperhitungkan mustNotMatch. */
function lulus(t: Step["tests"][number], teks: string) {
  const c = cocok(t.pattern, t.flags, teks);
  return t.mustNotMatch ? !c : c;
}

for (const track of tracks) {
  // 1. Modul pertama wajib modul persiapan/instalasi (jika tidak ada di allowlist)
  if (!instalasiAllowlist.has(track.slug)) {
    const firstModul = track.modules[0];
    if (
      !firstModul ||
      (!firstModul.slug.includes("persiapan") &&
        !firstModul.slug.includes("instalasi"))
    ) {
      lapor(
        `modul pertama track bukan modul persiapan/instalasi: ${track.slug}`
      );
    }
  }

  for (const modul of track.modules) {
    if (!modul.topics?.length) {
      lapor(`modul tanpa topics: ${track.slug}/${modul.slug}`);
    }

    // 1b. Setiap bab di `topics` wajib benar-benar tersentuh isi modulnya
    //     (step, kuis, ATAU materi). Skrip lama tidak memeriksa ini, dan
    //     akibatnya nyata: 20 bab di JavaScript, 14 di CSS, dan 10 di HTML
    //     tercantum di silabus tanpa pernah muncul di konten mana pun.
    //     Pemeriksaannya longgar — cukup SATU kata khas dari bab itu muncul —
    //     supaya yang tertangkap benar-benar bab yang menganggur.
    const isiModul = JSON.stringify(modul.items).toLowerCase();
    const kataUmum = new Set([
      "yang", "dan", "atau", "untuk", "dari", "pada", "kenapa", "kapan",
      "dipakai", "memakai", "pakai", "tanpa", "dengan", "bukan", "juga",
      "dasar", "nyata", "modern", "benar", "salah", "tidak", "bisa", "harus",
      "lebih", "paling", "sering", "semua", "setiap", "sebuah", "satu", "dua",
      "ringkas", "lengkap", "plus", "kalau", "agar", "jadi", "saat", "mereka",
      "ada", "apa", "itu", "ini", "hasil", "cara", "pola", "jenis", "bagian",
      "aturan", "sebenarnya", "kerja", "dunia", "studi", "kasus", "contoh",
      "pengenalan", "sampai", "punya", "besar", "kecil", "baru", "lama",
      "interview", "jawaban", "pertanyaan", "membaca", "menulis", "membuat",
      "sumber", "bug", "klasik", "pemula", "kelas", "berdasarkan", "sendiri",
      "kenal", "saja", "jangan", "layout", "data", "nilai", "level", "level",
    ]);
    for (const bab of modul.topics ?? []) {
      const kata = (bab.toLowerCase().match(/[a-z][a-z0-9_.:()@*-]{2,}/g) ?? [])
        .map((k) => k.replace(/[.,:()]+$/, ""))
        .filter((k) => k.length >= 3 && !kataUmum.has(k));
      if (kata.length === 0) continue; // tidak ada kata khas yang bisa diperiksa
      const tersentuh = kata.some((k) => isiModul.includes(k));
      if (!tersentuh) {
        lapor(
          `bab di topics tidak tersentuh step/kuis/materi mana pun: ${track.slug}/${modul.slug}\n   → "${bab}"`
        );
      }
    }

    // 2. Setiap modul latihan (yang punya step) wajib diawali minimal 1 item "materi" sebelum step pertama
    const hasStep = modul.items.some((it) => it.kind === "step");
    if (hasStep) {
      const firstStepIndex = modul.items.findIndex(
        (it) => it.kind === "step"
      );
      const hasMateriBeforeStep = modul.items
        .slice(0, firstStepIndex)
        .some((it) => it.kind === "materi");
      if (!hasMateriBeforeStep) {
        lapor(
          `modul latihan tanpa item "materi" sebelum step pertama: ${track.slug}/${modul.slug}`
        );
      }
    }

    for (const item of modul.items) {
      if (ids.has(item.id)) lapor(`ID duplikat: ${item.id}`);
      ids.add(item.id);

      if (item.kind === "materi") {
        materis++;
        const mt = item as Materi;
        if (!mt.title?.trim()) lapor(`materi judul kosong: ${mt.id}`);
        if (!mt.body?.trim()) lapor(`materi body kosong: ${mt.id}`);
        else {
          // Materi bukan formalitas untuk melewati aturan #1. Rujukan kedalaman:
          // halaman materi track HTML, CSS, JavaScript, dan TypeScript.
          const body = mt.body;
          if (body.length < 1200) {
            lapor(
              `materi terlalu tipis (${body.length} karakter, minimal 1200): ${mt.id}`
            );
          }
          if (!body.includes("```") && !/\|\s*-{3,}/.test(body)) {
            lapor(
              `materi tanpa diagram/tabel — pemula butuh peta, bukan hanya paragraf: ${mt.id}`
            );
          }
          if (
            !/jebakan|sering (salah|keliru|terjadi|disalahpahami|membingungkan|dilupakan)/i.test(
              body
            )
          ) {
            lapor(
              `materi tanpa bagian jebakan/kesalahan umum: ${mt.id}`
            );
          }
          if (!/kapan dipakai|dunia kerja|code review|interview/i.test(body)) {
            lapor(`materi tanpa kaitan ke dunia kerja: ${mt.id}`);
          }
        }
      } else if (item.kind === "step") {
        steps++;
        const s = item as Step;

        // kelengkapan dasar
        if (!s.title?.trim()) lapor(`judul kosong: ${s.id}`);
        if (!s.explanation?.trim()) lapor(`explanation kosong: ${s.id}`);
        if (!s.instruction?.trim()) lapor(`instruction kosong: ${s.id}`);
        if (!s.solution?.trim()) {
          lapor(`solution kosong: ${s.id}`);
          continue;
        }

        // explanation step minimal 4 kalimat ATAU 350 karakter
        //
        // PENTING: titik di dalam `kode` dan di dalam URL BUKAN akhir kalimat.
        // Sebelum pembersihan ini, `index.html`, `arr.at(-1)`, dan
        // https://contoh.com masing-masing terhitung sebagai beberapa kalimat —
        // sehingga penjelasan yang isinya cuma 1–2 kalimat tetap lolos. Celah itu
        // nyata: 14 step JavaScript, 5 step HTML, dan 4 step CSS lolos karenanya.
        const exp = s.explanation?.trim() ?? "";
        const expBersih = exp
          .replace(/`[^`]*`/g, "KODE")
          .replace(/https?:\/\/\S+/g, "URL")
          .replace(/\b\w+\.\w{2,4}\b/g, "BERKAS");
        const sentenceCount = (expBersih.match(/[^.!?]+[.!?]+/g) || []).length;
        if (sentenceCount < 4 && exp.length < 350) {
          lapor(
            `explanation terlalu pendek (${sentenceCount} kalimat / ${exp.length} karakter, minimal 4 kalimat atau 350 karakter): ${s.id}`
          );
        }

        // contoh wajib
        if (!s.example?.code?.trim() || !s.example?.output?.trim()) {
          lapor(`TANPA CONTOH (example.code/output kosong): ${s.id}`);
        } else if (s.example.code.trim() === s.solution.trim()) {
          lapor(`contoh identik dengan solution (bocoran jawaban): ${s.id}`);
        }

        // tes
        if (!s.tests?.length) {
          lapor(`tanpa tes: ${s.id}`);
          continue;
        }
        for (const t of s.tests) {
          if (!t.message?.trim()) lapor(`tes tanpa message: ${s.id}`);
          try {
            if (!lulus(t, s.solution)) {
              lapor(`solution GAGAL tes: ${s.id}\n   pattern: ${t.pattern}`);
            }
          } catch {
            lapor(`regex tidak valid: ${s.id}\n   pattern: ${t.pattern}`);
          }
        }

        // starter tidak boleh sudah lolos semuanya
        const starterLolos = s.tests.every((t) => {
          try {
            return lulus(t, s.starterCode);
          } catch {
            return false;
          }
        });
        if (starterLolos) {
          lapor(
            `starterCode sudah lolos semua tes (step jadi sia-sia): ${s.id}`
          );
        }

        // step CSS sebaiknya punya previewHtml agar hasilnya terlihat
        if (s.language === "css" && !s.previewHtml?.trim()) {
          lapor(`step CSS tanpa previewHtml (hasil tidak terlihat): ${s.id}`);
        }

        // ── aturan kualitas pedagogi (panduan_isi.md bagian 2 & 5) ──

        // 1. instruksi tidak boleh memuat jawaban utuh
        const sol = s.solution.trim();
        if (sol.length > 6 && s.instruction.includes(sol)) {
          lapor(
            `instruksi memuat jawaban utuh (user cuma menyalin): ${s.id}`
          );
        }

        // 2. tugas tidak boleh cuma "tulis komentar/teks statis"
        const hanyaKomentar =
          /^\s*(\/\/|#(?!\s*(include|!)))/.test(sol) &&
          !/\n\s*[^/#\s]/.test(sol);
        if (hanyaKomentar && s.language !== "text") {
          lapor(
            `tugas hanya menulis komentar (nol nilai belajar): ${s.id}`
          );
        }

        // 3. kode non-JS TIDAK boleh memakai language "js" — akan SyntaxError
        //    di preview. Gunakan language: "text".
        if (s.language === "js") {
          const kode = `${s.starterCode}\n${sol}`;
          const bukanJs =
            /^\s*#(?!\!)/m.test(kode) ||
            /^\s*(git|docker|docker-compose|kubectl|npm run|npx create|psql|mysql|php artisan|composer|pip|python|source|sudo|apt|ssh|scp|certbot|nginx)\s/im.test(
              kode
            ) ||
            /^\s*(SELECT|INSERT\s+INTO|UPDATE\s+\w|DELETE\s+FROM|CREATE\s+(TABLE|INDEX)|ALTER\s+TABLE|WITH\s+\w+\s+AS)\b/im.test(
              kode
            ) ||
            /^\s*=/m.test(kode) || // formula spreadsheet: =A1+B1, =SUM(...)
            /^\s*(SHOW|DESCRIBE|USE|GRANT|FLUSH)\s/im.test(kode) ||
            /^\s*(View|Data|Insert|Format|File)\s*>/m.test(kode) || // jalur menu UI
            /^\s*(def\s|import\s+pandas|print\()/m.test(kode) ||
            /^\s*<\?php/m.test(kode) ||
            /^\s*##?\s+\S/m.test(kode);
          if (bukanJs) {
            lapor(
              `language "js" tapi isinya bukan JavaScript → preview error. Ganti ke "text": ${s.id}`
            );
          }

          // JSX & TypeScript perlu dikompilasi dulu → language "jsx"
          const perluKompilasi =
            /<[A-Za-z][^>]*\/?>/.test(kode) ||
            /(^|\n)\s*(type\s+\w+\s*=|interface\s+\w+\s*\{)/.test(kode) ||
            /\w\s*:\s*(string|number|boolean|unknown)\b/.test(kode) ||
            /\bfunction\s+\w+\s*<[A-Z]/.test(kode);
          if (perluKompilasi) {
            lapor(
              `language "js" tapi isinya JSX/TypeScript → preview SyntaxError. Ganti ke "jsx": ${s.id}`
            );
          }
        }

        // 3b. pesan tes harus nyambung dengan tugasnya, bukan sisa copy-paste
        for (const t of s.tests) {
          // Pesan malas: "Salah", "Tes gagal", atau sisa copy-paste. Sengaja
          // memakai batas kata dan pemeriksaan awal kalimat — Ronde 4: pesan
          // yang MENGAJAR sering memuat kata "kesalahan umum" atau
          // "bermasalah", dan itu bukan pelanggaran.
          const pesanMalas =
            /tuliskan komentar yang diminta|tuliskan yang diminta/i.test(t.message) ||
            /^\s*(salah|tes gagal)\b/i.test(t.message.trim()) ||
            (t.message.trim().length <= 30 && /\b(salah|gagal)\b/i.test(t.message));
          if (pesanMalas && !/^\s*(\/\/|#)/.test(sol)) {
            lapor(
              `pesan tes copy-paste / tidak nyambung dengan tugas: ${s.id}\n   → "${t.message}"`
            );
          }
          if (
            !t.mustNotMatch &&
            /^\(?[A-Za-z]{1,12}(\|[A-Za-z]{1,12})?\)?$/.test(t.pattern)
          ) {
            lapor(
              `tes terlalu longgar (pattern "${t.pattern}" bisa lolos kebetulan): ${s.id}`
            );
          }
        }

        // 3c. step bukan tempat soal jawaban-satu-kata — itu tugasnya kuis
        if (
          /^[A-Za-z0-9%]{1,14}$/.test(sol) &&
          !/^(git|ls|cd|pwd)$/i.test(sol)
        ) {
          lapor(
            `step dengan jawaban satu kata ("${sol}") — pindahkan ke kuis, step untuk praktek: ${s.id}`
          );
        }

        // 4. output contoh harus konkret, bukan klaim manfaat
        const out = s.example?.output ?? "";
        const kabur =
          out.length > 0 &&
          out.length < 70 &&
          !out.includes("\n") &&
          /\b(akan|dapat|membantu|menghemat|meningkatkan|memudahkan|lebih (cepat|rapi|profesional|mudah)|produktivitas)\b/i.test(
            out
          );
        if (kabur) {
          lapor(
            `example.output menjelaskan MANFAAT, bukan hasil nyata: ${s.id}\n   → "${out}"`
          );
        }

        // 5. Aturan keras untuk susunKode (mode "susun kode")
        if (s.susunKode) {
          const sk = s.susunKode;
          const pemisah = sk.pemisah ?? " ";
          const potongan = sk.potongan ?? [];
          const pengecoh = sk.pengecoh ?? [];

          // a. Jumlah kepingan masuk akal
          if (potongan.length < 2) {
            lapor(
              `susunKode.potongan minimal 2 keping (${potongan.length}): ${s.id}`
            );
          }
          if (pengecoh.length < 2) {
            lapor(
              `susunKode.pengecoh minimal 2 keping (${pengecoh.length}): ${s.id}`
            );
          }
          if (potongan.length + pengecoh.length > 12) {
            lapor(
              `susunKode total keping ${potongan.length + pengecoh.length} (maksimal 12 — lebih dari itu jadi tebak-tebakan): ${s.id}`
            );
          }

          // b. Pengecoh tidak boleh kembar dengan potongan atau sesamanya.
          //    Potongan BOLEH berulang: daftar bersarang memang butuh dua <ul>.
          // Sengaja PEKA huruf besar-kecil: di kode, `Index` dan `index`
          // adalah dua hal berbeda, dan itu justru sering jadi bahan pengecoh.
          const norm = (t: string) => t.trim().replace(/\s+/g, " ");
          const setPotongan = new Set(potongan.map(norm));
          for (const p of pengecoh) {
            if (setPotongan.has(norm(p))) {
              lapor(
                `pengecoh susunKode "${p}" sama dengan salah satu potongan benar (soal jadi ambigu): ${s.id}`
              );
            }
          }
          const normPengecoh = pengecoh.map(norm);
          if (new Set(normPengecoh).size !== normPengecoh.length) {
            lapor(`susunKode.pengecoh memuat keping kembar: ${s.id}`);
          }
          if ([...potongan, ...pengecoh].some((p) => !p.trim())) {
            lapor(`susunKode memuat keping kosong: ${s.id}`);
          }

          // c. ATURAN INTI: susunan benar WAJIB lolos seluruh tes step ini.
          //    Tanpa ini, soal bisa saja tidak punya jawaban — dan itu baru
          //    ketahuan setelah user mentok, bukan saat verifikasi.
          const kodeBenar = potongan.join(pemisah);
          const gagal = (s.tests ?? []).filter((t) => !lulus(t, kodeBenar));
          if (gagal.length > 0) {
            lapor(
              `susunan benar susunKode GAGAL ${gagal.length} tes step-nya sendiri ("${kodeBenar}"): ${s.id}`
            );
          }

          // d. Pengecoh tidak boleh berupa potongan yang sebenarnya ada di
          //    dalam solusi asli — itu bukan pengecoh, itu jawaban.
          const solusiNorm = norm(s.solution ?? "");
          for (const p of pengecoh) {
            if (norm(p).length >= 4 && solusiNorm.includes(norm(p))) {
              lapor(
                `pengecoh susunKode "${p}" muncul di dalam solution (berarti ia benar, bukan pengecoh): ${s.id}`
              );
            }
          }

          // e. ATURAN INTI: pengecoh harus benar-benar merusak jawaban.
          //
          //    Diuji dengan menukarnya dengan potongan yang PALING MIRIP —
          //    karena di situlah user akan tergoda memakainya. Kalau semua tes
          //    tetap lulus, pengecoh itu sebenarnya jawaban yang sah juga
          //    (mis. beda tanda kutip saja), dan soalnya jadi menyesatkan.
          if (gagal.length === 0 && potongan.length > 0) {
            for (const peng of pengecoh) {
              let terdekat = 0;
              let jarakMin = Infinity;
              potongan.forEach((p, i) => {
                const d = jarakEdit(p, peng);
                if (d < jarakMin) {
                  jarakMin = d;
                  terdekat = i;
                }
              });
              const variasi = [...potongan];
              variasi[terdekat] = peng;
              const teks = variasi.join(pemisah);
              if ((s.tests ?? []).every((t) => lulus(t, teks))) {
                lapor(
                  `pengecoh susunKode "${peng}" tidak merusak apa pun saat menggantikan "${potongan[terdekat]}" — berarti ia jawaban yang sah juga: ${s.id}`
                );
              }
            }
          }

          // e. explanation wajib, minimal 200 karakter, menjelaskan pengecoh
          const skExp = sk.explanation?.trim() ?? "";
          if (!skExp) {
            lapor(`susunKode.explanation kosong: ${s.id}`);
          } else {
            if (skExp.length < 200) {
              lapor(
                `susunKode.explanation terlalu pendek (${skExp.length} karakter, minimal 200): ${s.id}`
              );
            }
            if (!/menggoda|sering|keliru|jebakan/i.test(skExp)) {
              lapor(
                `susunKode.explanation tidak menjelaskan pengecoh (harus memuat kata "menggoda", "sering", "keliru", atau "jebakan"): ${s.id}`
              );
            }
          }
        }
      } else {
        quizzes++;
        const q = item as Quiz;
        if (!q.questions?.length) lapor(`kuis tanpa soal: ${q.id}`);
        // Ronde 2: Kuis WAJIB 5–7 soal
        else if (q.questions.length < 5 || q.questions.length > 7) {
          lapor(
            `kuis berjumlah ${q.questions.length} soal (WAJIB 5–7 soal): ${q.id}`
          );
        }

        for (const soal of q.questions || []) {
          questions++;
          if (!soal.question?.trim()) lapor(`soal kosong: ${q.id}/${soal.id}`);
          if (!soal.explanation?.trim()) {
            lapor(
              `soal tanpa explanation (kunci jawaban): ${q.id}/${soal.id}`
            );
          }

          // Ronde 2: Semua soal WAJIB type "pilihan-ganda"
          if (soal.type !== "pilihan-ganda") {
            lapor(
              `soal bukan pilihan-ganda (tipe "${soal.type}"): ${q.id}/${soal.id}`
            );
          } else {
            if (soal.choices.length < 2) {
              lapor(`pilihan < 2: ${q.id}/${soal.id}`);
            }
            if (new Set(soal.choices).size !== soal.choices.length) {
              lapor(`pilihan duplikat: ${q.id}/${soal.id}`);
            }
            if (
              soal.answerIndex < 0 ||
              soal.answerIndex >= soal.choices.length
            ) {
              lapor(`answerIndex di luar rentang: ${q.id}/${soal.id}`);
            }
          }
        }
      }
    }

  }

  // f. Per track: kolam kepingan tidak boleh selalu berisi seluruh jawaban tanpa
  //    pengecoh yang berarti. Kalau pengecohnya cuma 2 di semua step, mode ini
  //    berubah jadi "pakai semua keping" — bisa diselesaikan tanpa berpikir.
  const trackSusun = track.modules
    .flatMap((m) => m.items)
    .filter((i) => i.kind === "step" && Boolean((i as Step).susunKode)) as Step[];
  if (trackSusun.length >= 5) {
    const semuaKepingDipakai = trackSusun.filter((cs) => {
      const sk = cs.susunKode!;
      return sk.pengecoh.length === 0;
    }).length;
    if (semuaKepingDipakai > 0) {
      lapor(
        `${semuaKepingDipakai} step susunKode tanpa pengecoh sama sekali: ${track.slug}`
      );
    }
  }
}

// ringkasan per track
console.log("\n── Konten per track ──");
for (const track of tracks) {
  const items = track.modules.flatMap((m) => m.items);
  const m = items.filter((i) => i.kind === "materi").length;
  const s = items.filter((i) => i.kind === "step").length;
  const pgSteps = items.filter(
    (i) => i.kind === "step" && Boolean((i as Step).susunKode)
  ).length;
  const k = items.filter((i) => i.kind === "quiz").length;
  const status = items.length === 0 ? "⬜ kosong" : "✅";
  const pgInfo = pgSteps > 0 ? ` (${pgSteps} punya mode susun kode)` : "";
  console.log(
    `${status} ${track.title.padEnd(28)} ${m} materi, ${String(s).padStart(3)} step${pgInfo}, ${k} kuis  (${track.modules.length} modul)`
  );
}

console.log(
  `\nTotal: ${materis} materi | ${steps} step | ${quizzes} kuis | ${questions} soal`
);
if (masalah === 0) {
  console.log("✅ SEMUA VERIFIKASI LOLOS");
} else {
  console.log(`❌ ${masalah} MASALAH — perbaiki dulu sebelum lanjut`);
  console.log(
    "   Ringkasan per aturan bisa dilihat dengan:\n" +
      "   npx tsx scripts/verify-konten.ts | grep '❌' | sed 's/:.*//' | sort | uniq -c | sort -rn"
  );
  process.exit(1);
}
