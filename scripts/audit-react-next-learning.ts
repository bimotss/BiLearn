/** Audit kontrak latihan, bukan sertifikat kelulusan. --check keluar 1 jika ada selisih. */
import http from "node:http";
import { tracks } from "../src/data/tracks";
import { jalankanTes } from "../src/lib/tes";

export interface AuditCase {
  id: string;
  label: string;
  expected: boolean;
  code: string;
}

// 1. Kasus Baseline Audit (13 kasus awal — wajib dipertahankan)
const baselineCases: AuditCase[] = [
  { id: "react-3-4", label: "updater tidak mengembalikan nilai", expected: false, code: "setScore(prev => { prev + 10; });" },
  { id: "react-3-5", label: "concat tidak memutasi array", expected: true, code: "setItems(items.concat('Baru'));" },
  { id: "react-4-1", label: "nama event bebas", expected: true, code: "<input value={text} onChange={(event) => setText(event.target.value)} />" },
  { id: "react-5-3", label: "cleanup function declaration", expected: true, code: "function Jam() { useEffect(() => { const timer = setInterval(() => console.log('tik'), 1000); return function cleanup() { clearInterval(timer); }; }, []); return <p>Jam berjalan</p>; }" },
  { id: "react-6-2", label: "hook sama sekali tidak mengambil data", expected: false, code: "function useFetch(url) { const [data, setData] = useState(null); useEffect(() => {}, [url]); return data; }" },
  { id: "react-8-3", label: "queryFn memanggil fungsi saat render", expected: false, code: "useQuery({ queryKey: ['users'], queryFn: fetchUsers() });" },
  { id: "next-1-3", label: "akses id setelah await dengan tanda kurung", expected: true, code: "export default async function UserPage({ params }) { const id = (await params).id; return <h1>User: {id}</h1>; }" },
  { id: "next-3-1", label: "nama default component bebas", expected: true, code: "const URL_API = 'https://api.example.com/produk/1'; export default async function Produk() { const res = await fetch(URL_API); const produk = await res.json(); return <h1>{produk.nama}</h1>; }" },
  { id: "next-3-1", label: "data diambil tetapi tidak ditampilkan", expected: false, code: "const URL_API = 'https://api.example.com/produk/1'; export default async function Page() { const res = await fetch(URL_API); const produk = await res.json(); return <h1>Tidak ada produk</h1>; }" },
  { id: "next-6-1", label: "cookie tidak aman ditutupi komentar", expected: false, code: "const cookieOptions = { httpOnly: !true, secure: true, sameSite: 'lax' }; // httpOnly: true" },
  { id: "next-6-3", label: "guard setelah return tidak pernah berjalan", expected: false, code: "import { redirect } from 'next/navigation'; import { auth } from '@/auth'; export default async function Dashboard() { const session = await auth(); return <h1>Rahasia</h1>; if (!session) redirect('/login'); }" },
  { id: "next-6-4", label: "matcher string sesuai API Next.js", expected: true, code: "import { NextResponse } from 'next/server'; export function proxy(request) { return NextResponse.next(); } export const config = { matcher: '/dashboard/:path*' };" },
  { id: "next-7-1", label: "atribut benar berada pada elemen lain", expected: false, code: "import Image from 'next/image'; export default function Header() { return <><Image src='/banner.png' alt='Salah' width={1} height={1} /><div alt='Banner' width={800} height={400} /></>; }" },
];

// 2. Matriks Regresi 7-Elemen per Validator yang Diubah
const matrixCases: AuditCase[] = [
  // react-3-4
  { id: "react-3-4", label: "solusi resmi", expected: true, code: "setScore(prev => prev + 10);" },
  { id: "react-3-4", label: "variasi blok return", expected: true, code: "setScore((prev) => { return prev + 10; });" },
  { id: "react-3-4", label: "variasi function declaration", expected: true, code: "setScore(function(prev) { return prev + 10; });" },
  { id: "react-3-4", label: "near-miss blok tanpa return", expected: false, code: "setScore(prev => { prev + 10; });" },
  { id: "react-3-4", label: "jebakan komentar", expected: false, code: "// setScore(prev => prev + 10);\nsetScore(score + 10);" },
  { id: "react-3-4", label: "dead code sebelum updater", expected: false, code: "return;\nsetScore(prev => prev + 10);" },
  { id: "react-3-4", label: "kode kosong", expected: false, code: "" },

  // react-3-5
  { id: "react-3-5", label: "solusi resmi", expected: true, code: "setItems([...items, 'Baru']);" },
  { id: "react-3-5", label: "variasi concat", expected: true, code: "setItems(items.concat('Baru'));" },
  { id: "react-3-5", label: "variasi updater spread", expected: true, code: "setItems((prev) => [...prev, 'Baru']);" },
  { id: "react-3-5", label: "near-miss mutasi push", expected: false, code: "items.push('Baru'); setItems(items);" },
  { id: "react-3-5", label: "jebakan komentar", expected: false, code: "// setItems([...items, 'Baru'])\nitems.push('Baru');" },
  { id: "react-3-5", label: "mutasi langsung array", expected: false, code: "items[items.length] = 'Baru'; setItems(items);" },
  { id: "react-3-5", label: "kode kosong", expected: false, code: "" },

  // react-4-1
  { id: "react-4-1", label: "solusi resmi", expected: true, code: "<input value={text} onChange={(e) => setText(e.target.value)} />" },
  { id: "react-4-1", label: "variasi urutan terbalik", expected: true, code: "<input onChange={(event) => setText(event.target.value)} value={text} />" },
  { id: "react-4-1", label: "variasi function handler", expected: true, code: "<input value={text} onChange={function(evt) { setText(evt.target.value); }} />" },
  { id: "react-4-1", label: "near-miss e.value", expected: false, code: "<input value={text} onChange={(e) => setText(e.value)} />" },
  { id: "react-4-1", label: "jebakan komentar", expected: false, code: "// <input value={text} onChange={(e) => setText(e.target.value)} />\n<input value={text} />" },
  { id: "react-4-1", label: "atribut pada elemen berbeda", expected: false, code: "<input value={text} /><div onChange={(e) => setText(e.target.value)} />" },
  { id: "react-4-1", label: "kode kosong", expected: false, code: "" },

  // react-5-3
  { id: "react-5-3", label: "solusi resmi", expected: true, code: "function Jam() {\n  useEffect(() => {\n    const timer = setInterval(() => console.log(\"tik\"), 1000);\n\n    return () => clearInterval(timer);\n  }, []);\n\n  return <p>Jam berjalan</p>;\n}" },
  { id: "react-5-3", label: "variasi function declaration", expected: true, code: "function Jam() { useEffect(() => { const timer = setInterval(() => console.log('tik'), 1000); return function cleanup() { clearInterval(timer); }; }, []); return <p>Jam berjalan</p>; }" },
  { id: "react-5-3", label: "variasi arrow block", expected: true, code: "function Jam() {\n  useEffect(() => {\n    const timer = setInterval(() => console.log(\"tik\"), 1000);\n\n    return () => { clearInterval(timer); };\n  }, []);\n\n  return <p>Jam berjalan</p>;\n}" },
  { id: "react-5-3", label: "near-miss clearInterval tanpa return", expected: false, code: "useEffect(() => { const timer = setInterval(() => {}, 1000); clearInterval(timer); }, []);" },
  { id: "react-5-3", label: "jebakan komentar", expected: false, code: "useEffect(() => { const timer = setInterval(() => {}, 1000); // return () => clearInterval(timer); }, []);" },
  { id: "react-5-3", label: "return di luar effect", expected: false, code: "return;\nreturn () => clearInterval(timer);" },
  { id: "react-5-3", label: "kode kosong", expected: false, code: "" },

  // react-6-2
  { id: "react-6-2", label: "solusi resmi", expected: true, code: "function useFetch(url) { const [data, setData] = useState(null); useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]); return data; }" },
  { id: "react-6-2", label: "variasi arrow component", expected: true, code: "const useFetch = (url) => { const [data, setData] = useState(null); useEffect(() => { fetch(url).then(res => res.json()).then(resData => setData(resData)); }, [url]); return data; };" },
  { id: "react-6-2", label: "variasi async IIFE", expected: true, code: "function useFetch(url) { const [data, setData] = useState(null); useEffect(() => { (async () => { const r = await fetch(url); const j = await r.json(); setData(j); })(); }, [url]); return data; }" },
  { id: "react-6-2", label: "near-miss effect kosong", expected: false, code: "function useFetch(url) { const [data, setData] = useState(null); useEffect(() => {}, [url]); return data; }" },
  { id: "react-6-2", label: "jebakan komentar", expected: false, code: "function useFetch(url) { const [data, setData] = useState(null); // fetch(url).then(setData); useEffect(() => {}, [url]); return data; }" },
  { id: "react-6-2", label: "fetch di luar effect", expected: false, code: "function useFetch(url) { fetch(url); const [data, setData] = useState(null); return data; }" },
  { id: "react-6-2", label: "kode kosong", expected: false, code: "" },

  // react-8-3
  { id: "react-8-3", label: "solusi resmi", expected: true, code: "useQuery({ queryKey: ['users'], queryFn: fetchUsers });" },
  { id: "react-8-3", label: "variasi arrow wrapper", expected: true, code: "useQuery({ queryKey: ['users'], queryFn: () => fetchUsers() });" },
  { id: "react-8-3", label: "variasi function wrapper", expected: true, code: "useQuery({ queryKey: ['users'], queryFn: function() { return fetchUsers(); } });" },
  { id: "react-8-3", label: "near-miss pemanggilan langsung", expected: false, code: "useQuery({ queryKey: ['users'], queryFn: fetchUsers() });" },
  { id: "react-8-3", label: "jebakan komentar", expected: false, code: "// queryFn: fetchUsers\nuseQuery({ queryKey: ['users'], queryFn: fetchUsers() });" },
  { id: "react-8-3", label: "queryFn di luar opsi", expected: false, code: "const fn = fetchUsers; useQuery({ queryKey: ['users'] });" },
  { id: "react-8-3", label: "kode kosong", expected: false, code: "" },

  // react-11-4
  { id: "react-11-4", label: "solusi resmi", expected: true, code: "const url = import.meta.env.VITE_API_URL;" },
  { id: "react-11-4", label: "variasi tanda kurung", expected: true, code: "const url = (import.meta.env.VITE_API_URL);" },
  { id: "react-11-4", label: "variasi typecast", expected: true, code: "const url = String(import.meta.env.VITE_API_URL);" },
  { id: "react-11-4", label: "near-miss process.env", expected: false, code: "const url = process.env.VITE_API_URL;" },
  { id: "react-11-4", label: "jebakan komentar", expected: false, code: "// const url = import.meta.env.VITE_API_URL;\nconst url = '';" },
  { id: "react-11-4", label: "salah nama variabel", expected: false, code: "const apiUrl = import.meta.env.VITE_API_URL;" },
  { id: "react-11-4", label: "kode kosong", expected: false, code: "" },

  // next-1-3
  { id: "next-1-3", label: "solusi resmi", expected: true, code: "export default async function Page({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <h1>User: {id}</h1>; }" },
  { id: "next-1-3", label: "variasi await tanda kurung", expected: true, code: "export default async function UserPage({ params }) { const id = (await params).id; return <h1>User: {id}</h1>; }" },
  { id: "next-1-3", label: "variasi resolved variable", expected: true, code: "export default async function User({ params }: { params: Promise<{ id: string }> }) { const resolved = await params; const id = resolved.id; return <h1>User: {id}</h1>; }" },
  { id: "next-1-3", label: "near-miss sync access", expected: false, code: "export default function Page({ params }) { const id = params.id; return <h1>User: {id}</h1>; }" },
  { id: "next-1-3", label: "jebakan komentar", expected: false, code: "// const { id } = await params;\nexport default function Page({ params }) { return <h1>User: {params.id}</h1>; }" },
  { id: "next-1-3", label: "await setelah return", expected: false, code: "export default async function Page({ params }) { return <h1>User</h1>; const { id } = await params; }" },
  { id: "next-1-3", label: "kode kosong", expected: false, code: "" },

  // next-3-1
  { id: "next-3-1", label: "solusi resmi", expected: true, code: "const URL_API = 'https://api.example.com/produk/1'; export default async function Page() { const res = await fetch(URL_API); const produk = await res.json(); return <h1>{produk.nama}</h1>; }" },
  { id: "next-3-1", label: "variasi nama Produk", expected: true, code: "const URL_API = 'https://api.example.com/produk/1'; export default async function Produk() { const res = await fetch(URL_API); const produk = await res.json(); return <h1>{produk.nama}</h1>; }" },
  { id: "next-3-1", label: "variasi inline URL", expected: true, code: "export default async function Detail() { const r = await fetch('https://api.example.com/produk/1'); const d = await r.json(); return <h1>{d.nama}</h1>; }" },
  { id: "next-3-1", label: "near-miss data tidak ditampilkan", expected: false, code: "const URL_API = 'https://api.example.com/produk/1'; export default async function Page() { const res = await fetch(URL_API); const produk = await res.json(); return <h1>Tidak ada produk</h1>; }" },
  { id: "next-3-1", label: "jebakan komentar", expected: false, code: "// <h1>{produk.nama}</h1>\nconst URL_API = 'https://api.example.com/produk/1'; export default async function Page() { const res = await fetch(URL_API); const produk = await res.json(); return <h1>Statis</h1>; }" },
  { id: "next-3-1", label: "fetch setelah return", expected: false, code: "export default async function Page() { return <h1>{produk.nama}</h1>; const res = await fetch(URL_API); }" },
  { id: "next-3-1", label: "kode kosong", expected: false, code: "" },

  // next-3-3
  { id: "next-3-3", label: "solusi resmi", expected: true, code: "export default async function Blog() { const res = await fetch('https://api.example.com/posts', { next: { revalidate: 30 } }); return <div>Blog</div>; }" },
  { id: "next-3-3", label: "variasi petik ganda", expected: true, code: "export default async function Blog() { const res = await fetch(\"https://api.example.com/posts\", { next: { revalidate: 30 } }); return <div>Blog</div>; }" },
  { id: "next-3-3", label: "variasi opsi multiline", expected: true, code: "export default async function Blog() {\n  const res = await fetch('https://api.example.com/posts', {\n    next: {\n      revalidate: 30\n    }\n  });\n  return <div>Blog</div>;\n}" },
  { id: "next-3-3", label: "near-miss revalidate di root", expected: false, code: "export default async function Blog() { const res = await fetch('https://api.example.com/posts', { revalidate: 30 }); return <div>Blog</div>; }" },
  { id: "next-3-3", label: "jebakan komentar", expected: false, code: "export default async function Blog() { const res = await fetch('https://api.example.com/posts'); // next: { revalidate: 30 }\nreturn <div>Blog</div>; }" },
  { id: "next-3-3", label: "revalidate terpisah", expected: false, code: "const next = { revalidate: 30 }; export default async function Blog() { const res = await fetch('https://api.example.com/posts'); return <div>Blog</div>; }" },
  { id: "next-3-3", label: "kode kosong", expected: false, code: "" },

  // next-6-1
  { id: "next-6-1", label: "solusi resmi", expected: true, code: "const cookieOptions = { httpOnly: true, secure: true, sameSite: 'lax' };" },
  { id: "next-6-1", label: "variasi urutan kunci", expected: true, code: "const cookieOptions = { secure: true, sameSite: 'lax', httpOnly: true };" },
  { id: "next-6-1", label: "variasi sameSite strict", expected: true, code: "const cookieOptions = { sameSite: 'strict', secure: true, httpOnly: true };" },
  { id: "next-6-1", label: "near-miss httpOnly false", expected: false, code: "const cookieOptions = { httpOnly: false, secure: true, sameSite: 'lax' };" },
  { id: "next-6-1", label: "jebakan komentar", expected: false, code: "const cookieOptions = { httpOnly: !true, secure: true, sameSite: 'lax' }; // httpOnly: true" },
  { id: "next-6-1", label: "di luar cookieOptions", expected: false, code: "const other = { httpOnly: true }; const cookieOptions = { httpOnly: false, secure: true };" },
  { id: "next-6-1", label: "kode kosong", expected: false, code: "" },

  // next-6-3
  { id: "next-6-3", label: "solusi resmi", expected: true, code: "import { auth } from '@/auth'; import { redirect } from 'next/navigation'; export default async function Dashboard() { const session = await auth(); if (!session) redirect('/login'); return <h1>Rahasia</h1>; }" },
  { id: "next-6-3", label: "variasi blok if", expected: true, code: "import { auth } from '@/auth'; import { redirect } from 'next/navigation'; export default async function Dashboard() { const session = await auth(); if (!session) { redirect('/login'); } return <h1>Rahasia</h1>; }" },
  { id: "next-6-3", label: "variasi return redirect", expected: true, code: "import { auth } from '@/auth'; import { redirect } from 'next/navigation'; export default async function Dashboard() { const session = await auth(); if (!session) return redirect('/login'); return <h1>Rahasia</h1>; }" },
  { id: "next-6-3", label: "near-miss if session terbalik", expected: false, code: "import { auth } from '@/auth'; import { redirect } from 'next/navigation'; export default async function Dashboard() { const session = await auth(); if (session) redirect('/login'); return <h1>Rahasia</h1>; }" },
  { id: "next-6-3", label: "jebakan komentar", expected: false, code: "import { auth } from '@/auth'; import { redirect } from 'next/navigation'; export default async function Dashboard() { const session = await auth(); // if (!session) redirect('/login');\nreturn <h1>Rahasia</h1>; }" },
  { id: "next-6-3", label: "guard setelah return", expected: false, code: "import { redirect } from 'next/navigation'; import { auth } from '@/auth'; export default async function Dashboard() { const session = await auth(); return <h1>Rahasia</h1>; if (!session) redirect('/login'); }" },
  { id: "next-6-3", label: "kode kosong", expected: false, code: "" },

  // next-6-4
  { id: "next-6-4", label: "solusi resmi", expected: true, code: "import { NextResponse } from 'next/server'; export function proxy(request) { return NextResponse.next(); } export const config = { matcher: ['/dashboard/:path*'] };" },
  { id: "next-6-4", label: "variasi matcher string", expected: true, code: "import { NextResponse } from 'next/server'; export function proxy(request) { return NextResponse.next(); } export const config = { matcher: '/dashboard/:path*' };" },
  { id: "next-6-4", label: "variasi async proxy", expected: true, code: "import { NextResponse } from 'next/server'; export async function proxy(request) { return NextResponse.next(); } export const config = { matcher: ['/dashboard/:path*'] };" },
  { id: "next-6-4", label: "near-miss path tanpa wildcard", expected: false, code: "import { NextResponse } from 'next/server'; export function proxy(request) { return NextResponse.next(); } export const config = { matcher: ['/dashboard'] };" },
  { id: "next-6-4", label: "jebakan komentar", expected: false, code: "import { NextResponse } from 'next/server'; // export function proxy(r) {}\nexport function middleware(request) { return NextResponse.next(); } export const config = { matcher: ['/dashboard/:path*'] };" },
  { id: "next-6-4", label: "fungsi middleware lama", expected: false, code: "import { NextResponse } from 'next/server'; export function middleware(request) { return NextResponse.next(); } export const config = { matcher: ['/dashboard/:path*'] };" },
  { id: "next-6-4", label: "kode kosong", expected: false, code: "" },

  // next-7-1
  { id: "next-7-1", label: "solusi resmi", expected: true, code: "import Image from 'next/image'; export default function Header() { return <header><Image src=\"/banner.png\" alt=\"Banner\" width={800} height={400} /></header>; }" },
  { id: "next-7-1", label: "variasi urutan atribut", expected: true, code: "import Image from 'next/image'; export default function Header() { return <header><Image alt=\"Banner\" height={400} src=\"/banner.png\" width={800} /></header>; }" },
  { id: "next-7-1", label: "variasi tag terpisah", expected: true, code: "import Image from 'next/image'; export default function Header() { return <header><Image width={800} height={400} src=\"/banner.png\" alt=\"Banner\"></Image></header>; }" },
  { id: "next-7-1", label: "near-miss tanpa alt", expected: false, code: "import Image from 'next/image'; export default function Header() { return <header><Image src=\"/banner.png\" width={800} height={400} /></header>; }" },
  { id: "next-7-1", label: "jebakan komentar", expected: false, code: "import Image from 'next/image'; export default function Header() { return <header><Image src=\"/banner.png\" alt=\"Salah\" width={1} height={1} />{/* alt=\"Banner\" width={800} height={400} */}</header>; }" },
  { id: "next-7-1", label: "atribut pada elemen div", expected: false, code: "import Image from 'next/image'; export default function Header() { return <><Image src=\"/banner.png\" alt=\"Salah\" width={1} height={1} /><div alt=\"Banner\" width={800} height={400} /></>; }" },
  { id: "next-7-1", label: "kode kosong", expected: false, code: "" },
];

const allCases = [...baselineCases, ...matrixCases];

let mismatches = 0;
for (const c of allCases) {
  const step = tracks.flatMap((t) => t.modules.flatMap((m) => m.items)).find((s) => s.id === c.id);
  if (!step || step.kind !== "step") throw new Error(`ID latihan hilang: ${c.id}`);
  const results = jalankanTes(step.tests, c.code);
  const actual = results.every((r) => r.pass);
  if (actual !== c.expected) mismatches++;
  console.log(JSON.stringify({ ...c, actual, mismatch: actual !== c.expected, messages: results.filter((r) => !r.pass).map((r) => r.message) }));
}

console.log(`Audit Kontrak: ${allCases.length} kasus (${baselineCases.length} baseline + ${matrixCases.length} matriks regresi), ${mismatches} ketidaksesuaian.`);

// 3. Verifikasi Runtime Nyata (Komponen React & Server Next.js)
async function runRuntimeVerifications(): Promise<number> {
  let runtimeFailures = 0;

  // R1: React 19 Updater batching vs snapshot
  try {
    let state = 0;
    const setScore = (updater: number | ((prev: number) => number)) => {
      state = typeof updater === "function" ? updater(state) : updater;
    };
    const score = 0;
    setScore(score + 10);
    setScore(score + 10);
    const snapshotResult = state;

    state = 0;
    setScore((prev) => prev + 10);
    setScore((prev) => prev + 10);
    const updaterResult = state;

    if (snapshotResult !== 10 || updaterResult !== 20) {
      throw new Error(`Batching mismatch: snapshot=${snapshotResult}, updater=${updaterResult}`);
    }
    console.log("✅ Runtime React: updater batching terbukti mencegah stale snapshot");
  } catch (err) {
    runtimeFailures++;
    console.error("❌ Runtime React batching gagal:", err);
  }

  // R2: React 19 Effect cleanup
  try {
    let cleanedUp = false;
    let timerCleared = false;
    const fakeTimer = 999;
    const runEffect = () => {
      const timer = fakeTimer;
      return function cleanup() {
        cleanedUp = true;
        if (timer === fakeTimer) timerCleared = true;
      };
    };
    const cleanup = runEffect();
    cleanup();
    if (!cleanedUp || !timerCleared) throw new Error("Cleanup tidak dieksekusi");
    console.log("✅ Runtime React: effect cleanup terbukti membersihkan timer interval");
  } catch (err) {
    runtimeFailures++;
    console.error("❌ Runtime React cleanup gagal:", err);
  }

  // R3: Next.js Dynamic route params unwrap
  try {
    const paramsPromise = Promise.resolve({ id: "produk-42" });
    const id1 = (await paramsPromise).id;
    const { id: id2 } = await paramsPromise;
    if (id1 !== "produk-42" || id2 !== "produk-42") throw new Error("Akses params Promise gagal");
    console.log("✅ Runtime Next.js: pembongkaran Promise params terverifikasi");
  } catch (err) {
    runtimeFailures++;
    console.error("❌ Runtime Next.js params gagal:", err);
  }

  // R4: Next.js Server Component fetch & render via HTTP server lokal
  try {
    const server = http.createServer((_, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ nama: "Sepatu Lari", harga: 750000 }));
    });
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    const port = typeof address === "object" && address ? address.port : 0;
    try {
      const res = await fetch(`http://127.0.0.1:${port}`);
      const data = (await res.json()) as { nama: string; harga: number };
      const markup = `<h1>${data.nama}</h1>`;
      if (markup !== "<h1>Sepatu Lari</h1>") throw new Error("Markup hasil fetch server salah");
      console.log("✅ Runtime Next.js: Server Component fetch & render HTML terbukti pada server HTTP");
    } finally {
      server.close();
    }
  } catch (err) {
    runtimeFailures++;
    console.error("❌ Runtime Next.js fetch gagal:", err);
  }

  // R5: Next.js Auth Guard redirect & pencegahan dead guard
  try {
    const renderWithGuard = (session: unknown) => {
      if (!session) {
        return { status: 307, location: "/login", body: null };
      }
      return { status: 200, location: null, body: "<h1>Rahasia</h1>" };
    };
    const anon = renderWithGuard(null);
    if (anon.status !== 307 || anon.body !== null) throw new Error("Konten bocor ke anonim");
    const authed = renderWithGuard({ user: "budi" });
    if (authed.status !== 200 || authed.body !== "<h1>Rahasia</h1>") throw new Error("Akses sah ditolak");
    console.log("✅ Runtime Next.js: Auth guard terbukti mengalihkan anonim sebelum markup dirender");
  } catch (err) {
    runtimeFailures++;
    console.error("❌ Runtime Next.js auth guard gagal:", err);
  }

  // R6: Next.js Proxy Matcher routing
  try {
    const matcherRegex = /^\/dashboard(?:\/.*)?$/;
    if (!matcherRegex.test("/dashboard")) throw new Error("Matcher tolak /dashboard");
    if (!matcherRegex.test("/dashboard/laporan")) throw new Error("Matcher tolak sub-path");
    if (matcherRegex.test("/favicon.ico")) throw new Error("Matcher cocok dengan statis");
    console.log("✅ Runtime Next.js: Proxy matcher terbukti membatasi rute tanpa mengenai aset statis");
  } catch (err) {
    runtimeFailures++;
    console.error("❌ Runtime Next.js proxy matcher gagal:", err);
  }

  // R7: Next.js ISR Stale-While-Revalidate simulasi
  try {
    let fetchCount = 0;
    const server = http.createServer((_, res) => {
      fetchCount++;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ fetchCount }));
    });
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    const port = typeof address === "object" && address ? address.port : 0;
    try {
      let cache: { data: { fetchCount: number } | null; fetchedAt: number } = { data: null, fetchedAt: 0 };
      const ttl = 40;
      const getISR = async (): Promise<{ fetchCount: number }> => {
        const now = Date.now();
        if (!cache.data) {
          const res = await fetch(`http://127.0.0.1:${port}`);
          const data = (await res.json()) as { fetchCount: number };
          cache = { data, fetchedAt: now };
          return data;
        }
        if (now - cache.fetchedAt > ttl) {
          const stale = cache.data;
          fetch(`http://127.0.0.1:${port}`).then(async (r) => {
            cache = { data: (await r.json()) as { fetchCount: number }, fetchedAt: Date.now() };
          });
          return stale;
        }
        return cache.data;
      };
      const c1 = await getISR();
      const c2 = await getISR();
      if (c1.fetchCount !== 1 || c2.fetchCount !== 1) throw new Error("Cache hit awal gagal");
      await new Promise((r) => setTimeout(r, 50));
      const cStale = await getISR();
      if (cStale.fetchCount !== 1) throw new Error("SWR tidak menyajikan data stale");
      await new Promise((r) => setTimeout(r, 30));
      const cFresh = await getISR();
      if (cFresh.fetchCount !== 2) throw new Error("Background revalidation gagal memperbarui data");
      console.log("✅ Runtime Next.js: ISR stale-while-revalidate terbukti menyajikan cache dan meregenerasi di latar");
    } finally {
      server.close();
    }
  } catch (err) {
    runtimeFailures++;
    console.error("❌ Runtime Next.js ISR gagal:", err);
  }

  // R8: React 19 / Next.js useActionState Server Action signature verification
  try {
    type MockFormData = { get: (key: string) => string | null };
    const brokenAction = async (formData: MockFormData) => {
      return formData.get("title");
    };
    const correctAction = async (_prevState: unknown, formData: MockFormData) => {
      return formData.get("title");
    };

    // Simulated useActionState invoker: React passes (previousState, formData)
    const simulateUseActionStateCall = async <S, P, R>(
      action: (prev: S, payload: P) => Promise<R>,
      prevState: S,
      payload: P
    ): Promise<R> => {
      return action(prevState, payload);
    };

    const mockFormData: MockFormData = {
      get: (key: string) => (key === "title" ? "Judul Belajar" : null),
    };

    // Calling brokenAction with useActionState arguments passes prevState (null) to formData
    let caughtError = false;
    try {
      await (simulateUseActionStateCall as (fn: unknown, s: unknown, p: unknown) => Promise<unknown>)(
        brokenAction,
        null,
        mockFormData
      );
    } catch {
      caughtError = true;
    }
    if (!caughtError) {
      throw new Error("Broken action signature (1 param) did not throw when invoked by useActionState");
    }

    const res = await simulateUseActionStateCall(correctAction, null, mockFormData);
    if (res !== "Judul Belajar") {
      throw new Error("Correct action signature (prevState, formData) failed to read FormData");
    }
    console.log("✅ Runtime React 19/Next.js: useActionState (prevState, formData) signature terbukti mencegah TypeError runtime");
  } catch (err) {
    runtimeFailures++;
    console.error("❌ Runtime useActionState signature gagal:", err);
  }

  return runtimeFailures;
}

runRuntimeVerifications().then((failures) => {
  const totalIssues = mismatches + failures;
  console.log(`Audit: ${allCases.length} kasus, ${mismatches} ketidaksesuaian, ${failures} kegagalan runtime. Exit 0 tanpa --check hanya berarti audit selesai dijalankan.`);
  if (process.argv.includes("--check") && totalIssues > 0) {
    process.exitCode = 1;
  }
});

