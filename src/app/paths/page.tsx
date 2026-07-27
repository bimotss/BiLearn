"use client";

import { useRouter } from "next/navigation";
import { learningPaths } from "@/data/paths";
import { tracks } from "@/data/tracks";
import { useProgress } from "@/lib/progress";

export default function PathsPage() {
  const { progress, ready, setActivePath } = useProgress();
  const router = useRouter();

  function choose(slug: string) {
    setActivePath(slug);
    router.push("/");
  }

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">Pilih Learning Path</h1>
        <p className="max-w-2xl text-neutral-600">
          Path menyusun urutan track sesuai tujuan kariermu. Semua materi tetap
          terbuka — path hanya penunjuk jalan, bukan gembok. Progress-mu
          melekat di track, jadi ganti path kapan pun tidak menghapus apa pun.
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {learningPaths.map((path) => {
          const active = ready && progress.activePath === path.slug;
          const totalHours = path.trackSlugs.reduce(
            (sum, s) => sum + (tracks.find((t) => t.slug === s)?.hours ?? 0),
            0
          );
          return (
            <div
              key={path.slug}
              className={`rounded-xl border p-6 ${
                active ? "border-gold-400 bg-gold-50" : "border-neutral-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{path.icon}</span>
                <div>
                  <h2 className="text-lg font-bold">{path.title}</h2>
                  <p className="text-sm text-neutral-500">±{totalHours} jam total</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-600">{path.description}</p>

              <ol className="mt-4 flex flex-wrap gap-1.5">
                {path.trackSlugs.map((slug, i) => {
                  const t = tracks.find((tr) => tr.slug === slug);
                  return (
                    <li
                      key={slug}
                      className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      <span className="text-neutral-400">{i + 1}.</span>
                      {t?.icon} {t?.title ?? slug}
                    </li>
                  );
                })}
              </ol>

              <button
                onClick={() => choose(path.slug)}
                disabled={active}
                className={`mt-5 w-full rounded-lg px-5 py-2.5 font-medium ${
                  active
                    ? "cursor-default bg-gold-100 text-gold-800"
                    : "bg-gold-500 text-neutral-900 hover:bg-gold-400"
                }`}
              >
                {active ? "✓ Path aktif" : "Pilih path ini"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
