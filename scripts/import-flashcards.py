#!/usr/bin/env python3
"""
BiLearn Flashcard Jepang Importer
Mengimpor 100 kosakata JLPT N5 Vol. 1 dari workbook Excel ke JSON statis di repo.
Usage:
    uv run --with openpyxl python scripts/import-flashcards.py [path-to-xlsx]
"""

import sys
import os
import json
import hashlib
from datetime import datetime

DEFAULT_SOURCE = r"C:\Users\bim\Downloads\JLPT N5 Vol 1 Flashcards (Lengkap).xlsx"
OUTPUT_JSON = os.path.join("src", "data", "flashcards", "japanese-n5-vol-1.json")
OUTPUT_PROVENANCE = os.path.join("src", "data", "flashcards", "provenance.json")

EXPECTED_HEADERS = [
    "No",
    "Kanji",
    "Hiragana",
    "Katakana",
    "Romaji",
    "Arti",
    "Contoh Kalimat (Kanji)",
    "Contoh Kalimat (Kana / Hiragana-Katakana)",
    "Contoh Kalimat (Romaji / Pelafalan)",
    "Arti Contoh Kalimat"
]

def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8")
    source_path = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SOURCE

    if not os.path.exists(source_path):
        print(f"ERROR: File sumber tidak ditemukan di: {source_path}")
        sys.exit(1)

    print(f"Membaca workbook: {source_path}")
    import openpyxl

    with open(source_path, "rb") as f:
        file_bytes = f.read()
        sha256 = hashlib.sha256(file_bytes).hexdigest()

    wb = openpyxl.load_workbook(source_path, data_only=True)
    sheet = wb.active
    rows = list(sheet.iter_rows(values_only=True))

    if not rows:
        print("ERROR: Sheet kosong!")
        sys.exit(1)

    header_row = rows[0]
    data_rows = rows[1:]

    # Cari index kolom berdasarkan nama header
    header_indices = {}
    for idx, col_name in enumerate(header_row):
        if col_name and str(col_name).strip() in EXPECTED_HEADERS:
            header_indices[str(col_name).strip()] = idx

    missing_headers = [h for h in EXPECTED_HEADERS if h not in header_indices]
    if missing_headers:
        print(f"ERROR: Header kolom berikut tidak ditemukan: {missing_headers}")
        sys.exit(1)

    # Catat cell ekstra yang tidak berada di 10 kolom utama
    extra_cells_reported = []
    for r_idx, row in enumerate(data_rows, start=2):
        if len(row) > 10:
            extra = [(c_idx, val) for c_idx, val in enumerate(row[10:], start=10) if val is not None and str(val).strip() != ""]
            if extra:
                no_val = row[header_indices["No"]]
                extra_cells_reported.append({
                    "rowNumber": r_idx,
                    "sourceNo": int(no_val) if no_val is not None else None,
                    "term": str(row[header_indices["Kanji"]]),
                    "extraCells": [{"columnIndex": c, "value": str(v)} for c, v in extra]
                })

    print(f"Ditemukan {len(extra_cells_reported)} baris dengan cell tambahan di luar 10 header utama.")
    for report in extra_cells_reported:
        print(f"  Baris {report['rowNumber']} (No {report['sourceNo']} - {report['term']}): {report['extraCells']}")

    records = []
    seen_nos = set()

    for r_idx, row in enumerate(data_rows, start=2):
        # Validasi baris kosong
        if all(cell is None or str(cell).strip() == "" for cell in row):
            continue

        raw_no = row[header_indices["No"]]
        if raw_no is None:
            print(f"ERROR: Baris {r_idx} tidak memiliki nomor!")
            sys.exit(1)

        try:
            no = int(raw_no)
        except ValueError:
            print(f"ERROR: Baris {r_idx} No bukan bilangan bulat: {raw_no}")
            sys.exit(1)

        if no in seen_nos:
            print(f"ERROR: Baris {r_idx} No duplikat: {no}")
            sys.exit(1)
        seen_nos.add(no)

        term = str(row[header_indices["Kanji"]] or "").strip()
        hiragana = str(row[header_indices["Hiragana"]] or "").strip()
        katakana = str(row[header_indices["Katakana"]] or "").strip()
        romaji = str(row[header_indices["Romaji"]] or "").strip()
        meaning = str(row[header_indices["Arti"]] or "").strip()
        exampleJapanese = str(row[header_indices["Contoh Kalimat (Kanji)"]] or "").strip()
        exampleKana = str(row[header_indices["Contoh Kalimat (Kana / Hiragana-Katakana)"]] or "").strip()
        exampleRomaji = str(row[header_indices["Contoh Kalimat (Romaji / Pelafalan)"]] or "").strip()
        exampleMeaning = str(row[header_indices["Arti Contoh Kalimat"]] or "").strip()

        # Validasi tidak ada field utama yang kosong
        fields = {
            "term": term,
            "hiragana": hiragana,
            "katakana": katakana,
            "romaji": romaji,
            "meaning": meaning,
            "exampleJapanese": exampleJapanese,
            "exampleKana": exampleKana,
            "exampleRomaji": exampleRomaji,
            "exampleMeaning": exampleMeaning
        }

        for f_name, f_val in fields.items():
            if not f_val:
                print(f"ERROR: Baris {r_idx} (No {no}) field '{f_name}' kosong!")
                sys.exit(1)

        card_id = f"jp-n5-v1-{no:03d}"

        record = {
            "id": card_id,
            "sourceNo": no,
            "term": term,
            "hiragana": hiragana,
            "katakana": katakana,
            "romaji": romaji,
            "meaning": meaning,
            "exampleJapanese": exampleJapanese,
            "exampleKana": exampleKana,
            "exampleRomaji": exampleRomaji,
            "exampleMeaning": exampleMeaning
        }
        records.append(record)

    # Urutkan berdasarkan sourceNo numerik
    records.sort(key=lambda r: r["sourceNo"])

    if len(records) != 100:
        print(f"ERROR: Jumlah kartu {len(records)}, diharapkan tepat 100!")
        sys.exit(1)

    expected_nos = list(range(1, 101))
    actual_nos = [r["sourceNo"] for r in records]
    if actual_nos != expected_nos:
        print("ERROR: Urutan No tidak persis 1..100!")
        sys.exit(1)

    os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)

    print(f"Berhasil menyimpan {len(records)} kartu ke {OUTPUT_JSON}")

    provenance = {
        "sourceFileName": os.path.basename(source_path),
        "sha256": sha256,
        "sheetName": sheet.title,
        "importDate": datetime.now().isoformat(),
        "totalRecords": len(records),
        "columnMapping": {
            "No": "sourceNo",
            "Kanji": "term",
            "Hiragana": "hiragana",
            "Katakana": "katakana",
            "Romaji": "romaji",
            "Arti": "meaning",
            "Contoh Kalimat (Kanji)": "exampleJapanese",
            "Contoh Kalimat (Kana / Hiragana-Katakana)": "exampleKana",
            "Contoh Kalimat (Romaji / Pelafalan)": "exampleRomaji",
            "Arti Contoh Kalimat": "exampleMeaning"
        },
        "normalizationApplied": "Trimming edge whitespace on string fields; preserve exact Japanese characters, punctuation, and translation as stored in source cells.",
        "unrecognizedExtraCells": extra_cells_reported,
        "linguisticAuditNote": "Data diekspor secara mekanis dari workbook sumber tanpa penulisan ulang linguistik sepihak. Catatan pada baris 53 dan 65 menunjukkan pemisahan nilai koma pada sel sumber di luar 10 header utama."
    }

    with open(OUTPUT_PROVENANCE, "w", encoding="utf-8") as f:
        json.dump(provenance, f, ensure_ascii=False, indent=2)

    print(f"Berhasil menyimpan catatan provenance ke {OUTPUT_PROVENANCE}")

if __name__ == "__main__":
    main()
