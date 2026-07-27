"use client";

import { useMemo, useState } from "react";
import type { Step } from "@/lib/types";

interface Props {
  step: Step;
  onPassed: () => void;
}

/** Editor sederhana (textarea) + live preview + tes regex. Fase 2: Monaco + test runner. */
export default function StepView({ step, onPassed }: Props) {
  const [code, setCode] = useState(step.starterCode);
  const [results, setResults] = useState<{ pass: boolean; message: string }[]>([]);
  const [passed, setPassed] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const previewDoc = useMemo(() => {
    const body = step.previewHtml ?? "";
    const tw = step.loadTailwind
      ? '<script src="https://cdn.tailwindcss.com"><\/script>'
      : "";
    const base =
      "<style>body{margin:0;padding:12px;font-family:system-ui,sans-serif}<\/style>";
    // Konten non-JS (perintah shell/git, SQL, Markdown, formula): tampilkan
    // apa adanya, JANGAN dieksekusi — kalau dieksekusi akan jadi SyntaxError.
    if (step.language === "text") {
      const aman = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `${base}<style>
        .term{background:#0f172a;color:#e2e8f0;padding:12px;border-radius:6px;
              font-family:ui-monospace,monospace;font-size:12px;white-space:pre-wrap}
        .cap{font-size:11px;color:#64748b;margin:0 0 6px}
      <\/style>
      <p class="cap">Yang kamu tulis (tidak dijalankan di preview):<\/p>
      <div class="term">${aman || "(masih kosong)"}<\/div>${body}`;
    }

    if (step.language === "html") return `${tw}${code}`;
    if (step.language === "css")
      return `${tw}${base}<style>${code}<\/style>${body}`;

    // Step JS: sediakan panel output agar console.log dan error terlihat.
    const consoleShim = `
<style>#bilearn-out{font-family:ui-monospace,monospace;font-size:12px;background:#0f172a;color:#e2e8f0;padding:8px;border-radius:6px;white-space:pre-wrap;margin-top:8px;min-height:20px}
#bilearn-out .err{color:#fca5a5}<\/style>
<pre id="bilearn-out"><\/pre>
<script>
(function(){
  var out = document.getElementById('bilearn-out');
  function show(text, cls){
    var line = document.createElement('div');
    if (cls) line.className = cls;
    line.textContent = text;
    out.appendChild(line);
  }
  function fmt(v){
    if (typeof v === 'string') return v;
    try { return JSON.stringify(v); } catch(e) { return String(v); }
  }
  // Preview berjalan di iframe sandbox (opaque origin), sehingga localStorage
  // asli melempar SecurityError. Sediakan pengganti in-memory agar step
  // localStorage tetap bisa dipraktikkan.
  try { window.localStorage.getItem('__cek'); }
  catch (e) {
    var mem = {};
    var palsu = {
      getItem: function(k){ return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null; },
      setItem: function(k, v){ mem[k] = String(v); },
      removeItem: function(k){ delete mem[k]; },
      clear: function(){ mem = {}; },
      key: function(i){ return Object.keys(mem)[i] || null; }
    };
    Object.defineProperty(palsu, 'length', { get: function(){ return Object.keys(mem).length; } });
    try {
      Object.defineProperty(window, 'localStorage', { value: palsu, configurable: true });
      Object.defineProperty(window, 'sessionStorage', { value: palsu, configurable: true });
    } catch (e2) { /* biarkan, error asli akan tampil di panel */ }
  }
  var orig = console.log;
  console.log = function(){
    var args = Array.prototype.slice.call(arguments);
    show(args.map(fmt).join(' '));
    orig.apply(console, arguments);
  };
  window.addEventListener('error', function(e){ show('Error: ' + e.message, 'err'); });
})();
<\/script>`;
    return `${tw}${base}${body}${consoleShim}<script>try{\n${code}\n}catch(e){var o=document.getElementById('bilearn-out');var d=document.createElement('div');d.className='err';d.textContent=e.name+': '+e.message;o.appendChild(d);}<\/script>`;
  }, [code, step.language, step.previewHtml, step.loadTailwind]);

  function runTests() {
    const res = step.tests.map((t) => {
      let pass = false;
      try {
        const cocok = new RegExp(t.pattern, t.flags ?? "i").test(code);
        // mustNotMatch: lulus justru kalau pattern TIDAK ditemukan
        pass = t.mustNotMatch ? !cocok : cocok;
      } catch {
        pass = false;
      }
      return { pass, message: t.message };
    });
    setResults(res);
    if (res.every((r) => r.pass)) {
      setPassed(true);
      onPassed();
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Kiri: penjelasan + instruksi */}
      <div className="space-y-4">
        <p className="text-neutral-700 leading-relaxed">{step.explanation}</p>

        {/* Contoh kerja: dilihat dulu sebelum mengerjakan */}
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
          <p className="text-sm font-semibold text-neutral-700">
            👀 Contoh dulu
          </p>
          <pre className="mt-2 overflow-x-auto rounded-md bg-neutral-900 p-3 text-sm text-neutral-100">
            {step.example.code}
          </pre>
          <p className="mt-2 text-sm text-neutral-600">
            <span className="font-medium text-neutral-700">Hasilnya: </span>
            {step.example.output}
          </p>
          {step.example.note && (
            <p className="mt-1.5 text-sm text-neutral-500">
              💡 {step.example.note}
            </p>
          )}
        </div>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
          <p className="font-medium text-blue-900">
            📝 Sekarang giliranmu
          </p>
          <p className="mt-1 text-blue-800">{step.instruction}</p>
        </div>

        {results.length > 0 && (
          <ul className="space-y-2">
            {results.map((r, i) => (
              <li
                key={i}
                className={`rounded-md p-3 text-sm ${
                  r.pass
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {r.pass ? "✅ Lolos" : `❌ ${r.message}`}
              </li>
            ))}
          </ul>
        )}

        {passed && (
          <div className="rounded-lg bg-green-100 p-4 font-medium text-green-900">
            🎉 Semua tes lolos! Lanjut ke materi berikutnya.
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={runTests}
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            Jalankan Tes
          </button>
          <button
            onClick={() => setShowSolution((s) => !s)}
            className="rounded-lg border border-neutral-300 px-5 py-2.5 text-neutral-700 hover:bg-neutral-100"
          >
            {showSolution ? "Sembunyikan solusi" : "Lihat solusi"}
          </button>
        </div>

        {showSolution && (
          <pre className="overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-green-300">
            {step.solution}
          </pre>
        )}
      </div>

      {/* Kanan: editor + preview */}
      <div className="space-y-3">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="h-56 w-full resize-y rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100 outline-none"
          aria-label="Editor kode"
        />
        <div className="rounded-lg border border-neutral-200">
          <div className="border-b border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-500">
            Preview
          </div>
          <iframe
            title="Preview hasil kode"
            sandbox="allow-scripts"
            srcDoc={previewDoc}
            className="h-48 w-full rounded-b-lg bg-white"
          />
        </div>
      </div>
    </div>
  );
}
