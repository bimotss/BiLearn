"use client";

import { useMemo, useState } from "react";
import type { Step } from "@/lib/types";
import { jalankanTes } from "@/lib/tes";
import { usePintasanCtrlEnter } from "@/lib/pintasan";
import { InlineMarkdown } from "./MarkdownRenderer";
import Tuts from "./Tuts";

interface Props {
  step: Step;
  onPassed: () => void;
  isLanguageTrack?: boolean;
}

/** Editor IDE interaktif + live preview sandbox + test runner regex */
export default function StepView({ step, onPassed, isLanguageTrack }: Props) {
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
    if (step.language === "text") {
      const aman = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      const capText = isLanguageTrack
        ? "Draf tulisanmu:"
        : "Yang kamu tulis (tidak dijalankan di preview):";
      return `${base}<style>
        .term{background:#090d16;color:#e2e8f0;padding:12px;border-radius:6px;
              font-family:ui-monospace,monospace;font-size:12px;white-space:pre-wrap}
        .cap{font-size:11px;color:#64748b;margin:0 0 6px}
      <\/style>
      <p class="cap">${capText}<\/p>
      <div class="term">${aman || "(masih kosong)"}<\/div>${body}`;
    }

    if (step.language === "jsx") {
      const kodeJson = JSON.stringify(code).replace(/<\//g, "<\\/");
      return `${base}<style>
        #root{min-height:40px}
        #bilearn-out{font-family:ui-monospace,monospace;font-size:12px;background:#090d16;
          color:#e2e8f0;padding:8px;border-radius:6px;white-space:pre-wrap;margin-top:8px}
        #bilearn-out .err{color:#fca5a5}
        #bilearn-out .ok{color:#86efac}
      <\/style>
      <div id="root"><\/div>
      <pre id="bilearn-out"><\/pre>
      <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7/babel.min.js"><\/script>
      <script type="module">
        const kode = ${kodeJson};
        const out = document.getElementById('bilearn-out');
        const show = (teks, cls) => {
          const baris = document.createElement('div');
          if (cls) baris.className = cls;
          baris.textContent = teks;
          out.appendChild(baris);
        };
        console.log = (...args) => show(args.map(v =>
          typeof v === 'string' ? v : (() => { try { return JSON.stringify(v); } catch { return String(v); } })()
        ).join(' '));

        let React, createRoot;
        try {
          React = (await import('https://esm.sh/react@19')).default;
          createRoot = (await import('https://esm.sh/react-dom@19/client')).createRoot;
        } catch {
          show('Preview React butuh koneksi internet untuk memuat pustaka React.', 'err');
        }

        if (React && typeof Babel === 'undefined') {
          show('Kompiler JSX gagal dimuat. Periksa koneksi internetmu, lalu jalankan ulang.', 'err');
        }

        if (React && typeof Babel !== 'undefined') {
          const bersih = kode
            .replace(/^\\s*import[^;\\n]*;?$/gm, '')
            .replace(/^\\s*export\\s+default\\s+/gm, '')
            .replace(/^\\s*export\\s+/gm, '');
          let hasil;
          try {
            hasil = Babel.transform(bersih, {
              presets: [['react'], ['typescript']],
              filename: 'latihan.tsx',
            }).code;
          } catch (e) {
            show('Sintaks belum valid: ' + e.message, 'err');
          }
          if (hasil) {
            const nama = [...bersih.matchAll(/(?:function\\s+([A-Z]\\w*)|(?:const|let|var)\\s+([A-Z]\\w*)\\s*=)/g)]
              .map(m => m[1] || m[2]);
            const target = nama[nama.length - 1];
            const prelude = 'const {useState,useEffect,useRef,useMemo,useCallback,useContext,useReducer,createContext,Fragment,memo} = React;';
            try {
              const Komponen = new Function('React',
                prelude + '\\n' + hasil + '\\n;return typeof ' + target + " === 'function' ? " + target + ' : null;'
              )(React);
              if (Komponen) {
                createRoot(document.getElementById('root')).render(React.createElement(Komponen));
                show('Komponen ' + target + ' berhasil dirender di atas.', 'ok');
              } else {
                show('Sintaks TypeScript/JSX-mu sudah benar. Potongan yang hanya mendeklarasikan tipe (type, interface) memang tidak menampilkan hasil apa pun — tipe hilang saat kompilasi. Preview visual muncul kalau kamu menulis komponen utuh: fungsi berawalan huruf besar yang me-return JSX.', 'ok');
              }
            } catch (e) {
              show('Sintaks sudah benar, tapi potongan ini belum bisa dijalankan sendiri (' + e.message + '). Itu wajar untuk cuplikan yang bergantung pada hal di luar preview — elemen HTML tertentu, library yang belum terpasang, atau panggilan jaringan.', 'ok');
            }
          }
        }
      <\/script>`;
    }

    if (step.language === "html") return `${tw}${code}`;
    if (step.language === "css")
      return `${tw}${base}<style>${code}<\/style>${body}`;

    const consoleShim = `
<style>#bilearn-out{font-family:ui-monospace,monospace;font-size:12px;background:#090d16;color:#e2e8f0;padding:8px;border-radius:6px;white-space:pre-wrap;margin-top:8px;min-height:20px}
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
    } catch (e2) {}
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
  }, [code, step.language, step.previewHtml, step.loadTailwind, isLanguageTrack]);

  function runTests() {
    const res = jalankanTes(step.tests, code);
    setResults(res);
    if (res.every((r) => r.pass)) {
      setPassed(true);
      onPassed();
    }
  }

  usePintasanCtrlEnter(!passed, runTests);

  const getLanguageFileName = () => {
    switch (step.language) {
      case "html":
        return "index.html";
      case "css":
        return "styles.css";
      case "jsx":
        return "Component.tsx";
      case "text":
        return isLanguageTrack ? "draft.txt" : "terminal.sh";
      default:
        return "script.js";
    }
  };

  return (
    <div className="grid w-full min-w-0 gap-6 lg:grid-cols-2">
      {/* Kolom Kiri: Penjelasan, Contoh & Instruksi */}
      <div className="min-w-0 space-y-5">
        <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-5 backdrop-blur-sm shadow-xs">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Penjelasan Konsep
          </h2>
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base break-words">
            <InlineMarkdown text={step.explanation} />
          </div>
        </div>

        {/* Contoh Kerja Acuan */}
        <div className="min-w-0 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-5 backdrop-blur-sm space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <span>👀 Contoh Acuan</span>
            </p>
            <span className="text-[11px] font-mono text-slate-500">contoh-referensi</span>
          </div>

          <pre className="w-full min-w-0 overflow-x-auto rounded-xl border border-slate-300 dark:border-white/[0.06] bg-slate-950 dark:bg-[#090d16] p-3.5 font-mono text-xs text-amber-300 dark:text-amber-200/90 leading-relaxed">
            {step.example.code}
          </pre>

          <div className="min-w-0 rounded-lg border border-slate-200 dark:border-white/[0.06] bg-slate-100 dark:bg-slate-800/40 p-3 text-xs text-slate-700 dark:text-slate-300 break-words">
            <span className="font-semibold text-slate-900 dark:text-slate-200">Hasil Nyata: </span>
            <span className="font-mono text-slate-600 dark:text-slate-400 break-words whitespace-pre-wrap">{step.example.output}</span>
          </div>

          {step.example.note && (
            <p className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5 break-words">
              <span>💡</span>
              <span>{step.example.note}</span>
            </p>
          )}
        </div>

        {/* Sekarang Giliranmu (Instruksi Tugas) */}
        <div className="min-w-0 rounded-2xl border border-amber-400/60 bg-gradient-to-br from-amber-500/10 via-amber-100/40 to-white dark:border-amber-500/40 dark:from-amber-950/30 dark:via-slate-900 dark:to-slate-900 p-5 shadow-lg shadow-amber-500/5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <span>📝 Sekarang Giliranmu</span>
          </div>
          <div className="mt-2 text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed min-w-0 break-words">
            <InlineMarkdown text={step.instruction} />
          </div>
        </div>

        {/* Hasil Evaluasi Tes Otomatis */}
        {results.length > 0 && (
          <ul className="min-w-0 space-y-2">
            {results.map((r, i) => (
              <li
                key={i}
                className={`flex items-start gap-2.5 rounded-xl border p-3.5 text-xs sm:text-sm font-medium break-words ${
                  r.pass
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border-rose-500/30 bg-rose-500/10 text-rose-300"
                }`}
              >
                <span className="text-base shrink-0">{r.pass ? "✅" : "❌"}</span>
                <span className="min-w-0 break-words">{r.pass ? "Lolos tes otomatis" : r.message}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Banner Sukses Lolos */}
        {passed && (
          <div className="min-w-0 rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-5 text-sm font-medium text-emerald-200 shadow-lg shadow-emerald-500/10 animate-fade-in break-words">
            {isLanguageTrack
              ? "✅ Pemeriksaan otomatis lolos! Tekan "
              : "🎉 Semua pengujian lolos sempurna! Tekan "}
            <Tuts>Ctrl</Tuts> + <Tuts>Enter</Tuts> sekali lagi untuk melangkah ke materi berikutnya.
          </div>
        )}

        {/* Tombol Aksi */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={runTests}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 transition-all hover:scale-[1.02]"
          >
            <span>{isLanguageTrack ? "Periksa Jawaban" : "Jalankan Tes"}</span>
            <span className="font-mono text-xs opacity-75">(Ctrl + Enter)</span>
          </button>
          <button
            type="button"
            onClick={() => setShowSolution((s) => !s)}
            className="cursor-pointer rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
          >
            {showSolution ? "Sembunyikan Solusi" : "Lihat Solusi"}
          </button>
        </div>

        {/* Solusi Terbuka */}
        {showSolution && (
          <div className="min-w-0 rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-950 dark:bg-[#090d16] p-4 shadow-md">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Kunci Solusi Referensi:
            </div>
            <pre className="w-full min-w-0 overflow-x-auto font-mono text-xs leading-relaxed text-emerald-400">
              {step.solution}
            </pre>
          </div>
        )}
      </div>

      {/* Kolom Kanan: Pro Code Editor + Live Preview Sandbox */}
      <div className="min-w-0 space-y-4">
        {/* Editor Chrome Window */}
        <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-slate-300 dark:border-white/[0.08] bg-slate-950 dark:bg-[#090d16] shadow-2xl">
          {/* Mac-style Window Title Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 dark:border-white/[0.08] bg-slate-900/90 px-4 py-2.5 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="ml-3 flex items-center gap-2 rounded-lg bg-black/40 px-2.5 py-1 text-xs font-mono text-slate-300 border border-white/[0.06] min-w-0 truncate">
                <span className="truncate">{getLanguageFileName()}</span>
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
              {step.language}
            </span>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="h-64 w-full min-w-0 resize-y bg-slate-950 dark:bg-[#090d16] p-4 font-mono text-sm leading-relaxed text-slate-100 outline-none focus:ring-1 focus:ring-amber-500/40"
            aria-label={isLanguageTrack ? "Editor jawaban" : "Editor kode"}
          />
        </div>

        {/* Preview Chrome Window */}
        <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-slate-300 dark:border-white/[0.08] bg-white dark:bg-[#090d16] shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-slate-900/90 px-4 py-2.5 min-w-0">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{isLanguageTrack ? "Draf Teks Preview" : "Live Preview Sandbox"}</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono shrink-0">browser-renderer</span>
          </div>
          <iframe
            title={isLanguageTrack ? "Preview draf tulisan" : "Preview hasil kode"}
            sandbox="allow-scripts"
            srcDoc={previewDoc}
            className="h-56 w-full min-w-0 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
