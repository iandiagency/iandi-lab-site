import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock body scroll when menu opens (mobile)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        {/* MOBILE: 3 columns (left icon / centered logo / right spacer) */}
        <div className="grid grid-cols-3 items-center md:hidden">
          <div className="flex items-center">
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-white p-2 -ml-2 relative z-[10001]"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              type="button"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <a
            href="#hero"
            className="flex items-center justify-center"
            onClick={() => setOpen(false)}
            aria-label="Ir para o início"
          >
            <img
              src="/iandilab-horizontal-white.svg"
              alt="IANDI Lab"
              className="h-7 w-auto"
            />
          </a>

          {/* spacer (keeps logo perfectly centered) */}
          <div />
        </div>

        {/* DESKTOP: logo left / links center / CTA right */}
        <div className="hidden md:flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img
              src="/iandilab-horizontal-white.svg"
              alt="IANDI Lab"
              className="h-7 w-auto"
            />
          </a>

          <div className="flex items-center gap-8 text-sm text-gray-300">
            <a href="#services" className="hover:text-white transition">
              Serviços
            </a>
            <a href="#playbook" className="hover:text-white transition">
              Método
            </a>
            <a href="#about" className="hover:text-white transition">
              Sobre
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 text-sm text-white hover:bg-white hover:text-black transition"
          >
            Agendar diagnóstico
          </a>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 z-[10000]"
        >
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
              className="mt-2 inline-flex justify-center border border-white/30 py-3 text-white hover:bg-white hover:text-black transition"
            >
              Agendar diagnóstico
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
