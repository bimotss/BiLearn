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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
    },
  ],
};
