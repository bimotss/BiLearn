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
      const cocok = new RegExp(t.pattern, t.flags ?? "i").test(code);
      // mustNotMatch: lulus justru kalau pattern TIDAK ditemukan
      pass = t.mustNotMatch ? !cocok : cocok;
    } catch {
      pass = false;
    }
    return { pass, message: t.message };
  });
}

/** Menggabungkan kepingan kode menjadi teks yang siap dinilai. */
export function gabungPotongan(potongan: string[], pemisah = " "): string {
  return potongan.join(pemisah);
}
