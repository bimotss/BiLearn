/** Audit kontrak, bukan runner PHP. Baseline merah adalah bukti untuk worker.
 * Jalankan: npx tsx scripts/audit-laravel-learning.ts --check
 * Jangan hapus kasus atau ubah expected demi membuat audit hijau.
 */
import { laravelTrack } from "../src/data/tracks/laravel";
import { gabungPotongan, jalankanTes } from "../src/lib/tes";
import type { Step } from "../src/lib/types";

const steps = laravelTrack.modules.flatMap((m) => m.items)
  .filter((item): item is Step => item.kind === "step");
const byId = new Map(steps.map((step) => [step.id, step]));
type Case = { id: string; label: string; code: string; expected: boolean };
const cases: Case[] = [
  { id: "laravel-1-1", label: "petik tunggal tidak menginterpolasi nama", expected: false,
    code: "<?php\n$name = 'Bimo'; echo 'Halo $name';" },
  { id: "laravel-1-1", label: "nama variabel PHP case-sensitive", expected: false,
    code: "<?php\n$NAME = 'Bimo'; echo 'Halo ' . $name;" },
  { id: "laravel-1-1", label: "echo bertanda kurung sah", expected: true,
    code: "<?php\n$name = 'Bimo'; echo ('Halo ' . $name);" },
  { id: "laravel-1-3", label: "echo di luar loop hanya mencetak elemen terakhir", expected: false,
    code: "<?php\n$items = ['Kopi', 'Teh', 'Susu']; foreach ($items as $item) {} echo $item;" },
  { id: "laravel-1-5", label: "require_once dengan jalur berbasis __DIR__", expected: true,
    code: "<?php\nrequire_once __DIR__ . '/helper.php';" },
  { id: "laravel-1-7", label: "isset memenuhi fallback tanpa warning", expected: true,
    code: "<?php\n$page = isset($_GET['page']) ? $_GET['page'] : 1;" },
  { id: "laravel-3-1", label: "return yang benar berada pada route yang salah", expected: false,
    code: "<?php\nRoute::get('/contact', fn () => 'Salah'); Route::get('/other', fn () => 'Kontak Kami');" },
  { id: "laravel-4-4", label: "where dengan operator eksplisit sah", expected: true,
    code: "<?php\nuse App\\Models\\Product;\n$hasil = Product::where('status', '=', 'active')->paginate(15);" },
  { id: "laravel-4-6", label: "with menerima array relasi", expected: true,
    code: "<?php\nuse App\\Models\\Product;\n$hasil = Product::with(['category'])->get();" },
  { id: "laravel-4-7", label: "factory count lalu create sah", expected: true,
    code: "<?php\nuse App\\Models\\Product;\nProduct::factory()->count(100)->create();" },
  { id: "laravel-5-1", label: "direktif dalam komentar Blade tidak membuat token", expected: false,
    code: '<form action="/login" method="POST">{{-- @csrf --}}<input name="email"><button>Masuk</button></form>' },
  { id: "laravel-5-1", label: "token berada di form lain", expected: false,
    code: '<form action="/login" method="POST"><button>Masuk</button></form><form action="/other" method="POST">@csrf</form>' },
  { id: "laravel-5-2", label: "array age kehilangan required", expected: false,
    code: "<?php\n$request->validate(['name' => 'required', 'age' => ['numeric']]);" },
  { id: "laravel-5-2", label: "array aturan lengkap urutan bebas", expected: true,
    code: "<?php\n$request->validate(['age' => ['numeric', 'required'], 'name' => ['required']]);" },
  { id: "laravel-5-6", label: "fillable membuka kolom tambahan yang dilarang kontrak", expected: false,
    code: "<?php\nclass Article extends Model { protected $fillable = ['title', 'content', 'is_admin']; }" },
  { id: "laravel-6-2", label: "regenerate di luar kondisi auth sukses", expected: false,
    code: "<?php\nif (Auth::attempt($credentials)) {} $request->session()->regenerate();" },
  { id: "laravel-6-3", label: "profile didaftarkan di luar kelompok auth", expected: false,
    code: "<?php\nRoute::middleware(['auth'])->group(function () {}); Route::get('/profile', [ProfileController::class, 'show']);" },
  { id: "laravel-9-5", label: "fake memberi status 500 bukan 200", expected: false,
    code: "<?php\nuse Illuminate\\Support\\Facades\\Http;\nHttp::fake(['api.github.com/*' => Http::response([], 500)]);" },
  { id: "laravel-9-5", label: "status default Http::response adalah 200", expected: true,
    code: "<?php\nuse Illuminate\\Support\\Facades\\Http;\nHttp::fake(['api.github.com/*' => Http::response([])]);" },
];

for (const step of steps) {
  cases.push({ id: step.id, label: "solution", code: step.solution, expected: true });
  cases.push({ id: step.id, label: "starter", code: step.starterCode, expected: false });
  cases.push({ id: step.id, label: "kosong", code: "", expected: false });
  if (step.susunKode) cases.push({ id: step.id, label: "susunan benar",
    code: gabungPotongan(step.susunKode.potongan, step.susunKode.pemisah), expected: true });
}
let mismatches = 0;
for (const c of cases) {
  const step = byId.get(c.id);
  if (!step) throw new Error(`Item hilang tanpa migrasi fixture: ${c.id}`);
  const result = jalankanTes(step.tests, c.code);
  const actual = result.length > 0 && result.every((r) => r.pass);
  if (actual !== c.expected) {
    mismatches++;
    console.log(`${c.id} | ${c.label} | expected=${c.expected} actual=${actual}`);
  }
}
console.log(`${steps.length} step; ${cases.length} kasus; ${mismatches} tidak sesuai kontrak.`);
console.log("Cakupan: evaluator produksi saja; tidak membuktikan runtime PHP/Laravel atau UI.");
if (process.argv.includes("--check") && mismatches) process.exitCode = 1;
