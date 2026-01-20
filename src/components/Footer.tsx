export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-4 text-xs text-zinc-500 text-center">

        {/* LOGO */}
        <img
          src="/iandi-lab-logo-white.png"
          alt="IANDI Lab"
          className="h-6 opacity-80"
          draggable={false}
        />

        {/* DESCRIÇÃO */}
        <p className="max-w-md leading-relaxed">
          Unidade de consultoria em crescimento.  
          Estratégia, performance e sistemas previsíveis.
        </p>

        {/* COPYRIGHT */}
        <p>© 2025 IANDI Lab</p>
      </div>
    </footer>
  );
}
