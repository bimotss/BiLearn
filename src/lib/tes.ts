import type { StepTest } from "./types";

export interface HasilTes {
  pass: boolean;
  message: string;
}

/**
 * Penilai tunggal untuk kedua mode belajar.
 *
 * Mode ngetik dan mode susun kode WAJIB memakai fungsi yang sama. Kalau
 * masing-masing punya penilainya sendiri, cepat atau lambat keduanya akan
 * bergeser dan satu step bisa lulus di satu mode tapi gagal di mode lain
 * padahal kodenya identik.
 */
export function jalankanTes(tests: StepTest[], code: string): HasilTes[] {
  return tests.map((t) => {
    let pass = false;
    try {
      let text = t.scope === "email-opening" ? paragrafPembukaEmail(code) : code;
      // Scope yang tidak ditemukan bukan keberhasilan tes larangan.
      if (text === null) return { pass: false, message: t.message };
      if (t.stripComments) {
        text = stripComments(text);
      }
      const cocok = new RegExp(t.pattern, t.flags ?? "i").test(text);
      // mustNotMatch: lulus justru kalau pattern TIDAK ditemukan
      pass = t.mustNotMatch ? !cocok : cocok;
    } catch {
      pass = false;
    }
    return { pass, message: t.message };
  });
}

/**
 * Menghapus komentar single-line (//) dan multi-line (/* ... *\/) dari kode,
 * tanpa menghapus substring di dalam string literal ('...', "...", `...`).
 */
export function stripComments(code: string): string {
  let result = "";
  let i = 0;
  const n = code.length;
  while (i < n) {
    const ch = code[i];
    const next = code[i + 1];

    if (ch === '"' || ch === "'" || ch === "`") {
      const quote = ch;
      result += quote;
      i++;
      while (i < n) {
        const c = code[i];
        result += c;
        if (c === "\\") {
          i++;
          if (i < n) result += code[i];
        } else if (c === quote) {
          break;
        }
        i++;
      }
      i++;
    } else if (ch === "/" && next === "/") {
      i += 2;
      while (i < n && code[i] !== "\n") {
        i++;
      }
    } else if (ch === "/" && next === "*") {
      i += 2;
      while (i < n && !(code[i] === "*" && code[i + 1] === "/")) {
        if (code[i] === "\n") result += "\n";
        i++;
      }
      i += 2;
    } else {
      result += ch;
      i++;
    }
  }
  return result;
}

/** Struktur latihan: salam pada baris sendiri, lalu paragraf permintaan.
 * Baris kosong memisahkan permintaan dari rincian dan riwayat proyek.
 * Tidak mencoba menebak makna semua kalimat dalam sebuah e-mail bebas.
 */
export function paragrafPembukaEmail(code: string): string | null {
  const text = code.replace(/\r\n?/g, "\n");
  const greeting = /^\s*Dear[^\n]+[,：:]\s*\n/im.exec(text);
  if (!greeting) return null;
  const body = text.slice(greeting.index + greeting[0].length).trimStart();
  const opening = body.split(/\n[\t ]*\n/)[0]?.trim();
  return opening || null;
}

/** Menggabungkan kepingan kode menjadi teks yang siap dinilai. */
export function gabungPotongan(potongan: string[], pemisah = " "): string {
  return potongan.join(pemisah);
}
