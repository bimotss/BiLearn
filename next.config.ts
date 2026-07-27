import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Seluruh halaman BiLearn dirender di sisi klien dan datanya ikut di bundle,
   * jadi situs ini di-export menjadi HTML statis. Hasilnya di folder `out/`
   * dan cukup disajikan Nginx — tanpa proses Node yang berjalan di server.
   */
  output: "export",
  /** Nginx menyajikan folder, jadi tiap rute butuh path berakhiran "/". */
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
