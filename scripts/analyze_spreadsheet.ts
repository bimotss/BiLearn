import { tracks } from "../src/data/tracks/index";

const t = tracks.find((t) => t.slug === "spreadsheet")!;
console.log(`Track: ${t.title}, Slug: ${t.slug}, Modules: ${t.modules.length}`);

let totalSteps = 0;
for (const m of t.modules) {
  for (const item of m.items) {
    if (item.kind === "step") {
      totalSteps++;
      console.log(`\n--- STEP ${item.id} ---`);
      console.log(`Title: ${item.title}`);
      console.log(`Solution:\n${item.solution}`);
      console.log(`Tests:`, JSON.stringify(item.tests));
    }
  }
}
console.log(`\nTotal steps in spreadsheet: ${totalSteps}`);
