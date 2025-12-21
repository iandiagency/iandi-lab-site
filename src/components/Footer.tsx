export default function Footer() {
  return (
    <footer className="pt-16 pb-10 px-6 md:px-20 border-t border-white/10">
      <div className="page-container flex flex-col md:flex-row justify-between gap-8">

        <div>
          <img
            src="/iandilab-horizontal-white.svg"
            alt="IANDI Lab"
            className="h-6 mb-4"
          />
          <p className="text-xs text-gray-500 max-w-xs">
            Unidade de consultoria em crescimento.
            Estratégia, performance e sistemas previsíveis.
          </p>
        </div>

        <div className="text-xs text-gray-500">
          © 2025 IANDI Lab<br />
          Agendar diagnóstico estratégico
        </div>

      </div>
    </footer>
  );
}
