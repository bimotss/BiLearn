import type { Track } from "@/lib/types";

export const reactTrack: Track = {
  slug: "react",
  title: "React",
  description:
    "Komponen, hooks, state management, dan pola yang dipakai di dunia kerja.",
  hours: 80,
  recommendedPrereqs: ["javascript", "typescript"],
  color: "bg-cyan-500",
  icon: "⚛️",
  order: 6,
  modules: [
    {
      slug: "komponen-jsx",
      title: "Komponen & JSX",
      description:
        "Mental model React: UI = fungsi dari data. Semua dimulai dari sini.",
      topics: [
        "Kenapa React ada: masalah DOM manual di aplikasi besar",
        "Komponen = fungsi yang mengembalikan JSX",
        "Aturan JSX: satu root, className, ekspresi {}",
        "Render kondisional: &&, ternary, early return",
        "Render list dengan map & kenapa key penting",
        "Setup proyek dengan Vite",
        "Struktur file komponen yang rapi",
      ],
      items: [
        {
          kind: "step",
          id: "react-1-1",
          title: "Kenapa React Ada?",
          explanation:
            "Di JavaScript biasa, kamu harus memberi perintah manual satu per satu untuk mengubah tampilan halaman. React menggunakan cara 'deklaratif' — mirip seperti memesan makanan di restoran: kamu cukup bilang apa yang kamu mau, dan koki (React) yang sibuk di dapur mengurus semuanya. Kamu cukup memberi tahu React data terbarunya (state), dan React akan otomatis memperbarui tampilan di layar. Pendekatan ini membuat kode jauh lebih rapi saat aplikasi semakin besar dan kompleks.",
          example: {
            code: "// Di React, UI otomatis diperbarui saat data (state) berubah tanpa document.getElementById().innerHTML manual",
            output: "Mental model: UI = f(data)",
            note: "React menangani pembaruan DOM di balik layar menggunakan Virtual DOM.",
          },
          instruction:
            "Tuliskan sebuah fungsi bernama `Formula` yang mengembalikan string 'UI = f(data)'.",
          starterCode: "// Tulis fungsi Formula di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+Formula\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*['\"]UI\\s*=\\s*f\\(data\\)['\"]\\s*;?\\s*\\}",
              message: "Definisikan fungsi Formula yang mengembalikan 'UI = f(data)'",
            },
          ],
          solution: "function Formula() {\n  return 'UI = f(data)';\n}",
        },
        {
          kind: "step",
          id: "react-1-2",
          title: "Komponen = Fungsi Mengembalikan JSX",
          explanation:
            "Komponen React adalah fungsi JavaScript yang mengembalikan sintaks bernama JSX. Nama komponen **WAJIB** menggunakan huruf kapital (PascalCase).",
          example: {
            code:
              'function Header() {\n' +
              '  return <header className="navbar">Selamat Datang</header>;\n' +
              '}',
            output: "Elemen header dirender ke layar.",
            note: "Nama fungsi komponen harus diawali huruf kapital agar React mengenalinya sebagai komponen.",
          },
          instruction:
            'Buat komponen `function Button()` yang mengembalikan `<button className="btn">Klik Saya</button>`.',
          starterCode: "// Tulis komponen Button di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+Button\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<button\\s+className=[\"']btn[\"']>\\s*Klik Saya\\s*</button>\\s*;?\\s*\\}",
              message: 'Definisikan function Button() yang mengembalikan <button className="btn">Klik Saya</button>',
            },
          ],
          solution:
            'function Button() {\n  return <button className="btn">Klik Saya</button>;\n}',
        },
        {
          kind: "step",
          id: "react-1-3",
          title: "Aturan JSX: Satu Root & Ekspresi {}",
          explanation:
            "JSX harus dibungkus dalam 1 elemen root (atau Fragment `<>...</>`). Properti class ditulis sebagai `className`, dan variabel JS disematkan menggunakan kurung kurawal `{}`.",
          example: {
            code:
              'function Card() {\n' +
              '  const produk = "Laptop";\n' +
              "  return (\n" +
              '    <div className="card">\n' +
              "      <h2>{produk}</h2>\n" +
              "    </div>\n" +
              "  );\n" +
              "}",
            output: "<h2>Laptop</h2> di dalam div.card",
            note: "Gunakan <>...</> (Fragment) jika tidak ingin menambah elemen div ekstra di HTML.",
          },
          instruction:
            'Buat komponen `function Title()` dengan `const judul = "BiLearn"`, lalu kembalikan `<h1>{judul}</h1>`.',
          starterCode: "// Tulis komponen Title di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+judul\\s*=\\s*['\"]BiLearn['\"]",
              message: 'Deklarasikan const judul = "BiLearn"',
            },
            {
              pattern: "<h1>\\s*\\{\\s*judul\\s*\\}\\s*</h1>",
              message: "Kembalikan <h1>{judul}</h1>",
            },
          ],
          solution:
            'function Title() {\n  const judul = "BiLearn";\n  return <h1>{judul}</h1>;\n}',
        },
        {
          kind: "step",
          id: "react-1-4",
          title: "Render Kondisional: &&, Ternary, Early Return",
          explanation:
            "Kita dapat menampilkan elemen UI secara kondisional menggunakan operator ternary (`kondisi ? <A/> : <B/>`) atau operator `&&`.",
          example: {
            code:
              "function Status({ isOnline }) {\n" +
              '  return <div>{isOnline ? "Online" : "Offline"}</div>;\n' +
              "}",
            output: "Menampilkan 'Online' jika isOnline true, sebaliknya 'Offline'.",
            note: "Untuk kondisi tunggal gunakan: isLogin && <UserMenu />.",
          },
          instruction:
            "Terapkan render kondisional menggunakan operator `&&`. Jika `isLoggedIn` bernilai true, kembalikan elemen `<button>Logout</button>`.",
          starterCode: "// Tulis return kondisional di sini\n",
          language: "js",
          tests: [
            {
              pattern: "\\{\\s*isLoggedIn\\s*&&\\s*<button>\\s*Logout\\s*</button>\\s*\\}",
              message: "Gunakan: {isLoggedIn && <button>Logout</button>}",
            },
          ],
          solution: "{isLoggedIn && <button>Logout</button>}",
        },
        {
          kind: "step",
          id: "react-1-5",
          title: "Render List dengan map & Key",
          explanation:
            "Daftar data dirender menggunakan `array.map()`. Setiap elemen list **WAJIB** diberi prop `key` unik untuk efisiensi perbandingan Virtual DOM.",
          example: {
            code:
              'const item = ["Apel", "Jeruk"];\n' +
              "return (\n" +
              "  <ul>\n" +
              "    {item.map((b, i) => (\n" +
              "      <li key={i}>{b}</li>\n" +
              "    ))}\n" +
              "  </ul>\n" +
              ");",
            output: "Daftar ul berisi li Apel dan Jeruk",
            note: "Prop key membantu React menentukan elemen mana yang berubah saat re-render.",
          },
          instruction:
            "Buat komponen `function Menu()` dengan `const hobi = ['Koding', 'Membaca']` lalu render list `<ul>` menggunakan `map()` dengan prop `key`.",
          starterCode: "// Tulis komponen Menu di sini\n",
          language: "js",
          tests: [
            {
              pattern: "hobi\\.map",
              message: "Gunakan hobi.map(...) untuk merender list",
            },
            {
              pattern: "key=",
              message: "Tambahkan prop key pada elemen <li>",
            },
          ],
          solution:
            'function Menu() {\n  const hobi = ["Koding", "Membaca"];\n  return (\n    <ul>\n      {hobi.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}',
        },
        {
          kind: "step",
          id: "react-1-6",
          title: "Setup Proyek dengan Vite",
          explanation:
            "Vite adalah build tool modern standar industri untuk membuat aplikasi React baru secara cepat (`npm create vite@latest`).",
          example: {
            code: "npm create vite@latest my-app -- --template react-ts",
            output: "added 312 packages in 18s\n\n  VITE v6.0.5  ready in 421 ms\n  \u279c  Local:   http://localhost:5173/",
            note: "Vite menggantikan Create React App (CRA) yang sudah usang.",
          },
          instruction:
            "Tulis perintah npx/npm untuk menginisialisasi proyek Vite baru dengan nama `my-app`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "npm\\s+create\\s+vite(@latest)?\\s+my-app",
              message: "Gunakan: npm create vite@latest my-app",
            },
          ],
          solution: "npm create vite@latest my-app",
        },
        {
          kind: "step",
          id: "react-1-7",
          title: "Struktur File Komponen yang Rapi",
          explanation:
            "Komponen React sebaiknya disimpan di folder `src/components/` dengan 1 file per komponen (misal `src/components/Button.tsx`).",
          example: {
            code: "// src/components/Button.tsx\nexport default function Button() { return <button>OK</button>; }",
            output: "Struktur file terisolasi dan mudah di-import di tempat lain.",
            note: "Gunakan export default atau named export secara konsisten di tim.",
          },
          instruction:
            "Lakukan export default pada sebuah fungsi komponen bernama `Card` yang mengembalikan elemen `<div>Card</div>`.",
          starterCode: "// Tulis export default di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "export\\s+default\\s+function\\s+Card\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<div>\\s*Card\\s*</div>\\s*;?\\s*\\}",
              message: "Tuliskan: export default function Card() { return <div>Card</div>; }",
            },
          ],
          solution: "export default function Card() { return <div>Card</div>; }",
        },
        {
          kind: "quiz",
          id: "react-1-kuis",
          title: "Kuis: Komponen & JSX",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa prop `key` wajib dicantumkan saat melakukan render list di React?",
              choices: [
                "Agar CSS bisa mengaplikasikan gaya dengan benar",
                "Membantu React mengidentifikasi item mana yang diubah atau dihapus saat re-render demi performa Virtual DOM",
                "Agar item bisa diklik",
                "Diwajibkan oleh browser",
              ],
              answerIndex: 1,
              explanation: "Prop `key` memberikan identitas unik pada elemen list agar Virtual DOM React tidak merender ulang seluruh list secara tidak efisien.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Sintaks apakah yang digunakan di dalam JSX untuk menyisipkan variabel atau ekspresi JavaScript?",
              choices: [
                "{{ }}",
                "[ ]",
                "{ }",
                "$( )",
              ],
              answerIndex: 2,
              explanation: "Kurung kurawal tunggal { } digunakan dalam JSX untuk mengevaluasi ekspresi JavaScript di dalamnya.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa syarat penamaan sebuah fungsi agar dikenali oleh React sebagai komponen?",
              choices: [
                "Harus diawali huruf kecil",
                "Harus menggunakan PascalCase (diawali huruf kapital)",
                "Harus berakhiran kata Component",
                "Tidak ada syarat penamaan",
              ],
              answerIndex: 1,
              explanation: "React membedakan elemen HTML biasa (seperti <div>) dan komponen kustom dengan memeriksa apakah nama tag diawali dengan huruf kapital.",
            },
          ],
        },
      ],
    },
    {
      slug: "props-komposisi",
      title: "Props & Komposisi",
      description:
        "Data mengalir ke bawah — dan cara menyusun komponen seperti LEGO.",
      topics: [
        "Props: mengoper data & mengetik props dengan TS",
        "children — komponen pembungkus",
        "Komposisi vs konfigurasi: banyak props kecil vs satu props objek",
        "Lifting state up (pengantar)",
        "Default props & destructuring pattern",
        "Memecah UI jadi pohon komponen (latihan dari mockup)",
      ],
      items: [
        {
          kind: "step",
          id: "react-2-1",
          title: "Props: Mengoper Data & Typing dengan TS",
          explanation:
            "Props adalah data masukan untuk komponen. Pola standar industri adalah langsung menggunakan destructuring dan interface TypeScript.",
          example: {
            code:
              "interface UserProps { name: string; }\n" +
              "function UserCard({ name }: UserProps) {\n" +
              "  return <h3>{name}</h3>;\n" +
              "}",
            output: "<h3>Budi</h3>",
            note: "Props bersifat Read-Only! Jangan pernah mengubah nilai props secara langsung.",
          },
          instruction:
            "Buat interface `BadgeProps { text: string }` dan komponen `function Badge({ text }: BadgeProps)` yang mengembalikan `<span>{text}</span>`.",
          starterCode: "// Tulis BadgeProps dan komponen Badge di sini\n",
          language: "text",
          tests: [
            {
              pattern: "interface\\s+BadgeProps\\s*\\{\\s*text\\s*:\\s*string\\s*;?\\s*\\}",
              message: "Definisikan interface BadgeProps { text: string; }",
            },
            {
              pattern: "function\\s+Badge\\s*\\(\\s*\\{\\s*text\\s*\\}\\s*:\\s*BadgeProps\\s*\\)",
              message: "Gunakan destructuring: function Badge({ text }: BadgeProps)",
            },
          ],
          solution:
            "interface BadgeProps {\n  text: string;\n}\n\nfunction Badge({ text }: BadgeProps) {\n  return <span>{text}</span>;\n}",
        },
        {
          kind: "step",
          id: "react-2-2",
          title: "children — Komponen Pembungkus",
          explanation:
            "Prop `children` adalah fitur bawaan React yang memungkinkan komponen membungkus elemen JSX lain di dalamnya.",
          example: {
            code:
              "interface ModalProps { children: React.ReactNode; }\n" +
              "function Modal({ children }: ModalProps) {\n" +
              '  return <div className="modal">{children}</div>;\n' +
              "}",
            output: "Elemen di dalam <Modal><p>Isi Modal</p></Modal> akan dirender pada prop children.",
            note: "Tipe React.ReactNode digunakan untuk mengetik prop children di TypeScript.",
          },
          instruction:
            "Buat `interface CardProps { children: React.ReactNode }` dan komponen `function Card({ children }: CardProps)` yang mengembalikan `<div>{children}</div>`.",
          starterCode: "// Tulis CardProps dan komponen Card di sini\n",
          language: "text",
          tests: [
            {
              pattern: "interface\\s+CardProps\\s*\\{\\s*children\\s*:\\s*React\\.ReactNode\\s*;?\\s*\\}",
              message: "Definisikan CardProps { children: React.ReactNode; }",
            },
          ],
          solution:
            "interface CardProps {\n  children: React.ReactNode;\n}\n\nfunction Card({ children }: CardProps) {\n  return <div>{children}</div>;\n}",
        },
        {
          kind: "step",
          id: "react-2-3",
          title: "Komposisi vs Konfigurasi",
          explanation:
            "Komposisi menyusun UI dari komponen-komponen kecil (seperti LEGO) daripada membuat 1 komponen raksasa dengan puluhan props konfigurasi.",
          example: {
            code: "<Card><CardHeader /><CardBody /></Card>",
            output: "Struktur fleksibel dan mudah dipelihara.",
            note: "Pola komposisi meminimalkan prop drilling.",
          },
          instruction:
            "Buatlah elemen JSX di mana komponen `<Card>` membungkus komponen `<Header />` di dalamnya.",
          starterCode: "// Tulis elemen JSX di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "<Card>\\s*<Header\\s*/>\\s*</Card>",
              message: "Tuliskan: <Card><Header /></Card>",
            },
          ],
          solution: "<Card><Header /></Card>",
        },
        {
          kind: "step",
          id: "react-2-4",
          title: "Lifting State Up",
          explanation:
            "Jika dua komponen anak perlu berbagi state yang sama, pindahkan (lift) state tersebut ke komponen induk terdekat yang membawahi keduanya.",
          example: {
            code: "// State dikelola di ParentComponent, dioper ke ChildA dan ChildB via props",
            output: "Data tersinkronisasi antar komponen anak.",
            note: "Single source of truth berada pada komponen induk.",
          },
          instruction:
            "Buat komponen `ParentComponent` yang mengembalikan elemen `<div>` berisi `<ChildA />` dan `<ChildB />`.",
          starterCode: "// Tulis komponen ParentComponent di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+ParentComponent\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<div>\\s*<ChildA\\s*/>\\s*<ChildB\\s*/>\\s*</div>\\s*;?\\s*\\}",
              message: "Definisikan ParentComponent yang merender <div><ChildA /><ChildB /></div>",
            },
          ],
          solution: "function ParentComponent() {\n  return <div><ChildA /><ChildB /></div>;\n}",
        },
        {
          kind: "step",
          id: "react-2-5",
          title: "Default Props & Destructuring Pattern",
          explanation:
            "Memberikan nilai bawaan (default value) pada props dapat dilakukan langsung di dalam sintaks destructuring parameter.",
          example: {
            code:
              'function Button({ color = "blue", text }: ButtonProps) {\n' +
              '  return <button className={color}>{text}</button>;\n' +
              "}",
            output: "Menggunakan warna 'blue' jika prop color tidak diberikan.",
            note: "Pola default parameter JS ini menggantikan defaultProps lama.",
          },
          instruction:
            'Tulis parameter fungsi komponen `function Avatar({ size = 40 }: AvatarProps)`.',
          starterCode: "// Tulis parameter komponen Avatar di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+Avatar\\s*\\(\\s*\\{\\s*size\\s*=\\s*40\\s*\\}\\s*:\\s*AvatarProps\\s*\\)",
              message: "Gunakan: function Avatar({ size = 40 }: AvatarProps)",
            },
          ],
          solution: "function Avatar({ size = 40 }: AvatarProps) {\n  return <div>Avatar</div>;\n}",
        },
        {
          kind: "step",
          id: "react-2-6",
          title: "Memecah UI Jadi Pohon Komponen",
          explanation:
            "Saat melihat desain UI (mockup), pecahlah menjadi bagian-bagian kecil: Navbar, Sidebar, ContentArea, Footer.",
          example: {
            code: "function App() { return <main><Navbar /><Content /></main>; }",
            output: "Hierarki komponen bersih dan modular.",
            note: "Setiap komponen idealnya memiliki 1 tanggung jawab tunggal (Single Responsibility).",
          },
          instruction:
            "Buat komponen `function App()` yang mengembalikan `<main><Navbar /></main>`.",
          starterCode: "// Tulis komponen App di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+App\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<main>\\s*<Navbar\\s*/>\\s*</main>\\s*;?\\s*\\}",
              message: "Definisikan: function App() { return <main><Navbar /></main>; }",
            },
          ],
          solution: "function App() {\n  return <main><Navbar /></main>;\n}",
        },
        {
          kind: "quiz",
          id: "react-2-kuis",
          title: "Kuis: Props & Komposisi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apakah komponen anak (child) diperbolehkan mengubah nilai `props` yang diterimanya?",
              choices: [
                "Boleh kapan saja",
                "TIDAK BOLEH. Props bersifat Read-Only (Immutable). Data yang dapat berubah harus dikelola via State",
                "Boleh jika menggunakan TypeScript",
                "Boleh jika di dalam useEffect",
              ],
              answerIndex: 1,
              explanation: "Props bersifat murni dan read-only. Data yang berubah-ubah harus dikelola lewat State.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Prop spesial apakah yang digunakan di React untuk merender elemen yang disisipkan di antara tag pembuka dan penutup komponen?",
              choices: [
                "innerHtml",
                "content",
                "children",
                "elements",
              ],
              answerIndex: 2,
              explanation: "Prop `children` secara otomatis menangkap segala sesuatu yang dilewatkan di antara tag pembuka dan penutup komponen.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Manakah konsep yang lebih disarankan saat membangun komponen UI yang kompleks di React?",
              choices: [
                "Membuat satu komponen besar dengan puluhan prop konfigurasi",
                "Menggunakan komposisi dengan merakit komponen-komponen kecil",
                "Menghindari pembuatan komponen dan menulis HTML secara manual",
                "Menyimpan semua data di variabel global",
              ],
              answerIndex: 1,
              explanation: "Komposisi (seperti menyusun blok LEGO) membuat komponen lebih fleksibel, mudah diuji, dan mengurangi prop drilling dibandingkan komponen raksasa.",
            },
          ],
        },
      ],
    },
    {
      slug: "state-event",
      title: "State & Event",
      description:
        "useState: satu-satunya cara React tahu harus menggambar ulang.",
      topics: [
        "useState: nilai, setter, dan re-render",
        "Event handler: onClick, onChange, onSubmit",
        "State = snapshot — kenapa setCount(count+1) dua kali tidak +2",
        "Updater function (prev => ...)",
        "State object & array: update secara immutable",
        "Kesalahan umum: mutasi langsung, state turunan yang tidak perlu",
      ],
      items: [
        {
          kind: "step",
          id: "react-3-1",
          title: "useState: Nilai, Setter, dan Re-render",
          explanation:
            "Di React, mengubah variabel biasa (`let counter = 0`) tidak akan memperbarui tampilan di layar — React tidak tahu variabel itu berubah. Kamu wajib memakai `useState`. Hook ini memberikan dua hal: wadah untuk menyimpan nilai (state), dan remot kontrolnya (fungsi setter). Kalau kamu memakai remot itu untuk mengganti nilai, React akan otomatis menggambar ulang (re-render) tampilanmu agar sesuai data terbaru.",
          example: {
            code:
              'import { useState } from "react";\n' +
              "const [count, setCount] = useState(0);\n" +
              "setCount(count + 1);",
            output: "Count bertambah dan React merender ulang komponen secara otomatis.",
            note: "Selalu panggil useState di tingkat teratas komponen.",
          },
          instruction:
            "Deklarasikan variabel state bernama `count` dengan fungsi setternya `setCount`, dan beri nilai awal `0`.",
          starterCode: "// Tulis useState di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s*\\[\\s*count\\s*,\\s*setCount\\s*\\]\\s*=\\s*useState\\(\\s*0\\s*\\)",
              message: "Gunakan: const [count, setCount] = useState(0);",
            },
          ],
          solution: "const [count, setCount] = useState(0);",
        },
        {
          kind: "step",
          id: "react-3-2",
          title: "Event Handler: onClick, onChange, onSubmit",
          explanation:
            "Event handler di React menggunakan camelCase (seperti `onClick`, `onSubmit`). Jalankan `e.preventDefault()` pada `onSubmit` untuk mencegah reload halaman.",
          example: {
            code:
              "function Form() {\n" +
              "  const handleSubmit = (e) => {\n" +
              "    e.preventDefault();\n" +
              "  };\n" +
              "  return <form onSubmit={handleSubmit}>...</form>;\n" +
              "}",
            output: "Form disubmit secara AJAX tanpa memuat ulang browser.",
            note: "e.preventDefault() wajib dipanggil saat submit form di React.",
          },
          instruction:
            "Di dalam fungsi handler form, panggil metode pada objek event `e` untuk mencegah halaman termuat ulang secara default.",
          starterCode: "// Tulis kode pemanggilan fungsi di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "e\\.preventDefault\\(\\)",
              message: "Tuliskan: e.preventDefault();",
            },
          ],
          solution: "e.preventDefault();",
        },
        {
          kind: "step",
          id: "react-3-3",
          title: "State = Snapshot",
          explanation:
            "Nilai state di dalam satu kali siklus render tidak berubah (snapshot). Memanggil `setCount(count + 1)` dua kali berturut-turut di handler yang sama tidak akan menambah 2.",
          example: {
            code: "// Dua pemanggilan ini membaca nilai 'count' snapshot yang SAMA\nsetCount(count + 1);\nsetCount(count + 1);",
            output: "Count hanya bertambah 1, bukan 2.",
            note: "Gunakan updater function jika ingin menambah berturut-turut.",
          },
          instruction:
            "Buat fungsi `IncrementTwice` yang memanggil `setCount(count + 1)` sebanyak dua kali berturut-turut untuk melihat efek snapshot.",
          starterCode: "// Tulis fungsi di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+IncrementTwice\\s*\\(\\s*\\)\\s*\\{\\s*setCount\\(\\s*count\\s*\\+\\s*1\\s*\\)\\s*;?\\s*setCount\\(\\s*count\\s*\\+\\s*1\\s*\\)\\s*;?\\s*\\}",
              message: "Buat fungsi IncrementTwice yang berisi setCount(count + 1) dua kali",
            },
          ],
          solution: "function IncrementTwice() {\n  setCount(count + 1);\n  setCount(count + 1);\n}",
        },
        {
          kind: "step",
          id: "react-3-4",
          title: "Updater Function (prev => ...)",
          explanation:
            "Updater function `setCount(prev => prev + 1)` menerima nilai state terbaru sehingga aman dipakai berulang kali.",
          example: {
            code: "setCount(prev => prev + 1);",
            output: "State diupdate secara reliabel berdasarkan nilai paling akhir.",
            note: "Gunakan pola ini jika state baru dihitung dari state lama.",
          },
          instruction:
            "Panggil `setScore` dengan menggunakan updater function untuk menambah state sebelumnya (`prev`) dengan `10`.",
          starterCode: "// Tulis setScore di sini\n",
          language: "js",
          tests: [
            {
              pattern: "setScore\\(\\s*prev\\s*=>\\s*prev\\s*\\+\\s*10\\s*\\)",
              message: "Gunakan updater function: setScore(prev => prev + 10);",
            },
          ],
          solution: "setScore(prev => prev + 10);",
        },
        {
          kind: "step",
          id: "react-3-5",
          title: "Update State Object & Array Secara Immutable",
          explanation:
            "Jangan pernah memutasi objek/array state secara langsung (`items.push()`). Buatlah salinan baru dengan spread operator `[...items, newItem]`.",
          example: {
            code: "const [items, setItems] = useState(['A', 'B']);\nsetItems([...items, 'C']);",
            output: "['A', 'B', 'C'] dirender sebagai array baru.",
            note: "Spread operator [...] membuat array baru sehingga React mendeteksi perubahan state.",
          },
          instruction:
            "Perbarui array `items` dengan menambahkan elemen string 'Baru' ke akhir array tanpa memutasi array asli.",
          starterCode: "// Tulis setItems di sini\n",
          language: "js",
          tests: [
            {
              pattern: "setItems\\(\\s*\\[\\s*\\.\\.\\.items\\s*,\\s*['\"]Baru['\"]\\s*\\]\\s*\\)",
              message: "Gunakan: setItems([...items, 'Baru']);",
            },
          ],
          solution: "setItems([...items, 'Baru']);",
        },
        {
          kind: "step",
          id: "react-3-6",
          title: "Kesalahan Umum: Mutasi Langsung & State Redundan",
          explanation:
            "Jangan buat state baru jika nilainya bisa dihitung langsung dari state yang sudah ada (misalnya `fullName = firstName + ' ' + lastName`).",
          example: {
            code: "// ❌ Jangan buat state fullName tambahan!\nconst fullName = firstName + ' ' + lastName; // ✅ Cukup hitung di render",
            output: "Kode lebih bersih dan tidak berisiko out-of-sync.",
            note: "Hindari duplikasi data state yang bisa dikalkulasi saat render.",
          },
          instruction:
            "Hitung string `fullName` dari `firstName` dan `lastName` secara langsung saat komponen di-render.",
          starterCode: "// Tulis variabel fullName di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+fullName\\s*=\\s*firstName\\s*\\+\\s*['\"]\\s*['\"]\\s*\\+\\s*lastName",
              message: "Gunakan: const fullName = firstName + ' ' + lastName;",
            },
          ],
          solution: "const fullName = firstName + ' ' + lastName;",
        },
        {
          kind: "quiz",
          id: "react-3-kuis",
          title: "Kuis: State & Event",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa kita tidak boleh memutasi array state secara langsung dengan `items.push('X')`?",
              choices: [
                "Karena push tidak menambahkan data",
                "Karena referensi array tidak berubah, sehingga React menganggap data tidak berubah dan TIDAK melakukan re-render UI",
                "Karena push dilarang di JavaScript",
                "Karena array akan otomatis terhapus",
              ],
              answerIndex: 1,
              explanation: "React menggunakan perbandingan referensi objek/array. Mutasi langsung tidak mengubah referensi sehingga re-render tidak terpicu.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa tujuan utama menggunakan updater function di dalam setState, misal setCount(prev => prev + 1)?",
              choices: [
                "Agar kode terlihat lebih profesional",
                "Memastikan kita selalu menggunakan nilai state paling terbaru, terutama jika terjadi update state berturut-turut",
                "Agar React tidak error saat re-render",
                "Updater function mempercepat proses perenderan React hingga 10x lipat",
              ],
              answerIndex: 1,
              explanation: "Updater function sangat berguna untuk menjamin kita tidak menggunakan nilai snapshot lama dari state saat state di-update berulang kali dalam satu siklus.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara terbaik menggabungkan firstName dan lastName di dalam komponen React?",
              choices: [
                "Menyimpannya di state `fullName` secara terpisah",
                "Menghitungnya langsung di body komponen, contoh `const fullName = firstName + ' ' + lastName;`",
                "Menggunakan `document.getElementById`",
                "Menyimpannya di backend server",
              ],
              answerIndex: 1,
              explanation: "Data turunan yang bisa dihitung dari props atau state yang sudah ada sebaiknya tidak dimasukkan ke dalam state baru untuk menghindari redundant data (sumber kebenaran ganda).",
            },
          ],
        },
      ],
    },
    {
      slug: "form-list",
      title: "Form & List Interaktif",
      description:
        "Pola CRUD di memori: dasar dari 80% UI aplikasi bisnis.",
      topics: [
        "Controlled input: value + onChange",
        "Form multi-field dengan satu state object",
        "Validasi sederhana & pesan error",
        "Menambah, mengedit, menghapus item list",
        "Filter & search di client",
        "Checkbox, radio, select dalam React",
      ],
      items: [
        {
          kind: "step",
          id: "react-4-1",
          title: "Controlled Input: value + onChange",
          explanation:
            "Di HTML biasa, elemen input menyimpan datanya sendiri secara diam-diam. Di React, kita 'mengikat' input tersebut ke dalam state agar React memegang kendali penuh — inilah yang disebut Controlled Input. Kenapa harus begitu? Agar data form selalu tersinkronisasi di satu tempat (Single Source of Truth) dan mudah divalidasi setiap kali kamu mengetik. Dengan begitu, kamu bisa langsung menampilkan pesan error 'password terlalu pendek' secara real-time.",
          example: {
            code: '<input value={name} onChange={(e) => setName(e.target.value)} />',
            output: "Input terikat sempurna dengan state nama secara real-time.",
            note: "e.target.value mengambil nilai string terbaru dari elemen input.",
          },
          instruction:
            "Buatlah sebuah elemen `<input>` teks yang dikendalikan (controlled). Kaitkan nilainya dengan state `text` dan perbarui nilainya pada event `onChange`.",
          starterCode: "// Tulis input di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "<input\\s+value=\\{\\s*text\\s*\\}\\s+onChange=\\{\\s*\\(?e\\)?\\s*=>\\s*setText\\(\\s*e\\.target\\.value\\s*\\)\\s*\\}\\s*/?>",
              message: "Gunakan: <input value={text} onChange={(e) => setText(e.target.value)} />",
            },
          ],
          solution: '<input value={text} onChange={(e) => setText(e.target.value)} />',
        },
        {
          kind: "step",
          id: "react-4-2",
          title: "Form Multi-field dengan 1 State Object",
          explanation:
            "Menangani banyak input form dapat dilakukan dengan 1 state objek menggunakan properti `[e.target.name]: e.target.value`.",
          example: {
            code:
              "const handleChange = (e) => {\n" +
              "  setForm({ ...form, [e.target.name]: e.target.value });\n" +
              "};",
            output: "Konsol mencatat state objek form diperbarui, misal: { username: 'budi', age: 20 }",
            note: "Pastikan setiap elemen input memiliki atribut 'name' yang cocok dengan key di state form.",
          },
          instruction:
            "Di dalam fungsi handler input, perbarui state `form` dengan mempertahankan nilai-nilai yang ada sebelumnya, lalu perbarui hanya field yang memicu event secara dinamis menggunakan sintaks array (computed property).",
          starterCode: "// Tulis setForm di sini\n",
          language: "js",
          tests: [
            {
              pattern: "setForm\\(\\s*\\{\\s*\\.\\.\\.form\\s*,\\s*\\[\\s*e\\.target\\.name\\s*\\]\\s*:\\s*e\\.target\\.value\\s*\\}\\s*\\)",
              message: "Gunakan: setForm({ ...form, [e.target.name]: e.target.value });",
            },
          ],
          solution: "setForm({ ...form, [e.target.name]: e.target.value });",
        },
        {
          kind: "step",
          id: "react-4-3",
          title: "Validasi Sederhana & Pesan Error",
          explanation:
            "Validasi form dilakukan sebelum submit. Jika gagal, simpan pesan ke state error dan tampilkan di UI secara kondisional.",
          example: {
            code: "if (!email) setError('Email wajib diisi!');",
            output: "Pesan error muncul jika input kosong.",
            note: "Beri indikasi visual seperti border merah pada input yang bermasalah.",
          },
          instruction:
            "Terapkan logika validasi yang memeriksa apakah nilai variabel `text` bernilai truthy. Jika tidak (falsy), atur error state dengan memanggil `setError` dan berikan argumen 'Wajib diisi!'.",
          starterCode: "// Tulis validasi di sini\n",
          language: "js",
          tests: [
            {
              pattern: "if\\s*\\(\\s*!text\\s*\\)\\s*setError\\(\\s*['\"]Wajib diisi!['\"]\\s*\\)",
              message: "Gunakan: if (!text) setError('Wajib diisi!');",
            },
          ],
          solution: "if (!text) setError('Wajib diisi!');",
        },
        {
          kind: "step",
          id: "react-4-4",
          title: "Menambah & Menghapus Item List (CRUD Client)",
          explanation:
            "Menghapus item dari array state dilakukan dengan `filter()`: `items.filter(item => item.id !== targetId)`.",
          example: {
            code: "const deleteItem = (id) => {\n  setItems(items.filter(item => item.id !== id));\n};",
            output: "Item yang dipilih hilang dari daftar secara instan.",
            note: "filter() mengembalikan array baru tanpa mengubah array asli (immutable).",
          },
          instruction:
            "Perbarui array `items` dengan menghapus elemen yang memiliki `item.id` yang sama dengan argumen `id` menggunakan metode `.filter()`.",
          starterCode: "// Tulis setItems filter di sini\n",
          language: "js",
          tests: [
            {
              pattern: "setItems\\(\\s*items\\.filter\\(\\s*item\\s*=>\\s*item\\.id\\s*!==\\s*id\\s*\\)\\s*\\)",
              message: "Gunakan: setItems(items.filter(item => item.id !== id));",
            },
          ],
          solution: "setItems(items.filter(item => item.id !== id));",
        },
        {
          kind: "step",
          id: "react-4-5",
          title: "Filter & Search di Client",
          explanation:
            "Pencarian real-time dilakukan dengan menyaring list data menggunakan `.filter()` yang mencocokkan teks query pencarian.",
          example: {
            code: "const filtered = items.filter(item => item.name.includes(query));",
            output: "Daftar otomatis menyusut sesuai kata kunci pencarian.",
            note: "Gunakan toLowerCase() agar pencarian tidak sensitif huruf besar/kecil.",
          },
          instruction:
            "Deklarasikan variabel `filtered` yang menyaring array `items`, sehingga hanya menyisakan item yang nama (`name`)-nya mengandung teks dalam `query`.",
          starterCode: "// Tulis pencarian filtered di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+filtered\\s*=\\s*items\\.filter\\(\\s*i\\s*=>\\s*i\\.name\\.includes\\(\\s*query\\s*\\)\\s*\\)",
              message: "Gunakan: const filtered = items.filter(i => i.name.includes(query));",
            },
          ],
          solution: "const filtered = items.filter(i => i.name.includes(query));",
        },
        {
          kind: "step",
          id: "react-4-6",
          title: "Checkbox, Radio, dan Select dalam React",
          explanation:
            "Untuk checkbox gunakan `checked={isAgreed}` dan `onChange={(e) => setIsAgreed(e.target.checked)}`.",
          example: {
            code: '<input type="checkbox" checked={isAgree} onChange={(e) => setIsAgree(e.target.checked)} />',
            output: "Status centang checkbox terikat dengan boolean state.",
            note: "Perhatikan penggunaan e.target.checked (bukan e.target.value) untuk checkbox.",
          },
          instruction:
            "Buatlah sebuah input bertipe checkbox yang dikendalikan oleh state. Gunakan properti `agree` untuk mengikat nilainya, dan perbarui melalui fungsi `setAgree` saat event perubahannya (change) terjadi.",
          starterCode: "// Tulis input checkbox di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "<input\\s+type=[\"']checkbox[\"']\\s+checked=\\{\\s*agree\\s*\\}\\s+onChange=\\{\\s*\\(?e\\)?\\s*=>\\s*setAgree\\(\\s*e\\.target\\.checked\\s*\\)\\s*\\}\\s*/?>",
              message: "Gunakan: <input type=\"checkbox\" checked={agree} onChange={(e) => setAgree(e.target.checked)} />",
            },
          ],
          solution: '<input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />',
        },
        {
          kind: "quiz",
          id: "react-4-kuis",
          title: "Kuis: Form & List",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Properti event apa yang digunakan untuk membaca status centang pada input checkbox?",
              choices: ["e.target.value", "e.target.checked", "e.target.status", "e.target.selected"],
              answerIndex: 1,
              explanation: "e.target.checked mengembalikan nilai boolean (true/false) dari status centang elemen checkbox.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Pada input HTML yang bertipe teks, bagaimana cara yang benar untuk membaca nilai terbarunya di dalam React onChange handler?",
              choices: [
                "e.target.text",
                "e.target.value",
                "e.target.current",
                "e.value",
              ],
              answerIndex: 1,
              explanation: "Properti e.target.value menampung string masukan (input string) terbaru dari field teks, textarea, maupun elemen select.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Saat menghapus sebuah item list yang disimpan dalam state array di React, metode JS native apa yang paling disarankan agar tidak memutasi array lama?",
              choices: [
                ".pop()",
                ".splice()",
                ".shift()",
                ".filter()",
              ],
              answerIndex: 3,
              explanation: "Metode .filter() mengembalikan array baru yang tidak berisi elemen yang dihapus, sehingga menjaga array state tetap immutable.",
            },
          ],
        },
      ],
    },
    {
      slug: "useeffect",
      title: "useEffect & Lifecycle",
      description:
        "Sinkronisasi dengan dunia luar — dan modul yang paling banyak salah paham.",
      topics: [
        "Kapan effect dibutuhkan (lebih jarang dari dugaanmu)",
        "Dependency array: [], [dep], tanpa array",
        "Cleanup function: subscription, timer, abort",
        "Fetch dalam effect + race condition & AbortController",
        "StrictMode double-render: kenapa dan untuk apa",
        "'You might not need an effect' — pola yang harusnya bukan effect",
      ],
      items: [
        {
          kind: "step",
          id: "react-5-1",
          title: "Kapan Effect Dibutuhkan?",
          explanation:
            "`useEffect` dipakai HANYA untuk sinkronisasi dengan sistem luar (seperti mengunduh data API, merubah document.title, atau timer).",
          example: {
            code: "useEffect(() => {\n  document.title = 'Halaman Utama';\n}, []);",
            output: "Judul tab browser diperbarui saat komponen selesai mount.",
            note: "Jangan gunakan effect jika data bisa dihitung langsung saat render.",
          },
          instruction:
            "Di dalam useEffect, ubah judul tab browser dengan memodifikasi `document.title` menjadi 'BiLearn'.",
          starterCode: "// Tulis baris document.title di sini\n",
          language: "js",
          tests: [
            {
              pattern: "document\\.title\\s*=\\s*['\"]BiLearn['\"]",
              message: "Tuliskan: document.title = 'BiLearn';",
            },
          ],
          solution: "document.title = 'BiLearn';",
        },
        {
          kind: "step",
          id: "react-5-2",
          title: "Dependency Array: [], [dep], Tanpa Array",
          explanation:
            "`[]` = jalan 1x saat mount. `[count]` = jalan saat count berubah. Tanpa array = jalan setiap kali re-render (bahaya!).",
          example: {
            code: "useEffect(() => {\n  console.log(count);\n}, [count]);",
            output: "Pesan konsol muncul setiap kali variabel count berubah.",
            note: "Selalu masukkan semua variabel yang dipakai di dalam effect ke dependency array.",
          },
          instruction:
            "Tulis `useEffect` yang mengamati variabel `id` di dependency array `[id]`.",
          starterCode: "// Tulis useEffect dengan dependency [id] di sini\n",
          language: "js",
          tests: [
            {
              pattern: "useEffect\\(\\s*\\(\\s*\\)\\s*=>\\s*\\{[\\s\\S]*\\}\\s*,\\s*\\[\\s*id\\s*\\]\\s*\\)",
              message: "Gunakan dependency array [id]",
            },
          ],
          solution: "useEffect(() => {\n  console.log(id);\n}, [id]);",
        },
        {
          kind: "step",
          id: "react-5-3",
          title: "Cleanup Function dalam useEffect",
          explanation:
            "Fungsi kembalian di dalam `useEffect` adalah Cleanup Function yang berjalan saat komponen unmount untuk membersihkan timer atau listener.",
          example: {
            code:
              "useEffect(() => {\n" +
              "  const timer = setInterval(() => {}, 1000);\n" +
              "  return () => clearInterval(timer); // Cleanup\n" +
              "}, []);",
            output: "Timer dihentikan sehingga tidak terjadi memory leak saat komponen ditutup.",
            note: "Selalu bersihkan listener/timer di return function.",
          },
          instruction:
            "Tuliskan fungsi kembalian (return) dari useEffect yang akan membersihkan `timer` dengan menggunakan fungsi bawaan `clearInterval`.",
          starterCode: "// Tulis cleanup function di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "return\\s*\\(\\s*\\)\\s*=>\\s*clearInterval\\(\\s*timer\\s*\\)",
              message: "Gunakan: return () => clearInterval(timer);",
            },
          ],
          solution: "return () => clearInterval(timer);",
        },
        {
          kind: "step",
          id: "react-5-4",
          title: "Fetch & AbortController",
          explanation:
            "Gunakan `AbortController` untuk membatalkan request network HTTP fetch jika komponen unmount sebelum respon tiba.",
          example: {
            code:
              "useEffect(() => {\n" +
              "  const controller = new AbortController();\n" +
              "  fetch(url, { signal: controller.signal });\n" +
              "  return () => controller.abort();\n" +
              "}, [url]);",
            output: "Mencegah race condition dan pencemaran state dari request usang.",
            note: "AbortController adalah standar pencegahan race condition di React.",
          },
          instruction:
            "Untuk mencegah request diteruskan saat komponen sudah di-unmount, panggil metode `abort()` pada objek `controller` di dalam fungsi cleanup.",
          starterCode: "// Tulis kode di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "controller\\.abort\\(\\)",
              message: "Tuliskan: controller.abort();",
            },
          ],
          solution: "controller.abort();",
        },
        {
          kind: "step",
          id: "react-5-5",
          title: "StrictMode Double-Render",
          explanation:
            "Di mode pembangunan (development), React `StrictMode` sengaja menjalankan Effect dua kali (mount ➔ unmount ➔ mount) untuk mendeteksi bug cleanup.",
          example: {
            code: "// Console log di useEffect muncul 2x di dev mode — ini normal!",
            output: "Konsol menampilkan log yang sama 2 kali saat komponen dimuat (hanya pada StrictMode dev mode).",
            note: "Double render ini tidak akan terjadi pada build production.",
          },
          instruction:
            "Buat sebuah variabel bernama `devMode` dan isi dengan string 'strict', ini mensimulasikan mode development di React.",
          starterCode: "// Tulis variabel devMode di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+devMode\\s*=\\s*['\"]strict['\"]",
              message: "Buat variabel const devMode = 'strict';",
            },
          ],
          solution: "const devMode = 'strict';",
        },
        {
          kind: "step",
          id: "react-5-6",
          title: "'You Might Not Need an Effect'",
          explanation:
            "Jika data dapat dikalkulasi dari props/state yang ada saat render, HINDARI menggunakan `useEffect` + `setState` tambahan.",
          example: {
            code: "// ❌ BUKAN EFFECT:\n// useEffect(() => setFullName(first + last), [first, last]);\n\n// ✅ CUKUP:\nconst fullName = first + ' ' + last;",
            output: "Menghindari re-render ekstra yang memperlambat aplikasi.",
            note: "Transformasi data untuk render sebaiknya langsung dihitung di body komponen.",
          },
          instruction:
            "Hitung variabel boolean bernama `isAdult` langsung dari properti/state `age` (yang dianggap bernilai angka). Variabel ini bernilai true jika age 18 ke atas.",
          starterCode: "// Tulis variabel isAdult di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+isAdult\\s*=\\s*age\\s*>=\\s*18",
              message: "Gunakan: const isAdult = age >= 18;",
            },
          ],
          solution: "const isAdult = age >= 18;",
        },
        {
          kind: "quiz",
          id: "react-5-kuis",
          title: "Kuis: useEffect",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Kapan Cleanup Function pada `useEffect` akan dipanggil oleh React?",
              choices: [
                "Sebelum komponen pertama kali mount",
                "Sebelum komponen unmount (ditutup) atau sebelum effect dijalankan kembali pada re-render berikutnya",
                "Saat halaman di-refresh",
                "Saat user mengklik tombol",
              ],
              answerIndex: 1,
              explanation: "Cleanup function berjalan untuk membersihkan efek samping sebelum komponen dilepas atau saat dependency berubah.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Jika Anda hanya ingin menjalankan `useEffect` HANYA SATU KALI saat komponen pertama kali di-mount, apakah yang harus dilewatkan sebagai dependency array?",
              choices: [
                "Tanpa array (dihilangkan)",
                "Array kosong []",
                "[mount]",
                "[all]",
              ],
              answerIndex: 1,
              explanation: "Array kosong [] memberitahu React bahwa effect ini tidak bergantung pada state atau props apapun, sehingga tidak perlu dipanggil ulang.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa React StrictMode dengan sengaja menjalankan useEffect dua kali pada environment development?",
              choices: [
                "Karena ada bug di source code React",
                "Agar proses render dua kali lipat lebih cepat",
                "Untuk mendeteksi jika pengembang melupakan cleanup function yang menimbulkan memory leak",
                "Untuk memaksa browser membersihkan cache",
              ],
              answerIndex: 2,
              explanation: "Dengan me-mount, lalu unmount, lalu mount lagi, React StrictMode segera mengungkap jika ada efek samping (seperti timer atau listener) yang tidak dibersihkan dengan benar.",
            },
          ],
        },
      ],
    },
    {
      slug: "custom-hooks",
      title: "Custom Hooks",
      description:
        "Mengekstrak logika agar bisa dipakai ulang — tanda developer React yang matang.",
      topics: [
        "Aturan hooks & kenapa ada",
        "Membuat useLocalStorage, useDebounce, useFetch",
        "useRef: nilai persist tanpa render & akses DOM",
        "useMemo & useCallback — dan kapan itu optimasi prematur",
        "Membaca hooks library orang lain",
      ],
      items: [
        {
          kind: "step",
          id: "react-6-1",
          title: "Aturan Hooks (Rules of Hooks)",
          explanation:
            "Aturan Hooks: 1. Panggil Hooks HANYA di tingkat teratas komponen React (jangan di dalam loop/if). 2. Panggil Hooks HANYA dari Komponen atau Custom Hook.",
          example: {
            code: "// ❌ Salah: if (condition) useState();\n// ✅ Benar: useState di top-level",
            output: "Menjamin urutan pemanggilan hooks konsisten di setiap render.",
            note: "React mengandalkan urutan pemanggilan hooks untuk mengasosiasikan state.",
          },
          instruction:
            "Buatlah sebuah komponen `Header` yang mendeklarasikan `const [theme] = useState('dark');` di tingkat teratas komponen, mematuhi Aturan Hooks.",
          starterCode: "// Tulis komponen Header di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+Header\\s*\\(\\s*\\)\\s*\\{\\s*const\\s*\\[\\s*theme\\s*\\]\\s*=\\s*useState\\(\\s*['\"]dark['\"]\\s*\\)\\s*;?[\\s\\S]*\\}",
              message: "Deklarasikan useState di tingkat teratas komponen Header",
            },
          ],
          solution: "function Header() {\n  const [theme] = useState('dark');\n  return <div>Header</div>;\n}",
        },
        {
          kind: "step",
          id: "react-6-2",
          title: "Membuat Custom Hook useFetch",
          explanation:
            "Custom Hook bertugas memisahkan dan mereset ulang logika async/state agar bisa dipakai oleh banyak komponen.",
          example: {
            code:
              "function useFetch(url) {\n" +
              "  const [data, setData] = useState(null);\n" +
              "  useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]);\n" +
              "  return data;\n" +
              "}",
            output: "Mengembalikan data ber-tipe yang siap dikonsumsi komponen mana saja.",
            note: "Custom Hook harus selalu diawali kata 'use'.",
          },
          instruction:
            "Definisikan deklarasi fungsi Custom Hook `function useFetch(url)`.",
          starterCode: "// Tulis fungsi useFetch di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+useFetch\\s*\\(\\s*url\\s*\\)",
              message: "Definisikan: function useFetch(url)",
            },
          ],
          solution: "function useFetch(url) {\n  // Logika fetch\n}",
        },
        {
          kind: "step",
          id: "react-6-3",
          title: "useRef: Nilai Persist Tanpa Render & Akses DOM",
          explanation:
            "`useRef` menyimpan nilai yang bertahan antar render TANPA memicu re-render saat nilainya berubah, atau digunakan untuk mengakses elemen DOM secara langsung.",
          example: {
            code:
              'const inputRef = useRef(null);\n' +
              'const focusInput = () => inputRef.current.focus();\n' +
              'return <input ref={inputRef} />;',
            output: "Elemen input mendapatkan fokus saat tombol diklik.",
            note: "Ubah inputRef.current tidak akan memicu re-render komponen.",
          },
          instruction:
            "Deklarasikan variabel `inputRef` dan gunakan hook yang tepat untuk menyimpannya dengan nilai awal `null`.",
          starterCode: "// Tulis useRef di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+inputRef\\s*=\\s*useRef\\(\\s*null\\s*\\)",
              message: "Gunakan: const inputRef = useRef(null);",
            },
          ],
          solution: "const inputRef = useRef(null);",
        },
        {
          kind: "step",
          id: "react-6-4",
          title: "useMemo & useCallback",
          explanation:
            "`useMemo` meng-cache hasil perhitungan mahal, sedangkan `useCallback` meng-cache referensi fungsi antar render.",
          example: {
            code: "const total = useMemo(() => hitungMahal(items), [items]);",
            output: "hitungMahal hanya dijalankan ulang saat data items berubah.",
            note: "Jangan gunakan ini secara berlebihan (optimasi prematur) sebelum ada masalah performa nyata.",
          },
          instruction:
            "Gunakan `useMemo` untuk memanggil fungsi `hitung(data)` dan me-return hasilnya. Jadikan array berisi `data` sebagai dependensinya.",
          starterCode: "// Tulis useMemo di sini\n",
          language: "js",
          tests: [
            {
              pattern: "useMemo\\(\\s*\\(\\s*\\)\\s*=>\\s*hitung\\(\\s*data\\s*\\)\\s*,\\s*\\[\\s*data\\s*\\]\\s*\\)",
              message: "Gunakan: useMemo(() => hitung(data), [data]);",
            },
          ],
          solution: "useMemo(() => hitung(data), [data]);",
        },
        {
          kind: "step",
          id: "react-6-5",
          title: "Membaca Hooks Library Pihak Ketiga",
          explanation:
            "Library populer seperti `useForm` (React Hook Form) atau `useQuery` (TanStack Query) mengikuti pola Custom Hooks standar React.",
          example: {
            code: "const { data, isLoading } = useQuery(['users'], fetchUsers);",
            output: "Mengonsumsi state async server dari library pihak ketiga.",
            note: "Memahami prinsip Custom Hook membuat pembelajaran library baru menjadi mudah.",
          },
          instruction:
            "Panggil hook `useQuery()` dan lakukan destructuring pada objek yang dikembalikan untuk mengambil nilai `data` dan `isLoading`.",
          starterCode: "// Tulis destructuring useQuery di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+\\{\\s*data\\s*,\\s*isLoading\\s*\\}\\s*=\\s*useQuery\\(\\)",
              message: "Gunakan: const { data, isLoading } = useQuery();",
            },
          ],
          solution: "const { data, isLoading } = useQuery();",
        },
        {
          kind: "quiz",
          id: "react-6-kuis",
          title: "Kuis: Custom Hooks",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa perbedaan utama `useRef` dibanding `useState`?",
              choices: [
                "useRef hanya bisa digunakan di luar komponen",
                "Mengubah nilai `.current` pada useRef TIDAK memicu re-render UI komponen",
                "useState tidak bisa menyimpan objek",
                "useRef otomatis terhapus saat render",
              ],
              answerIndex: 1,
              explanation: "useRef menyimpan data mutable tanpa menyebabkan komponen melakukan re-render saat datanya diubah.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apakah nama yang valid untuk sebuah Custom Hook sesuai konvensi React?",
              choices: [
                "fetchData",
                "HookFetch",
                "useFetchData",
                "customFetch",
              ],
              answerIndex: 2,
              explanation: "Konvensi React mengharuskan nama Custom Hook diawali dengan kata 'use' (misalnya useFetchData) agar linter React dapat menerapkan Rules of Hooks padanya.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Manakah pernyataan yang BENAR mengenai penggunaan hooks?",
              choices: [
                "Hooks boleh dipanggil di dalam pernyataan if-else",
                "Hooks boleh dipanggil di dalam perulangan (looping)",
                "Hooks HANYA boleh dipanggil di tingkat paling atas dari komponen fungsi atau custom hook",
                "Hooks boleh dipanggil dari dalam fungsi kelas (class component)",
              ],
              answerIndex: 2,
              explanation: "Rules of Hooks secara tegas melarang memanggil hook di dalam kondisi bersyarat, perulangan, atau fungsi bersarang, untuk memastikan urutan eksekusi selalu sama.",
            },
          ],
        },
      ],
    },
    {
      slug: "context",
      title: "Context & State Global",
      description:
        "Berbagi data tanpa prop drilling — dengan takaran yang tepat.",
      topics: [
        "Prop drilling: masalah yang sebenarnya",
        "createContext, Provider, useContext",
        "Pola context + reducer (useReducer)",
        "Context untuk theme, auth, bahasa",
        "Perangkap performa context & cara membaginya",
        "Zustand: state global ringan yang dipakai industri",
      ],
      items: [
        {
          kind: "step",
          id: "react-7-1",
          title: "Prop Drilling: Masalah yang Sebenarnya",
          explanation:
            "Prop drilling terjadi saat props dioper melewati banyak komponen perantara yang sebenarnya tidak membutuhkan data tersebut.",
          example: {
            code: "// App -> Layout -> Sidebar -> UserProfile (Prop Drilling 4 level)",
            output: "Komposisi komponen menjadi tidak fleksibel dan rawan bug.",
            note: "React Context atau State Management hadir untuk memecahkan masalah ini.",
          },
          instruction:
            "Buatlah sebuah komponen kosong bernama `UserProfile` yang mendestrukturisasi properti `user` dari objek props yang diterimanya.",
          starterCode: "// Tulis komponen UserProfile di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+UserProfile\\s*\\(\\s*\\{\\s*user\\s*\\}\\s*\\)\\s*\\{",
              message: "Definisikan komponen UserProfile yang menerima prop 'user'",
            },
          ],
          solution: "function UserProfile({ user }) {\n  return <div>{user.name}</div>;\n}",
        },
        {
          kind: "step",
          id: "react-7-2",
          title: "createContext, Provider, useContext",
          explanation:
            "Buat Context dengan `createContext()`, bungkus pohon komponen dengan `<ThemeContext.Provider value={theme}>`, lalu konsumsi dengan `useContext(ThemeContext)`.",
          example: {
            code:
              'const ThemeContext = createContext("light");\n' +
              "function App() {\n" +
              '  return <ThemeContext.Provider value="dark"><Card /></ThemeContext.Provider>;\n' +
              "}",
            output: "Card dan seluruh keturunannya bisa mengakses nilai 'dark'.",
            note: "Provider menentukan nilai data global yang tersedia di cabang komponen tersebut.",
          },
          instruction:
            "Bungkus komponen `<Card />` dengan menggunakan `ThemeContext.Provider`. Berikan nilai properti `value` dengan string 'dark'.",
          starterCode: "// Tulis Provider di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "<ThemeContext\\.Provider\\s+value=[\"']dark[\"']>\\s*<Card\\s*/>\\s*</ThemeContext\\.Provider>",
              message: "Gunakan: <ThemeContext.Provider value=\"dark\"><Card /></ThemeContext.Provider>",
            },
          ],
          solution: '<ThemeContext.Provider value="dark"><Card /></ThemeContext.Provider>',
        },
        {
          kind: "step",
          id: "react-7-3",
          title: "Pola Context + useReducer",
          explanation:
            "Untuk state global kompleks dengan banyak aksi mutasi, kombinasikan Context dengan `useReducer(reducer, initialState)`.",
          example: {
            code: "const [state, dispatch] = useReducer(todoReducer, []);",
            output: "dispatch({ type: 'ADD_TODO', payload: 'Belajar' }) memperbarui state global secara terprediksi.",
            note: "Pola ini menyerupai cara kerja Redux tanpa perlu memasang library luar.",
          },
          instruction:
            "Panggil hook `useReducer` dengan memberikan argumen `reducer` dan status awal `initial`. Lakukan destructuring untuk mengambil `state` dan fungsi `dispatch`.",
          starterCode: "// Tulis useReducer di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s*\\[\\s*state\\s*,\\s*dispatch\\s*\\]\\s*=\\s*useReducer\\(\\s*reducer\\s*,\\s*initial\\s*\\)",
              message: "Gunakan: const [state, dispatch] = useReducer(reducer, initial);",
            },
          ],
          solution: "const [state, dispatch] = useReducer(reducer, initial);",
        },
        {
          kind: "step",
          id: "react-7-4",
          title: "Context untuk Theme, Auth, dan Bahasa",
          explanation:
            "Context paling sering digunakan untuk data global aplikasi yang jarang berubah: status login (Auth), mode gelap (Theme), dan preferensi Bahasa (i18n).",
          example: {
            code: "const { theme, toggleTheme } = useTheme();",
            output: "Akses dan manipulasi mode tema UI dari mana saja.",
            note: "Buat custom hook seperti useTheme() untuk mempermudah konsumsi ThemeContext.",
          },
          instruction:
            "Panggil custom hook `useAuth()` dan lakukan destructuring pada hasil objeknya untuk mendapatkan properti `user` serta fungsi `logout`.",
          starterCode: "// Tulis useAuth di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+\\{\\s*user\\s*,\\s*logout\\s*\\}\\s*=\\s*useAuth\\(\\)",
              message: "Gunakan: const { user, logout } = useAuth();",
            },
          ],
          solution: "const { user, logout } = useAuth();",
        },
        {
          kind: "step",
          id: "react-7-5",
          title: "Perangkap Performa Context",
          explanation:
            "Setiap kali `value` pada Context Provider berubah, SELURUH komponen konsumen akan di-render ulang. Pisahkan state yang sering berubah dari state yang jarang berubah.",
          example: {
            code: "// Pisahkan UserContext (jarang berubah) dan NotificationContext (sering berubah)",
            output: "Mencegah re-render yang tidak perlu pada seluruh pohon komponen.",
            note: "Memisah Provider adalah teknik optimasi utama pada React Context.",
          },
          instruction:
            "Buat sebuah struktur JSX di mana `AuthProvider` membungkus `ThemeProvider` untuk memisahkan konteks state (auth state dan theme state) agar pembaruan bisa dikelola secara terpisah.",
          starterCode: "// Tulis Provider di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "<AuthProvider>\\s*<ThemeProvider>",
              message: "Bungkus <ThemeProvider> di dalam <AuthProvider>",
            },
          ],
          solution: "<AuthProvider>\n  <ThemeProvider>\n    <App />\n  </ThemeProvider>\n</AuthProvider>",
        },
        {
          kind: "step",
          id: "react-7-6",
          title: "Zustand: State Global Ringan Industri",
          explanation:
            "**Zustand** adalah library state management modern yang sangat populer karena bebas boilerplate, performa tinggi (tanpa Provider), dan ramah TypeScript.",
          example: {
            code:
              'import { create } from "zustand";\n' +
              "const useStore = create((set) => ({\n" +
              "  bears: 0,\n" +
              "  increase: () => set((state) => ({ bears: state.bears + 1 })),\n" +
              "}));",
            output: "Akses dan ubah state global langsung dari hook useStore().",
            note: "Zustand banyak menggantikan Redux pada aplikasi React modern.",
          },
          instruction:
            "Gunakan fungsi `create` dari library Zustand untuk membuat sebuah store bernama `useStore`. State awalnya berisi nilai `count` sebesar 0.",
          starterCode: "// Tulis create Zustand di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+useStore\\s*=\\s*create\\(\\s*\\(?set\\)?\\s*=>\\s*\\(\\s*\\{\\s*count\\s*:\\s*0\\s*\\}\\s*\\)\\s*\\)",
              message: "Gunakan: const useStore = create((set) => ({ count: 0 }));",
            },
          ],
          solution: "const useStore = create((set) => ({ count: 0 }));",
        },
        {
          kind: "quiz",
          id: "react-7-kuis",
          title: "Kuis: Context & State Global",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa Zustand sering dipilih menggantikan React Context untuk state global kompleks?",
              choices: [
                "Zustand otomatis mengubah React menjadi Angular",
                "Zustand tidak membutuhkan Provider wrapper dan mencegah re-render yang tidak perlu dengan selector state",
                "Zustand hanya bisa dipakai di server",
                "Zustand menghapus file CSS",
              ],
              answerIndex: 1,
              explanation: "Zustand menggunakan selector granular sehingga komponen hanya re-render saat bagian state yang dipilih saja yang berubah.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Bagaimana cara membaca (mengonsumsi) nilai dari sebuah Context di dalam fungsi komponen fungsional modern React?",
              choices: [
                "Dengan menulis kelas ekstensi",
                "Menggunakan Context.Consumer dengan callback function",
                "Memanggil hook useContext(MyContext)",
                "Menjadikannya properti window.context",
              ],
              answerIndex: 2,
              explanation: "Hook useContext() adalah cara paling ringkas dan standar di komponen fungsional untuk membaca nilai dari suatu Provider.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa kelemahan performa terbesar jika Anda meletakkan semua state global aplikasi ke dalam satu Provider Context tunggal?",
              choices: [
                "Browser akan memblokir rendering",
                "Membutuhkan RAM yang sangat besar",
                "Tiap kali ada salah satu bagian state yang berubah (misal form input mengetik), maka SEMUA komponen di bawah Provider itu akan di-render ulang meskipun tidak perlu",
                "Kode menjadi tidak bisa dibaca",
              ],
              answerIndex: 2,
              explanation: "React Context Provider tidak memiliki kapabilitas selector secara bawaan; setiap kali prop 'value' berubah referensinya, semua konsumennya dipaksa me-render ulang. Itulah sebabnya context harus dipecah (split) berdasarkan kategori perubahannya.",
            },
          ],
        },
      ],
    },
    {
      slug: "data-fetching",
      title: "Data Fetching & Async UI",
      description:
        "Pola loading/error/empty yang benar — pembeda UI amatir dan profesional.",
      topics: [
        "Tiga state wajib: loading, error, data (plus empty)",
        "Pola fetch-on-render & masalahnya",
        "TanStack Query: cache, refetch, invalidation",
        "Mutasi data & optimistic update",
        "Pagination & infinite scroll",
        "Menangani auth token di request",
      ],
      items: [
        {
          kind: "step",
          id: "react-8-1",
          title: "Tiga State Wajib: Loading, Error, dan Data",
          explanation:
            "Setiap UI async harus mengelola 3 state utama agar tidak pernah menampilkan layar kosong atau crash saat jaringan bermasalah.",
          example: {
            code:
              "if (isLoading) return <p>Memuat data...</p>;\n" +
              "if (error) return <p>Gagal memuat!</p>;\n" +
              "return <div>{data.name}</div>;",
            output: "User mendapat kepastian respon dalam situasi apa pun.",
            note: "Selalu sediakan Fallback UI untuk state loading dan error.",
          },
          instruction:
            "Terapkan early return untuk menangani status loading. Jika `isLoading` bernilai true, kembalikan elemen `<p>Loading...</p>`.",
          starterCode: "// Tulis if isLoading di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "if\\s*\\(\\s*isLoading\\s*\\)\\s*return\\s*<p>\\s*Loading\\.\\.\\.\\s*</p>\\s*;?",
              message: "Gunakan: if (isLoading) return <p>Loading...</p>;",
            },
          ],
          solution: "if (isLoading) return <p>Loading...</p>;",
        },
        {
          kind: "step",
          id: "react-8-2",
          title: "Pola Fetch-on-Render & Masalahnya",
          explanation:
            "Melakukan fetch di `useEffect` secara bersarang di komponen anak menyebabkan **Waterfall Request** di mana request berjalan bertahap satu per satu.",
          example: {
            code: "// Parent fetch -> render -> Child fetch -> render (Waterfall Delay)",
            output: "Aplikasi terasa lambat karena komponen menunggu urutan request.",
            note: "Solusinya adalah mengunduh data secara paralel atau memanfaatkan Server Components.",
          },
          instruction:
            "Tuliskan sebuah array literal `[usersPromise, postsPromise]` lalu bungkus ke dalam pemanggilan `Promise.all()` agar kedua permintaan tersebut bisa berjalan secara paralel tanpa waterfall.",
          starterCode: "// Tulis Promise.all di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "Promise\\.all\\(\\s*\\[\\s*usersPromise\\s*,\\s*postsPromise\\s*\\]\\s*\\)",
              message: "Tuliskan: Promise.all([usersPromise, postsPromise])",
            },
          ],
          solution: "Promise.all([usersPromise, postsPromise])",
        },
        {
          kind: "step",
          id: "react-8-3",
          title: "TanStack Query (React Query)",
          explanation:
            "TanStack Query mengelola async state secara otomatis: caching data, background revalidation, dan otomatis melakukan retry jika jaringan terputus.",
          example: {
            code:
              'const { data, isLoading } = useQuery({\n' +
              "  queryKey: ['todos'],\n" +
              "  queryFn: fetchTodos,\n" +
              "});",
            output: "Data di-cache dan otomatis di-refetch di background saat tab browser aktif.",
            note: "Standard industri data fetching di aplikasi React modern.",
          },
          instruction:
            "Panggil hook `useQuery` dengan melewatkan sebuah objek argumen. Objek tersebut harus memiliki properti `queryKey` bernilai `['users']` dan properti `queryFn` bernilai fungsi `fetchUsers`.",
          starterCode: "// Tulis useQuery di sini\n",
          language: "js",
          tests: [
            {
              pattern: "useQuery\\(\\s*\\{\\s*queryKey\\s*:\\s*\\[\\s*['\"]users['\"]\\s*\\]\\s*,\\s*queryFn\\s*:\\s*fetchUsers\\s*\\}\\s*\\)",
              message: "Gunakan: useQuery({ queryKey: ['users'], queryFn: fetchUsers })",
            },
          ],
          solution: "useQuery({ queryKey: ['users'], queryFn: fetchUsers });",
        },
        {
          kind: "step",
          id: "react-8-4",
          title: "Mutasi Data & Optimistic Update",
          explanation:
            "Optimistic Update merubah tampilan UI secara instan sebelum server mengembalikan respon, lalu membatalkannya jika request di server ternyata gagal.",
          example: {
            code: "// Langsung centang todo di UI ➔ Kirim request POST ke server ➔ Rollback jika error",
            output: "UI terasa sangat responsif dan tidak ada jeda tunggu bagi user.",
            note: "Memberikan User Experience (UX) kelas atas.",
          },
          instruction:
            "Lakukan perbaruan state `todos` secara optimis dengan memasukkan item baru `newTodo` ke dalam salinan array `todos` yang ada.",
          starterCode: "// Tulis optimisitik update di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "setTodos\\(\\s*\\[\\s*\\.\\.\\.todos\\s*,\\s*newTodo\\s*\\]\\s*\\)",
              message: "Gunakan: setTodos([...todos, newTodo])",
            },
          ],
          solution: "setTodos([...todos, newTodo])",
        },
        {
          kind: "step",
          id: "react-8-5",
          title: "Pagination & Infinite Scroll",
          explanation:
            "Mengambil data dalam jumlah besar dilakukan secara bertahap menggunakan parameter halaman `page` atau `cursor`.",
          example: {
            code: 'const { data } = useQuery(["users", page], () => fetchUsers(page));',
            output: "Data di-fetch sesuai halaman aktif tanpa memuat data ribuan sekaligus.",
            note: "Menjaga memori browser tetap ringan.",
          },
          instruction:
            "Tentukan properti `queryKey` di dalam objek argumen berupa array yang berisi string 'items' diikuti dengan variabel `page` agar cache data terpisah untuk setiap halaman.",
          starterCode: "// Tulis queryKey di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "queryKey\\s*:\\s*\\[\\s*['\"]items['\"]\\s*,\\s*page\\s*\\]",
              message: "Gunakan: queryKey: ['items', page]",
            },
          ],
          solution: "queryKey: ['items', page]",
        },
        {
          kind: "step",
          id: "react-8-6",
          title: "Menangani Auth Token di Request Header",
          explanation:
            "Request ke API terproteksi wajib menyertakan Authorization Header (seperti `Bearer <token>`).",
          example: {
            code:
              "fetch('/api/user', {\n" +
              "  headers: { Authorization: `Bearer ${token}` }\n" +
              "});",
            output: "Server mengenali identitas pengguna yang sah.",
            note: "Simpan token di Memory/HttpOnly Cookie demi keamanan.",
          },
          instruction:
            "Definisikan objek `headers` yang mendefinisikan kunci `Authorization`. Isinya adalah sebuah template literal (menggunakan backtick) yang menggabungkan kata 'Bearer ' dengan variabel `${token}`.",
          starterCode: "// Tulis objek headers di sini\n",
          language: "js",
          tests: [
            {
              pattern: "headers\\s*:\\s*\\{\\s*Authorization\\s*:\\s*`Bearer\\s+\\$\\{token\\}`\\s*\\}",
              message: "Gunakan: headers: { Authorization: `Bearer ${token}` }",
            },
          ],
          solution: "headers: { Authorization: `Bearer ${token}` }",
        },
        {
          kind: "quiz",
          id: "react-8-kuis",
          title: "Kuis: Data Fetching",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa tujuan utama teknik Optimistic Update?",
              choices: [
                "Membuat database menjadi lebih kecil",
                "Memperbarui tampilan UI secara instan sebelum respon server selesai untuk UX yang sangat cepat",
                "Menghapus kebutuhan koneksi internet",
                "Mengamankan password user",
              ],
              answerIndex: 1,
              explanation: "Optimistic update mengasumsikan request akan sukses dan langsung mengupdate UI tanpa menunggu latency jaringan.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa tujuan utama menggunakan TanStack Query (React Query) alih-alih useEffect saat mengambil (fetching) data di komponen?",
              choices: [
                "Karena TanStack Query adalah API gratis dari React",
                "Agar kode aplikasi tidak memerlukan server backend",
                "TanStack Query otomatis menangani caching, deduplikasi permintaan, revalidation otomatis, serta retry jika jaringan terputus",
                "TanStack Query menggantikan kebutuhan styling CSS",
              ],
              answerIndex: 2,
              explanation: "TanStack Query adalah pustaka manajemen state sisi-server canggih yang jauh lebih kokoh dibandingkan melakukan fetch-on-render mandiri secara manual dengan useEffect.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara paling standar dan aman untuk melampirkan JWT token pada permintaan HTTP menuju API server terproteksi?",
              choices: [
                "Dikirimkan di dalam query parameter URL (misalnya ?token=xxx)",
                "Dimasukkan secara paksa ke dalam body JSON",
                "Mengirimnya pada header permintaan sebagai 'Authorization: Bearer <token>'",
                "Menyimpannya pada state React dan membiarkan server mengambilnya",
              ],
              answerIndex: 2,
              explanation: "Header Authorization dengan skema Bearer token adalah standar autentikasi industri untuk mengamankan komunikasi API REST.",
            },
          ],
        },
      ],
    },
    {
      slug: "routing",
      title: "React Router",
      description:
        "Aplikasi multi-halaman di satu page: navigasi, parameter, dan nested route.",
      topics: [
        "Route, Link, dan NavLink",
        "Route parameter (useParams) & query string",
        "Nested route & layout route",
        "Programmatic navigation (useNavigate)",
        "Halaman 404 & route guard sederhana",
        "Lazy loading route",
      ],
      items: [
        {
          kind: "step",
          id: "react-9-1",
          title: "Route, Link, dan NavLink",
          explanation:
            "React Router menggunakan `<Link to=\"/path\">` untuk berpindah halaman SPA tanpa refresh, dan `<NavLink>` untuk memberikan class active otomatis pada menu.",
          example: {
            code: '<NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>',
            output: "Menu About otomatis bercahaya/aktif saat URL berada di /about.",
            note: "Gunakan NavLink untuk pembuatan komponen Navbar utama.",
          },
          instruction:
            "Gunakan komponen `<Link>` dari React Router untuk membuat tautan ke rute `/profil` dengan teks tampilan 'Profil'.",
          starterCode: "// Tulis elemen Link di sini\n",
          language: "js",
          tests: [
            {
              pattern: "<Link\\s+to=[\"']/profil[\"']>\\s*Profil\\s*</Link>",
              message: 'Tuliskan: <Link to="/profil">Profil</Link>',
            },
          ],
          solution: '<Link to="/profil">Profil</Link>',
        },
        {
          kind: "step",
          id: "react-9-2",
          title: "Route Parameter (useParams)",
          explanation:
            "Gunakan `useParams()` untuk membaca nilai parameter dinamis dari URL (seperti `id` pada route `/user/:id`).",
          example: {
            code:
              'import { useParams } from "react-router-dom";\n' +
              "function UserDetail() {\n" +
              "  const { id } = useParams();\n" +
              "  return <h2>User ID: {id}</h2>;\n" +
              "}",
            output: "<h2>User ID: 42</h2> saat mengakses /user/42.",
            note: "String key pada useParams() harus cocok dengan nama variabel di deklarasi Route.",
          },
          instruction:
            "Panggil hook `useParams` dan lakukan destructuring pada objek yang dikembalikan untuk mengekstrak nilai parameter `id`.",
          starterCode: "// Tulis useParams di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+\\{\\s*id\\s*\\}\\s*=\\s*useParams\\(\\)",
              message: "Gunakan: const { id } = useParams();",
            },
          ],
          solution: "const { id } = useParams();",
        },
        {
          kind: "step",
          id: "react-9-3",
          title: "Nested Route & Layout Route (<Outlet />)",
          explanation:
            "Nested Route membagikan Layout luar yang sama (seperti Header & Sidebar) dan merender isi anak di dalam komponen `<Outlet />`.",
          example: {
            code:
              "function DashboardLayout() {\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <Sidebar />\n" +
              "      <Outlet /> {/* Isi Halaman Anak */}\n" +
              "    </div>\n" +
              "  );\n" +
              "}",
            output: "Sidebar tidak di-render ulang saat berpindah antar tab dashboard.",
            note: "Outlet adalah tempat komponen anak dirender di dalam layout parent.",
          },
          instruction:
            "Render elemen placeholder khusus dari React Router DOM di dalam komponen layout agar konten rute anak (child route) dapat ditampilkan.",
          starterCode: "// Tulis elemen Outlet di sini\n",
          language: "js",
          tests: [
            {
              pattern: "<Outlet\\s*/?>",
              message: "Tuliskan: <Outlet />",
            },
          ],
          solution: "<Outlet />",
        },
        {
          kind: "step",
          id: "react-9-4",
          title: "Programmatic Navigation (useNavigate)",
          explanation:
            "Gunakan hook `useNavigate()` untuk berpindah halaman secara kode JS (misal setelah tombol submit atau login sukses).",
          example: {
            code:
              'const navigate = useNavigate();\n' +
              'const handleLogin = () => {\n' +
              '  navigate("/dashboard");\n' +
              '};',
            output: "Browser otomatis berpindah ke /dashboard saat login berhasil.",
            note: "Gunakan navigate(-1) untuk membuat tombol 'Kembali'.",
          },
          instruction:
            "Panggil fungsi `navigate` (yang sebelumnya sudah diinisiasi dari `useNavigate()`) dengan argumen string `'/login'` untuk melakukan navigasi ke halaman login.",
          starterCode: "// Tulis navigate di sini\n",
          language: "js",
          tests: [
            {
              pattern: "navigate\\(\\s*['\"]/login['\"]\\s*\\)",
              message: 'Gunakan: navigate("/login");',
            },
          ],
          solution: 'navigate("/login");',
        },
        {
          kind: "step",
          id: "react-9-5",
          title: "Halaman 404 & Route Guard Sederhana",
          explanation:
            "Route `path=\"*\"` menangkap seluruh URL yang tidak cocok untuk menampilkan Halaman 404 Not Found.",
          example: {
            code: '<Route path="/login" element={<Login />} />',
            output: "Route standar yang memetakan path /login ke komponen Login.",
            note: "Selalu tempatkan path='*' di bagian paling akhir daftar Route.",
          },
          instruction:
            "Buat elemen `<Route>` penangkap (catch-all) dengan `path=\"*\"` yang akan menampilkan elemen `<NotFound />` jika tidak ada rute lain yang cocok.",
          starterCode: "// Tulis Route 404 di sini\n",
          language: "js",
          tests: [
            {
              pattern: "<Route\\s+path=[\"']\\*[\"']\\s+element=\\{<NotFound\\s*/>\\}\\s*/?>",
              message: 'Gunakan: <Route path="*" element={<NotFound />} />',
            },
          ],
          solution: '<Route path="*" element={<NotFound />} />',
        },
        {
          kind: "step",
          id: "react-9-6",
          title: "Lazy Loading Route (React.lazy)",
          explanation:
            "Gunakan `React.lazy()` dan `Suspense` untuk memecah bundle JavaScript (Code Splitting) sehingga halaman diunduh hanya saat diakses.",
          example: {
            code:
              "const Dashboard = React.lazy(() => import('./Dashboard'));\n" +
              "<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>",
            output: "Ukuran bundle awal aplikasi menjadi jauh lebih kecil.",
            note: "Sangat direkomendasikan untuk halaman admin yang ukurannya besar.",
          },
          instruction:
            "Bungkus komponen `<Home />` menggunakan `<Suspense>`. Berikan elemen `<p>Memuat...</p>` pada properti `fallback` agar tampil selama Home masih diunduh.",
          starterCode: "// Tulis Suspense di sini\n",
          language: "js",
          tests: [
            {
              pattern: "<Suspense\\s+fallback=\\{<p>Memuat\\.\\.\\.</p>\\}>\\s*<Home\\s*/>\\s*</Suspense>",
              message: "Gunakan: <Suspense fallback={<p>Memuat...</p>}><Home /></Suspense>",
            },
          ],
          solution: "<Suspense fallback={<p>Memuat...</p>}><Home /></Suspense>",
        },
        {
          kind: "quiz",
          id: "react-9-kuis",
          title: "Kuis: React Router",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Komponen apa di React Router yang digunakan untuk merender anak dari Nested Route?",
              choices: ["<Layout />", "<Outlet />", "<Children />", "<Inject />"],
              answerIndex: 1,
              explanation: "<Outlet /> merender komponen anak yang cocok di dalam layout bertingkat.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa menggunakan tag <a> HTML biasa tidak disarankan untuk berpindah halaman dalam aplikasi Single Page Application (SPA)?",
              choices: [
                "Karena tag <a> akan mengirim request ke server untuk HTML baru dan mereload halaman sepenuhnya (full page reload)",
                "Tag <a> tidak bisa di-styling menggunakan CSS",
                "Tag <a> akan selalu membuka tab browser baru",
                "Browser modern telah menghapus dukungan untuk tag <a>",
              ],
              answerIndex: 0,
              explanation: "Komponen <Link> atau <NavLink> dari React Router mencegat klik dari pengguna dan memperbarui URL menggunakan History API sehingga perpindahan halaman berjalan tanpa memuat ulang aset halaman dari server.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Jika rute adalah '/artikel/:slug', bagaimana Anda mengekstrak nilai 'slug' di komponen artikel?",
              choices: [
                "const slug = window.location.slug;",
                "const [slug, setSlug] = useState();",
                "const { slug } = useParams();",
                "Menggunakan props.slug",
              ],
              answerIndex: 2,
              explanation: "Hook useParams() mereturn objek dari URL dinamis yang cocok dengan pola route yang didefinisikan (:slug).",
            },
          ],
        },
      ],
    },
    {
      slug: "testing-react",
      title: "Testing Komponen",
      description:
        "React Testing Library: menguji seperti user memakai, bukan implementasi.",
      topics: [
        "Filosofi RTL: query by role, bukan by class",
        "render, screen, dan matcher jest-dom",
        "Simulasi interaksi dengan userEvent",
        "Menguji form: isi, submit, assert error",
        "Mock fetch/API di test",
        "Test apa yang layak ditulis (dan yang tidak)",
      ],
      items: [
        {
          kind: "step",
          id: "react-10-1",
          title: "Filosofi RTL: Query by Role",
          explanation:
            "React Testing Library (RTL) mendorong pencarian elemen berbasis peran aksesibilitas (`getByRole('button')`) daripada class name CSS.",
          example: {
            code: "const button = screen.getByRole('button', { name: /kirim/i });",
            output: "Mancari tombol dengan label 'kirim' di screen.",
            note: "Memastikan komponen ramah aksesibilitas untuk screen reader.",
          },
          instruction:
            "Tuliskan perintah RTL `screen` untuk mengambil elemen tombol di layar berdasarkan peran (role) aksesibilitasnya, lalu simpan di konstanta `btn`.",
          starterCode: "// Tulis getByRole di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+btn\\s*=\\s*screen\\.getByRole\\(\\s*['\"]button['\"]\\s*\\)",
              message: "Gunakan: const btn = screen.getByRole('button');",
            },
          ],
          solution: "const btn = screen.getByRole('button');",
        },
        {
          kind: "step",
          id: "react-10-2",
          title: "render, screen, dan Matcher jest-dom",
          explanation:
            "`render(<MyComponent />)` memasang komponen ke DOM pengujian virtual, dan `expect(...).toBeInTheDocument()` mengecek keberadaannya.",
          example: {
            code:
              "render(<Header />);\n" +
              "expect(screen.getByText('Halo')).toBeInTheDocument();",
            output: "Test pas jika teks 'Halo' ada di dalam dokumen.",
            note: "screen.getByText mencari elemen berbasis konten teks.",
          },
          instruction:
            "Tuliskan pengujian ekspektasi Jest/Testing Library untuk memastikan variabel `element` benar-benar berada di dalam DOM virtual (`toBeInTheDocument`).",
          starterCode: "// Tulis expect di sini\n",
          language: "js",
          tests: [
            {
              pattern: "expect\\(\\s*element\\s*\\)\\.toBeInTheDocument\\(\\)",
              message: "Gunakan: expect(element).toBeInTheDocument();",
            },
          ],
          solution: "expect(element).toBeInTheDocument();",
        },
        {
          kind: "step",
          id: "react-10-3",
          title: "Simulasi Interaksi dengan userEvent",
          explanation:
            "`userEvent.click(button)` mensimulasikan kejadian klik pengguna secara realistis (termasuk mouse enter, focus, dan click).",
          example: {
            code:
              "const button = screen.getByRole('button');\n" +
              "await userEvent.click(button);",
            output: "Simulasi klik pengguna dijalankan secara async.",
            note: "userEvent lebih disukai daripada fireEvent karena lebih realistis.",
          },
          instruction:
            "Jalankan fungsi asinkron dari pustaka `userEvent` untuk memicu aksi klik pada variabel `button`.",
          starterCode: "// Tulis userEvent.click di sini\n",
          language: "js",
          tests: [
            {
              pattern: "await\\s+userEvent\\.click\\(\\s*button\\s*\\)",
              message: "Gunakan: await userEvent.click(button);",
            },
          ],
          solution: "await userEvent.click(button);",
        },
        {
          kind: "step",
          id: "react-10-4",
          title: "Menguji Form: Isi, Submit, Assert Error",
          explanation:
            "Gunakan `userEvent.type(input, 'teks')` untuk mengecek masukan form lalu simulasikan penekanan tombol submit.",
          example: {
            code:
              "await userEvent.type(screen.getByRole('textbox'), 'bimo@test.com');\n" +
              "await userEvent.click(screen.getByRole('button'));",
            output: "Form terisi dan disubmit pada test.",
            note: "Uji pesan error yang muncul saat input diisi secara salah.",
          },
          instruction:
            "Simulasikan pengguna mengetikkan teks `'Halo'` secara asinkron ke dalam elemen `input` menggunakan `userEvent.type`.",
          starterCode: "// Tulis userEvent.type di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "await\\s+userEvent\\.type\\(\\s*input\\s*,\\s*['\"]Halo['\"]\\s*\\)",
              message: "Gunakan: await userEvent.type(input, 'Halo');",
            },
          ],
          solution: "await userEvent.type(input, 'Halo');",
        },
        {
          kind: "step",
          id: "react-10-5",
          title: "Mock Fetch / API di Test (MSW)",
          explanation:
            "Jangan lakukan panggilan jaringan asli saat pengujian unit! Gunakan **MSW (Mock Service Worker)** untuk memalsukan respon API secara aman.",
          example: {
            code:
              "function mockApiHandler(path, data) {\n" +
              "  return { path: path, response: data };\n" +
              "}\n" +
              "console.log(mockApiHandler('/api/users', []));",
            output: '{ path: "/api/users", response: [] }',
            note: "Pengujian unit harus bisa berjalan tanpa koneksi internet.",
          },
          instruction:
            "Buat fungsi `mockApiHandler(path, data)` yang mengembalikan objek handler palsu `{ path: path, response: data }`.",
          starterCode: "// Tulis fungsi mockApiHandler di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "path\\s*:\\s*path\\s*,\\s*response\\s*:\\s*data|\\{\\s*path\\s*,\\s*response\\s*:\\s*data\\s*\\}",
              message: "Kembalikan objek: { path: path, response: data }",
            },
          ],
          solution:
            "function mockApiHandler(path, data) {\n  return { path: path, response: data };\n}",
        },
        {
          kind: "step",
          id: "react-10-6",
          title: "Test Apa yang Layak Ditulis (dan yang Tidak)",
          explanation:
            "Uji alur kerja pengguna utama (happy path, validasi error, kondisi async). HINDARI menguji variabel state internal atau gaya CSS murni.",
          example: {
            code:
              "function shouldTestItem(type) {\n" +
              "  return type === 'user_behavior' ? true : false;\n" +
              "}\n" +
              "console.log(shouldTestItem('user_behavior'));",
            output: "true",
            note: "Fokus pada apa yang dilihat dan dirasakan oleh pengguna.",
          },
          instruction:
            "Buat fungsi `shouldTestItem(targetType)` yang mengembalikan `true` jika `targetType === 'user_behavior'` dan `false` jika sebaliknya.",
          starterCode: "// Tulis fungsi shouldTestItem di sini\n",
          language: "js",
          tests: [
            {
              pattern: "targetType\\s*===\\s*['\"]user_behavior['\"]",
              message: "Periksa: targetType === 'user_behavior'",
            },
          ],
          solution:
            "function shouldTestItem(targetType) {\n  return targetType === 'user_behavior';\n}",
        },
        {
          kind: "quiz",
          id: "react-10-kuis",
          title: "Kuis: Testing Komponen",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Metode pencarian elemen apa yang paling direkomendasikan di React Testing Library?",
              choices: ["getByTestId", "getByRole", "querySelector", "getByClassName"],
              answerIndex: 1,
              explanation: "getByRole mencerminkan cara pengguna dan screen reader mengidentifikasi elemen di layar.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa React Testing Library melarang melakukan assertion terhadap variabel state internal komponen?",
              choices: [
                "Karena state internal dapat di-refactor tanpa mengubah cara kerja UI di mata pengguna (Black-box testing)",
                "Karena React tidak memperbolehkan pembacaan state",
                "Karena state tidak bisa di-mock",
                "Agar waktu pengujian lebih cepat 100 kali lipat",
              ],
              answerIndex: 0,
              explanation: "Uji coba komponen harus menguji hasil yang dilihat oleh pengguna, bukan detail implementasi internal yang sewaktu-waktu bisa berubah.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Pustaka apa yang disarankan untuk melakukan simulasi interaksi pengetikan keyboard atau klik mouse secara asinkron di React Testing Library?",
              choices: ["userEvent", "windowEvent", "domHelper", "reactAction"],
              answerIndex: 0,
              explanation: "`userEvent` mensimulasikan kejadian pengguna secara realistis lengkap dengan urutan event browser asli.",
            },
          ],
        },
      ],
    },
    {
      slug: "pola-dunia-kerja",
      title: "Pola Dunia Kerja",
      description:
        "Yang tidak diajarkan tutorial: struktur proyek, konvensi tim, dan membaca codebase orang.",
      topics: [
        "Struktur folder: by-feature vs by-type",
        "Komponen presentational vs container (dan evolusinya)",
        "Error boundary & fallback UI",
        "Environment variable & konfigurasi",
        "Membaca codebase React yang sudah ada — strategi orientasi",
        "Code review checklist untuk PR React",
        "Aksesibilitas di React: focus, label, aria",
      ],
      items: [
        {
          kind: "step",
          id: "react-11-1",
          title: "Struktur Folder: Feature-based vs Type-based",
          explanation:
            "Di tim besar, struktur folder berbasis fitur (`src/features/auth/`) lebih disukai daripada berbasis tipe (`src/components/`, `src/hooks/`).",
          example: {
            code:
              "function getFeaturePath(featureName) {\n" +
              "  return `src/features/${featureName}`;\n" +
              "}\n" +
              "console.log(getFeaturePath('auth'));",
            output: "src/features/auth",
            note: "Memudahkan pembagian tugas dan isolasi kode antar tim.",
          },
          instruction:
            "Buat fungsi `getFeaturePath(featureName)` yang mengembalikan string path `\"src/features/\${featureName}\"`.",
          starterCode: "// Tulis fungsi getFeaturePath di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "`src/features/\\$\\{featureName\\}`|['\"]src/features/['\"]\\s*\\+\\s*featureName",
              message: "Format path: `src/features/${featureName}`",
            },
          ],
          solution:
            "function getFeaturePath(featureName) {\n  return `src/features/${featureName}`;\n}",
        },
        {
          kind: "step",
          id: "react-11-2",
          title: "Container vs Presentational Pattern",
          explanation:
            "Komponen Presentational khusus menangani tampilan UI (menerima props), sedangkan Komponen Container mengurus fetching data dan logika.",
          example: {
            code:
              "function classifyComponent(hasState) {\n" +
              "  return hasState ? 'container' : 'presentational';\n" +
              "}\n" +
              "console.log(classifyComponent(false));",
            output: "presentational",
            note: "Pola ini berevolusi dengan hadirnya Custom Hooks untuk ekstraksi logika.",
          },
          instruction:
            "Buat fungsi `classifyComponent(hasState)` yang mengembalikan `'container'` jika `hasState` bernilai `true` dan `'presentational'` jika `false`.",
          starterCode: "// Tulis fungsi classifyComponent di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "hasState\\s*\\?\\s*['\"]container['\"]\\s*:\\s*['\"]presentational['\"]",
              message: "Gunakan: hasState ? 'container' : 'presentational'",
            },
          ],
          solution:
            "function classifyComponent(hasState) {\n  return hasState ? 'container' : 'presentational';\n}",
        },
        {
          kind: "step",
          id: "react-11-3",
          title: "Handling Crash dengan Error Boundary",
          explanation:
            "Error Boundary menangkap error di komponen anak dan merender Fallback UI daripada membiarkan seluruh aplikasi crash layar putih.",
          example: {
            code: '<ErrorBoundary fallback={<p>Terjadi kesalahan</p>}><Dashboard /></ErrorBoundary>',
            output: "Menyelamatkan bagian aplikasi lain jika salah satu widget error.",
            note: "Wajib dipasang di sekitar modul-modul penting.",
          },
          instruction:
            "Lindungi komponen `<Profile />` dari kecelakaan render dengan membungkusnya di dalam komponen pelindung error (`ErrorBoundary`) yang menampilkan teks `<p>Error</p>` saat terjadi masalah.",
          starterCode: "// Tulis ErrorBoundary di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "<ErrorBoundary\\s+fallback=\\{<p>Error</p>\\}>\\s*<Profile\\s*/>\\s*</ErrorBoundary>",
              message: "Bungkus <Profile /> dengan ErrorBoundary",
            },
          ],
          solution: "<ErrorBoundary fallback={<p>Error</p>}><Profile /></ErrorBoundary>",
        },
        {
          kind: "step",
          id: "react-11-4",
          title: "Environment Variable (import.meta.env)",
          explanation:
            "Di Vite, variabel lingkungan diawali dengan `VITE_` dan diakses melalui `import.meta.env.VITE_API_URL`.",
          example: {
            code: "const apiUrl = import.meta.env.VITE_API_URL;",
            output: "Mengakses URL backend tanpa hardcode di berkas kode.",
            note: "Jangan simpan API Key rahasia backend di environment frontend!",
          },
          instruction:
            "Deklarasikan konstanta `url` yang membaca nilai environment variable `import.meta.env.VITE_API_URL`.",
          starterCode: "// Tulis variabel url di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+url\\s*=\\s*import\\.meta\\.env\\.VITE_API_URL",
              message: "Gunakan: const url = import.meta.env.VITE_API_URL;",
            },
          ],
          solution: "const url = import.meta.env.VITE_API_URL;",
        },
        {
          kind: "step",
          id: "react-11-5",
          title: "Strategi Orientasi Codebase Baru",
          explanation:
            "Saat masuk ke proyek React baru: 1. Baca `package.json`, 2. Buka entry point (`main.tsx` / `App.tsx`), 3. Periksa router aplikasi untuk memahami alur halaman.",
          example: {
            code:
              "function getOnboardingSteps() {\n" +
              "  return ['package.json', 'entrypoint', 'router'];\n" +
              "}\n" +
              "console.log(getOnboardingSteps());",
            output: '["package.json", "entrypoint", "router"]',
            note: "Membaca file router adalah cara tercepat memahami keseluruhan fitur aplikasi.",
          },
          instruction:
            "Buat fungsi `getOnboardingSteps()` yang mengembalikan array string `['package.json', 'entrypoint', 'router']`.",
          starterCode: "// Tulis fungsi getOnboardingSteps di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "\\[\\s*['\"]package\\.json['\"]\\s*,\\s*['\"]entrypoint['\"]\\s*,\\s*['\"]router['\"]\\s*\\]",
              message: "Kembalikan ['package.json', 'entrypoint', 'router']",
            },
          ],
          solution:
            "function getOnboardingSteps() {\n  return ['package.json', 'entrypoint', 'router'];\n}",
        },
        {
          kind: "step",
          id: "react-11-6",
          title: "Checklist Code Review untuk PR React",
          explanation:
            "Checklist PR React: Apakah key di-map dengan benar? Apakah ada useEffect tanpa cleanup? Apakah ada state redundan? Apakah accessibility terjaga?",
          example: {
            code:
              "function validatePRChecklist(hasKeys, hasCleanups) {\n" +
              "  return Boolean(hasKeys && hasCleanups);\n" +
              "}\n" +
              "console.log(validatePRChecklist(true, true));",
            output: "true",
            note: "Terapkan checklist ini pada diri sendiri sebelum membuka PR.",
          },
          instruction:
            "Buat fungsi `validatePRChecklist(hasKeys, hasCleanups)` yang mengembalikan `true` hanya jika `hasKeys` DAN `hasCleanups` keduanya bernilai `true`.",
          starterCode: "// Tulis fungsi validatePRChecklist di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "Boolean\\s*\\(\\s*hasKeys\\s*&&\\s*hasCleanups\\s*\\)|hasKeys\\s*&&\\s*hasCleanups",
              message: "Periksa: hasKeys && hasCleanups",
            },
          ],
          solution:
            "function validatePRChecklist(hasKeys, hasCleanups) {\n  return Boolean(hasKeys && hasCleanups);\n}",
        },
        {
          kind: "step",
          id: "react-11-7",
          title: "Aksesibilitas (a11y) di React",
          explanation:
            "Pastikan elemen interaktif dapat diakses dengan keyboard, berikan `htmlFor` pada `<label>`, dan gunakan atribut ARIA bila membuat komponen custom.",
          example: {
            code: '<label htmlFor="email">Email</label>\n<input id="email" type="email" />',
            output: "Elemen label terhubung dengan input untuk screen reader.",
            note: "htmlFor adalah versi JSX untuk atribut 'for' pada elemen label HTML.",
          },
          instruction:
            "Tuliskan elemen JSX `<label>` yang terhubung ke input berpembeda ID `'username'` menggunakan atribut `htmlFor` berisi teks `'Username'`.",
          starterCode: "// Tulis elemen label di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "<label\\s+htmlFor=[\"']username[\"']>\\s*Username\\s*</label>",
              message: 'Gunakan: <label htmlFor="username">Username</label>',
            },
          ],
          solution: '<label htmlFor="username">Username</label>',
        },
        {
          kind: "quiz",
          id: "react-11-kuis",
          title: "Kuis: Pola Dunia Kerja",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Atribut JSX apa yang digunakan untuk menghubungkan `<label>` dengan ID `<input>`?",
              choices: ["for", "htmlFor", "labelFor", "inputId"],
              answerIndex: 1,
              explanation: "Di JSX, atribut 'for' ditulis sebagai 'htmlFor' untuk menghindari bentrokan kata kunci 'for' di JavaScript.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa keuntungan utama struktur folder berbasis fitur (feature-based folder structure) pada codebase React berskala besar?",
              choices: [
                "Setiap fitur mengisolasi komponen, hooks, dan tipe data terkait sehingga mudah dipelihara dan dibagi antar tim",
                "Fitur berbasis folder membuat memori RAM browser 50% lebih hemat",
                "Semua file JavaScript otomatis dikompilasi ke Python",
                "Mencegah kebutuhan penggunaan git",
              ],
              answerIndex: 0,
              explanation: "Struktur berbasis fitur mengelompokkan semua file yang bekerja bersama di satu lokasi daripada memecahnya ke folder generik terpisah.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa peran dari Error Boundary pada aplikasi React?",
              choices: [
                "Menangkap JavaScript error di komponen anak dan merender Fallback UI tanpa membuat seluruh aplikasi crash (layar putih)",
                "Mencegah serangan hacker SQL Injection",
                "Menggantikan fungsi try-catch di dalam fungsi biasa",
                "Mengompresi ukuran bundle gambar",
              ],
              answerIndex: 0,
              explanation: "Error Boundary menjaga agar bug pada satu komponen kecil tidak memadamkan seluruh aplikasi web secara menyeluruh.",
            },
          ],
        },
      ],
    },
  ],
};
