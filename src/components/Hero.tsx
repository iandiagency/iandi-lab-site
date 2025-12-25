import CTA from "@/components/CTA";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36 md:pt-44 pb-24 overflow-hidden">
      {/* Optional decorative layer (never blocks clicks) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-start">
        {/* LEFT */}
        <div className="max-w-xl">
          <p className="text-[11px] tracking-[0.35em] text-red-500 mb-6 md:mb-8">
            A VERDADE QUE NINGUÉM TE DIZ
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-8 md:mb-10">
            Crescimento previsível
            <br />
            exige sistema —
            <br />
            não improviso.
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 md:mb-12">
            A maior parte das marcas não cresce por falta de método. Eliminamos
            ineficiências e instalamos sistemas de aquisição que funcionam.
          </p>

          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-10 md:mb-14">
            IANDI LAB — SISTEMAS DE CRESCIMENTO
          </p>

          {/* Critical: CTA must sit above any overlays */}
          <div className="relative z-50 pointer-events-auto">
            <CTA href="#contact" />
          </div>
        </div>

        {/* RIGHT (desktop only) */}
        <div className="hidden md:grid gap-8 max-w-sm">
          {[
            {
              title: "Eficiência Estrutural",
              text: "Eliminamos fricções, perdas e inconsistências no processo de aquisição.",
            },
            {
              title: "Modelagem de Crescimento",
              text: "Sistemas previsíveis baseados em dados, não suposições.",
            },
            {
              title: "Escala Controlada",
              text: "Crescimento com estabilidade de custo e qualidade.",
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 p-6">
              <h3 className="text-sm mb-3 tracking-wide">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
