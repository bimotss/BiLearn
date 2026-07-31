import { tracks } from "../src/data/tracks/index";

const t = tracks.find((t) => t.slug === "spreadsheet")!;
for (const m of t.modules) {
  for (const item of m.items) {
    if (item.kind === "step") {
      console.log(`"${item.id}": {`);
      console.log(`  solution: JSON.stringify(${JSON.stringify(item.solution)}),`);
      console.log(`  tests: ${JSON.stringify(item.tests.map(x => x.pattern))}`);
      console.log(`}`);
    }
  }
}
