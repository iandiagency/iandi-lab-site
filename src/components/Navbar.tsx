export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#hero" className="flex items-center">
          <img
            src="/iandilab-horizontal-white.svg"
            alt="IANDI Lab"
            className="h-7 w-auto"
          />
        </a>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-white transition">Serviços</a>
          <a href="#playbook" className="hover:text-white transition">Método</a>
          <a href="#about" className="hover:text-white transition">Sobre</a>
        </div>

        {/* CTA */}
        <a href="#contact" className="cta-consulting hidden md:inline-flex">
          Agendar diagnóstico
        </a>
      </div>
    </nav>
  );
}
