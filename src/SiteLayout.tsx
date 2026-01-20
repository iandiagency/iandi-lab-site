import { Link, Outlet, useLocation } from "react-router-dom";

export default function SiteLayout() {
  const { pathname } = useLocation();
  const isDiagnose = pathname.startsWith("/diagnose");

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white antialiased">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0B0C]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="text-[11px] uppercase tracking-[0.35em] text-zinc-300 hover:text-white"
          >
            IANDI LAB
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/#stages"
              className="text-xs text-zinc-300 hover:text-white"
            >
              Estágios
            </Link>
            <Link
              to="/#framework"
              className="text-xs text-zinc-300 hover:text-white"
            >
              Framework
            </Link>
            <Link
              to="/#proof"
              className="text-xs text-zinc-300 hover:text-white"
            >
              Provas
            </Link>

            <Link
              to="/diagnose"
              className={[
                "text-xs",
                "border-b pb-1 transition",
                isDiagnose
                  ? "border-white text-white"
                  : "border-zinc-600 text-zinc-300 hover:border-white hover:text-white",
              ].join(" ")}
            >
              Diagnóstico
            </Link>
          </nav>
        </div>
      </header>

      {/* Page */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
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
