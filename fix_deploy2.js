const fs = require('fs');
let file = fs.readFileSync('src/data/tracks/deployment.ts', 'utf8');

// Replace language: "js" with language: "text" globally
file = file.replace(/language:\s*"js"/g, 'language: "text"');

// Fix deploy-6-3 back to js since it's actually JS (Sentry.init)
file = file.replace(
  /id:\s*"deploy-6-3"[\s\S]*?language:\s*"text"/,
  (match) => match.replace('language: "text"', 'language: "js"')
);

// Fix instruction for deploy-5-4
file = file.replace(
  'instruction:\n            "Tambahkan kondisi kondisional agar langkah ini hanya tereksekusi bila branch yang merujuk adalah refs/heads/main.",',
  'instruction:\n            "Tambahkan blok kondisional (if) agar job deployment ini hanya dijalankan apabila cabang asal (referensi head) merujuk tepat ke branch utama (main).",'
);

// Fix instruction for deploy-5-6
file = file.replace(
  'instruction:\n            "Apa sebutan fitur CI/CD yang meng-hosting secara temporer setiap PR ke URL unik sebelum di-merge? Jawab dengan `Preview Deployment`.",',
  'instruction:\n            "Apa sebutan fitur CI/CD yang meng-hosting secara temporer setiap PR ke URL unik sebelum digabungkan? (Terdiri dari dua kata bahasa Inggris berawalan P dan D).",'
);

// Fix instruction for deploy-6-3
file = file.replace(
  'instruction:\n            "Aktifkan pelacakan error dengan menyuplai konfigurasi objek yang memiliki properti dsn dengan nilai literal \'my-dsn\'.",',
  'instruction:\n            "Panggil fungsi inisialisasi dari objek Sentry dan masukkan objek konfigurasi berisi key rahasia pengenal proyek yang bernilai string `my-dsn`.",'
);

// Fix instruction for deploy-6-6
file = file.replace(
  'instruction:\n            "Apa nama aktivitas atau laporan formal yang disusun tim teknik pasca-insiden demi merefleksikan kegagalan sistem tanpa saling menuding? Jawab dengan `Post-Mortem`.",',
  'instruction:\n            "Apa nama dokumen atau sesi laporan evaluasi yang dilakukan tim setelah terjadi insiden kegagalan sistem? (Sering disebut P.M, gunakan tanda hubung di tengah).",'
);

// Fallbacks for the ones I messed up earlier in case they reverted back to original text due to git checkout
file = file.replace(
  'instruction:\n            "Tuliskan pengecekan branch main `if: github.ref == \\\'refs/heads/main\\\'`.",',
  'instruction:\n            "Tambahkan blok kondisional (if) agar job deployment ini hanya dijalankan apabila cabang asal (referensi head) merujuk tepat ke branch utama (main).",'
);

file = file.replace(
  'instruction:\n            "Tuliskan komentar `// Preview deployments generate unique staging URLs per PR`.",\n          starterCode: "",\n          language: "text",\n          tests: [\n            {\n              pattern: "//\\\\s*Preview\\\\s+deployments\\\\s+generate\\\\s+unique\\\\s+staging\\\\s+URLs\\\\s+per\\\\s+PR",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Preview deployments generate unique staging URLs per PR",',
  'instruction:\n            "Apa sebutan fitur CI/CD yang meng-hosting secara temporer setiap PR ke URL unik sebelum digabungkan? (Terdiri dari dua kata bahasa Inggris berawalan P dan D).",\n          starterCode: "# Fitur: \\n",\n          language: "text",\n          tests: [\n            {\n              pattern: "^Preview Deployment$",\n              message: "Tuliskan Preview Deployment",\n            },\n          ],\n          solution: "Preview Deployment",'
);

file = file.replace(
  'instruction:\n            "Tuliskan inisialisasi Sentry `Sentry.init({ dsn: \\\'my-dsn\\\' });`.",',
  'instruction:\n            "Panggil fungsi inisialisasi dari objek Sentry dan masukkan objek konfigurasi berisi key rahasia pengenal proyek yang bernilai string `my-dsn`.",'
);

file = file.replace(
  'instruction:\n            "Tuliskan komentar `// Write blameless post-mortems to improve system resilience`.",\n          starterCode: "",\n          language: "text",\n          tests: [\n            {\n              pattern: "//\\\\s*Write\\\\s+blameless\\\\s+post-mortems\\\\s+to\\\\s+improve\\\\s+system\\\\s+resilience",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Write blameless post-mortems to improve system resilience",',
  'instruction:\n            "Apa nama dokumen atau sesi laporan evaluasi yang dilakukan tim setelah terjadi insiden kegagalan sistem? (Sering disebut P.M, gunakan tanda hubung di tengah).",\n          starterCode: "# Aktivitas: \\n",\n          language: "text",\n          tests: [\n            {\n              pattern: "^Post-Mortem$",\n              message: "Jawabannya adalah Post-Mortem",\n            },\n          ],\n          solution: "Post-Mortem",'
);

// One more check on deploy-6-2 and deploy-6-4 and deploy-6-1 language js which were fixed globally above

fs.writeFileSync('src/data/tracks/deployment.ts', file);
console.log('Fixed additional instructions');
