import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-black border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#hero" className="flex items-center z-50">
          <img
            src="/iandilab-horizontal-white.svg"
            alt="IANDI Lab"
            className="h-7"
          />
        </a>

        {/* DESKTOP CTA */}
        <a href="#contact" className="hidden md:inline-flex text-sm border border-white/30 px-5 py-2">
          Agendar diagnóstico
        </a>

        {/* MOBILE MENU ICON (2 lines) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[6px] z-50"
          aria-label="Abrir menu"
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-6 text-sm">
            <a href="#services" onClick={() => setOpen(false)}>Serviços</a>
            <a href="#playbook" onClick={() => setOpen(false)}>Método</a>
            <a href="#about" onClick={() => setOpen(false)}>Sobre</a>
            <a href="#contact" onClick={() => setOpen(false)} className="border border-white/30 px-4 py-3 text-center">
              Agendar diagnóstico
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
