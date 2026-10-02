export interface KanaItem {
  char: string;
  romaji: string;
  row: string;
  strokes: number;
  strokeGuide: string[];
  example: {
    word: string;
    romaji: string;
    meaning: string;
  };
  tips?: string;
}

export interface DakuonItem {
  char: string;
  romaji: string;
  base: string;
  type: "dakuten" | "handakuten";
}

export interface YouonItem {
  char: string;
  romaji: string;
  base: string;
}

export interface ConfusionPair {
  chars: [string, string] | [string, string, string];
  romajis: [string, string] | [string, string, string];
  title: string;
  explanation: string;
  keyDifference: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  target: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// =========================================================================
// 1. HIRAGANA (ひらがな) — 46 Karakter Dasar Gojuuon (五十音)
// =========================================================================
export const hiraganaGojuuon: KanaItem[] = [
  // Baris A (Vokal)
  {
    char: "あ",
    romaji: "a",
    row: "a",
    strokes: 3,
    strokeGuide: ["Garis horizontal pendek dari kiri ke kanan", "Garis vertikal melengkung memotong di tengah", "Lengkungan spiral memutar dari atas ke kanan bawah"],
    example: { word: "あさ", romaji: "asa", meaning: "pagi" },
    tips: "Tarik garis horizontal pertama sedikit condong ke atas, lalu buat putaran spiral di langkah ketiga.",
  },
  {
    char: "い",
    romaji: "i",
    row: "a",
    strokes: 2,
    strokeGuide: ["Garis vertikal melengkung di kiri dengan kait kecil (hane) di ujungnya", "Garis vertikal lebih pendek di sisi kanan melengkung ke dalam"],
    example: { word: "いぬ", romaji: "inu", meaning: "anjing" },
    tips: "Goresan kiri lebih panjang dari yang kanan dan memiliki kait kecil di ujung bawahnya.",
  },
  {
    char: "う",
    romaji: "u",
    row: "a",
    strokes: 2,
    strokeGuide: ["Titik miring pendek di bagian atas", "Lengkungan membulat seperti telinga menghadap ke kiri"],
    example: { word: "うみ", romaji: "umi", meaning: "laut" },
    tips: "Bentuk lengkungan bawah menyerupai huruf C terbalik atau punggung orang yang membungkuk.",
  },
  {
    char: "え",
    romaji: "e",
    row: "a",
    strokes: 2,
    strokeGuide: ["Titik miring pendek di bagian atas", "Garis diagonal turun, naik zigzag, lalu mendatar membentuk gelombang"],
    example: { word: "えき", romaji: "eki", meaning: "stasiun" },
    tips: "Goresan kedua mirip angka 7 yang di bagian bawahnya disambung gelombang mendatar.",
  },
  {
    char: "お",
    romaji: "o",
    row: "a",
    strokes: 3,
    strokeGuide: ["Garis horizontal dari kiri ke kanan", "Garis vertikal lurus ke bawah lalu melingkar ke kanan", "Titik sapuan kecil di sisi kanan atas"],
    example: { word: "おちゃ", romaji: "ocha", meaning: "teh" },
    tips: "Jangan lupa titik di kanan atas pada langkah ketiga. Jangan tertukar dengan あ.",
  },

  // Baris Ka
  {
    char: "か",
    romaji: "ka",
    row: "ka",
    strokes: 3,
    strokeGuide: ["Garis melengkung ke kanan dengan kait di bawah", "Garis vertikal miring memotong di sebelah kiri", "Titik sapuan kecil di kanan atas"],
    example: { word: "かさ", romaji: "kasa", meaning: "payung" },
    tips: "Goresan ketiga adalah titik pemanis di sisi kanan luar.",
  },
  {
    char: "き",
    romaji: "ki",
    row: "ka",
    strokes: 4,
    strokeGuide: ["Garis horizontal atas agak naik", "Garis horizontal kedua sejajar di bawahnya", "Garis diagonal memotong kedua garis dari kanan atas ke kiri bawah", "Lengkungan terbuka di bawah menghadap ke kiri"],
    example: { word: "き", romaji: "ki", meaning: "pohon" },
    tips: "Pada tulisan tangan modern, lengkungan bawah terpisah dari garis diagonal pemotong.",
  },
  {
    char: "く",
    romaji: "ku",
    row: "ka",
    strokes: 1,
    strokeGuide: ["Satu goresan membentuk sudut siku seperti paruh burung yang membuka ke kanan"],
    example: { word: "くるま", romaji: "kuruma", meaning: "mobil" },
    tips: "Paling mudah: hanya satu tarikan garis bersudut kurang lebih 70 derajat.",
  },
  {
    char: "け",
    romaji: "ke",
    row: "ka",
    strokes: 3,
    strokeGuide: ["Garis vertikal sedikit melengkung di kiri dengan kait kecil di bawah", "Garis horizontal pendek di kanan atas", "Garis vertikal melengkung di kanan memotong garis horizontal"],
    example: { word: "けさ", romaji: "kesa", meaning: "pagi ini" },
    tips: "Goresan kiri memiliki kait (hane), sedangkan goresan kanan melengkung halus menyapu (harai).",
  },
  {
    char: "こ",
    romaji: "ko",
    row: "ka",
    strokes: 2,
    strokeGuide: ["Garis horizontal atas dengan kait kecil mengarah ke kiri bawah", "Garis horizontal bawah melengkung sedikit seperti mangkuk dangkal"],
    example: { word: "こども", romaji: "kodomo", meaning: "anak-anak" },
    tips: "Dua garis sejajar horizontal yang melengkung lembut saling berhadapan.",
  },

  // Baris Sa
  {
    char: "さ",
    romaji: "sa",
    row: "sa",
    strokes: 3,
    strokeGuide: ["Garis horizontal agak naik ke kanan", "Garis diagonal memotong dari kanan atas ke kiri bawah dengan kait", "Lengkungan terbuka di bawah menghadap ke kiri"],
    example: { word: "さくら", romaji: "sakura", meaning: "bunga sakura" },
    tips: "Mirip dengan き, tetapi さ hanya memiliki SATU garis horizontal di atas.",
  },
  {
    char: "し",
    romaji: "shi",
    row: "sa",
    strokes: 1,
    strokeGuide: ["Satu tarikan garis vertikal lurus ke bawah lalu melengkung ke atas seperti mata kail pancing"],
    example: { word: "しろい", romaji: "shiroi", meaning: "putih" },
    tips: "Tarik garis dari atas lurus, baru membulat di bagian dasar seperti kail.",
  },
  {
    char: "す",
    romaji: "su",
    row: "sa",
    strokes: 2,
    strokeGuide: ["Garis horizontal dari kiri ke kanan", "Garis vertikal lurus memotong, membentuk lingkaran loop kecil di tengah, lalu turun melengkung"],
    example: { word: "すし", romaji: "sushi", meaning: "sushi" },
    tips: "Pastikan lingkaran simpul di tengah terbentuk rapi sebelum garis meluncur turun.",
  },
  {
    char: "せ",
    romaji: "se",
    row: "sa",
    strokes: 3,
    strokeGuide: ["Garis horizontal panjang dari kiri ke kanan", "Garis vertikal pendek di sisi kanan berbelok ke kiri", "Garis vertikal kiri memotong garis horizontal dengan kait"],
    example: { word: "せんせい", romaji: "sensei", meaning: "guru" },
    tips: "Urutan goresan: horizontal dulu, lalu vertikal kanan, terakhir garis kiri melengkung.",
  },
  {
    char: "そ",
    romaji: "so",
    row: "sa",
    strokes: 1,
    strokeGuide: ["Satu garis berkelanjutan: zigzag horizontal-diagonal mirip huruf Z lalu disambung lengkungan bawah mirip C"],
    example: { word: "そら", romaji: "sora", meaning: "langit" },
    tips: "Tuliskan dalam satu tarikan tanpa mengangkat pena: garis horizontal, diagonal kiri, lalu membusur di bawah.",
  },

  // Baris Ta
  {
    char: "た",
    romaji: "ta",
    row: "ta",
    strokes: 4,
    strokeGuide: ["Garis horizontal pendek", "Garis diagonal pendek memotong ke kiri bawah", "Garis horizontal kecil di kanan", "Garis horizontal melengkung di kanan bawah (mirip こ kecil)"],
    example: { word: "たべる", romaji: "taberu", meaning: "makan" },
    tips: "Bagian kanannya berbentuk seperti karakter こ kecil.",
  },
  {
    char: "ち",
    romaji: "chi",
    row: "ta",
    strokes: 2,
    strokeGuide: ["Garis horizontal agak naik dari kiri ke kanan", "Garis vertikal turun memotong lalu membentuk perut cembung melingkar ke kanan"],
    example: { word: "ちず", romaji: "chizu", meaning: "peta" },
    tips: "Arah perut melengkung ke kanan, kebalikan dari さ (sa) yang melengkung ke kiri.",
  },
  {
    char: "つ",
    romaji: "tsu",
    row: "ta",
    strokes: 1,
    strokeGuide: ["Satu tarikan garis melengkung seperti ombak besar dari kiri atas membulat ke kanan bawah"],
    example: { word: "つき", romaji: "tsuki", meaning: "bulan" },
    tips: "Bentuknya seperti gelombang ombak atau busur panah melengkung halus.",
  },
  {
    char: "て",
    romaji: "te",
    row: "ta",
    strokes: 1,
    strokeGuide: ["Satu tarikan garis horizontal pendek lalu membulat setengah lingkaran ke kiri bawah"],
    example: { word: "て", romaji: "te", meaning: "tangan" },
    tips: "Mirip huruf kapital C yang bagian atasnya diberi garis horizontal lurus.",
  },
  {
    char: "と",
    romaji: "to",
    row: "ta",
    strokes: 2,
    strokeGuide: ["Garis diagonal pendek dari atas ke kanan bawah", "Garis melengkung besar memeluk dari kiri ke bawah"],
    example: { word: "ともだち", romaji: "tomodachi", meaning: "teman" },
    tips: "Bentuknya mirip ujung runcing jarum atau paruh yang membuka lebar.",
  },

  // Baris Na
  {
    char: "な",
    romaji: "na",
    row: "na",
    strokes: 4,
    strokeGuide: ["Garis horizontal pendek", "Garis diagonal memotong miring", "Titik goresan kecil di kanan atas", "Garis vertikal berlingkar simpul di kanan bawah"],
    example: { word: "なつ", romaji: "natsu", meaning: "musim panas" },
    tips: "Karakter yang membutuhkan 4 goresan seimbang antara bagian kiri dan kanan.",
  },
  {
    char: "に",
    romaji: "ni",
    row: "na",
    strokes: 3,
    strokeGuide: ["Garis vertikal di kiri dengan kait kecil", "Garis horizontal pendek atas di kanan", "Garis horizontal melengkung bawah di kanan (seperti こ)"],
    example: { word: "にほん", romaji: "nihon", meaning: "Jepang" },
    tips: "Bagian kiri mirip い, bagian kanannya persis huruf こ.",
  },
  {
    char: "ぬ",
    romaji: "nu",
    row: "na",
    strokes: 2,
    strokeGuide: ["Garis miring dari kiri atas ke kanan bawah", "Garis melengkung melingkar memotong garis pertama, naik, lalu diakhiri simpul melingkar di ujung"],
    example: { word: "いぬ", romaji: "inu", meaning: "anjing" },
    tips: "Mirip dengan め (me), tetapi ぬ memiliki lingkaran simpul kecil di ujung kanannya.",
  },
  {
    char: "ね",
    romaji: "ne",
    row: "na",
    strokes: 2,
    strokeGuide: ["Garis vertikal lurus di sisi kiri", "Garis dari kiri atas membentuk zigzag huruf Z, memotong tiang, lalu membentuk simpul melingkar di akhir"],
    example: { word: "ねこ", romaji: "neko", meaning: "kucing" },
    tips: "Perhatikan simpul loop di ujung kanan. Jangan tertukar dengan れ (re) dan わ (wa).",
  },
  {
    char: "の",
    romaji: "no",
    row: "na",
    strokes: 1,
    strokeGuide: ["Satu goresan melingkar spiral membulat dari tengah diagonal ke kanan atas lalu berputar melingkar penuh"],
    example: { word: "のみもの", romaji: "nomimono", meaning: "minuman" },
    tips: "Mirip tanda dilarang parkir tanpa garis tengah, atau bentuk pusaran obat nyamuk.",
  },

  // Baris Ha
  {
    char: "は",
    romaji: "ha",
    row: "ha",
    strokes: 3,
    strokeGuide: ["Garis vertikal di kiri dengan kait", "Garis horizontal di tengah kanan", "Garis vertikal memotong horizontal lalu melingkar membentuk simpul di kiri bawah"],
    example: { word: "はな", romaji: "hana", meaning: "bunga / hidung" },
    tips: "Bila berfungsi sebagai partikel penanda topik kalimat, huruf ini dibaca 'wa'.",
  },
  {
    char: "ひ",
    romaji: "hi",
    row: "ha",
    strokes: 1,
    strokeGuide: ["Satu garis mendatar pendek di kiri, turun membulat ke bawah seperti mangkuk U, lalu naik dan turun melengkung"],
    example: { word: "ひと", romaji: "hito", meaning: "orang" },
    tips: "Mirip bentuk tapal kuda atau senyuman yang sedikit miring.",
  },
  {
    char: "ふ",
    romaji: "fu",
    row: "ha",
    strokes: 4,
    strokeGuide: ["Titik kait di bagian atas tengah", "Garis melengkung membulat di tengah bawah", "Titik sapuan di sisi kiri", "Titik sapuan di sisi kanan"],
    example: { word: "ふね", romaji: "fune", meaning: "kapal laut" },
    tips: "Pelafalan 'fu' diucapkan lembut antara f dan h, tanpa menggigit bibir bawah.",
  },
  {
    char: "へ",
    romaji: "he",
    row: "ha",
    strokes: 1,
    strokeGuide: ["Satu tarikan garis naik sedikit lalu turun tajam membentuk bukit sudut tumpul"],
    example: { word: "へや", romaji: "heya", meaning: "kamar" },
    tips: "Bila berfungsi sebagai partikel penunjuk arah tujuan, huruf ini dibaca 'e'. Bentuknya identik dengan Katakana ヘ.",
  },
  {
    char: "ほ",
    romaji: "ho",
    row: "ha",
    strokes: 4,
    strokeGuide: ["Garis vertikal kiri dengan kait", "Garis horizontal atas di kanan", "Garis horizontal kedua di bawahnya sejajar", "Garis vertikal memotong kedua horizontal lalu membentuk simpul melingkar"],
    example: { word: "ほん", romaji: "hon", meaning: "buku" },
    tips: "Mirip は (ha), tetapi ほ memiliki topi garis horizontal paling atas.",
  },

  // Baris Ma
  {
    char: "ま",
    romaji: "ma",
    row: "ma",
    strokes: 3,
    strokeGuide: ["Garis horizontal atas agak panjang", "Garis horizontal kedua di bawahnya sejajar", "Garis vertikal memotong kedua garis lalu membentuk simpul melingkar di bawah"],
    example: { word: "まち", romaji: "machi", meaning: "kota" },
    tips: "Perhatikan garis vertikal tidak menonjol ke atas garis horizontal pertama.",
  },
  {
    char: "み",
    romaji: "mi",
    row: "ma",
    strokes: 2,
    strokeGuide: ["Garis horizontal miring, berputar loop kecil di kiri, mendatar ke kanan", "Garis melengkung vertikal memotong dari atas ke bawah"],
    example: { word: "みず", romaji: "mizu", meaning: "air" },
    tips: "Mirip angka 2 yang diakhiri garis tebasan vertikal di sebelah kanan.",
  },
  {
    char: "む",
    romaji: "mu",
    row: "ma",
    strokes: 3,
    strokeGuide: ["Garis horizontal dari kiri ke kanan", "Garis vertikal turun memotong, membuat simpul melingkar di bawah, naik ke kanan atas", "Titik sapuan di sisi kanan atas"],
    example: { word: "むし", romaji: "mushi", meaning: "serangga" },
    tips: "Jangan lupakan titik kecil di kanan atas setelah membuat lengkungan naik.",
  },
  {
    char: "め",
    romaji: "me",
    row: "ma",
    strokes: 2,
    strokeGuide: ["Garis miring dari kiri atas ke kanan bawah", "Garis melengkung elips memotong garis pertama dari kanan atas memutar penuh ke kiri bawah"],
    example: { word: "め", romaji: "me", meaning: "mata" },
    tips: "Sama persis dengan ぬ (nu), tetapi め TIDAK memiliki simpul kecil di ujungnya.",
  },
  {
    char: "も",
    romaji: "mo",
    row: "ma",
    strokes: 3,
    strokeGuide: ["Garis kail vertikal melengkung membulat di bawah seperti し", "Garis horizontal memotong pertama", "Garis horizontal memotong kedua di bawahnya"],
    example: { word: "もり", romaji: "mori", meaning: "hutan" },
    tips: "Urutan goresan: buat kail tengahnya terlebih dahulu, baru dua garis horizontal pemotong.",
  },

  // Baris Ya
  {
    char: "や",
    romaji: "ya",
    row: "ya",
    strokes: 3,
    strokeGuide: ["Garis melengkung membentuk kubah dengan kail di ujung", "Garis titik miring di atas", "Garis diagonal memotong dari kiri atas ke kanan bawah"],
    example: { word: "やま", romaji: "yama", meaning: "gunung" },
    tips: "Karakter simetris yang luwes, sering digunakan dalam partikel dan kosakata alam.",
  },
  {
    char: "ゆ",
    romaji: "yu",
    row: "ya",
    strokes: 2,
    strokeGuide: ["Garis turun memutar lingkaran mangkuk lebar", "Garis vertikal panjang memotong tepat di tengah lengkungan"],
    example: { word: "ゆき", romaji: "yuki", meaning: "salju" },
    tips: "Goresan vertikal kedua harus memotong tepat di pinggang goresan pertama.",
  },
  {
    char: "よ",
    romaji: "yo",
    row: "ya",
    strokes: 2,
    strokeGuide: ["Garis horizontal pendek di kiri atas", "Garis vertikal turun dari kanan atas membentuk lingkaran simpul ke kiri"],
    example: { word: "よる", romaji: "yoru", meaning: "malam" },
    tips: "Hati-hati dengan arah simpul: simpul melingkar ke arah kiri.",
  },

  // Baris Ra
  {
    char: "ら",
    romaji: "ra",
    row: "ra",
    strokes: 2,
    strokeGuide: ["Titik miring pendek di bagian atas", "Garis melengkung besar membulat ke bawah mirip perut buncit"],
    example: { word: "らいねん", romaji: "rainen", meaning: "tahun depan" },
    tips: "Mirip dengan angka 5 yang goresan atasnya terpisah.",
  },
  {
    char: "り",
    romaji: "ri",
    row: "ra",
    strokes: 2,
    strokeGuide: ["Garis vertikal pendek di kiri dengan kait", "Garis vertikal melengkung panjang di kanan menyapu ke bawah"],
    example: { word: "りんご", romaji: "ringo", meaning: "apel" },
    tips: "Garis kanan jauh lebih panjang dan melengkung anggun dibandingkan garis kiri.",
  },
  {
    char: "る",
    romaji: "ru",
    row: "ra",
    strokes: 1,
    strokeGuide: ["Satu tarikan garis: mirip angka 3 yang ujung bawahnya digulung menjadi simpul melingkar kecil"],
    example: { word: "くるま", romaji: "kuruma", meaning: "mobil" },
    tips: "Perbedaan vital dengan ろ (ro): る memiliki simpul bulat di ekornya, sedangkan ろ polos.",
  },
  {
    char: "れ",
    romaji: "re",
    row: "ra",
    strokes: 2,
    strokeGuide: ["Garis vertikal lurus di kiri", "Garis membentuk zigzag Z lalu ditarik naik melengkung keluar ke kanan atas"],
    example: { word: "れきし", romaji: "rekishi", meaning: "sejarah" },
    tips: "Ekor kanan menendang ke luar (kanan atas), berbeda dengan ね (simpul) dan わ (membusur ke dalam).",
  },
  {
    char: "ろ",
    romaji: "ro",
    row: "ra",
    strokes: 1,
    strokeGuide: ["Satu tarikan garis: persis angka 3 tanpa simpul di ujungnya"],
    example: { word: "ろうそく", romaji: "rousoku", meaning: "lilin" },
    tips: "Jangan tambahkan lingkaran di akhir agar tidak terbaca sebagai る (ru).",
  },

  // Baris Wa & N
  {
    char: "わ",
    romaji: "wa",
    row: "wa",
    strokes: 2,
    strokeGuide: ["Garis vertikal lurus di sisi kiri", "Garis zigzag Z memotong lalu melengkung membulat ke dalam mirip busur mangkuk"],
    example: { word: "わたし", romaji: "watashi", meaning: "saya" },
    tips: "Ekor melengkung membulat halus ke dalam tanpa simpul (bukan ね) dan tidak menendang keluar (bukan れ).",
  },
  {
    char: "を",
    romaji: "wo",
    row: "wa",
    strokes: 3,
    strokeGuide: ["Garis horizontal agak naik", "Garis vertikal memotong turun lalu melengkung tajam ke kiri bawah", "Lengkungan melayang di bawah memeluk huruf C"],
    example: { word: "みずをのむ", romaji: "mizu o nomu", meaning: "minum air (partikel objek)" },
    tips: "Hampir secara eksklusif digunakan sebagai partikel gramatikal penanda objek langsung dan umumnya dilafalkan 'o'.",
  },
  {
    char: "ん",
    romaji: "n",
    row: "n",
    strokes: 1,
    strokeGuide: ["Satu tarikan garis mirip huruf 'n' latin kursif atau angka 2 yang ditarik menyapu ke kanan atas"],
    example: { word: "にほん", romaji: "nihon", meaning: "Jepang" },
    tips: "Satu-satunya huruf kana yang berupa konsonan tunggal tanpa vokal pendamping.",
  },
];

// =========================================================================
// 2. KATAKANA (カタカナ) — 46 Karakter Dasar Gojuuon (五十音)
// =========================================================================
export const katakanaGojuuon: KanaItem[] = [
  {
    char: "ア",
    romaji: "a",
    row: "a",
    strokes: 2,
    strokeGuide: ["Garis horizontal berbelok miring ke kiri bawah", "Garis melengkung menyapu dari tengah garis pertama ke kiri bawah"],
    example: { word: "アイス", romaji: "aisu", meaning: "es krim" },
    tips: "Garis pertama memiliki sudut tegas sekitar 60 derajat.",
  },
  {
    char: "イ",
    romaji: "i",
    row: "a",
    strokes: 2,
    strokeGuide: ["Garis miring dari kanan atas ke kiri bawah", "Garis vertikal lurus turun memotong goresan pertama"],
    example: { word: "インク", romaji: "inku", meaning: "tinta" },
    tips: "Berasal dari radikal manusia (亻). Goresan kedua lurus vertikal ke bawah.",
  },
  {
    char: "ウ",
    romaji: "u",
    row: "a",
    strokes: 3,
    strokeGuide: ["Titik vertikal kecil di tengah atas", "Garis vertikal kecil di sisi kiri", "Garis horizontal atas berbelok diagonal tajam ke kiri bawah"],
    example: { word: "ウェブ", romaji: "webu", meaning: "web" },
    tips: "Mirip dengan ワ (wa), tetapi ウ memiliki titik kecil vertikal di bagian atasnya.",
  },
  {
    char: "エ",
    romaji: "e",
    row: "a",
    strokes: 3,
    strokeGuide: ["Garis horizontal atas dari kiri ke kanan", "Garis vertikal tegak di tengah", "Garis horizontal bawah lebih panjang dari garis atas"],
    example: { word: "エレベーター", romaji: "erebeetaa", meaning: "lift / elevator" },
    tips: "Mirip huruf I kapital latin dengan tiang tengah tebal.",
  },
  {
    char: "オ",
    romaji: "o",
    row: "a",
    strokes: 3,
    strokeGuide: ["Garis horizontal dari kiri ke kanan", "Garis vertikal memotong dengan kait kecil di bawah", "Garis miring menyapu dari persimpangan ke kiri bawah"],
    example: { word: "オレンジ", romaji: "orenji", meaning: "jeruk / oranye" },
    tips: "Mirip kanji 才 (bakat). Goresan kedua memiliki kait (hane) kecil di ujung.",
  },

  // Baris Ka
  {
    char: "カ",
    romaji: "ka",
    row: "ka",
    strokes: 2,
    strokeGuide: ["Garis horizontal berbelok miring dengan kait kecil", "Garis miring menyapu memotong dari atas ke kiri bawah"],
    example: { word: "カメラ", romaji: "kamera", meaning: "kamera" },
    tips: "Sangat mirip Hiragana か, tetapi versi Katakana lebih bersudut tajam dan TANPA titik ketiga di kanan.",
  },
  {
    char: "キ",
    romaji: "ki",
    row: "ka",
    strokes: 3,
    strokeGuide: ["Garis horizontal atas", "Garis horizontal bawah sejajar", "Garis diagonal memotong kedua garis ke kiri bawah"],
    example: { word: "キー", romaji: "kii", meaning: "kunci / tombol keyboard" },
    tips: "Mirip Hiragana き, tetapi Katakana tidak memiliki lengkungan di bawah.",
  },
  {
    char: "ク",
    romaji: "ku",
    row: "ka",
    strokes: 2,
    strokeGuide: ["Garis miring pendek dari kanan atas ke kiri bawah", "Garis horizontal berbelok melengkung panjang ke kiri bawah"],
    example: { word: "クラス", romaji: "kurasu", meaning: "kelas" },
    tips: "Jangan tertukar dengan タ (ta) yang memiliki garis horizontal memotong di dalam perutnya.",
  },
  {
    char: "ケ",
    romaji: "ke",
    row: "ka",
    strokes: 3,
    strokeGuide: ["Garis miring pendek di kiri atas", "Garis horizontal dari tengah goresan pertama", "Garis melengkung menyapu dari kanan atas ke kiri bawah memotong garis horizontal"],
    example: { word: "ケーキ", romaji: "keeki", meaning: "kue / cake" },
    tips: "Goresan ketiga melengkung elegan menyapu ke kiri bawah.",
  },
  {
    char: "コ",
    romaji: "ko",
    row: "ka",
    strokes: 2,
    strokeGuide: ["Garis horizontal berbelok tegak lurus ke bawah", "Garis horizontal bawah menutup sudut siku"],
    example: { word: "コーヒー", romaji: "koohii", meaning: "kopi" },
    tips: "Bentuk kotak persegi yang sisi kirinya terbuka.",
  },

  // Baris Sa
  {
    char: "サ",
    romaji: "sa",
    row: "sa",
    strokes: 3,
    strokeGuide: ["Garis horizontal panjang agak naik", "Garis vertikal pendek di kiri memotong horizontal", "Garis vertikal melengkung di kanan memotong dan menyapu"],
    example: { word: "サラダ", romaji: "sarada", meaning: "salad" },
    tips: "Berasal dari radikal rumput (艹). Garis vertikal kiri lebih pendek dari garis kanan.",
  },
  {
    char: "シ",
    romaji: "shi",
    row: "sa",
    strokes: 3,
    strokeGuide: ["Titik pertama di kiri atas", "Titik kedua di bawahnya agak ke kanan", "Garis panjang ditarik DARI BAWAH KE KANAN ATAS (ke atas)"],
    example: { word: "シャツ", romaji: "shatsu", meaning: "kemeja / baju kaos" },
    tips: "JEBAKAN UTAMA: Titik disusun vertikal dari atas ke bawah, garis utama ditarik menyapu DARI BAWAH NAIK KE ATAS.",
  },
  {
    char: "ス",
    romaji: "su",
    row: "sa",
    strokes: 2,
    strokeGuide: ["Garis horizontal berbelok tajam ke kiri bawah", "Garis miring menyapu dari persilangan sudut ke kanan bawah"],
    example: { word: "スポーツ", romaji: "supootsu", meaning: "olahraga" },
    tips: "Goresan kedua meluncur ke kanan bawah, menyeimbangkan goresan pertama.",
  },
  {
    char: "セ",
    romaji: "se",
    row: "sa",
    strokes: 2,
    strokeGuide: ["Garis horizontal berbelok turun dengan kait kecil", "Garis sudut siku berbentuk huruf L menyambung di bawah"],
    example: { word: "センター", romaji: "sentaa", meaning: "pusat / center" },
    tips: "Mirip versi sederhana dari Hiragana せ.",
  },
  {
    char: "ソ",
    romaji: "so",
    row: "sa",
    strokes: 2,
    strokeGuide: ["Titik miring dari kiri atas ke kanan bawah", "Garis panjang ditarik DARI KANAN ATAS KE KIRI BAWAH (ke bawah)"],
    example: { word: "ソフト", romaji: "sofuto", meaning: "perangkat lunak / lembut" },
    tips: "JEBAKAN UTAMA: Garis panjang ditarik DARI ATAS TURUN KE BAWAH. Titik pertamanya condong curam.",
  },

  // Baris Ta
  {
    char: "タ",
    romaji: "ta",
    row: "ta",
    strokes: 3,
    strokeGuide: ["Garis miring pendek kiri atas", "Garis horizontal berbelok menyapu ke kiri bawah", "Garis horizontal pendek memotong di tengah perut"],
    example: { word: "タクシー", romaji: "takushii", meaning: "taksi" },
    tips: "Mirip kanji 夕 (malam). Bedanya dengan ク adalah garis pemotong di dalamnya.",
  },
  {
    char: "チ",
    romaji: "chi",
    row: "ta",
    strokes: 3,
    strokeGuide: ["Garis miring pendek dari kanan atas ke kiri bawah", "Garis horizontal memotong goresan pertama", "Garis melengkung menyapu memotong garis horizontal"],
    example: { word: "チケット", romaji: "chiketto", meaning: "tiket" },
    tips: "Mirip kanji 千 (seribu), tetapi garis paling atasnya lebih miring.",
  },
  {
    char: "ツ",
    romaji: "tsu",
    row: "sa",
    strokes: 3,
    strokeGuide: ["Titik pertama di kiri atas", "Titik kedua sejajar di sebelah kanannya", "Garis panjang ditarik DARI KANAN ATAS KE KIRI BAWAH (ke bawah)"],
    example: { word: "ツアー", romaji: "tsuaa", meaning: "tur / perjalanan wisata" },
    tips: "JEBAKAN UTAMA: Titik disusun mendatar/horizontal di atas, dan garis panjang ditarik DARI ATAS TURUN KE BAWAH.",
  },
  {
    char: "テ",
    romaji: "te",
    row: "ta",
    strokes: 3,
    strokeGuide: ["Garis horizontal atas pendek", "Garis horizontal tengah lebih panjang", "Garis melengkung menyapu dari tengah garis kedua ke kiri bawah"],
    example: { word: "テレビ", romaji: "terebi", meaning: "televisi" },
    tips: "Dua garis horizontal bertingkat dipotong ekor melengkung di tengah.",
  },
  {
    char: "ト",
    romaji: "to",
    row: "ta",
    strokes: 2,
    strokeGuide: ["Garis vertikal lurus ke bawah", "Garis miring pendek dari tengah vertikal ke kanan bawah"],
    example: { word: "トイレ", romaji: "toire", meaning: "toilet" },
    tips: "Bentuknya seperti tiang dengan ranting kecil menjorok ke kanan.",
  },

  // Baris Na
  {
    char: "ナ",
    romaji: "na",
    row: "na",
    strokes: 2,
    strokeGuide: ["Garis horizontal dari kiri ke kanan", "Garis melengkung menyapu dari tengah ke kiri bawah"],
    example: { word: "ナイフ", romaji: "naifu", meaning: "pisau" },
    tips: "Mirip kanji 十 (sepuluh) yang garis vertikalnya melengkung ke kiri bawah.",
  },
  {
    char: "ニ",
    romaji: "ni",
    row: "na",
    strokes: 2,
    strokeGuide: ["Garis horizontal atas pendek", "Garis horizontal bawah lebih panjang sejajar"],
    example: { word: "ニュース", romaji: "nyuusu", meaning: "berita / news" },
    tips: "Sama persis dengan kanji 二 (dua).",
  },
  {
    char: "ヌ",
    romaji: "nu",
    row: "na",
    strokes: 2,
    strokeGuide: ["Garis horizontal berbelok miring ke kiri bawah", "Garis miring memotong dari tengah ke kanan bawah"],
    example: { word: "ヌードル", romaji: "nuudoru", meaning: "mi / noodle" },
    tips: "Berasal dari kanji 奴. Goresan kedua memotong garis pertama ke kanan bawah.",
  },
  {
    char: "ネ",
    romaji: "ne",
    row: "na",
    strokes: 4,
    strokeGuide: ["Titik miring kecil di atas", "Garis horizontal berbelok ke kiri bawah", "Garis vertikal memotong lurus turun", "Garis sapuan pendek di kanan"],
    example: { word: "ネクタイ", romaji: "nekutai", meaning: "dasi / necktie" },
    tips: "Berasal dari radikal 礻. Terdiri dari 4 goresan yang teratur.",
  },
  {
    char: "ノ",
    romaji: "no",
    row: "na",
    strokes: 1,
    strokeGuide: ["Satu goresan melengkung halus menyapu dari kanan atas ke kiri bawah"],
    example: { word: "ノート", romaji: "nooto", meaning: "buku catatan" },
    tips: "Sangat sederhana: satu garis sapuan diagonal lembut.",
  },

  // Baris Ha
  {
    char: "ハ",
    romaji: "ha",
    row: "ha",
    strokes: 2,
    strokeGuide: ["Garis miring pendek di kiri dari atas ke bawah", "Garis miring di kanan dari atas ke bawah berlawanan"],
    example: { word: "ハンバーガー", romaji: "hambaagaa", meaning: "hamburger" },
    tips: "Bentuknya mirip kanji 八 (delapan) yang membuka ke bawah.",
  },
  {
    char: "ヒ",
    romaji: "hi",
    row: "ha",
    strokes: 2,
    strokeGuide: ["Garis horizontal pendek dari kiri ke kanan", "Garis melengkung turun ke bawah lalu mendatar ke kanan dengan sudut tegak"],
    example: { word: "ヒーター", romaji: "hiitaa", meaning: "pemanas / heater" },
    tips: "Mirip sendok atau centong yang menghadap ke kanan.",
  },
  {
    char: "フ",
    romaji: "fu",
    row: "ha",
    strokes: 1,
    strokeGuide: ["Satu tarikan garis horizontal pendek lalu berbelok melengkung ke kiri bawah"],
    example: { word: "フォーク", romaji: "fooku", meaning: "garpu" },
    tips: "Mirip sudut kanan atas bingkai atau paruh burung.",
  },
  {
    char: "ヘ",
    romaji: "he",
    row: "ha",
    strokes: 1,
    strokeGuide: ["Satu tarikan garis naik lalu turun membentuk atap bukit"],
    example: { word: "ヘルメット", romaji: "herumetto", meaning: "helm" },
    tips: "Sama persis dengan bentuk Hiragana へ.",
  },
  {
    char: "ホ",
    romaji: "ho",
    row: "ha",
    strokes: 4,
    strokeGuide: ["Garis horizontal atas", "Garis vertikal lurus memotong di tengah dengan kait", "Garis miring sapuan di kiri", "Garis miring sapuan di kanan"],
    example: { word: "ホテル", romaji: "hoteru", meaning: "hotel" },
    tips: "Mirip kanji 木 (pohon) dengan garis horizontal terpisah di atas tiang.",
  },

  // Baris Ma
  {
    char: "マ",
    romaji: "ma",
    row: "ma",
    strokes: 2,
    strokeGuide: ["Garis horizontal berbelok miring tajam ke kiri bawah", "Garis miring pendek menyapu di bawah"],
    example: { word: "マスク", romaji: "masuku", meaning: "masker" },
    tips: "Bentuk segitiga terbuka dengan goresan pemanis di bagian bawah.",
  },
  {
    char: "ミ",
    romaji: "mi",
    row: "ma",
    strokes: 3,
    strokeGuide: ["Garis miring pendek atas", "Garis miring pendek tengah", "Garis miring bawah lebih panjang sejajar"],
    example: { word: "ミルク", romaji: "miruku", meaning: "susu / milk" },
    tips: "Tiga garis miring sejajar bertingkat, berasal dari kanji 三 (tiga).",
  },
  {
    char: "ム",
    romaji: "mu",
    row: "ma",
    strokes: 2,
    strokeGuide: ["Garis miring turun lalu berbelok horizontal ke kanan", "Garis miring pendek memotong ujung kanan"],
    example: { word: "ムービー", romaji: "muubii", meaning: "film / movie" },
    tips: "Mirip segitiga bersudut yang sisi kanannya dipotong garis penutup.",
  },
  {
    char: "メ",
    romaji: "me",
    row: "ma",
    strokes: 2,
    strokeGuide: ["Garis miring dari kanan atas ke kiri bawah", "Garis melengkung memotong dari kiri atas ke kanan bawah"],
    example: { word: "メール", romaji: "meeru", meaning: "email / surat elektronik" },
    tips: "Bentuk salib silang miring, berasal dari kanji 女.",
  },
  {
    char: "モ",
    romaji: "mo",
    row: "ma",
    strokes: 3,
    strokeGuide: ["Garis horizontal atas", "Garis horizontal bawah lebih panjang", "Garis vertikal berbelok ke kanan memotong kedua garis"],
    example: { word: "モニター", romaji: "monitaa", meaning: "layar monitor" },
    tips: "Mirip Hiragana も, namun seluruh garis Katakana lurus dan bersudut kaku.",
  },

  // Baris Ya
  {
    char: "ヤ",
    romaji: "ya",
    row: "ya",
    strokes: 2,
    strokeGuide: ["Garis horizontal berbelok miring ke kiri bawah", "Garis vertikal memotong dari atas ke kanan bawah"],
    example: { word: "ヤング", romaji: "yangu", meaning: "muda / young" },
    tips: "Versi tegas dan lurus dari Hiragana や.",
  },
  {
    char: "ユ",
    romaji: "yu",
    row: "ya",
    strokes: 2,
    strokeGuide: ["Garis horizontal berbelok vertikal ke bawah", "Garis horizontal bawah lebih panjang menembus ke kanan"],
    example: { word: "ユーザー", romaji: "yuuzaa", meaning: "pengguna / user" },
    tips: "Mirip bentuk huruf C terbalik atau kotak terbuka dengan garis dasar menonjol ke kanan.",
  },
  {
    char: "ヨ",
    romaji: "yo",
    row: "ya",
    strokes: 3,
    strokeGuide: ["Garis horizontal berbelok vertikal ke bawah", "Garis horizontal tengah", "Garis horizontal bawah menutup sudut"],
    example: { word: "ヨーグルト", romaji: "yooguruto", meaning: "yogurt" },
    tips: "Mirip huruf E kapital latin yang menghadap terbalik ke kiri.",
  },

  // Baris Ra
  {
    char: "ラ",
    romaji: "ra",
    row: "ra",
    strokes: 2,
    strokeGuide: ["Garis horizontal atas pendek", "Garis horizontal berbelok melengkung ke kiri bawah"],
    example: { word: "ラジオ", romaji: "rajio", meaning: "radio" },
    tips: "Garis horizontal atas berdiri mandiri sebelum sudut goresan kedua.",
  },
  {
    char: "リ",
    romaji: "ri",
    row: "ra",
    strokes: 2,
    strokeGuide: ["Garis vertikal pendek di kiri", "Garis vertikal melengkung panjang di kanan menyapu ke bawah"],
    example: { word: "リーダー", romaji: "riidaa", meaning: "pemimpin / leader" },
    tips: "Hampir identik dengan Hiragana り, namun goresan Katakana lebih lurus dan kaku.",
  },
  {
    char: "ル",
    romaji: "ru",
    row: "ra",
    strokes: 2,
    strokeGuide: ["Garis miring dari kanan atas ke kiri bawah", "Garis vertikal turun membulat ke kanan atas dengan kait"],
    example: { word: "ルール", romaji: "ruuru", meaning: "aturan / rules" },
    tips: "Goresan kedua melengkung ke kanan atas, seperti kaki kanan yang melompat.",
  },
  {
    char: "レ",
    romaji: "re",
    row: "ra",
    strokes: 1,
    strokeGuide: ["Satu tarikan garis vertikal turun lalu berbelok naik ke kanan atas"],
    example: { word: "レストラン", romaji: "resutoran", meaning: "restoran" },
    tips: "Mirip tanda centang (✓) atau sudut siku bersayap.",
  },
  {
    char: "ロ",
    romaji: "ro",
    row: "ra",
    strokes: 3,
    strokeGuide: ["Garis vertikal kiri", "Garis horizontal berbelok vertikal ke bawah", "Garis horizontal bawah menutup kotak"],
    example: { word: "ロボット", romaji: "robotto", meaning: "robot" },
    tips: "Kotak persegi sempurna, sama persis dengan kanji 口 (mulut).",
  },

  // Baris Wa & N
  {
    char: "ワ",
    romaji: "wa",
    row: "wa",
    strokes: 2,
    strokeGuide: ["Garis vertikal pendek di kiri", "Garis horizontal atas berbelok diagonal melengkung ke kiri bawah"],
    example: { word: "ワイン", romaji: "wain", meaning: "anggur / wine" },
    tips: "Mirip dengan ウ (u), tetapi ワ TANPA titik vertikal di atasnya.",
  },
  {
    char: "ヲ",
    romaji: "wo",
    row: "wa",
    strokes: 3,
    strokeGuide: ["Garis horizontal atas", "Garis horizontal kedua di bawahnya sejajar", "Garis melengkung menyapu memotong kedua garis"],
    example: { word: "ヲ (partikel)", romaji: "wo (o)", meaning: "penanda objek (sangat jarang dalam Katakana)" },
    tips: "Jarang sekali ditemui dalam bahasa Jepang modern selain dokumen kuno atau efek khusus.",
  },
  {
    char: "ン",
    romaji: "n",
    row: "n",
    strokes: 2,
    strokeGuide: ["Titik miring di kiri atas", "Garis panjang ditarik DARI KIRI BAWAH KE KANAN ATAS (ke atas)"],
    example: { word: "パン", romaji: "pan", meaning: "roti" },
    tips: "JEBAKAN UTAMA: Titik lebih mendatar, garis panjang ditarik MENYAPU DARI BAWAH NAIK KE ATAS. Bandingkan dengan ソ.",
  },
];

// =========================================================================
// 3. PASANGAN HURUF YANG SERING MEMBINGUNGKAN (JEBAKAN POPULER)
// =========================================================================
export const hiraganaConfusionPairs: ConfusionPair[] = [
  {
    chars: ["さ", "ち"],
    romajis: ["sa", "chi"],
    title: "さ (sa) vs ち (chi)",
    explanation: "さ memiliki lengkungan perut yang membuka ke arah KIRI, sedangkan ち memiliki lengkungan perut yang membusur ke arah KANAN. Selain itu, さ memiliki satu garis potong sedangkan ち bermula dari garis horizontal atas.",
    keyDifference: "Perut さ melengkung ke kiri, perut ち melengkung ke kanan.",
  },
  {
    chars: ["れ", "わ", "ね"],
    romajis: ["re", "wa", "ne"],
    title: "れ (re) vs わ (wa) vs ね (ne)",
    explanation: "Ketiganya memiliki tiang vertikal kiri yang sama persis. Perbedaannya ada pada ekor kanan: れ ekornya menendang melengkung keluar ke kanan atas; わ ekornya melengkung membusur bulat ke dalam; ね ekornya diakhiri gulungan simpul bulat kecil.",
    keyDifference: "れ = tendang keluar | わ = busur bulat | ね = simpul melingkar.",
  },
  {
    chars: ["る", "ろ"],
    romajis: ["ru", "ro"],
    title: "る (ru) vs ろ (ro)",
    explanation: "Keduanya berbentuk mirip angka 3. Perbedaan krusialnya: る memiliki lingkaran simpul bulat di ujung bawahnya, sedangkan ろ ekornya polos tanpa simpul.",
    keyDifference: "る punya simpul bulat di ekor, ろ polos.",
  },
  {
    chars: ["は", "ほ"],
    romajis: ["ha", "ho"],
    title: "は (ha) vs ほ (ho)",
    explanation: "Keduanya memiliki tiang kiri dan simpul melingkar di kanan. Namun ほ memiliki 'topi' garis horizontal paling atas yang menembus garis vertikal kanan, sedangkan は tidak memiliki garis atas.",
    keyDifference: "ほ memiliki garis topi atas, は polos di bagian atas.",
  },
];

export const katakanaConfusionPairs: ConfusionPair[] = [
  {
    chars: ["シ", "ツ"],
    romajis: ["shi", "tsu"],
    title: "シ (shi) vs ツ (tsu) — Jebakan Nomor 1 Katakana",
    explanation: "Untuk シ (shi), kedua titik pembuka disusun secara vertikal (atas ke bawah), dan garis panjang ditarik DARI BAWAH NAIK KE KANAN ATAS. Untuk ツ (tsu), kedua titik pembuka disusun horizontal/mendatar, dan garis panjang ditarik DARI KANAN ATAS TURUN KE KIRI BAWAH.",
    keyDifference: "シ = ditarik DARI BAWAH KE ATAS | ツ = ditarik DARI ATAS KE BAWAH.",
  },
  {
    chars: ["ソ", "ン"],
    romajis: ["so", "n"],
    title: "ソ (so) vs ン (n) — Jebakan Arah Tarikan Garis",
    explanation: "Untuk ソ (so), titik pertama curam dan garis utama ditarik DARI ATAS TURUN KE BAWAH. Untuk ン (n), titik pertama lebih mendatar dan garis utama ditarik MENYAPU DARI BAWAH NAIK KE ATAS.",
    keyDifference: "ソ = tarikan turun ke bawah | ン = tarikan menyapu naik ke atas.",
  },
  {
    chars: ["ウ", "ワ"],
    romajis: ["u", "wa"],
    title: "ウ (u) vs ワ (wa)",
    explanation: "Keduanya memiliki kerangka luar yang sama, tetapi ウ (u) memiliki titik vertikal kecil di tengah atas, sedangkan ワ (wa) bersih tanpa titik.",
    keyDifference: "ウ punya titik tanduk di atas, ワ tidak punya.",
  },
];

// =========================================================================
// 4. BANK SOAL KUIS LATIHAN INTERAKTIF
// =========================================================================
export const hiraganaQuizQuestions: QuizQuestion[] = [
  {
    id: "hq-1",
    question: "Huruf Hiragana berikut dibaca apa?",
    target: "あ",
    options: ["a", "o", "u", "e"],
    correctAnswer: "a",
    explanation: "あ adalah vokal dasar pertama dalam bahasa Jepang, dibaca 'a'. Jangan tertukar dengan お (o).",
  },
  {
    id: "hq-2",
    question: "Huruf manakah yang dibaca 'sa'?",
    target: "sa",
    options: ["さ", "ち", "き", "こ"],
    correctAnswer: "さ",
    explanation: "さ dibaca 'sa' dengan lengkungan perut membuka ke kiri. ち dibaca 'chi', sedangkan き memiliki dua garis horizontal.",
  },
  {
    id: "hq-3",
    question: "Kata 「ねこ」 dibaca dan memiliki arti apa?",
    target: "ねこ",
    options: ["neko (kucing)", "inu (anjing)", "tori (burung)", "saru (monyet)"],
    correctAnswer: "neko (kucing)",
    explanation: "ね (ne) + こ (ko) = neko, yang berarti 'kucing'.",
  },
  {
    id: "hq-4",
    question: "Manakah huruf yang memiliki lingkaran simpul di ujung ekornya?",
    target: "る vs ろ",
    options: ["る (ru)", "ろ (ro)", "う (u)", "て (te)"],
    correctAnswer: "る (ru)",
    explanation: "る (ru) memiliki simpul bulat di ujung ekornya, sedangkan ろ (ro) ekornya polos.",
  },
  {
    id: "hq-5",
    question: "Bagaimana cara membaca huruf 「し」?",
    target: "し",
    options: ["shi", "tsu", "su", "chi"],
    correctAnswer: "shi",
    explanation: "し berbentuk seperti mata kail pancing dan dibaca 'shi'.",
  },
  {
    id: "hq-6",
    question: "Perhatikan huruf 「は」. Jika huruf ini digunakan sebagai partikel topik kalimat, bagaimana cara membacanya?",
    target: "は (partikel)",
    options: ["wa", "ha", "ba", "pa"],
    correctAnswer: "wa",
    explanation: "Huruf は dilafalkan 'ha' dalam kosakata (misal hana), namun secara khusus dibaca 'wa' saat berfungsi sebagai partikel tata bahasa penanda topik (misal: watashi wa).",
  },
  {
    id: "hq-7",
    question: "Kata 「さくら」 terdiri dari 3 karakter yang dibaca...",
    target: "さくら",
    options: ["sa - ku - ra (bunga sakura)", "chi - ku - ra", "sa - ro - ra", "ki - ku - re"],
    correctAnswer: "sa - ku - ra (bunga sakura)",
    explanation: "さ (sa) + く (ku) + ら (ra) = sakura, bunga khas Jepang.",
  },
  {
    id: "hq-8",
    question: "Manakah huruf yang dibaca 'chi'?",
    target: "chi",
    options: ["ち", "さ", "き", "た"],
    correctAnswer: "ち",
    explanation: "ち dibaca 'chi', perutnya melengkung ke kanan. Kebalikan dari さ (sa).",
  },
  {
    id: "hq-9",
    question: "Huruf tunggal 「ん」 berfungsi sebagai konsonan apa?",
    target: "ん",
    options: ["Konsonan sengau 'n'", "Vokal 'u'", "Konsonan ganda 'tsu'", "Konsonan 'm'"],
    correctAnswer: "Konsonan sengau 'n'",
    explanation: "ん adalah satu-satunya karakter kana yang berdiri sendiri sebagai konsonan sengau 'n'.",
  },
  {
    id: "hq-10",
    question: "Kata 「すし」 dibaca apa?",
    target: "すし",
    options: ["sushi", "shisu", "hashi", "suki"],
    correctAnswer: "sushi",
    explanation: "す (su) + し (shi) = sushi, makanan khas Jepang yang terkenal.",
  },
];

export const katakanaQuizQuestions: QuizQuestion[] = [
  {
    id: "kq-1",
    question: "Huruf Katakana berikut dibaca apa?",
    target: "ア",
    options: ["a", "i", "u", "e"],
    correctAnswer: "a",
    explanation: "ア adalah huruf vokal pertama dalam Katakana, dibaca 'a'.",
  },
  {
    id: "kq-2",
    question: "Di antara dua huruf mirip ini, manakah yang dibaca 'shi'?",
    target: "シ vs ツ",
    options: ["シ", "ツ", "ソ", "ン"],
    correctAnswer: "シ",
    explanation: "シ adalah 'shi': kedua titiknya berbaris vertikal dan garis panjangnya ditarik DARI BAWAH KE ATAS. ツ adalah 'tsu'.",
  },
  {
    id: "kq-3",
    question: "Kata serapan 「コーヒー」 dibaca dan memiliki arti apa?",
    target: "コーヒー",
    options: ["koohii (kopi)", "kukkii (kue kering)", "keeki (kue)", "kora (cola)"],
    correctAnswer: "koohii (kopi)",
    explanation: "コ (ko) + ー (bunyi panjang) + ヒ (hi) + ー (bunyi panjang) = koohii (kopi). Tanda ー adalah tanda pemanjang vokal.",
  },
  {
    id: "kq-4",
    question: "Manakah huruf Katakana yang dibaca 'so'?",
    target: "so",
    options: ["ソ", "ン", "ノ", "シ"],
    correctAnswer: "ソ",
    explanation: "ソ dibaca 'so', tarikan garis panjangnya dimulai DARI ATAS KE KIRI BAWAH. ン ditarik dari bawah ke atas.",
  },
  {
    id: "kq-5",
    question: "Kata serapan 「テレビ」 dibaca apa?",
    target: "テレビ",
    options: ["terebi (televisi)", "tegami (surat)", "toire (toilet)", "tepu (pita)"],
    correctAnswer: "terebi (televisi)",
    explanation: "テ (te) + レ (re) + ビ (bi) = terebi (televisi).",
  },
  {
    id: "kq-6",
    question: "Tanda garis horizontal panjang 「ー」 dalam Katakana berfungsi untuk...",
    target: "ー (Chouonpu)",
    options: ["Memperpanjang bunyi vokal sebelumnya", "Menandakan konsonan ganda", "Tanda jeda bacaan", "Mengubah vokal jadi konsonan"],
    correctAnswer: "Memperpanjang bunyi vokal sebelumnya",
    explanation: "Tanda ー disebut Chouonpu (長音符), berfungsi memperpanjang bunyi vokal suku kata sebelumnya (misal: ケーキ = keeki, bukan keki).",
  },
  {
    id: "kq-7",
    question: "Kata 「パン」 berasal dari bahasa Portugis pão, dibaca apa?",
    target: "パン",
    options: ["pan (roti)", "pen (pulpen)", "pin (pin)", "pon (pon)"],
    correctAnswer: "pan (roti)",
    explanation: "パ (pa) + ン (n) = pan, yang berarti roti.",
  },
  {
    id: "kq-8",
    question: "Huruf Katakana 「カメラ」 dibaca dan berarti...",
    target: "カメラ",
    options: ["kamera (kamera)", "karuma (karma)", "kapuseru (kapsul)", "karera (mereka)"],
    correctAnswer: "kamera (kamera)",
    explanation: "カ (ka) + メ (me) + ラ (ra) = kamera.",
  },
  {
    id: "kq-9",
    question: "Manakah perbedaan utama antara huruf Katakana 「ウ」 dan 「ワ」?",
    target: "ウ vs ワ",
    options: [
      "ウ memiliki titik vertikal kecil di atas, sedangkan ワ polos",
      "ワ memiliki titik di tengah, sedangkan ウ polos",
      "ウ bersudut melengkung, sedangkan ワ siku-siku",
      "Tidak ada perbedaan bentuk",
    ],
    correctAnswer: "ウ memiliki titik vertikal kecil di atas, sedangkan ワ polos",
    explanation: "ウ (u) memiliki mahkota titik vertikal di atasnya. Jika titik tersebut dihilangkan, karakter tersebut menjadi ワ (wa).",
  },
  {
    id: "kq-10",
    question: "Kata serapan 「ホテル」 dibaca apa?",
    target: "ホテル",
    options: ["hoteru (hotel)", "botoru (botol)", "moderu (model)", "taoru (handuk)"],
    correctAnswer: "hoteru (hotel)",
    explanation: "ホ (ho) + テ (te) + ル (ru) = hoteru (hotel).",
  },
];
