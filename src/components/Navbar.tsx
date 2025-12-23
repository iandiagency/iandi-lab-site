import { useState } from "react";
import { Menu, X } from "lucide-react";

console.log("NAVBAR ATIVO EM PRODUÇÃO");

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#hero" className="flex items-center z-50">
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

        {/* DESKTOP CTA */}
        <a href="#contact" className="cta-consulting hidden md:inline-flex">
          Agendar diagnóstico
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white z-50"
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-6 text-gray-300 text-sm">
            <a onClick={() => setOpen(false)} href="#services" className="hover:text-white">
              Serviços
            </a>
            <a onClick={() => setOpen(false)} href="#playbook" className="hover:text-white">
              Método
            </a>
            <a onClick={() => setOpen(false)} href="#about" className="hover:text-white">
              Sobre
            </a>

            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="mt-4 inline-flex justify-center border border-white/20 py-3 text-white"
            >
              Agendar diagnóstico
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
