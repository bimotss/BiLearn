import assert from "node:assert/strict";
import { businessEnglishTrack } from "../src/data/tracks/business-english";
import { jalankanTes, paragrafPembukaEmail } from "../src/lib/tes";

const step = businessEnglishTrack.modules.flatMap((m) => m.items)
  .find((s) => s.id === "beng-8-9");
assert(step?.kind === "step");
const email = step.solution;
const addContext = (text: string) => email.replace("The additional funds", `${text} The additional funds`);
const cases: [string, string, boolean][] = [
  ["solution", email, true],
  ["modal May", addContext("May I provide any further details?"), true],
  ["delivery milestone", addContext("We will complete integration by December 10."), true],
  ["past audit", addContext("The audit was completed before October 31."), true],
  ["cost breakdown", addContext("The total includes $10,000 for licensing and $5,000 for testing."), true],
  ["prior budget", addContext("The previous budget was $25,000."), true],
  ["wrong total with old amount", email.replace("budget of $15,000", "budget, which totals $25,000,").replace("The additional funds", "The previous budget was $15,000. The additional funds"), false],
  ["missing amount cannot borrow from context", email.replace(" of $15,000", "").replace("The additional funds", "The previous budget was $15,000. The additional funds"), false],
  ["missing deadline cannot borrow from subject", email.replace("$15,000 by November 20", "$15,000"), false],
  ["wrong deadline cannot borrow from later paragraph", email.replace("$15,000 by November 20", "$15,000 by December 20").replace("The additional funds", "The previous deadline was by November 20. The additional funds"), false],
  ["negated deadline", email.replace("$15,000 by November 20", "$15,000 by November 21, rather than by November 20"), false],
  ["wrong decimal", email.replace("$15,000", "$15,000.99"), false],
  ["wrong total", email.replace("$15,000", "$150,000"), false],
  ["zero cents", email.replace("$15,000", "$15,000.00"), true],
  ["USD suffix", email.replace("$15,000", "15000 USD"), true],
  ["written amount", email.replace("$15,000", "fifteen thousand dollars"), true],
  ["British date", email.replaceAll("November 20", "20 November"), true],
  ["single name", email.replace("Alex Pratama", "Bimo"), true],
  ["hyphenated name", email.replace("Alex Pratama", "Anne-Marie"), true],
  ["polite alternative", email.replace("Could you please review and approve", "Would you mind approving"), true],
  ["CRLF", email.replaceAll("\n", "\r\n"), true],
  ["wrapped opening", email.replace("budget of", "budget\nof"), true],
  ["no greeting", email.replace("Dear Ms. Adams,", ""), false],
  ["empty", "", false],
];

for (const [label, input, expected] of cases) {
  const results = jalankanTes(step.tests, input);
  assert.equal(results.every((r) => r.pass), expected,
    `${label}: ${JSON.stringify(results.filter((r) => !r.pass))}`);
}
assert.equal(paragrafPembukaEmail("Dear Ms. Adams,\n\n"), null);
assert.equal(jalankanTes([{ scope: "email-opening", pattern: "wrong", mustNotMatch: true, message: "scope" }], "")[0].pass, false);
// Tes coding tanpa scope mempertahankan perilaku sebelumnya.
assert.equal(jalankanTes([{ pattern: "git\\s+status", message: "git" }], "git status")[0].pass, true);
assert.equal(jalankanTes([{ pattern: "[", message: "invalid" }], "anything")[0].pass, false);
console.log(`Email opening: ${cases.length} end-to-end cases + 4 scope/regression checks passed.`);
