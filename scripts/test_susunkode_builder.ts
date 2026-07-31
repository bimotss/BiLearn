import { tracks } from "../src/data/tracks/index";
import type { Step } from "../src/lib/types";

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

function cocok(pattern: string, flags: string | undefined, teks: string) {
  return new RegExp(pattern, flags ?? "i").test(teks);
}

function lulus(t: Step["tests"][number], teks: string) {
  const c = cocok(t.pattern, t.flags, teks);
  return t.mustNotMatch ? !c : c;
}

export function validateStepSusunKode(step: Step, sk: NonNullable<Step["susunKode"]>): string[] {
  const errs: string[] = [];
  const pemisah = sk.pemisah ?? " ";
  const potongan = sk.potongan ?? [];
  const pengecoh = sk.pengecoh ?? [];

  if (potongan.length < 2) errs.push(`potongan < 2 (${potongan.length})`);
  if (pengecoh.length < 2) errs.push(`pengecoh < 2 (${pengecoh.length})`);
  if (potongan.length + pengecoh.length > 12) errs.push(`total > 12 (${potongan.length + pengecoh.length})`);

  const norm = (t: string) => t.trim().replace(/\s+/g, " ");
  const setPotongan = new Set(potongan.map(norm));
  for (const p of pengecoh) {
    if (setPotongan.has(norm(p))) errs.push(`pengecoh "${p}" sama dengan potongan`);
  }
  const normPengecoh = pengecoh.map(norm);
  if (new Set(normPengecoh).size !== normPengecoh.length) errs.push(`pengecoh memuat keping kembar`);

  const kodeBenar = potongan.join(pemisah);
  const gagal = step.tests.filter((t) => !lulus(t, kodeBenar));
  if (gagal.length > 0) {
    errs.push(`susunan benar GAGAL ${gagal.length} tes: "${kodeBenar}" (tes: ${gagal.map(g => g.message).join("; ")})`);
  }

  const solusiNorm = norm(step.solution);
  for (const p of pengecoh) {
    if (norm(p).length >= 4 && solusiNorm.includes(norm(p))) {
      errs.push(`pengecoh "${p}" muncul di solution`);
    }
  }

  if (gagal.length === 0 && potongan.length > 0) {
    for (const peng of pengecoh) {
      let terdekat = 0;
      let jarakMin = Infinity;
      potongan.forEach((p, i) => {
        const d = jarakEdit(p, peng);
        if (d < jarakMin) {
          jarakMin = d;
          terdekat = i;
        }
      });
      const variasi = [...potongan];
      variasi[terdekat] = peng;
      const teks = variasi.join(pemisah);
      if (step.tests.every((t) => lulus(t, teks))) {
        errs.push(`pengecoh "${peng}" TIDAK MERUSAK saat mengganti "${potongan[terdekat]}"`);
      }
    }
  }

  const skExp = sk.explanation?.trim() ?? "";
  if (!skExp) errs.push(`explanation kosong`);
  else {
    if (skExp.length < 200) errs.push(`explanation < 200 char (${skExp.length})`);
    if (!/menggoda|sering|keliru|jebakan/i.test(skExp)) {
      errs.push(`explanation tanpa kata kunci (menggoda/sering/keliru/jebakan)`);
    }
  }

  return errs;
}

console.log("Validator helper initialized.");
