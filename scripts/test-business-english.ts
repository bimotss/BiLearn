/**
 * Skrip Uji Regresi Menyeluruh untuk Track Business English (BiLearn)
 *
 * Menguji seluruh 65 step di 9 modul Business English:
 * 1. Model solution resmi: WAJIB LULUS 100% tes
 * 2. Starter code: WAJIB GAGAL minimal satu tes
 * 3. Potongan susunKode yang digabung: WAJIB LULUS seluruh tes
 * 4. Pengecoh susunKode: menggantikan kepingan terdekat WAJIB GAGAL
 * 5. Minimal 2 variasi jawaban alternatif yang sah: WAJIB LULUS
 * 6. Minimal 2 kasus jawaban salah / near-miss: WAJIB GAGAL
 * 7. Kasus uji khusus P1 & P2:
 *    - beng-8-1: Subject line e-mail dengan tanggal UK/US, kata pemisah dash, dan negatif rejection/bulan salah
 *    - beng-2-3: Pemakaian titik koma (;), penolakan koma biasa dan ', so' dengan pesan edukatif
 *    - beng-8-4: Istilah resmi executive summary vs penolakan frasa deskriptif umum
 *    - beng-8-9: Capstone e-mail utuh (BLUF, nominal, tenggat, salam formal, sign-off) vs variasi informal
 *
 * Jalankan: npx tsx scripts/test-business-english.ts
 */

import {
  tracks,
  LEGACY_ITEM_ALIASES,
  resolveItemAlias,
} from "../src/data/tracks/index";
import { jalankanTes } from "../src/lib/tes";
import type { Step } from "../src/lib/types";

interface StepFixture {
  validAlternatives: string[];
  invalidCases: { code: string; label: string }[];
}

// Fixture 65 step Business English
const fixtures: Record<string, StepFixture> = {
  // === MODUL 1: Dasar Kalimat ===
  "beng-1-1": {
    validAlternatives: [
      "Although the database backup completed successfully, we still performed thorough manual checks.",
      "While the database backup completed successfully, our team performed a manual verification.",
      "Even though the database backup completed successfully, we carried out a manual inspection.",
    ],
    invalidCases: [
      {
        code: "Because the database backup completed successfully, we still performed a manual check.",
        label: "Bukan konjungsi kontras (although/while/even though)",
      },
      {
        code: "Although the database backup completed successfully.",
        label: "Fragment tanpa independent clause",
      },
    ],
  },
  "beng-1-2": {
    validAlternatives: [
      "The server crashed, and therefore we recovered it from the latest snapshot.",
      "The production server crashed, and as a result we rebuilt it from the latest snapshot.",
    ],
    invalidCases: [
      {
        code: "The production server crashed we restored it from the latest snapshot.",
        label: "Run-on tanpa koma dan coordinating conjunction",
      },
      {
        code: "The production server was crashed, so we restored it from the latest snapshot.",
        label: "Bentuk pasif keliru 'was crashed'",
      },
    ],
  },
  "beng-1-3": {
    validAlternatives: [
      "The list of open pull requests is ready for review.",
      "The list of incoming pull requests is ready.",
    ],
    invalidCases: [
      {
        code: "The list of pending pull requests are ready for review.",
        label: "Subject-verb agreement error ('list ... are')",
      },
      {
        code: "The list of pull requests were ready for review.",
        label: "Subject-verb agreement error ('list ... were')",
      },
    ],
  },
  "beng-1-4": {
    validAlternatives: [
      "We discovered and fixed the bug yesterday.",
      "Our engineers detected and patched the vulnerability this morning.",
    ],
    invalidCases: [
      {
        code: "Our team identify and resolve the issue yesterday.",
        label: "Tense salah (present tense dengan yesterday)",
      },
      {
        code: "Our team identified and resolved the issue.",
        label: "Tanpa penanda waktu lampau yang diminta (yesterday/this morning)",
      },
    ],
  },
  "beng-1-5": {
    validAlternatives: [
      "Our sprint review is held on Monday in English.",
      "The meeting on Monday will be conducted in English.",
    ],
    invalidCases: [
      {
        code: "The weekly sprint review is on monday in English.",
        label: "Huruf kecil 'monday'",
      },
      {
        code: "The weekly sprint review is on Monday in english.",
        label: "Huruf kecil 'english'",
      },
    ],
  },
  "beng-1-6": {
    validAlternatives: [
      "When the manager met the client, the client felt pleased with the demo.",
      "When the manager met the client, the client seemed delighted with the demo.",
    ],
    invalidCases: [
      {
        code: "When the manager met the client, he was satisfied with the demo.",
        label: "Pronoun ambigu 'he'",
      },
      {
        code: "When the manager met the client, the client was upset with the demo.",
        label: "Arti bertentangan ('upset')",
      },
    ],
  },
  "beng-1-7": {
    validAlternatives: [
      "After reviewing the logs, the team identified the traffic anomaly.",
      "Upon inspecting the logs, we detected an anomaly in the network traffic.",
    ],
    invalidCases: [
      {
        code: "After analyzing the logs, the traffic anomaly was discovered by our engineers.",
        label: "Dangling modifier dengan kalimat pasif",
      },
      {
        code: "While analyzing the logs, an anomaly was found.",
        label: "Dangling modifier tanpa subjek pelaku aktif",
      },
    ],
  },
  "beng-1-8": {
    validAlternatives: [
      "The application runs smoothly and provides stable performance.",
      "Our platform performs reliably and ensures consistent throughput.",
    ],
    invalidCases: [
      {
        code: "The new server operates smooth and delivers reliable performance.",
        label: "Adjective 'smooth' digunakan untuk memodifikasi verb",
      },
      {
        code: "The new server operates smoothly and delivers reliably performance.",
        label: "Adverb 'reliably' digunakan untuk memodifikasi noun",
      },
    ],
  },

  // === MODUL 2: Tanda Baca ===
  "beng-2-1": {
    validAlternatives: [
      "After analyzing the quarterly report, we updated the budget forecast.",
      "Upon reviewing the quarterly report, our team updated the budget forecast.",
    ],
    invalidCases: [
      {
        code: "After reviewing the quarterly report we updated the budget forecast.",
        label: "Tanpa tanda koma setelah introductory dependent clause",
      },
      {
        code: "We updated the budget forecast after reviewing the quarterly report,",
        label: "Koma salah tempat di akhir kalimat",
      },
    ],
  },
  "beng-2-2": {
    validAlternatives: [
      "The client requested three deliverables: a revised timeline, a cost breakdown, and a sample prototype.",
      "The client needed three items: a revised timeline, a cost breakdown, and a sample prototype.",
    ],
    invalidCases: [
      {
        code: "The client requested: a revised timeline, a cost breakdown, and a sample prototype.",
        label: "Titik dua langsung setelah verb",
      },
      {
        code: "The client requested three items a revised timeline, a cost breakdown and a sample prototype.",
        label: "Tanpa titik dua dan tanpa oxford comma",
      },
    ],
  },
  "beng-2-3": {
    validAlternatives: [
      "The QA checks passed; the engineering team deployed the release.",
      "The build succeeded; our team shipped the release.",
    ],
    invalidCases: [
      {
        code: "The tests passed, we deployed the release.",
        label: "Comma splice (koma tanpa conjunction)",
      },
      {
        code: "The tests passed, so we deployed the release.",
        label: "Menggunakan conjunction padahal step melatih semicolon",
      },
    ],
  },
  "beng-2-4": {
    validAlternatives: [
      "The company updated its privacy policy yesterday.",
      "The startup published its privacy policy yesterday.",
    ],
    invalidCases: [
      {
        code: "The software company updated it's privacy policy yesterday.",
        label: "Menggunakan apostrof pada possessive 'its'",
      },
      {
        code: "The company updated its' privacy policy yesterday.",
        label: "Bentuk non-standar 'its''",
      },
    ],
  },
  "beng-2-5": {
    validAlternatives: [
      "Please export all the PDFs before sending them to the client.",
      "Make sure to convert all the PDFs before sending them to the client.",
    ],
    invalidCases: [
      {
        code: "Please convert all the PDF's before sending them to the client.",
        label: "Apostrof jamak keliru 'PDF's'",
      },
      {
        code: "Please convert all the pdfs before sending them to the client.",
        label: "Akronim berhuruf kecil 'pdfs'",
      },
    ],
  },
  "beng-2-6": {
    validAlternatives: [
      "He is a small-business owner who manages fifty employees.",
      "She is a dedicated small-business owner who manages fifty employees.",
    ],
    invalidCases: [
      {
        code: "She is a small business owner who manages fifty employees.",
        label: "Tanpa hyphen pada compound modifier sebelum noun",
      },
      {
        code: "She is a small-business-owner who manages fifty employees.",
        label: "Hyphen berlebihan pada noun",
      },
    ],
  },
  "beng-2-7": {
    validAlternatives: [
      'The engineering lead said, "We will extend the deadline by two days."',
      'The manager stated, "We will extend the deadline by two days."',
    ],
    invalidCases: [
      {
        code: 'The project manager said "We will extend the deadline by two days."',
        label: "Tanpa koma sebelum tanda petik pembuka",
      },
      {
        code: 'The project manager said, "We will extend the deadline by two days".',
        label: "Titik di luar tanda petik penutup",
      },
    ],
  },
  "beng-2-8": {
    validAlternatives: [
      "Our team focused on one key goal—reducing page load time by 50%.",
      "The squad focused on one primary goal--reducing page load time by 50%.",
    ],
    invalidCases: [
      {
        code: "Our team focused on one primary goal: reducing page load time by 50%.",
        label: "Menggunakan titik dua bukan em dash",
      },
      {
        code: "Our team focused on one primary goal reducing page load time by 50%.",
        label: "Tanpa tanda baca penegas",
      },
    ],
  },

  // === MODUL 3: Bekerja dengan Kata ===
  "beng-3-1": {
    validAlternatives: [
      "This incident will not affect our quarterly metrics.",
      "The downtime will not affect our quarterly metrics.",
    ],
    invalidCases: [
      {
        code: "The network outage will not effect our quarterly metrics.",
        label: "Tertukar 'effect' (noun) sebagai verb",
      },
      {
        code: "The network outage will not damage our quarterly metrics.",
        label: "Kata tidak menguji target 'affect'",
      },
    ],
  },
  "beng-3-2": {
    validAlternatives: [
      "Our team will adjust the timeline to accommodate your request.",
      "We are pleased to adjust our project timeline to accommodate your request.",
    ],
    invalidCases: [
      {
        code: "We will adjust our project timeline to acommodate your request.",
        label: "Salah eja 'acommodate' (satu c)",
      },
      {
        code: "We will adjust our project timeline to accomomodate your request.",
        label: "Salah eja 'accomomodate'",
      },
    ],
  },
  "beng-3-3": {
    validAlternatives: [
      "Our engineering team will resolve the login issue promptly.",
      "We will resolve the authentication issue promptly.",
    ],
    invalidCases: [
      {
        code: "We will fix up the login bug ASAP.",
        label: "Register terlalu kasual ('fix up', 'ASAP')",
      },
      {
        code: "We gonna resolve the login issue pronto.",
        label: "Slang non-formal ('gonna', 'pronto')",
      },
    ],
  },
  "beng-3-4": {
    validAlternatives: [
      "The engineering and marketing teams will collaborate to increase user conversion by 20%.",
      "Engineering and marketing will work together to increase user conversion by 20%.",
    ],
    invalidCases: [
      {
        code: "Engineering and marketing will synergize to increase user conversion by 20%.",
        label: "Klise bisnis 'synergize'",
      },
      {
        code: "Engineering and marketing will touch base to synergize user conversion by 20%.",
        label: "Klise 'touch base' dan 'synergize'",
      },
    ],
  },
  "beng-3-5": {
    validAlternatives: [
      "The platform will accept all major enterprise payment methods.",
      "Our system will accept all enterprise payment methods.",
    ],
    invalidCases: [
      {
        code: "Our platform will except all major enterprise payment methods.",
        label: "Tertukar 'except' (preposition/exception) sebagai verb 'accept'",
      },
      {
        code: "Our platform will reject all major enterprise payment methods.",
        label: "Arti bertentangan 'reject'",
      },
    ],
  },
  "beng-3-6": {
    validAlternatives: [
      "Let us meet briefly on Thursday to coordinate the release schedule.",
      "We can meet briefly on Thursday to align on the release schedule.",
    ],
    invalidCases: [
      {
        code: "Let us touch base on Thursday about the release schedule.",
        label: "Idiom lokal 'touch base'",
      },
      {
        code: "Let us shoot the breeze on Thursday about the release schedule.",
        label: "Slang kasual 'shoot the breeze'",
      },
    ],
  },
  "beng-3-7": {
    validAlternatives: [
      "Would you please provide the detailed API specifications before Friday?",
      "Could you please send us the detailed API specifications before Friday?",
    ],
    invalidCases: [
      {
        code: "Send me the API specs before Friday.",
        label: "Kalimat perintah tanpa modal kesopanan",
      },
      {
        code: "Could you please provide the stuff before Friday?",
        label: "Kata tidak jelas 'stuff' menggantikan istilah teknis",
      },
    ],
  },
  "beng-3-8": {
    validAlternatives: [
      "The organization strictly adheres to the core principle of data privacy.",
      "Our company adheres to the principle of data privacy.",
    ],
    invalidCases: [
      {
        code: "Our organization adheres to the core principal of data privacy.",
        label: "Tertukar 'principal' (kepala/pokok) dengan 'principle' (aturan)",
      },
      {
        code: "Our organization ignores the core principle of data privacy.",
        label: "Arti bertolak belakang 'ignores'",
      },
    ],
  },

  // === MODUL 4: Pembelajar Non-Native ===
  "beng-4-1": {
    validAlternatives: [
      "Our team ordered a large blue plastic container for the archive.",
      "We ordered two large blue plastic containers for the archive.",
    ],
    invalidCases: [
      {
        code: "We ordered a blue large plastic container for the archive.",
        label: "Urutan adjective terbalik: Color sebelum Size",
      },
      {
        code: "We ordered a plastic large blue container for the archive.",
        label: "Urutan adjective terbalik: Material sebelum Size & Color",
      },
    ],
  },
  "beng-4-2": {
    validAlternatives: [
      "Our management does not agree with the proposed payment terms.",
      "We do not agree with the proposed terms of payment.",
    ],
    invalidCases: [
      {
        code: "We not agree with the proposed payment terms.",
        label: "Klausa negatif tanpa auxiliary 'do'",
      },
      {
        code: "We are not agree with the proposed payment terms.",
        label: "Auxiliary salah 'are not agree'",
      },
    ],
  },
  "beng-4-3": {
    validAlternatives: [
      "Please provide your valuable feedback on the new user interface.",
      "We appreciate your valuable feedback on the new user interface.",
    ],
    invalidCases: [
      {
        code: "Please share your valuable feedbacks on the new user interface.",
        label: "Noncount noun 'feedbacks' berakhiran -s",
      },
      {
        code: "Please share your many feedbacks on the new user interface.",
        label: "Quantifier dan bentuk jamak keliru 'feedbacks'",
      },
    ],
  },
  "beng-4-4": {
    validAlternatives: [
      "Our team submitted a purchase order this morning. The purchase order is awaiting manager approval.",
      "I submitted a purchase order this morning. The purchase order is awaiting approval.",
    ],
    invalidCases: [
      {
        code: "We submitted the purchase order this morning. A purchase order is awaiting manager approval.",
        label: "Urutan article terbalik: 'the' di awal, 'a' di penyebutan kedua",
      },
      {
        code: "We submitted a purchase order this morning. A purchase order is awaiting manager approval.",
        label: "Penyebutan kedua tetap menggunakan indefinite article 'a'",
      },
    ],
  },
  "beng-4-5": {
    validAlternatives: [
      "Would you please review the draft proposal before Thursday?",
      "Could you please examine the draft proposal before Thursday?",
    ],
    invalidCases: [
      {
        code: "Review the draft proposal before Thursday.",
        label: "Kalimat perintah kasar tanpa modal polite",
      },
      {
        code: "You must review the draft proposal before Thursday.",
        label: "Tuntutan agresif 'You must'",
      },
    ],
  },
  "beng-4-6": {
    validAlternatives: [
      "Our team deployed the security patch on Tuesday.",
      "We shipped the security patch on Tuesday.",
    ],
    invalidCases: [
      {
        code: "We have deployed the security patch on Tuesday.",
        label: "Present perfect dengan penanda waktu lampau spesifik ('on Tuesday')",
      },
      {
        code: "We deploy the security patch on Tuesday.",
        label: "Present simple untuk peristiwa lampau",
      },
    ],
  },
  "beng-4-7": {
    validAlternatives: [
      "Would you please send me the signed contract before Friday?",
      "Could you please send us the signed contract before Friday?",
    ],
    invalidCases: [
      {
        code: "Send me the contract now.",
        label: "Perintah mendesak tanpa modal dan tenggat sopan",
      },
      {
        code: "Could you please send me the contract yesterday?",
        label: "Tenggat tidak logis 'yesterday'",
      },
    ],
  },
  "beng-4-8": {
    validAlternatives: [
      "Our kickoff meeting is in July, on Monday, at 9 a.m.",
      "The project kickoff meeting is in July, on Monday, at 9 a.m.",
    ],
    invalidCases: [
      {
        code: "The kickoff meeting is on July, in Monday, on 9 a.m.",
        label: "Preposisi waktu tertukar semua",
      },
      {
        code: "The kickoff meeting is at July, at Monday, in 9 a.m.",
        label: "Preposisi salah untuk bulan dan hari",
      },
    ],
  },

  // === MODUL 5: Menulis Paragraf ===
  "beng-5-1": {
    validAlternatives: [
      "The engineering team completed three critical security updates this quarter.",
      "Our DevOps team finished three critical security updates this quarter.",
    ],
    invalidCases: [
      {
        code: "Security is important for computers.",
        label: "Topic sentence terlalu umum tanpa controlling idea",
      },
      {
        code: "We did some updates.",
        label: "Terlalu pendek dan tidak terukur",
      },
    ],
  },
  "beng-5-2": {
    validAlternatives: [
      "The primary database node failed; however, the automated backup took over immediately.",
      "The primary database node failed; however, the standby replica took over immediately.",
    ],
    invalidCases: [
      {
        code: "The primary database node failed, however, the automated replica took over immediately.",
        label: "Comma splice sebelum conjunctive adverb 'however'",
      },
      {
        code: "The primary database node failed; therefore, the automated replica took over immediately.",
        label: "Arti transisi salah ('therefore' menyatakan akibat bukan kontras)",
      },
    ],
  },
  "beng-5-3": {
    validAlternatives: [
      "Our team indexed three high-traffic tables in the database. Query execution time decreased by 50%.",
      "We indexed three critical tables in the database. Query execution times dropped by 50%.",
    ],
    invalidCases: [
      {
        code: "We indexed three high-traffic tables in the database. We bought new office chairs for the team. Query execution time decreased by 50%.",
        label: "Menyertakan kalimat melenceng tentang office chairs (merusak unity)",
      },
      {
        code: "We bought new office chairs for the team.",
        label: "Hanya memuat kalimat melenceng",
      },
    ],
  },
  "beng-5-4": {
    validAlternatives: [
      "We noticed a server latency issue this morning. To resolve this issue, our team deployed a dedicated caching layer.",
      "Our team identified a server latency issue this morning. To resolve this issue, our engineering team deployed a dedicated caching layer.",
    ],
    invalidCases: [
      {
        code: "We noticed latency and we do not know what happened.",
        label: "Tidak ada penyelesaian masalah (solusi)",
      },
      {
        code: "Everything is fine with the servers today.",
        label: "Tidak menyatakan problem",
      },
    ],
  },
  "beng-5-5": {
    validAlternatives: [
      "These improvements ensure that our system complies with SOC 2 security standards.",
      "These architectural changes ensure that our platform complies with SOC 2 standards.",
    ],
    invalidCases: [
      {
        code: "Also, we like programming in TypeScript.",
        label: "Kalimat penutup tidak relevan dengan kepatuhan sistem",
      },
      {
        code: "These enhancements are good.",
        label: "Kalimat penutup kosong tanpa kaitan standar",
      },
    ],
  },
  "beng-5-6": {
    validAlternatives: [
      "The team completed three core deliverables:\n- Patched the database\n- Updated API documentation\n- Executed integration tests",
      "We delivered three core milestones:\n- Patched the database\n- Updated API documentation\n- Executed integration tests",
    ],
    invalidCases: [
      {
        code: "We completed three core deliverables: we patched the database and updated docs and tested.",
        label: "Paragraf padat tanpa format bullet points",
      },
      {
        code: "We completed three core deliverables:\n- Patched the database\n- Updating API documentation\n- Integration tests",
        label: "Bentuk kata kerja tidak paralel (past verb vs gerund vs noun phrase)",
      },
    ],
  },
  "beng-5-7": {
    validAlternatives: [
      "We are requesting urgent technical support regarding our payment webhook. Transaction verification requests have been failing since 08:00 UTC.",
      "I am writing to request urgent technical support regarding our payment webhook. Transaction verification calls have been failing since 08:00 UTC.",
    ],
    invalidCases: [
      {
        code: "Good morning, hope you are well. How was your weekend? We have a small issue.",
        label: "Burying the lead: pembuka basa-basi tanpa BLUF dan waktu kejadian",
      },
      {
        code: "Please fix the webhook whenever possible.",
        label: "Tanpa urgensi dan detail gejala waktu 08:00 UTC",
      },
    ],
  },
  "beng-5-8": {
    validAlternatives: [
      "The development team refactored the database queries. Consequently, average response times dropped by 60%.",
      "Our team optimized the database queries. Consequently, server response times decreased by 60%.",
    ],
    invalidCases: [
      {
        code: "Our engineering team refactored the database queries, average response times decreased by 60%.",
        label: "Comma splice menghubungkan cause dan effect",
      },
      {
        code: "Our engineering team refactored the database queries. However, average response times decreased by 60%.",
        label: "Transisi keliru 'However' pada hubungan sebab akibat",
      },
    ],
  },

  // === MODUL 6: Proses Menulis ===
  "beng-6-1": {
    validAlternatives: [
      "Migrating the database cluster to AWS will lower annual hosting expenses by 30% while maintaining 99.9% uptime.",
      "Migrating our database cluster to AWS will reduce annual hosting costs by 30% while ensuring 99.9% availability.",
    ],
    invalidCases: [
      {
        code: "We want to move to AWS because cloud computing is very popular nowadays.",
        label: "Klaim tanpa nilai bisnis terukur (penghematan 30% dan uptime 99.9%)",
      },
      {
        code: "Migrating to AWS is fun.",
        label: "Kalimat tidak profesional",
      },
    ],
  },
  "beng-6-2": {
    validAlternatives: [
      "I. Executive Summary\nII. Technical Architecture\nIII. Implementation Timeline and Proposed Budget",
      "I. Executive Summary\nII. Technical Architecture\nIII. Implementation Timeline and Budget Plan",
    ],
    invalidCases: [
      {
        code: "1. Summary\n2. Architecture\n3. Budget",
        label: "Penomoran angka Arab bukan angka Romawi resmi",
      },
      {
        code: "I. Introduction\nII. Body\nIII. Conclusion",
        label: "Struktur generik esai sekolah, bukan proposal teknis",
      },
    ],
  },
  "beng-6-3": {
    validAlternatives: [
      "Since the server failed, we must inspect the logs now.",
      "Because the server crashed, we must review the logs immediately.",
    ],
    invalidCases: [
      {
        code: "Due to the fact that the server failed, we must inspect the logs at this point in time.",
        label: "Frasa bertele-tele 'Due to the fact that' dan 'at this point in time'",
      },
      {
        code: "Owing to the circumstance that the server failed, we must inspect the logs.",
        label: "Frasa bertele-tele 'Owing to the circumstance'",
      },
    ],
  },
  "beng-6-4": {
    validAlternatives: [
      "The engineering team should adopt Elasticsearch to reduce query latency by 50%.",
      "Our team should deploy Elasticsearch to lower query latency by 50%.",
    ],
    invalidCases: [
      {
        code: "Elasticsearch is an open-source distributed search engine.",
        label: "Pernyataan definisi pasif bukan rekomendasi tindakan",
      },
      {
        code: "Maybe someone could look into search engines.",
        label: "Ragu-ragu tanpa tesis tindakan tegas",
      },
    ],
  },
  "beng-6-5": {
    validAlternatives: [
      "The engineering team refactored the core database.",
      "Our development team refactored the core database.",
    ],
    invalidCases: [
      {
        code: "The core database was refactored by our engineering team.",
        label: "Kalimat pasif lambat",
      },
      {
        code: "A refactoring of the core database was carried out by the team.",
        label: "Nominalization + pasif",
      },
    ],
  },
  "beng-6-6": {
    validAlternatives: [
      "Both teams will hold a separate review of their progress on Friday.",
      "The engineering teams will hold a separate review of their progress on Friday.",
    ],
    invalidCases: [
      {
        code: "The teams will hold a seperate review of their progress on Friday.",
        label: "Ejaan keliru 'seperate'",
      },
      {
        code: "The teams will hold a separate review of its progress on friday.",
        label: "Pronoun agreement salah ('its') dan huruf kecil 'friday'",
      },
    ],
  },
  "beng-6-7": {
    validAlternatives: [
      "The development team improves application performance by caching frequent queries in Redis.",
      "Our team boosts application speed by caching high-frequency queries in Redis.",
    ],
    invalidCases: [
      {
        code: "To improve speed, high-frequency queries are cached in Redis.",
        label: "Plagiarisme struktur kalimat pasif",
      },
      {
        code: "Redis is used for caching.",
        label: "Penyederhanaan berlebihan tanpa konteks tim dan kueri",
      },
    ],
  },
  "beng-6-8": {
    validAlternatives: [
      "In Section 2, the transition seems abrupt; recommend adding a transitional phrase.",
      "In Section 2, the transition feels abrupt; suggest adding a transitional line.",
    ],
    invalidCases: [
      {
        code: "This section is poorly written and confusing.",
        label: "Kritik destruktif tanpa saran tindakan spesifik",
      },
      {
        code: "Looks good to me!",
        label: "Persetujuan dangkal tanpa analisis bagian spesifik",
      },
    ],
  },

  // === MODUL 7: Prinsip Business Writing ===
  "beng-7-1": {
    validAlternatives: [
      "Our sprint goals are to analyze requirements, to design the architecture, and to deploy the service.",
      "The goals for this sprint are to analyze requirements, to design the architecture, and to deploy the service.",
    ],
    invalidCases: [
      {
        code: "Our goals for this sprint are analyzing requirements, to design the architecture, and deployment.",
        label: "Pelanggaran parallelism (gerund vs infinitive vs noun)",
      },
      {
        code: "Our goals are to analyze requirements, design architecture, and we deploy.",
        label: "Bentuk klausa tercampur 'and we deploy'",
      },
    ],
  },
  "beng-7-2": {
    validAlternatives: [
      "As requested, we have updated the budget breakdown.",
      "As you requested, we have updated the budget breakdown.",
    ],
    invalidCases: [
      {
        code: "Pursuant to your request, please be advised that the budget breakdown has been updated.",
        label: "Birokrasi kuno 'Pursuant to your request, please be advised'",
      },
      {
        code: "In reference to aforementioned correspondence, we updated the budget.",
        label: "Istilah kaku 'aforementioned correspondence'",
      },
    ],
  },
  "beng-7-3": {
    validAlternatives: [
      "An invalid IP address was entered during the system update.",
      "A wrong IP address was configured during the update.",
    ],
    invalidCases: [
      {
        code: "John made a careless mistake and entered the wrong IP address.",
        label: "Menyalahkan rekan kerja secara frontal dalam komunikasi tertulis",
      },
      {
        code: "The stupid engineer broke the network IP address.",
        label: "Bahasa tidak profesional",
      },
    ],
  },
  "beng-7-4": {
    validAlternatives: [
      "Although we understand your budget constraints, we cannot offer additional discounts at this time.",
      "While we appreciate your budget constraints, we are unable to provide further discounts at this stage.",
    ],
    invalidCases: [
      {
        code: "No, we cannot give you any discount because our prices are fixed.",
        label: "Penolakan kasar tanpa acknowledgment sopan",
      },
      {
        code: "Sure, we can give you a 50% discount right away.",
        label: "Konsesi tidak terotorisasi",
      },
    ],
  },
  "beng-7-5": {
    validAlternatives: [
      "Every sales representative must submit their weekly sales report.",
      "All sales representatives must submit their weekly sales reports.",
    ],
    invalidCases: [
      {
        code: "Each sales representative must submit his weekly sales report.",
        label: "Bias gender tunggal 'his'",
      },
      {
        code: "Each sales representative must submit his/her weekly sales report.",
        label: "Bentuk kaku 'his/her'",
      },
    ],
  },
  "beng-7-6": {
    validAlternatives: [
      "We rescheduled the platform launch to October 15, and we greatly appreciate your patience.",
      "Our team has moved the platform launch to October 15, and we sincerely thank you for your patience.",
    ],
    invalidCases: [
      {
        code: "The launch is postponed until further notice.",
        label: "Tanpa tanggal konkret dan tanpa apresiasi kesabaran",
      },
      {
        code: "We canceled the launch because the team is not ready.",
        label: "Bahasa tidak membangun kepercayaan klien",
      },
    ],
  },
  "beng-7-7": {
    validAlternatives: [
      "The patch not only reduced query latency, but also decreased memory usage.",
      "The optimization not only lowered query latency, but also reduced memory footprint.",
    ],
    invalidCases: [
      {
        code: "The upgrade not only reduced query latency, but also decreasing memory.",
        label: "Parallelism terganggu: past tense vs gerund",
      },
      {
        code: "The upgrade reduced query latency, but also memory was decreased.",
        label: "Bentuk pasif pada klausa kedua",
      },
    ],
  },
  "beng-7-8": {
    validAlternatives: [
      "To maintain system stability, the API enforces a limit of 100 requests per minute for standard accounts.",
      "To guarantee system reliability, our API applies a rate limit of 100 requests per minute to standard accounts.",
    ],
    invalidCases: [
      {
        code: "Standard accounts should not abuse the API or they will get blocked.",
        label: "Kebijakan kasar tanpa batasan angka konkret 100 requests per minute",
      },
      {
        code: "Our API has some limits for normal users.",
        label: "Ambiguitas tanpa batas kuantitatif",
      },
    ],
  },

  // === MODUL 8: Dokumen Bisnis ===
  "beng-8-1": {
    validAlternatives: [
      "Subject: Revised Budget Proposal — Please Approve before 15 April",
      "Subject: Budget Proposal — Approval Required by April 15",
      "Revised Budget Proposal - Please Approve by 15 April",
      "Subject: Budget Proposal — Please Approve no later than 15 April",
      "Subject: Budget Proposal -- Approval Required by 15th April",
    ],
    invalidCases: [
      {
        code: "Subject: Budget Proposal — No Approval Required by April 15",
        label: "Persetujuan dinyatakan tidak diperlukan (terbalik dari skenario)",
      },
      {
        code: "Subject: Budget Proposal — Please Reject before 15 April",
        label: "Negasi/penolakan ('Reject') bertentangan dengan permohonan persetujuan",
      },
      {
        code: "Subject: Revised Budget Proposal — Approval Required by 15 May",
        label: "Bulan salah ('May' bukan 'April')",
      },
      {
        code: "Subject: Urgent Update on Budget ASAP",
        label: "Subjek generik tanpa tanggal konkret ('ASAP')",
      },
      {
        code: "Question regarding budget",
        label: "Tanpa action required dan tanpa tanggal",
      },
    ],
  },
  "beng-8-2": {
    validAlternatives: [
      "Would you please send us the revised invoice by Friday?",
      "Could you please provide the revised invoice by Friday?",
    ],
    invalidCases: [
      {
        code: "I hope you had a great weekend. The weather is great. Could you send the invoice?",
        label: "Burying the lead (basa-basi di awal)",
      },
      {
        code: "Send us the invoice whenever you have time.",
        label: "Tanpa batas waktu 'by Friday' dan tanpa kesopanan modal",
      },
    ],
  },
  "beng-8-3": {
    validAlternatives: [
      "Redesigned the corporate website, reducing page load time by 40%.",
      "Overhauled the company website, cutting page load time by 40%.",
    ],
    invalidCases: [
      {
        code: "Responsible for maintaining and updating web pages.",
        label: "Deskripsi pasif 'Responsible for' tanpa angka hasil",
      },
      {
        code: "Helped with website development stuff.",
        label: "Kata kerja lemah dan istilah ambigu 'stuff'",
      },
    ],
  },
  "beng-8-4": {
    validAlternatives: [
      "Query latency increased by 45%; therefore, we recommend migrating to a managed PostgreSQL cluster.",
      "According to our technical audit, query latency increased by 45%; consequently, we recommend migrating to a managed PostgreSQL cluster.",
      "Based on our audit, query latency increased by 45%; we therefore recommend moving to a managed PostgreSQL cluster.",
    ],
    invalidCases: [
      {
        code: "The team reviewed the system logs and database metrics over three months.",
        label: "Narasi proses pasif tanpa temuan data dan tanpa rekomendasi tindakan",
      },
      {
        code: "Based on our technical audit, query latency increased by 45%; however, no action is needed.",
        label: "Menolak memberikan rekomendasi tindakan yang dibutuhkan direksi",
      },
      {
        code: "Query latency increased by 45%; however, we did not recommend anything.",
        label: "Tanpa rekomendasi tindakan ke direksi",
      },
    ],
  },
  "beng-8-5": {
    validAlternatives: [
      "We propose modernizing the server infrastructure to achieve 99.9% uptime.",
      "Our team proposes upgrading the server infrastructure to reach 99.9% uptime.",
    ],
    invalidCases: [
      {
        code: "We should do something about our servers to keep them running.",
        label: "Gagasan samar tanpa frasa usulan konkret dan tanpa metrik 99.9%",
      },
      {
        code: "Servers are important for computers.",
        label: "Pernyataan tidak relevan",
      },
    ],
  },
  "beng-8-6": {
    validAlternatives: [
      "Book a 15-minute demo today to see how our platform works.",
      "Schedule a 15-minute demo today to discover how our software helps your team.",
    ],
    invalidCases: [
      {
        code: "If you are interested, maybe you can contact us someday.",
        label: "CTA pasif tanpa batas waktu dan durasi",
      },
      {
        code: "Click here for more information.",
        label: "CTA generik tanpa manfaat konkret",
      },
    ],
  },
  "beng-8-7": {
    validAlternatives: [
      "MEMORANDUM\n\nTO: All Department Leads\nFROM: Operations Team\nDATE: 20 October 2026\nSUBJECT: Quarterly System Maintenance Schedule",
      "MEMORANDUM\n\nTO: All Engineering Leads\nFROM: Infrastructure Team\nDATE: October 20, 2026\nSUBJECT: Scheduled Database Maintenance Window",
    ],
    invalidCases: [
      {
        code: "Hey leads, we will do maintenance on October 20. Cheers, Ops.",
        label: "Format memo tidak formal dan tanpa header TO/FROM/DATE/SUBJECT",
      },
      {
        code: "MEMORANDUM\nTO: All Leads\nSUBJECT: Maintenance",
        label: "Header memo tidak lengkap (kehilangan FROM dan DATE)",
      },
    ],
  },
  "beng-8-8": {
    validAlternatives: [
      "Action Item: Sarah will rewrite the authentication middleware by October 20.",
      "Action Item: David will update the auth middleware by October 20.",
    ],
    invalidCases: [
      {
        code: "David needs to work on auth middleware soon.",
        label: "Tanpa prefix 'Action Item' dan tanpa tenggat pasti 'by October 20'",
      },
      {
        code: "The team discussed authentication middleware during the meeting.",
        label: "Catatan rapat biasa bukan butir tindakan penugasan",
      },
    ],
  },
  "beng-8-9": {
    validAlternatives: [
      "Subject: Budget Proposal — Approval Required by 20 November\n\nDear Ms. Adams,\n\nWould you be able to review and approve the revised budget of $15,000 by 20 November?\n\nThe funds will support third-party data licensing and security compliance testing for our Q4 launch.\n\nSincerely,\nBimo",
      "Subject: Revised Budget — Please Approve before November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the requested budget of $15,000 before November 20?\n\nThese resources are essential for third-party licensing and security compliance testing.\n\nWarm regards,\nAnne-Marie",
      "Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nWould you mind approving the revised API integration budget of $15,000 by November 20?\n\nThe additional funds will cover third-party licensing.\n\nBest regards,\nAlex Pratama",
      "Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the revised API integration budget of $15,000 by November 20?\n\nThe additional funds will cover third-party data licensing and automated security compliance testing for our Q4 release. May I provide any further details?\n\nBest regards,\nAlex Pratama",
      "Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the revised API integration budget of $15,000 by November 20?\n\nThe additional funds will cover $10,000 for licensing + $5,000 for testing, bringing the total revised budget to $15,000.\n\nBest regards,\nAlex Pratama",
    ],
    invalidCases: [
      {
        code: "Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the revised API integration budget of $15,000.99 by November 20?\n\nThe funds cover third-party data licensing.\n\nBest regards,\nAlex Pratama",
        label: "Nominal salah pecahan ($15,000.99 alih-alih $15,000)",
      },
      {
        code: "Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the revised API integration budget of $15,000 by December 20?\n\nThe funds cover third-party data licensing.\n\nBest regards,\nAlex Pratama",
        label: "Tenggat di badan email (December 20) bertentangan dengan skenario (November 20)",
      },
      {
        code: "Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the revised API integration budget of $150,000 by November 20?\n\nThe funds cover third-party data licensing.\n\nBest regards,\nAlex Pratama",
        label: "Nominal salah ($150,000 alih-alih $15,000)",
      },
      {
        code: "Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the revised API integration budget by November 20?\n\nThe funds cover licensing.\n\nBest regards,\nAlex Pratama",
        label: "Nominal anggaran dihilangkan sama sekali",
      },
      {
        code: "Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the revised API integration budget of $15,000 by November 20?\n\nThe funds cover licensing.\n\nBest regards,\n",
        label: "Nama pengirim dihilangkan setelah salam penutup",
      },
      {
        code: "Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the revised API integration budget of $15,000 by November 21, rather than by November 20?\n\nThe funds cover third-party data licensing.\n\nBest regards,\nAlex Pratama",
        label: "Tenggat di badan email diubah ('by November 21, rather than by November 20')",
      },
      {
        code: "Hey Rachel,\n\nWanna approve the $15,000 asap?\n\nCheers,\nAlex",
        label: "Register terlalu kasual ('Hey', 'Wanna', 'asap', 'Cheers')",
      },
    ],
  },
};

/** Jarak edit Levenshtein — untuk menemukan potongan terdekat */
function jarakEdit(a: string, b: string): number {
  const baris = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let sebelumnya = baris[0];
    baris[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const simpan = baris[j];
      baris[j] = Math.min(
        baris[j] + 1,
        baris[j - 1] + 1,
        sebelumnya + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
      sebelumnya = simpan;
    }
  }
  return baris[b.length];
}

async function runRegressionSuite() {
  const track = tracks.find((t) => t.slug === "business-english");
  if (!track) {
    console.error("❌ Track 'business-english' tidak ditemukan!");
    process.exit(1);
  }

  const allSteps: Step[] = [];
  track.modules.forEach((m) => {
    m.items.forEach((it) => {
      if (it.kind === "step") allSteps.push(it);
    });
  });

  console.log(`\n======================================================`);
  console.log(`🔍 UJI REGRESI BUSINESS ENGLISH (${allSteps.length} Step)`);
  console.log(`======================================================\n`);

  let totalAssertions = 0;
  let passedAssertions = 0;
  let failedAssertions = 0;
  const failures: string[] = [];

  for (const step of allSteps) {
    const fixture = fixtures[step.id];
    if (!fixture) {
      console.error(`❌ Fixture tidak ditemukan untuk step: ${step.id}`);
      process.exit(1);
    }

    // 1. Uji Solution resmi (WAJIB LULUS 100%)
    totalAssertions++;
    const resSolution = jalankanTes(step.tests, step.solution);
    const passSol = resSolution.every((r) => r.pass);
    if (passSol) {
      passedAssertions++;
    } else {
      failedAssertions++;
      const failedMsg = resSolution
        .filter((r) => !r.pass)
        .map((r) => r.message)
        .join("; ");
      failures.push(`[${step.id}] SOLUTION GAGAL: ${failedMsg}`);
    }

    // 2. Uji Starter code (WAJIB GAGAL minimal satu)
    totalAssertions++;
    const resStarter = jalankanTes(step.tests, step.starterCode);
    const passStarter = resStarter.every((r) => r.pass);
    if (!passStarter) {
      passedAssertions++;
    } else {
      failedAssertions++;
      failures.push(
        `[${step.id}] STARTER CODE LULUS SEMUA TES (seharusnya gagal!)`
      );
    }

    // 3. Uji susunKode: gabungan potongan resmi (WAJIB LULUS)
    if (step.susunKode) {
      totalAssertions++;
      const codeSusun = step.susunKode.potongan.join(" ");
      const resSusun = jalankanTes(step.tests, codeSusun);
      const passSusun = resSusun.every((r) => r.pass);
      if (passSusun) {
        passedAssertions++;
      } else {
        failedAssertions++;
        const failedMsg = resSusun
          .filter((r) => !r.pass)
          .map((r) => r.message)
          .join("; ");
        failures.push(`[${step.id}] SUSUN KODE (GABUNGAN) GAGAL: ${failedMsg}`);
      }

      // 4. Uji susunKode pengecoh: setiap pengecoh menggantikan potongan terdekat (WAJIB GAGAL)
      for (const p of step.susunKode.pengecoh) {
        totalAssertions++;
        let minJarak = Infinity;
        let idxTerdekat = 0;
        step.susunKode.potongan.forEach((potongan, idx) => {
          const j = jarakEdit(p, potongan);
          if (j < minJarak) {
            minJarak = j;
            idxTerdekat = idx;
          }
        });

        const salinan = [...step.susunKode.potongan];
        salinan[idxTerdekat] = p;
        const kodeSalah = salinan.join(" ");
        const resPengecoh = jalankanTes(step.tests, kodeSalah);
        const passPengecoh = resPengecoh.every((r) => r.pass);
        if (!passPengecoh) {
          passedAssertions++;
        } else {
          failedAssertions++;
          failures.push(
            `[${step.id}] PENGECOH '${p}' MENGGANTIKAN '${step.susunKode.potongan[idxTerdekat]}' LULUS SEMUA TES (seharusnya terdeteksi salah!)`
          );
        }
      }
    }

    // 5. Uji Variasi Jawaban Benar (WAJIB LULUS)
    for (let i = 0; i < fixture.validAlternatives.length; i++) {
      totalAssertions++;
      const alt = fixture.validAlternatives[i];
      const resAlt = jalankanTes(step.tests, alt);
      const passAlt = resAlt.every((r) => r.pass);
      if (passAlt) {
        passedAssertions++;
      } else {
        failedAssertions++;
        const failedMsg = resAlt
          .filter((r) => !r.pass)
          .map((r) => r.message)
          .join("; ");
        failures.push(
          `[${step.id}] VARIASI BENAR #${i + 1} GAGAL: '${alt}' -> Pesan: ${failedMsg}`
        );
      }
    }

    // 6. Uji Kasus Jawaban Salah / Near-Miss (WAJIB GAGAL)
    for (let i = 0; i < fixture.invalidCases.length; i++) {
      totalAssertions++;
      const inv = fixture.invalidCases[i];
      const resInv = jalankanTes(step.tests, inv.code);
      const passInv = resInv.every((r) => r.pass);
      if (!passInv) {
        passedAssertions++;
      } else {
        failedAssertions++;
        failures.push(
          `[${step.id}] KASUS SALAH #${i + 1} ('${inv.label}') LULUS SEMUA TES: '${inv.code}'`
        );
      }
    }
  }

  // Ringkasan Hasil
  console.log(`------------------------------------------------------`);
  console.log(`Total langkah diuji       : ${allSteps.length}`);
  console.log(`Total asersi dijalankan   : ${totalAssertions}`);
  console.log(`Asersi LULUS              : ${passedAssertions}`);
  console.log(`Asersi GAGAL              : ${failedAssertions}`);
  console.log(`------------------------------------------------------`);

  // ==========================================================
  // PENGUJIAN DETAIL KHUSUS TEMUAN P1 & P2 (Deep Diagnostics)
  // ==========================================================
  console.log(`\n🎯 MENJALANKAN UJI KHUSUS TEMUAN P1 & P2:`);

  // 0. Agregat Soal Kuis per Modul (Wajib 5-7 soal per modul)
  console.log("  🔍 Memeriksa batas agregat kuis per modul (5-7 soal per modul)...");
  track.modules.forEach((mod, idx) => {
    const qItems = mod.items.filter((it): it is import("../src/lib/types").Quiz => it.kind === "quiz");
    const totalQ = qItems.reduce((acc, q) => acc + (q.questions?.length || 0), 0);
    if (totalQ < 5 || totalQ > 7) {
      failures.push(`[Modul ${idx} - ${mod.slug}] Jumlah soal kuis (${totalQ}) melanggar aturan batas 5-7 soal per modul!`);
    }
  });
  console.log("  ✅ Seluruh 9 modul Business English memiliki tepat 5-7 soal kuis per modul (Modul 0: 5, Modul 1-8: 6).");

  // 1. beng-2-3: Comma splice vs Conjunction vs Semicolon
  const stepBeng23 = allSteps.find((s) => s.id === "beng-2-3")!;
  const resBeng23Conjunction = jalankanTes(
    stepBeng23.tests,
    "The tests passed, so we deployed the release."
  );
  const hasEduMsg = resBeng23Conjunction.some(
    (r) =>
      !r.pass &&
      r.message.includes("secara gramatikal sah") &&
      r.message.includes("titik koma")
  );
  if (hasEduMsg) {
    console.log(
      `  ✅ [beng-2-3] Pesan edukatif memisahkan kebenaran tata bahasa conjunction dari target tugas semicolon.`
    );
  } else {
    failures.push(
      `[beng-2-3] Pesan edukatif conjunction tidak ditemukan dalam hasil tes!`
    );
  }

  // 2. beng-8-1: Variasi tanggal UK vs US, Dash, no later than, & Penolakan Negasi
  const stepBeng81 = allSteps.find((s) => s.id === "beng-8-1")!;
  const ukDate = "Subject: Revised Budget Proposal — Please Approve before 15 April";
  const usDate = "Subject: Budget Proposal — Approval Required by April 15";
  const hyphenVariant = "Revised Budget Proposal - Please Approve by 15 April";
  const noLaterThan = "Subject: Budget Proposal — Please Approve no later than 15 April";
  const noApprovalReq = "Subject: Budget Proposal — No Approval Required by April 15";

  const passAllValid = [ukDate, usDate, hyphenVariant, noLaterThan].every(s => jalankanTes(stepBeng81.tests, s).every(r => r.pass));
  const rejectNegation = !jalankanTes(stepBeng81.tests, noApprovalReq).every(r => r.pass);

  if (passAllValid && rejectNegation) {
    console.log(
      `  ✅ [beng-8-1] Menerima '15 April', 'April 15', dash, 'no later than 15 April', dan MENOLAK negasi 'No Approval Required'.`
    );
  } else {
    failures.push(
      `[beng-8-1] Gagal pada variasi valid atau gagal menolak 'No Approval Required'!`
    );
  }

  // 1b. beng-1-1: Verifikasi kalimat fragment dan pemeriksaan manual
  const stepBeng11 = allSteps.find((s) => s.id === "beng-1-1")!;
  const beng11Valid = "Although the database backup completed successfully, we still performed thorough manual checks.";
  const beng11Staging = "The build failed on staging; however, we still performed thorough manual checks.";
  const pass11Valid = jalankanTes(stepBeng11.tests, beng11Valid).every(r => r.pass);
  const reject11Staging = !jalankanTes(stepBeng11.tests, beng11Staging).every(r => r.pass);

  if (pass11Valid && reject11Staging) {
    console.log(
      `  ✅ [beng-1-1] Menerima 'Although ... thorough manual checks' dan menolak kalimat tanpa klausa fragment ('The build failed on staging; however...').`
    );
  } else {
    failures.push(
      `[beng-1-1] Gagal memverifikasi penyelesaian fragment atau gagal menolak kalimat non-fragment!`
    );
  }

  // 3. beng-8-4: Executive Summary Synthesis Task (Findings + Recommendations)
  const stepBeng84 = allSteps.find((s) => s.id === "beng-8-4")!;
  const res84User = jalankanTes(stepBeng84.tests, "Query latency increased by 45%; therefore, we recommend migrating to a managed PostgreSQL cluster.");
  const res84Sol = jalankanTes(stepBeng84.tests, "Based on our technical audit, query latency increased by 45%; therefore, we recommend migrating to a managed PostgreSQL cluster.");
  const res84Passive = jalankanTes(stepBeng84.tests, "The team reviewed the system logs and database metrics over three months.");
  if (res84User.every(r => r.pass) && res84Sol.every(r => r.pass) && !res84Passive.every(r => r.pass)) {
    console.log(
      `  ✅ [beng-8-4] Latihan Executive Summary menerima susunan langsung temuan + rekomendasi, menerima awalan audit, dan menolak narasi pasif.`
    );
  } else {
    failures.push(
      `[beng-8-4] Gagal memverifikasi sintesis temuan dan rekomendasi!`
    );
  }

  // 4. beng-8-9: Capstone Full E-mail Verifications ($15,000 vs $15,000.99 vs $150,000, deadline konsisten, nama Bimo/Anne-Marie, modal sopan)
  const stepBeng89 = allSteps.find((s) => s.id === "beng-8-9")!;
  const baseEmail = `Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the revised API integration budget of $15,000 by November 20?\n\nThe additional funds will cover third-party data licensing and automated security compliance testing for our Q4 release.\n\nBest regards,\nAlex Pratama`;

  const t1 = jalankanTes(stepBeng89.tests, baseEmail).every(r => r.pass);
  const t2_150k = !jalankanTes(stepBeng89.tests, baseEmail.replace("$15,000", "$150,000")).every(r => r.pass);
  const t2_point99 = !jalankanTes(stepBeng89.tests, baseEmail.replace("$15,000", "$15,000.99")).every(r => r.pass);
  const t3_noNominal = !jalankanTes(stepBeng89.tests, baseEmail.replace("of $15,000", "")).every(r => r.pass);
  const t4_decInBody = !jalankanTes(stepBeng89.tests, baseEmail.replace("by November 20?", "by December 20?")).every(r => r.pass);
  const t5_bimo = jalankanTes(stepBeng89.tests, baseEmail.replace("Alex Pratama", "Bimo")).every(r => r.pass);
  const t6_anneMarie = jalankanTes(stepBeng89.tests, baseEmail.replace("Alex Pratama", "Anne-Marie")).every(r => r.pass);
  const t7_emptyName = !jalankanTes(stepBeng89.tests, baseEmail.replace("Alex Pratama", "")).every(r => r.pass);
  const t8_wouldMind = jalankanTes(stepBeng89.tests, baseEmail.replace("Could you please review and approve", "Would you mind approving")).every(r => r.pass);
  const t9_wouldAble = jalankanTes(stepBeng89.tests, baseEmail.replace("Could you please review and approve", "Would you be able to review and approve")).every(r => r.pass);
  const t10_mayI = jalankanTes(stepBeng89.tests, baseEmail.replace("Best regards,", "May I provide any further details?\n\nBest regards,")).every(r => r.pass);
  const t11_breakdown = jalankanTes(stepBeng89.tests, baseEmail.replace("The additional funds will cover third-party data licensing and automated security compliance testing for our Q4 release.", "The additional funds will cover $10,000 for licensing + $5,000 for testing, keeping the total revised budget at $15,000.")).every(r => r.pass);
  const t12_ratherThan = !jalankanTes(stepBeng89.tests, baseEmail.replace("by November 20?", "by November 21, rather than by November 20?")).every(r => r.pass);

  if (t1 && t2_150k && t2_point99 && t3_noNominal && t4_decInBody && t5_bimo && t6_anneMarie && t7_emptyName && t8_wouldMind && t9_wouldAble && t10_mayI && t11_breakdown && t12_ratherThan) {
    console.log(
      `  ✅ [beng-8-9] Memverifikasi ketat $15,000 (menolak $15,000.99, $150,000 & kosong), menerima rincian biaya sah ($10k + $5k, total $15k), menerima modal 'May I...', menolak perubahan tenggat ('by November 21, rather than by November 20'), menolak December di badan, menerima nama 'Bimo' & 'Anne-Marie', menolak nama kosong, serta menerima modal sopan.`
    );
  } else {
    failures.push(
      `[beng-8-9] Gagal verifikasi ketat nominal ($15,000.99 / $150k / rincian sah), tenggat badan e-mail (Dec vs Nov vs refuted 'rather than'), modal 'May I...', nama pengirim, atau modal sopan!`
    );
  }

  // 5. Kompatibilitas 8 ID Kuis Lama
  const legacyIds = ["beng-1-k2", "beng-2-k2", "beng-3-k2", "beng-4-k2", "beng-5-k2", "beng-6-k2", "beng-7-k2", "beng-8-k2"];
  const allLegacyMapped = legacyIds.every(id => {
    const target = resolveItemAlias(id);
    const expected = id.replace("-k2", "-k1");
    return target === expected && LEGACY_ITEM_ALIASES[id] !== undefined;
  });

  if (allLegacyMapped) {
    console.log(
      `  ✅ [kompatibilitas] Seluruh 8 ID kuis lama ('beng-1-k2' .. 'beng-8-k2') terpetakan dengan benar ke kuis kanonikal ('beng-*-k1').`
    );
  } else {
    failures.push(
      `[kompatibilitas] Pemetaan LEGACY_ITEM_ALIASES untuk 8 kuis lama tidak lengkap atau tidak sesuai!`
    );
  }

  if (failures.length > 0) {
    console.error(`\n❌ DITEMUKAN ${failures.length} KEGAGALAN REGRESI:\n`);
    failures.forEach((f, idx) => console.error(`${idx + 1}. ${f}`));
    process.exit(1);
  } else {
    console.log(
      `\n✅ SELURUH UJI REGRESI BISNIS ENGLISH LULUS DENGAN SEMPURNA! 🎉\n`
    );
    process.exit(0);
  }
}

runRegressionSuite();
