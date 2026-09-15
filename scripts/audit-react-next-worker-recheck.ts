/** Audit independen: exit 1 berarti masih ada pelanggaran kontrak. */
import { tracks } from '../src/data/tracks/index';
import { jalankanTes } from '../src/lib/tes';
const cases: [string, boolean, string, string][] = [
['react-3-5',true,'identifier updater array bebas',"setItems(current => [...current, 'Baru']);"],
['react-5-3',false,'cleanup kosong, clearInterval di luar effect',"function Jam() { useEffect(() => { const timer = setInterval(() => {}, 1000); return () => {}; }, []); function unrelated(timer) { clearInterval(timer); } return <p>Jam berjalan</p>; }"],
['react-6-2',false,'fetch pada render dan effect kosong',"function useFetch(url) { const [data,setData] = useState(null); fetch(url).then(r => r.json()).then(setData); useEffect(() => {}, [url]); return data; }"],
['react-8-3',false,'wrapper function tidak mengembalikan promise',"useQuery({ queryKey: ['users'], queryFn: function() { fetchUsers(); } });"],
['react-11-4',false,'kata kunci dalam string',"const url = 'import.meta.env.VITE_API_URL';"],
['next-6-1',false,'nilai boolean false melalui expression',"const cookieOptions = { httpOnly: true && false, secure: true, sameSite: 'lax' };"],
['next-6-3',false,'guard dibungkus kondisi false',"import { redirect } from 'next/navigation'; import { auth } from '@/auth'; export default async function Dashboard() { const session = await auth(); if (false) { if (!session) redirect('/login'); } return <h1>Rahasia</h1>; }"],
['next-6-4',false,'matcher di object berbeda',"import { NextResponse } from 'next/server'; export function proxy(request) { return NextResponse.next(); } export const config = {}; const other = { matcher: '/dashboard/:path*' };"],
['next-3-1',false,'hanya string berisi kode yang diharapkan',"const sample = `export default async function Page() { const res = await fetch(URL_API); const produk = await res.json(); return <h1>{produk.nama}</h1>; }`;"],
['react-4-1',false,'value dan handler pada dua input terpisah',"<><input value={text} /><input onChange={(e) => setText(e.target.value)} /></>"],
];
let mismatches=0;
for (const [id,expected,label,code] of cases) {
 const item=tracks.flatMap(t=>t.modules.flatMap(m=>m.items)).find(i=>i.id===id);
 if(!item || item.kind!=='step') throw Error(id);
 const results=jalankanTes(item.tests,code); const actual=results.every(r=>r.pass);
 if(actual!==expected)mismatches++;
 console.log(JSON.stringify({id,label,expected,actual,code,failures:results.filter(r=>!r.pass)}));
}
console.log(`${mismatches}/${cases.length} ketidaksesuaian`);
if(mismatches)process.exitCode=1;
