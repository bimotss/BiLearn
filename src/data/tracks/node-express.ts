import type { Track } from "@/lib/types";

export const nodeExpressTrack: Track = {
  slug: "node-express",
  title: "Node.js & Express",
  description: "REST API, auth, dan keamanan — jalur startup & kerja remote.",
  hours: 70,
  recommendedPrereqs: ["javascript", "typescript", "git"],
  color: "bg-green-600",
  icon: "🟢",
  order: 9,
  modules: [
    {
      slug: "node-runtime",
      title: "Node.js Runtime & npm",
      description:
        "JavaScript keluar dari browser: file system, module, dan ekosistem npm.",
      topics: [
        "Apa itu Node.js & bedanya dengan browser",
        "Module system: ESM di Node",
        "npm: package.json, scripts, dependencies vs devDependencies",
        "File system (fs/promises) & path",
        "Environment variable & dotenv",
        "Event emitter & stream (pengenalan)",
        "nodemon/tsx untuk development",
      ],
      items: [],
    },
    {
      slug: "express-dasar",
      title: "Express Dasar",
      description:
        "Server HTTP pertamamu: route, middleware, dan siklus request-response.",
      topics: [
        "Setup Express + TypeScript",
        "Route: method, path, handler",
        "Request: params, query, body (express.json)",
        "Response: status, json, header",
        "Middleware: konsep next() & urutan eksekusi",
        "Router untuk memecah endpoint",
        "Static file & 404 handler",
      ],
      items: [],
    },
    {
      slug: "rest-design",
      title: "Desain REST API",
      description:
        "Konvensi yang membuat API-mu mudah dipakai tim lain — skill diskusi arsitektur.",
      topics: [
        "Resource & penamaan endpoint yang benar",
        "HTTP method semantik: GET/POST/PUT/PATCH/DELETE",
        "Status code yang tepat (bukan 200 untuk semuanya)",
        "Struktur response konsisten: data, error, meta",
        "Versioning API",
        "Pagination, filtering, sorting",
        "Idempotency & kenapa penting",
      ],
      items: [],
    },
    {
      slug: "database-prisma",
      title: "Database dengan Prisma",
      description:
        "Menghubungkan API ke PostgreSQL dengan type-safety penuh.",
      topics: [
        "Prisma schema & migrate",
        "CRUD dengan Prisma Client",
        "Relasi & nested query",
        "Transaction",
        "Seeding & Prisma Studio",
        "Pola repository: memisahkan akses data dari route",
      ],
      items: [],
    },
    {
      slug: "auth-node",
      title: "Autentikasi & Otorisasi",
      description:
        "JWT vs session dengan jujur: trade-off, bukan dogma.",
      topics: [
        "Hash password dengan bcrypt/argon2 (jangan pernah plain text)",
        "JWT: sign, verify, expiry, refresh token",
        "Session + cookie sebagai alternatif",
        "Middleware auth & role-based access",
        "httpOnly cookie vs localStorage untuk token",
        "Logout & token revocation",
      ],
      items: [],
    },
    {
      slug: "validasi-error",
      title: "Validasi & Error Handling",
      description:
        "API production tidak pernah percaya input — dan tidak pernah bocorkan stack trace.",
      topics: [
        "Validasi body/params dengan Zod",
        "Error handler terpusat di Express",
        "Custom error class (NotFoundError, ValidationError)",
        "async error & pola wrapper",
        "Logging terstruktur (pino)",
        "Pesan error untuk user vs untuk developer",
      ],
      items: [],
    },
    {
      slug: "file-email",
      title: "File Upload & Email",
      description: "Dua kebutuhan yang muncul di hampir setiap proyek nyata.",
      topics: [
        "Upload dengan multer & validasi file",
        "Menyimpan ke disk vs object storage (S3-compatible)",
        "Kirim email (nodemailer) & template",
        "Background job sederhana untuk tugas lambat",
        "Serving file dengan aman",
      ],
      items: [],
    },
    {
      slug: "testing-api",
      title: "Testing API",
      description:
        "Integration test dengan supertest: kontrak API yang terjaga.",
      topics: [
        "Unit vs integration test untuk API",
        "supertest: request & assert response",
        "Test database terpisah & cleanup",
        "Menguji auth flow lengkap",
        "Coverage yang bermakna (bukan angka 100%)",
      ],
      items: [],
    },
    {
      slug: "keamanan",
      title: "Keamanan Dasar",
      description:
        "OWASP untuk pemula: lubang yang paling sering menghancurkan aplikasi junior.",
      topics: [
        "SQL injection & kenapa ORM/parameterized query menyelamatkan",
        "XSS & sanitasi output",
        "CORS: paham betulan, bukan copy-paste",
        "Rate limiting & brute force protection",
        "helmet & security header",
        "Secrets management: jangan commit .env",
        "Checklist keamanan sebelum deploy",
      ],
      items: [],
    },
  ],
};
