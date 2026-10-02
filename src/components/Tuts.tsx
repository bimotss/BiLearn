/** Label tombol keyboard berdesain keycap presisi, mis. <Tuts>Ctrl</Tuts> + <Tuts>Enter</Tuts>. */
export default function Tuts({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/90 px-1.5 py-0.5 font-mono text-xs font-semibold text-amber-800 dark:text-amber-300 shadow-xs">
      {children}
    </kbd>
  );
}
