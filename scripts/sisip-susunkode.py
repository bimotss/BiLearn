"""Penyisip blok `susunKode` ke berkas track (dipakai PERINTAH G).

Jalankan dari akar repo. Lihat perintah-susun-kode.md untuk cara pakainya.

Dipisah dari data isinya supaya logika penempatan hanya ditulis sekali —
dan supaya bug penempatan (kurung di dalam string regex ikut terhitung)
tidak perlu ditemukan dua kali.
"""

import re


def ts(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n") + '"'


def blok(d, i):
    b = i + "susunKode: {\n"
    b += i + "  question:\n" + i + "    " + ts(d["question"]) + ",\n"
    b += i + "  potongan: [\n"
    for p in d["potongan"]:
        b += i + "    " + ts(p) + ",\n"
    b += i + "  ],\n"
    b += i + "  pengecoh: [\n"
    for p in d["pengecoh"]:
        b += i + "    " + ts(p) + ",\n"
    b += i + "  ],\n"
    b += i + "  pemisah: " + ts(d.get("pemisah", "\n")) + ",\n"
    b += i + "  explanation:\n" + i + "    " + ts(d["explanation"]) + ",\n"
    b += i + "},\n"
    return b


def tanpa_string(baris):
    """Buang isi string literal — `{` dan `}` di dalam regex bukan struktur."""
    keluar = []
    i = 0
    dalam = None
    while i < len(baris):
        c = baris[i]
        if dalam:
            if c == "\\":
                i += 2
                continue
            if c == dalam:
                dalam = None
            i += 1
            continue
        if c in "\"'`":
            dalam = c
            i += 1
            continue
        keluar.append(c)
        i += 1
    return "".join(keluar)


def sisipkan(path, isi, pola_id):
    src = open(path).read()
    lines = src.split("\n")
    sisa = dict(isi)
    n = 0
    i = 0
    while i < len(lines):
        m = re.search(r'"?id"?:\s*"(' + pola_id + r')"', lines[i])
        if not m or m.group(1) not in sisa:
            i += 1
            continue
        sid = m.group(1)
        depth = 1
        k = i
        while k < len(lines) - 1:
            k += 1
            bersih = tanpa_string(lines[k])
            depth += bersih.count("{") - bersih.count("}")
            if depth == 0:
                break
        assert lines[k].strip() in ("},", "}"), f"{sid}: penutup tak terduga {lines[k]!r}"

        # Pengaman idempoten: kalau step ini SUDAH punya susunKode, jangan
        # menyisip lagi. Menjalankan skrip penyisip dua kali menghasilkan dua
        # properti dengan nama sama — TypeScript menolaknya, dan saat dibaca
        # hanya blok terakhir yang berlaku. Ini pernah terjadi pada 39 step
        # sekaligus di ai-dev.ts.
        badan = "\n".join(lines[i:k])
        if re.search(r"^\s*susunKode:\s*\{", badan, re.M):
            raise SystemExit(
                f"{sid}: sudah punya susunKode. Skrip ini tidak menimpa — "
                f"hapus blok lamanya dulu, atau keluarkan id ini dari daftar."
            )

        if not lines[k - 1].rstrip().endswith(","):
            lines[k - 1] = lines[k - 1].rstrip() + ","
        indent = " " * (len(lines[k]) - len(lines[k].lstrip()) + 2)
        lines[k:k] = blok(sisa[sid], indent).rstrip("\n").split("\n")
        n += 1
        i = k + 1
        del sisa[sid]
    assert not sisa, f"belum tersisip: {list(sisa)}"
    open(path, "w").write("\n".join(lines))
    return n
