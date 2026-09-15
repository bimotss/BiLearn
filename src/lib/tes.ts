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
      const text = t.scope === "email-opening" ? paragrafPembukaEmail(code) : code;
      // Scope yang tidak ditemukan bukan keberhasilan tes larangan.
      if (text === null) return { pass: false, message: t.message };
      const cocok = new RegExp(t.pattern, t.flags ?? "i").test(text);
      // mustNotMatch: lulus justru kalau pattern TIDAK ditemukan
      pass = t.mustNotMatch ? !cocok : cocok;
    } catch {
      pass = false;
    }
    return { pass, message: t.message };
  });
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
