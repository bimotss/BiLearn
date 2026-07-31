import json
import importlib.util

spec = importlib.util.spec_from_file_location("sisip", "scripts/sisip-susunkode.py")
sisip = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sisip)

with open("scripts/spreadsheet_data.json") as f:
    data = json.load(f)

n = sisip.sisipkan("src/data/tracks/spreadsheet.ts", data, r"sheet-\d+-\d+")
print(f"✅ Successfully injected {n} susunKode entries into src/data/tracks/spreadsheet.ts!")
