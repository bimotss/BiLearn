import { tracks } from "@/data/tracks";
import TrackDetail from "./TrackDetail";

/** Daftar halaman yang dibuat saat build (wajib untuk output: "export"). */
export function generateStaticParams() {
  return tracks.map((track) => ({ slug: track.slug }));
}

export default async function TrackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TrackDetail slug={slug} />;
}
