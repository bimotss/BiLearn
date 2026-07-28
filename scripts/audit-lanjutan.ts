/**
 * Audit lanjutan (Ronde 4) — memeriksa hal yang SENGAJA tidak diblokir oleh
 * `verify:konten`, tapi tetap menurunkan kualitas belajar.
 *
 * Jalankan: npm run audit:lanjutan
 *
 * Bedanya dengan verify-konten.ts:
 * - verify-konten.ts = aturan keras, gagal (exit 1) dan wajib bersih sebelum commit.
 * - skrip ini = temuan kualitas yang butuh penilaian manusia. Ia SELALU exit 0
 *   dan hanya melaporkan angka, supaya bisa dipakai sebagai antrean pekerjaan.
 *
 * Kelima pemeriksaan di bawah lahir dari review Ronde 4. Angka pada saat skrip
 * ini dibuat dicantumkan di komentar tiap bagian sebagai patokan (baseline).
 */

import { tracks } from "../src/data/tracks/index";
import type { Step, Quiz } from "../src/lib/types";

type Temuan = { track: string; id: string; detail: string };
const hasil: Record<string, Temuan[]> = {};
function lapor(kategori: string, track: string, id: string, detail = "") {
  (hasil[kategori] ??= []).push({ track, id, detail });
}

const rapat = (s: string) => (s ?? "").replace(/\s+/g, " ").trim();

function lulus(t: Step["tests"][number], teks: string) {
  let cocok: boolean;
  try {
    cocok = new RegExp(t.pattern, t.flags ?? "i").test(teks);
  } catch {
    return false;
  }
  return t.mustNotMatch ? !cocok : cocok;
}
const semuaLulus = (s: Step, teks: string) => (s.tests ?? []).every((t) => lulus(t, teks));

/** Tukar urutan atribut pada tag pertama yang punya ≥2 atribut. */
function tukarAtribut(kode: string) {
  const attr = /[\w-]+=(?:"[^"]*"|'[^']*'|\{[^{}]*\})/g;
  return kode.replace(
    /<([A-Za-z][\w]*)((?:\s+[\w-]+=(?:"[^"]*"|'[^']*'|\{[^{}]*\})){2,})(\s*\/?)>/g,
    (semua, tag: string, atribut: string, ekor: string) => {
      const daftar = atribut.match(attr) ?? [];
      if (daftar.length < 2) return semua;
      return `<${tag} ${daftar.slice().reverse().join(" ")}${ekor}>`;
    }
  );
}

for (const track of tracks) {
  const langkah: Step[] = [];
  for (const modul of track.modules) {
    for (const item of modul.items) {
      if (item.kind === "step") langkah.push(item as Step);
    }
  }

  for (const s of langkah) {
    const sol = rapat(s.solution);

    // 1. Pesan tes yang isinya jawaban utuh (baseline Ronde 4: 243 tes).
    //    Pesan gagal seharusnya MENGAJAR ("kenapa" & "apa yang kurang"),
    //    bukan menempelkan jawaban — track HTML/CSS/JS/TS/Git hampir nol.
    for (const t of s.tests ?? []) {
      const pesan = rapat(t.message);
      if (sol.length > 8 && pesan.includes(sol) && pesan.length < sol.length + 45) {
        lapor("pesan-tes-menempel-jawaban", track.slug, s.id, pesan.slice(0, 70));
      }
    }

    // 2. Step yang tugasnya cuma mengetik satu string hafalan — itu soal kuis,
    //    bukan latihan (baseline Ronde 4: 0, tiga kasus React sudah ditulis ulang).
    if (/^(const|let|var)\s+\w+\s*=\s*["'][^"']{1,40}["'];?$/.test(sol)) {
      lapor("step-hafalan-satu-string", track.slug, s.id, sol);
    }

    // 3. Tes yang menolak variasi penulisan yang sama-sama benar
    //    (baseline Ronde 4: 0 untuk kutip HTML/CSS dan urutan atribut).
    if (["html", "css", "js", "jsx"].includes(s.language) && /["']/.test(s.solution)) {
      const tukarKutip = s.solution.replace(/["']/g, (q) => (q === '"' ? "'" : '"'));
      if (tukarKutip !== s.solution && !semuaLulus(s, tukarKutip)) {
        lapor("tolak-variasi-kutip", track.slug, s.id);
      }
    }
    const urutanLain = tukarAtribut(s.solution);
    if (urutanLain !== s.solution && !semuaLulus(s, urutanLain)) {
      lapor("tolak-urutan-atribut", track.slug, s.id);
    }

    // 4. example.output yang tidak mungkin dilihat sebagai hasil: klaim manfaat.
    const out = s.example?.output ?? "";
    if (
      out &&
      !out.includes("\n") &&
      out.length < 140 &&
      /\b(akan|dapat|membantu|menghemat|meningkatkan|memudahkan|mempercepat|lebih (cepat|rapi|profesional|mudah|aman)|produktivitas|efisien)\b/i.test(
        out
      )
    ) {
      lapor("output-klaim-bukan-hasil", track.slug, s.id, out.slice(0, 70));
    }

    // 5. Kode yang jelas tidak bisa dijalankan preview wajib mengatakannya terus
    //    terang (aturan Ronde 3). Baseline Ronde 4: 0.
    const kodeTapiText =
      s.language === "text" &&
      /(=>|function\s+\w+\s*\(|useState|<[A-Z]\w*[\s/>])/.test(s.solution);
    const jujur = /preview|tidak dijalankan|tidak dieksekusi|tidak menjalankan/i.test(
      `${s.instruction} ${s.example?.note ?? ""} ${s.explanation}`
    );
    if (kodeTapiText && !jujur) {
      lapor("preview-mati-tanpa-catatan", track.slug, s.id);
    }
  }

  // 6. Dugaan explanation membahas topik step LAIN (drift). Ini yang membuat
  //    modul 2–5 track SQL menjelaskan LEFT JOIN pada step INNER JOIN.
  for (const modul of track.modules) {
    const steps = modul.items.filter((i): i is Step => i.kind === "step");
    const umum = new Set([
      "dan", "atau", "dengan", "untuk", "dari", "pada", "yang", "dasar", "data",
      "konsep", "vs", "cara", "menggunakan", "memakai", "membuat", "menulis",
      "nilai", "baris", "kolom", "tabel", "dalam", "kapan", "kenapa", "apa",
      "itu", "ini", "studi", "kasus", "nyata", "lanjutan", "modern", "praktis",
      "sederhana", "khusus", "umum", "bagian", "jenis", "pola", "aturan",
    ]);
    const skor = (judul: string, exp: string) => {
      const kata = [
        ...new Set((judul.toLowerCase().match(/[a-z_][a-z0-9_]{2,}/g) ?? []).filter((k) => !umum.has(k))),
      ];
      if (!kata.length) return 1;
      const teks = exp.toLowerCase();
      return kata.filter((k) => teks.includes(k)).length / kata.length;
    };
    steps.forEach((s, i) => {
      const sendiri = skor(s.title, s.explanation);
      const berikut = steps[i + 1] ? skor(s.title, steps[i + 1].explanation) : 0;
      if (sendiri < 0.34 && berikut - sendiri >= 0.5) {
        lapor(
          "dugaan-explanation-milik-step-lain",
          track.slug,
          s.id,
          `judul "${s.title}" lebih cocok dengan explanation step berikutnya`
        );
      }
    });
  }

  // 7. Kuis: pilihan yang berlabel huruf harus urut A, B, C … supaya
  //    answerIndex dan label yang dibaca user tidak bertentangan.
  for (const modul of track.modules) {
    for (const item of modul.items) {
      if (item.kind !== "quiz") continue;
      for (const soal of (item as Quiz).questions ?? []) {
        const pilihan = soal.type === "pilihan-ganda" ? soal.choices : [];
        const HURUF = ["A", "B", "C", "D", "E", "F", "G"];
        const berlabel = pilihan.filter((c) => /^[A-G][.)]\s/.test(c.trim()));
        if (!berlabel.length) continue;
        const urut = pilihan.every((c, i) => new RegExp(`^${HURUF[i]}[.)]`).test(c.trim()));
        if (!urut) {
          lapor("label-huruf-pilihan-tidak-urut", track.slug, `${item.id}/${soal.id}`);
        }
      }
    }
  }
}

const kategori = Object.entries(hasil).sort((a, b) => b[1].length - a[1].length);
let total = 0;
for (const [nama, daftar] of kategori) {
  total += daftar.length;
  const perTrack: Record<string, number> = {};
  for (const t of daftar) perTrack[t.track] = (perTrack[t.track] ?? 0) + 1;
  console.log(`\n■ ${nama} — ${daftar.length}`);
  console.log(
    "  per track: " +
      Object.entries(perTrack)
        .sort((a, b) => b[1] - a[1])
        .map(([k, v]) => `${k}:${v}`)
        .join("  ")
  );
  for (const t of daftar.slice(0, 8)) {
    console.log(`  - ${t.id}${t.detail ? ` — ${t.detail}` : ""}`);
  }
  if (daftar.length > 8) console.log(`  … +${daftar.length - 8} lagi`);
}

console.log(`\nTotal temuan kualitas (tidak memblokir): ${total}`);
console.log(
  "Catatan: skrip ini sengaja tidak pernah exit 1. Aturan keras ada di\n" +
    "scripts/verify-konten.ts — yang itu wajib bersih."
);
