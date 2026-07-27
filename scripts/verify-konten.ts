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
  "nosql",
  "html",
  "ai-dev",
  "git",
  "typescript",
  "spreadsheet",
  "deployment",
  "data-analysis",
  "css",
  "nextjs",
  "python",
  "node-express",
  "javascript",
  "laravel",
  "react",
  "sql",
]);

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
        const m = item as Materi;
        if (!m.title?.trim()) lapor(`materi judul kosong: ${m.id}`);
        if (!m.body?.trim()) lapor(`materi body kosong: ${m.id}`);
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
        const exp = s.explanation?.trim() ?? "";
        const sentenceCount = (exp.match(/[^.!?]+[.!?]+/g) || []).length;
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
          if (
            /tuliskan komentar yang diminta|tuliskan yang diminta|tes gagal|salah/i.test(
              t.message
            ) &&
            !/^\s*(\/\/|#)/.test(sol)
          ) {
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
}

// ringkasan per track
console.log("\n── Konten per track ──");
for (const track of tracks) {
  const items = track.modules.flatMap((m) => m.items);
  const m = items.filter((i) => i.kind === "materi").length;
  const s = items.filter((i) => i.kind === "step").length;
  const k = items.filter((i) => i.kind === "quiz").length;
  const status = items.length === 0 ? "⬜ kosong" : "✅";
  console.log(
    `${status} ${track.title.padEnd(28)} ${m} materi, ${String(s).padStart(3)} step, ${k} kuis  (${track.modules.length} modul)`
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
