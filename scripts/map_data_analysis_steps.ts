import { tracks } from "../src/data/tracks/index";

const t = tracks.find((t) => t.slug === "data-analysis")!;
console.log(`Track: ${t.title}, Slug: ${t.slug}, Modules: ${t.modules.length}`);

let totalSteps = 0;
for (const m of t.modules) {
  for (const item of m.items) {
    if (item.kind === "step") {
      totalSteps++;
      console.log(`"${item.id}": {`);
      console.log(`  solution: JSON.stringify(${JSON.stringify(item.solution)}),`);
      console.log(`  tests: ${JSON.stringify(item.tests.map(x => x.pattern))}`);
      console.log(`}`);
    }
  }
}
console.log(`\nTotal steps in data-analysis: ${totalSteps}`);
