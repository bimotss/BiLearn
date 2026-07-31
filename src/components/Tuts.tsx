/** Label tombol keyboard, mis. <Tuts>Ctrl</Tuts> + <Tuts>Enter</Tuts>. */
export default function Tuts({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-current/30 bg-white/60 px-1.5 py-0.5 font-mono text-xs font-semibold">
      {children}
    </kbd>
  );
}
