export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-[#0f2545]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-slate-500">
          <span className="text-[#00ff9f]">©</span> {year} Ganesh Choudhary - Built with React + Vite
        </div>
        <div className="font-mono text-xs text-slate-500 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] inline-block animate-pulse" />
          Deployed on GitHub Pages
        </div>
        <a
          href="#hero"
          className="font-mono text-xs text-slate-500 hover:text-[#00ff9f] transition-colors"
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
