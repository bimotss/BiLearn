import { tracks, getTrackItems } from "@/data/tracks";
import ItemDetail from "./ItemDetail";

/** Semua kombinasi track + item dibuat jadi halaman statis saat build. */
export function generateStaticParams() {
  return tracks.flatMap((track) =>
    getTrackItems(track).map((item) => ({
      slug: track.slug,
      stepId: item.id,
    }))
  );
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ slug: string; stepId: string }>;
}) {
  const { slug, stepId } = await params;
  return <ItemDetail slug={slug} stepId={stepId} />;
}
