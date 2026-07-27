import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiLearn — Belajar Coding yang Kepake di Dunia Kerja",
  description:
    "Platform belajar coding interaktif gaya freeCodeCamp. Kurikulum berbasis lowongan kerja nyata Indonesia. Semua akses terbuka, gratis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <header className="border-b border-neutral-200">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-xl font-bold">
              Bi<span className="text-blue-600">Learn</span>
            </Link>
            <div className="flex gap-6 text-sm font-medium text-neutral-600">
              <Link href="/" className="hover:text-blue-600">
                Semua Track
              </Link>
              <Link href="/paths" className="hover:text-blue-600">
                Learning Path
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500">
          BiLearn — semua materi terbuka, belajar dengan urutanmu sendiri.
        </footer>
      </body>
    </html>
  );
}
