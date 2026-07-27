import type { Track } from "@/lib/types";

export const sqlTrack: Track = {
  slug: "sql",
  title: "Database & SQL",
  description:
    "SQL murni dulu, ORM belakangan. PostgreSQL & MySQL sampai optimasi query.",
  hours: 60,
  recommendedPrereqs: [],
  color: "bg-indigo-600",
  icon: "🗄️",
  order: 10,
  modules: [
    {
      slug: "konsep-select",
      title: "Konsep Database & SELECT",
      description:
        "Berpikir dalam tabel: query pertamamu sampai filter yang presisi.",
      topics: [
        "Database relasional: tabel, baris, kolom, tipe data",
        "SELECT & FROM: mengambil kolom",
        "WHERE: =, <>, >, <, BETWEEN, IN, LIKE",
        "AND/OR/NOT & urutan evaluasi",
        "ORDER BY & LIMIT/OFFSET",
        "DISTINCT & alias (AS)",
        "NULL: kenapa = NULL tidak jalan (IS NULL)",
      ],
      items: [],
    },
    {
      slug: "join",
      title: "Relasi & JOIN",
      description:
        "Materi interview SQL paling sering keluar — kuasai sampai bisa menggambar diagramnya.",
      topics: [
        "Primary key & foreign key",
        "INNER JOIN: irisan dua tabel",
        "LEFT/RIGHT JOIN & baris NULL",
        "Join lebih dari dua tabel",
        "Self join (karyawan → atasan)",
        "Many-to-many & junction table",
        "Latihan: menulis join dari pertanyaan bisnis nyata",
      ],
      items: [],
    },
    {
      slug: "agregasi",
      title: "Agregasi & Subquery",
      description:
        "Dari data mentah ke jawaban bisnis: total, rata-rata, dan pengelompokan.",
      topics: [
        "COUNT, SUM, AVG, MIN, MAX",
        "GROUP BY: aturan emas kolom yang boleh di-SELECT",
        "HAVING vs WHERE",
        "Subquery di WHERE, FROM, SELECT",
        "CTE (WITH): query kompleks yang tetap terbaca",
        "CASE WHEN untuk kategorisasi",
        "Window function dasar: ROW_NUMBER, RANK, running total",
      ],
      items: [],
    },
    {
      slug: "dml",
      title: "Manipulasi Data & Transaksi",
      description:
        "INSERT, UPDATE, DELETE — dan jaring pengaman sebelum kamu menghapus data produksi.",
      topics: [
        "INSERT: satu baris, banyak baris, dari SELECT",
        "UPDATE dengan WHERE (dan horor UPDATE tanpa WHERE)",
        "DELETE vs TRUNCATE",
        "Transaksi: BEGIN, COMMIT, ROLLBACK",
        "ACID dijelaskan dengan kasus transfer uang",
        "UPSERT (ON CONFLICT / ON DUPLICATE KEY)",
        "RETURNING untuk mendapat data yang berubah",
      ],
      items: [],
    },
    {
      slug: "desain-skema",
      title: "Desain Skema & Index",
      description:
        "Merancang database yang tidak menyesal 6 bulan kemudian.",
      topics: [
        "Normalisasi 1NF–3NF dengan contoh nyata (bukan definisi hafalan)",
        "Kapan denormalisasi masuk akal",
        "ERD: membaca & menggambar",
        "Memilih tipe data & constraint (NOT NULL, UNIQUE, CHECK)",
        "Index: cara kerja B-tree secara intuitif",
        "Kapan index membantu & kapan memperlambat",
        "EXPLAIN: membaca rencana eksekusi query",
      ],
      items: [],
    },
    {
      slug: "postgresql",
      title: "PostgreSQL Spesifik",
      description:
        "Database #1 pilihan developer dunia — fitur yang membuatnya dipilih.",
      topics: [
        "Setup & psql dasar",
        "Tipe kaya: array, JSONB, UUID, enum",
        "Query JSONB: operator -> dan ->>",
        "Full-text search dasar",
        "Sequence & identity column",
        "Role & permission dasar",
      ],
      items: [],
    },
    {
      slug: "mysql",
      title: "MySQL Spesifik",
      description:
        "Pasangan setia Laravel & mayoritas hosting Indonesia — perbedaan yang perlu kamu tahu.",
      topics: [
        "Setup & perbedaan sintaks utama vs PostgreSQL",
        "Storage engine: InnoDB (dan kenapa bukan MyISAM)",
        "AUTO_INCREMENT & charset utf8mb4 (jebakan emoji)",
        "Tipe tanggal & timezone",
        "mysqldump: backup & restore",
      ],
      items: [],
    },
    {
      slug: "sql-di-aplikasi",
      title: "SQL di Aplikasi",
      description:
        "Menjembatani SQL murni dengan kode: ORM, N+1, dan keamanan.",
      topics: [
        "Koneksi dari Node (pg) & connection pool",
        "Parameterized query: satu-satunya cara mencegah SQL injection",
        "ORM vs query builder vs raw SQL — trade-off jujur",
        "Masalah N+1 & cara mendeteksinya",
        "Migration di aplikasi nyata",
        "Optimasi query lambat: proses diagnosis lengkap",
      ],
      items: [],
    },
  ],
};
