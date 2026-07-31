"use client";

import { useEffect, useRef } from "react";

/**
 * Pintasan Ctrl+Enter (atau Cmd+Enter di Mac) untuk seluruh halaman.
 *
 * Dipakai berlapis: selama step belum lolos, penekanannya menjalankan tes;
 * begitu lolos, lapisan itu mati dan penekanan berikutnya dipakai halaman
 * untuk pindah ke materi selanjutnya. Karena itu `aktif` bukan sekadar
 * kenyamanan — itu yang menentukan siapa yang berhak menangani tombolnya.
 *
 * Jebakan yang dihindari di sini: kalau `aksi` dipasang langsung sebagai
 * dependensi useEffect, listener-nya dipasang-ulang tiap render dan urutan
 * penanganan antar-komponen jadi tidak bisa ditebak. Aksinya disimpan di ref,
 * jadi listener cuma dipasang saat status `aktif` berubah.
 */
export function usePintasanCtrlEnter(aktif: boolean, aksi: () => void) {
  const simpanan = useRef(aksi);

  useEffect(() => {
    simpanan.current = aksi;
  });

  useEffect(() => {
    if (!aktif) return;
    function tekan(e: KeyboardEvent) {
      if (e.key !== "Enter" || !(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      simpanan.current();
    }
    window.addEventListener("keydown", tekan);
    return () => window.removeEventListener("keydown", tekan);
  }, [aktif]);
}
