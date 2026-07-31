import re
from typing import Optional, List, Dict, Any

def jarak_edit(a: str, b: str) -> int:
    baris = list(range(len(b) + 1))
    for i in range(1, len(a) + 1):
        sebelumnya = baris[0]
        baris[0] = i
        for j in range(1, len(b) + 1):
            simpan = baris[j]
            baris[j] = min(
                baris[j] + 1,
                baris[j - 1] + 1,
                sebelumnya + (0 if a[i - 1] == b[j - 1] else 1)
            )
            sebelumnya = simpan
    return baris[len(b)]

def norm(t: str) -> str:
    return re.sub(r'\s+', ' ', t.strip())

def cocok(pattern: str, flags: Optional[str], teks: str) -> bool:
    fl = 0
    if flags and 'i' in flags:
        fl |= re.IGNORECASE
    if flags and 'm' in flags:
        fl |= re.MULTILINE
    if flags and 's' in flags:
        fl |= re.DOTALL
    try:
        return bool(re.search(pattern, teks, fl))
    except Exception:
        return False

def lulus(t: dict, teks: str) -> bool:
    pattern = t["pattern"]
    flags = t.get("flags", "i")
    c = cocok(pattern, flags, teks)
    return not c if t.get("mustNotMatch") else c

def validate_entry(step_id: str, step_data: dict, susun_kode: dict) -> list[str]:
    errs = []
    pemisah = susun_kode.get("pemisah", "\n")
    potongan = susun_kode.get("potongan", [])
    pengecoh = susun_kode.get("pengecoh", [])
    explanation = susun_kode.get("explanation", "")
    solution = step_data.get("solution", "")
    tests = step_data.get("tests", [])

    if len(potongan) < 2:
        errs.append(f"{step_id}: potongan < 2 ({len(potongan)})")
    if len(pengecoh) < 2:
        errs.append(f"{step_id}: pengecoh < 2 ({len(pengecoh)})")
    if len(potongan) + len(pengecoh) > 12:
        errs.append(f"{step_id}: total keping > 12 ({len(potongan) + len(pengecoh)})")

    set_pot = set(norm(p) for p in potongan)
    for p in pengecoh:
        if norm(p) in set_pot:
            errs.append(f"{step_id}: pengecoh '{p}' ada di potongan benar")

    norm_peng = [norm(p) for p in pengecoh]
    if len(set(norm_peng)) != len(norm_peng):
        errs.append(f"{step_id}: pengecoh memuat keping kembar")

    if any(not p.strip() for p in (potongan + pengecoh)):
        errs.append(f"{step_id}: susunKode memuat keping kosong")

    kode_benar = pemisah.join(potongan)
    gagal_ben = [t for t in tests if not lulus(t, kode_benar)]
    if gagal_ben:
        errs.append(f"{step_id}: susunan benar GAGAL {len(gagal_ben)} tes: {kode_benar!r}")

    sol_norm = norm(solution)
    for p in pengecoh:
        p_norm = norm(p)
        if len(p_norm) >= 4 and p_norm in sol_norm:
            errs.append(f"{step_id}: pengecoh '{p}' ada di solution")

    # Rule 5: Check distractor substitution
    if not gagal_ben and len(potongan) > 0:
        for peng in pengecoh:
            terdekat = 0
            jarak_min = float('inf')
            for idx, p in enumerate(potongan):
                d = jarak_edit(p, peng)
                if d < jarak_min:
                    jarak_min = d
                    terdekat = idx
            variasi = list(potongan)
            variasi[terdekat] = peng
            teks_sub = pemisah.join(variasi)
            if all(lulus(t, teks_sub) for t in tests):
                errs.append(
                    f"{step_id}: pengecoh '{peng}' tidak merusak apa pun saat menggantikan '{potongan[terdekat]}'"
                )

    if not explanation.strip():
        errs.append(f"{step_id}: explanation kosong")
    else:
        if len(explanation.strip()) < 200:
            errs.append(f"{step_id}: explanation < 200 karakter ({len(explanation.strip())})")
        if not re.search(r'menggoda|sering|keliru|jebakan', explanation, re.IGNORECASE):
            errs.append(f"{step_id}: explanation tidak memuat kata kunci (menggoda/sering/keliru/jebakan)")

    return errs
