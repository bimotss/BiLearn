# Playbook Deploy — Server & Domain bproject.online

> Diperbarui **27 Juli 2026** setelah deploy BiLearn. Semua angka di dokumen ini
> hasil pemeriksaan langsung di server, bukan salinan versi lama.
>
> Salin **seluruh** isi file ini ke awal percakapan baru kalau mau deploy website lain
> di server/domain yang sama.
>
> ⚠️ Jangan commit file ini ke repo publik — isinya memuat IP server dan detail akses.

---

## KONTEKS SERVER (VPS)

| Item | Nilai |
|---|---|
| IP publik | `103.93.163.150` |
| SSH | `ssh -i ~/.ssh/biznet bimota@103.93.163.150` (user `bimota`, hostname `BimskuyProject`) |
| OS | Ubuntu |
| Node / npm | **v20.20.2** / npm 10.8.2 — cukup untuk Next.js 16 (syaratnya Node ≥ 20.9.0) |
| RAM | 3,8 GB total · ±2,5 GB tersedia · swap 2 GB |
| Disk | 58 GB total · 49 GB kosong (16% terpakai) |
| Lokasi project | home folder `/home/bimota/` |
| Web server | Nginx (`sites-available` + `sites-enabled`) |
| SSL | Certbot `--nginx`, perpanjangan otomatis sudah terjadwal |
| Process manager | campuran: sebagian PM2, sebagian systemd, sebagian **tanpa proses sama sekali** (situs statis) |

---

## REGISTRY PORT (hasil `ss -tlnp` 27 Juli 2026)

| Port | Pemakai | Keterangan |
|------|---------|-----------|
| 22 | sshd | login server |
| 80 / 443 | nginx | semua situs lewat sini |
| 3000 | `next-server` | melayani **myfinancialtrack.web.id** |
| 3050 | `node /home/bimo…` | melayani **myfinancialtrack.my.id** |
| 5432 | postgres | **hanya localhost**, jangan diganggu |
| 38815 | chrome (headless) | dipakai wabot, berubah tiap restart |
| 53 | systemd-resolved | localhost |

> **Koreksi dari versi lama:** playbook sebelumnya menulis `bproject` berjalan di **3005**.
> Tidak ada apa pun yang mendengarkan di 3005. Yang aktif adalah **3000** dan **3050**.
>
> **App baru yang butuh proses: mulai dari 3006.** Port haram: 22, 80, 443, 3000, 3050, 5432.
> Situs statis tidak memakai port sama sekali — dan itu pilihan yang lebih disukai.

Memetakan port → aplikasi:
```bash
sudo ss -tlnp | grep LISTEN            # port + PID
ps -p <PID> -o pid,cmd --no-headers    # PID → perintah lengkap
pm2 list ; pm2 pid <nama-app>          # untuk app yang dikelola PM2
systemctl list-units --type=service --state=running
```

---

## SITUS YANG SUDAH LIVE (6)

Dipetakan dari `grep -H 'proxy_pass\|root ' /etc/nginx/sites-enabled/*` — **4 statis, 2 dinamis**.

| Domain | Jenis | Lokasi / Tujuan | Proses |
|---|---|---|---|
| `bproject.online` | statis | `/home/bimota/bproject/out` | tidak ada |
| `bilearn.bproject.online` | statis | `/home/bimota/bilearn/out` | tidak ada |
| `serenity.bproject.online` | statis | `/home/bimota/SerenityCP/site` | tidak ada |
| `warungxena.bproject.online` | statis | `/home/bimota/WarungXena` | tidak ada |
| `myfinancialtrack.web.id` | dinamis | `proxy_pass 127.0.0.1:3000` | `next-server` |
| `myfinancialtrack.my.id` | dinamis | `proxy_pass 127.0.0.1:3050` | `node` |

> **Empat dari enam situs sudah statis** — polanya memang ke arah situ, dan itu sebabnya
> Runbook A dijadikan jalur utama. Hanya dua aplikasi yang benar-benar memerlukan proses.

Cara memetakan ulang kapan pun:
```bash
grep -H 'proxy_pass\|root ' /etc/nginx/sites-enabled/*
```
Blok dengan `proxy_pass` berarti butuh proses di port itu; blok dengan `root` berarti statis.

### Proses yang berjalan (PM2, 27 Juli 2026)

Sudah diverifikasi lewat pencocokan PID (`pm2 pid <app>` vs `ss -tlnp`), bukan dugaan.

| id | Nama | RAM | Restart | Port | Melayani |
|---|---|---|---|---|---|
| 3 | `financialtrack` | 242,9 MB | 0 | 3000 | `myfinancialtrack.web.id` |
| 2 | `wabot-web` | 93,3 MB | 5 | 3050 | `myfinancialtrack.my.id` (dashboard bot) |
| 0 | `wabot` | 59,1 MB | 21 | — | bot WhatsApp, tanpa port HTTP (Chrome headless di 127.0.0.1:38815) |

> **Perhatikan:** `myfinancialtrack.my.id` menyajikan dashboard bot WhatsApp, bukan aplikasi
> finansial. Dua domain berima itu isinya aplikasi berbeda — mudah tertukar saat mengurus server.

Memetakan ulang kapan pun:
```bash
pm2 pid <nama-app>                         # PID app PM2
sudo ss -tlnp | grep -E ':3000|:3050'      # cocokkan PID dengan port
pm2 env <id> | grep -i port                # kalau PORT diset lewat env
```

> Catatan: `wabot` sudah restart 21 kali. Untuk proses yang semestinya jalan terus, itu tanda
> koneksi WhatsApp atau Chrome headless-nya sering putus. Periksa `pm2 logs wabot --lines 50`.

### Sisa warisan yang sudah beres

`bproject.online` dulu berjalan sebagai service systemd `bproject-web` di port 3005 (Next.js 15).
Sejak 23 Juli 2026 situsnya sudah statis, dan service-nya berstatus `disabled` + `inactive (dead)`
— tidak memakan sumber daya. Berkas unit-nya masih ada dan boleh dibersihkan:
```bash
sudo rm /etc/systemd/system/bproject-web.service && sudo systemctl daemon-reload
```

---

## KONTEKS DOMAIN

- **Domain:** `bproject.online`, registrar **DomaiNesia**
- **Nameserver:** `ns1.domainesia.net`, `ns2.domainesia.net`
- **Panel DNS:** DomaiNesia → **Domains → bproject.online → DNS Management**
- Subdomain gratis & tak terbatas
- Record A apex `@` sudah menunjuk `103.93.163.150`

Menambah subdomain — **Add Record**:
`Type A` · `Name: SUB` (isi `bilearn` saja, **bukan** `bilearn.bproject.online`) · `Value: 103.93.163.150` · TTL default

Verifikasi langsung ke nameserver-nya (tanpa menunggu propagasi):
```bash
dig A SUB.bproject.online @ns1.domainesia.net | grep -E 'status|^SUB'
```
Yang dicari: `status: NOERROR` + baris jawaban berisi `103.93.163.150`.
`status: NXDOMAIN` berarti record belum tersimpan. Keluaran kosong pada `dig +short` juga berarti record belum ada — itu bukan error.

---

## RUNBOOK A — SITUS STATIS (pilihan utama)

Dipakai kalau seluruh halaman dirender di sisi klien atau isinya HTML biasa.
**Nol proses, nol port, nol RAM** — Nginx menyajikan berkas langsung. Contoh nyata: BiLearn.

Cara mengetahui situs Next.js-mu layak statis: kalau semua berkas `page.tsx` diawali
`"use client"` dan tidak ada pengambilan data di server, jawabannya ya.

**1. Siapkan kodenya** (`next.config.ts`):
```ts
const nextConfig: NextConfig = {
  output: "export",      // hasil build → folder out/
  trailingSlash: true,   // tiap rute jadi folder + index.html
  images: { unoptimized: true },
};
```
Route dinamis (`[slug]`) wajib punya `generateStaticParams`. Kalau halamanmu client component,
pecah jadi dua: berkas `page.tsx` sebagai server component pemegang `generateStaticParams`,
dan komponen kliennya menerima param sebagai prop.

**2. DNS** — tambah A record seperti bagian domain di atas, lalu `dig` sampai keluar IP benar.

**3. Build di server**
```bash
cd ~
git clone https://github.com/USER/REPO.git APP
cd APP
npm ci --include=dev      # --include=dev wajib: tailwind & typescript ada di devDependencies
npm run build
ls out/index.html && du -sh out
```

**4. Nginx**
```bash
chmod o+x /home/bimota    # sekali saja, agar Nginx bisa menembus home folder

sudo tee /etc/nginx/sites-available/SUB.bproject.online > /dev/null <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name SUB.bproject.online;

    root /home/bimota/APP/out;
    index index.html;

    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/index.html $uri.html $uri/ /404.html;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/SUB.bproject.online /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sleep 2                                    # beri jeda, lihat jebakan #2
curl -sI -H "Host: SUB.bproject.online" http://127.0.0.1/ | head -1   # harus 200 OK
```

**5. SSL**
```bash
sudo certbot --nginx -d SUB.bproject.online     # pilih 2 (Redirect)
curl -sI https://SUB.bproject.online | head -1
```

**6. Update ke depan** — tanpa restart apa pun:
```bash
cd ~/APP && git pull && npm ci --include=dev && npm run build
```

---

## RUNBOOK B — SITUS DINAMIS (perlu proses Node)

Dipakai kalau situs benar-benar butuh server: server action, route handler, database, auth sesi.

**1–2.** DNS sama seperti Runbook A.

**3. Pilih port bebas & uji**
```bash
sudo ss -tlnp | grep -E ':30[0-9][0-9]'    # pastikan PORT belum dipakai (mulai 3006)
cd ~/APP && npm ci --include=dev && npm run build
PORT=3006 npm run start &
curl -I http://127.0.0.1:3006              # harus 200
kill %1
```

**4. Service systemd** — ganti `APP` dan `3006` dulu:
```bash
sudo tee /etc/systemd/system/APP-web.service > /dev/null <<'EOF'
[Unit]
Description=APP (Next.js)
After=network.target

[Service]
Type=simple
User=bimota
WorkingDirectory=/home/bimota/APP
Environment=NODE_ENV=production
Environment=PORT=3006
ExecStart=/usr/bin/node /home/bimota/APP/node_modules/next/dist/bin/next start -p 3006
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable --now APP-web
sudo systemctl status APP-web --no-pager
```

**5. Nginx** — sama seperti Runbook A, tapi `location /` diganti proxy:
```nginx
location / {
    proxy_pass http://127.0.0.1:3006;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

**6. SSL** sama. **7. Update:** `cd ~/APP && git pull && npm ci --include=dev && npm run build && sudo systemctl restart APP-web`

---

## ⚠️ JEBAKAN YANG SUDAH PERNAH TERJADI

1. **Kode belum di-push, server menarik versi lama.** Gejalanya membingungkan: `npm ci` gagal
   atau fitur baru tidak muncul. Selalu pastikan dulu:
   ```bash
   git ls-remote https://github.com/USER/REPO.git main | head -1   # cocokkan dengan commit lokalmu
   ```

2. **`npm ci` menolak: "package.json and package-lock.json are not in sync".** Terjadi kalau ada
   dependensi ditambahkan tanpa memperbarui lock file. Perbaikannya di komputer lokal, bukan di
   server: `npm install` → commit `package.json` + `package-lock.json` → push. Jangan pakai
   `npm install` di server sebagai jalan pintas, karena lock-nya jadi berbeda dari repo.

3. **`curl` mengembalikan 404 tepat setelah `systemctl reload nginx`.** Reload bersifat asinkron;
   permintaan pertama masih bisa dilayani worker lama yang belum mengenal blok server barumu, lalu
   jatuh ke default server. Beri jeda 1–2 detik lalu ulangi sebelum menyimpulkan konfigurasinya salah.

4. **DomaiNesia menaruh A record default ke `172.104.187.4`** (halaman parkir). Pastikan nilainya
   `103.93.163.150`. Pada kolom Name isi subdomainnya saja (`bilearn`), panel menambahkan domainnya sendiri.

5. **403 pada situs statis** = Nginx tidak bisa menembus home folder. `chmod o+x /home/bimota`
   (dan folder aplikasinya bila perlu). Periksa dengan `ls -ld /home/bimota /home/bimota/APP/out`.

6. **Repo privat lewat HTTPS meminta password terus.** Solusi: jadikan repo publik, pasang deploy
   key SSH, atau `git config --global credential.helper store` sekali.

7. **Jangan menyalin perintah berisi URL dari chat** — sering ter-format menjadi `[teks](url)` dan
   memunculkan `syntax error near unexpected token '('`.

8. **Font:** pakai `@fontsource-variable/*` (di-host sendiri), bukan Google Fonts, supaya build tidak
   gagal saat server tidak bisa menjangkau `fonts.gstatic.com`.

9. **RAM saat build.** `next build` butuh ±1–1,5 GB. Dengan tiga aplikasi berjalan, sisa RAM bisa
   tipis dan build terbunuh OOM. Alternatifnya: build di laptop lalu kirim hasilnya saja —
   `rsync -avz out/ bimota@103.93.163.150:~/APP/out/` (khusus situs statis).

---

## CHECKLIST TIAP DEPLOY

- [ ] Commit sudah di-push, `git ls-remote` cocok dengan commit lokal
- [ ] A record `SUB` → `103.93.163.150`, `dig` sudah `NOERROR`
- [ ] Statis atau dinamis sudah ditentukan (statis = tanpa port)
- [ ] `npm ci --include=dev` sukses, `npm run build` sukses
- [ ] Statis: `out/index.html` ada · Dinamis: port bebas & `curl 127.0.0.1:PORT` = 200
- [ ] `nginx -t` OK, reload, tunggu 2 detik, `curl` = 200
- [ ] `certbot --nginx` sukses → HTTPS hijau
- [ ] Uji satu halaman dalam (bukan cuma beranda) untuk memastikan konten terbaru tersaji

---

## PEMANTAUAN

```bash
systemctl list-units --type=service --state=running   # semua service jalan
systemctl status APP-web                              # status satu app
journalctl -u APP-web -f                              # log live
systemd-cgtop                                         # CPU/RAM per service
sudo ss -tlnp | grep LISTEN                           # semua port terpakai
sudo certbot certificates                             # masa berlaku SSL
df -h / ; free -h                                     # disk & memori
```

---

## CATATAN KHUSUS BILEARN

- Repo `github.com/bimotss/BiLearn` (publik) · folder server `/home/bimota/bilearn`
- Statis: `output: "export"`, hasil build 912 halaman, `out/` ±61 MB
- Tidak punya service dan tidak memakai port apa pun
- Sertifikat berlaku sampai **25 Oktober 2026**, diperpanjang otomatis
- Progress belajar disimpan di `localStorage` browser, jadi tidak ada database yang perlu dicadangkan
- Update: `cd ~/bilearn && git pull && npm ci --include=dev && npm run build`
