import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <a href="#hero" className="flex items-center">
          <img
            src="/iandilab-horizontal-white.svg"
            alt="IANDI Lab"
            className="h-7 w-auto"
          />
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-white transition">Serviços</a>
          <a href="#playbook" className="hover:text-white transition">Método</a>
          <a href="#about" className="hover:text-white transition">Sobre</a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-6 text-gray-300 text-sm">
            <a href="#services" onClick={() => setOpen(false)}>Serviços</a>
            <a href="#playbook" onClick={() => setOpen(false)}>Método</a>
            <a href="#about" onClick={() => setOpen(false)}>Sobre</a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 border border-white/30 py-3 text-center text-white"
            >
              Agendar diagnóstico
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
