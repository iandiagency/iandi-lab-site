import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔒 Lock scroll quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white antialiased">
      {/* =========================
          HEADER — OGILVY
      ========================= */}
      <header className="fixed top-0 z-50 h-16 w-full">
        <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-6">

          {/* MENU (— —) */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            className="absolute left-6 flex flex-col gap-[6px]"
          >
            <span className="h-[1px] w-6 bg-white/80" />
            <span className="h-[1px] w-4 bg-white/80" />
          </button>

          {/* LOGO — assinatura editorial */}
          <Link
            to="/"
            className="text-[11px] uppercase tracking-[0.35em] text-white/80"
          >
            IANDI LAB
          </Link>

          {/* Espaço fantasma (equilíbrio visual) */}
          <div className="w-6" />
        </div>
      </header>

      {/* =========================
          MENU FULLSCREEN — OGILVY
      ========================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-black">
          {/* Fechar — mesma linguagem do menu */}
          <button
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
            className="absolute left-6 top-6 flex flex-col gap-[6px]"
          >
            <span className="h-[1px] w-6 bg-white" />
            <span className="h-[1px] w-6 bg-white rotate-180" />
          </button>

          {/* Navegação */}
          <nav className="flex h-full flex-col items-center justify-center gap-10 text-center">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light"
            >
              Início
            </Link>

            <Link
              to="/diagnose"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light"
            >
              Diagnóstico
            </Link>

            <Link
              to="/next-step"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light"
            >
              Próximo passo
            </Link>
          </nav>
        </div>
      )}

      {/* =========================
          PAGE
      ========================= */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-zinc-400">
                IANDI Lab
              </div>
              <p className="mt-3 max-w-xl text-sm text-zinc-400">
                Unidade de consultoria em crescimento. Estratégia, performance e
                sistemas previsíveis.
              </p>
            </div>

            <div className="text-xs text-zinc-500">
              © {new Date().getFullYear()} IANDI Lab
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
