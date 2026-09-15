import { tracks, getTrackItems, LEGACY_ITEM_ALIASES } from "@/data/tracks";
import ItemDetail from "./ItemDetail";

/** Semua kombinasi track + item dibuat jadi halaman statis saat build. */
export function generateStaticParams() {
  const regular = tracks.flatMap((track) =>
    getTrackItems(track).map((item) => ({
      slug: track.slug,
      stepId: item.id,
    }))
  );
  const legacy = Object.entries(LEGACY_ITEM_ALIASES).map(
    ([legacyId, { slug }]) => ({
      slug,
      stepId: legacyId,
    })
  );
  return [...regular, ...legacy];
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ slug: string; stepId: string }>;
}) {
  const { slug, stepId } = await params;
  return <ItemDetail slug={slug} stepId={stepId} />;
}
