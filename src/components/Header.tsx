import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <div className="relative max-w-6xl mx-auto h-16 px-6 flex items-center justify-center">

          {/* MENU */}
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="absolute left-6 flex flex-col gap-1.5"
          >
            <span className="w-6 h-px bg-white/80" />
            <span className="w-6 h-px bg-white/80" />
            <span className="w-6 h-px bg-white/80" />
          </button>

          {/* LOGO */}
          <Link to="/" className="block">
            <img
              src="/iandi-lab-logo-white.png"
              alt="IANDI Lab"
              className="h-7 w-auto opacity-90 hover:opacity-100 transition"
              draggable={false}
            />
          </Link>

        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black text-white">
          <div className="h-full max-w-6xl mx-auto px-6 py-10 flex flex-col">

            <div className="flex justify-between items-center">
              <span className="font-semibold text-xl">IANDI</span>
              <button
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-400 hover:text-white"
              >
                Fechar
              </button>
            </div>

            <nav className="mt-24 space-y-10">
              <Link to="/" onClick={() => setOpen(false)} className="block text-3xl font-light">
                Início
              </Link>
              <Link to="/diagnose" onClick={() => setOpen(false)} className="block text-3xl font-light">
                IANDI Diagnose™
              </Link>
              <Link to="/next-step" onClick={() => setOpen(false)} className="block text-3xl font-light">
                Próximo passo
              </Link>
            </nav>

            <div className="mt-auto pt-16 text-sm text-zinc-500 max-w-md">
              Unidade de consultoria em crescimento.  
              Estratégia, performance e sistemas previsíveis.
            </div>

          </div>
        </div>
      )}
    </>
  );
}
