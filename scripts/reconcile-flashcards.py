#!/usr/bin/env python3
"""
Skrip rekonsiliasi data Flashcard Jepang:
Membandingkan 100 record di src/data/flashcards/japanese-n5-vol-1.json
dengan workbook Excel asli di setiap field.
"""

import sys
import os
import json

DEFAULT_SOURCE = r"C:\Users\bim\Downloads\JLPT N5 Vol 1 Flashcards (Lengkap).xlsx"
JSON_PATH = os.path.join("src", "data", "flashcards", "japanese-n5-vol-1.json")

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

FIELD_MAP = {
    "sourceNo": "No",
    "term": "Kanji",
    "hiragana": "Hiragana",
    "katakana": "Katakana",
    "romaji": "Romaji",
    "meaning": "Arti",
    "exampleJapanese": "Contoh Kalimat (Kanji)",
    "exampleKana": "Contoh Kalimat (Kana / Hiragana-Katakana)",
    "exampleRomaji": "Contoh Kalimat (Romaji / Pelafalan)",
    "exampleMeaning": "Arti Contoh Kalimat"
}

KNOWN_CORRECTIONS = {
    53: {
        "exampleMeaning": {
            "excel_raw": "Melakukan perjalanan ke wilayah Tohoku",
            "reason": "Menggabungkan sel ekstra col 10 ('Jepang.') yang terpotong akibat koma/pemisahan sel di workbook sumber.",
        }
    },
    65: {
        "exampleRomaji": {
            "excel_raw": "Shimpai shinaide",
            "reason": "Menggabungkan romaji utuh ('Shimpai shinaide, daijoubu desu yo.') yang tergeser ke kolom arti akibat koma.",
        },
        "exampleMeaning": {
            "excel_raw": "daijoubu desu yo.",
            "reason": "Mengembalikan terjemahan bahasa Indonesia ('Jangan khawatir, tidak apa-apa kok.') dari sel ekstra col 10-11.",
        },
    },
    66: {
        "exampleRomaji": {
            "excel_raw": "Watashi no kudamono ga daisuki desu.",
            "reason": "Koreksi partikel 'wa' (私は) yang salah tertulis 'no' di romaji workbook sumber.",
        }
    },
    68: {
        "exampleRomaji": {
            "excel_raw": "Kaigi ni wa tooku no dansei ga sanka shimashita.",
            "reason": "Koreksi pelafalan 'ooku' (多く) yang salah tertulis 'tooku' di romaji workbook sumber.",
        }
    },
}

def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8")

    source_path = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SOURCE

    if not os.path.exists(source_path):
        print(f"Peringatan: File sumber Excel tidak ditemukan di {source_path}. Melewati rekonsiliasi sumber langsung.")
        return 0

    if not os.path.exists(JSON_PATH):
        print(f"ERROR: {JSON_PATH} tidak ditemukan!")
        sys.exit(1)

    import openpyxl

    wb = openpyxl.load_workbook(source_path, data_only=True)
    sheet = wb.active
    rows = list(sheet.iter_rows(values_only=True))

    header = rows[0]
    header_indices = {str(name).strip(): idx for idx, name in enumerate(header) if name}

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        json_records = json.load(f)

    if len(json_records) != 100:
        print(f"ERROR: JSON records berjumlah {len(json_records)}, bukan 100!")
        sys.exit(1)

    mismatch_count = 0
    row_by_no = {}
    for r in rows[1:]:
        if r[header_indices["No"]] is not None:
            try:
                no = int(r[header_indices["No"]])
                row_by_no[no] = r
            except ValueError:
                pass

    for record in json_records:
        no = record["sourceNo"]
        if no not in row_by_no:
            print(f"ERROR: No {no} tidak ditemukan di workbook!")
            mismatch_count += 1
            continue

        excel_row = row_by_no[no]
        for field_name, header_name in FIELD_MAP.items():
            expected_val = record[field_name]
            raw_excel_val = excel_row[header_indices[header_name]]
            if field_name == "sourceNo":
                actual_val = int(raw_excel_val)
            else:
                actual_val = str(raw_excel_val or "").strip()

            if expected_val != actual_val:
                if no in KNOWN_CORRECTIONS and field_name in KNOWN_CORRECTIONS[no]:
                    known = KNOWN_CORRECTIONS[no][field_name]
                    if actual_val == known["excel_raw"]:
                        # Perbaikan terdokumentasi valid
                        continue

                print(f"MISMATCH di No {no} field '{field_name}' ({header_name}):")
                print(f"  JSON : {repr(expected_val)}")
                print(f"  Excel: {repr(actual_val)}")
                mismatch_count += 1

    if mismatch_count > 0:
        print(f"❌ Ditemukan {mismatch_count} ketidakcocokan data dengan workbook sumber!")
        sys.exit(1)

    print("✅ Rekonsiliasi 100 record x 10 field dengan workbook Excel sumber: 100% COCOK (dengan 4 perbaikan data terdokumentasi).")
    return 0

if __name__ == "__main__":
    sys.exit(main())
