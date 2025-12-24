import CTA from "@/components/CTA";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-48 md:pt-56 pb-32"
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* LEFT / MANIFESTO */}
        <div className="max-w-xl">
          <p className="text-[11px] tracking-[0.35em] text-red-500 mb-8">
            A VERDADE QUE NINGUÉM TE DIZ
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-10">
            Crescimento previsível
            <br />
            exige sistema —
            <br />
            não improviso.
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12">
            A maior parte das marcas não cresce por falta de método.
            Eliminamos ineficiências e instalamos sistemas de aquisição que funcionam.
          </p>

          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-14">
            IANDI LAB — SISTEMAS DE CRESCIMENTO
          </p>

          <CTA href="#contact" />
        </div>

        {/* RIGHT — DESKTOP ONLY */}
        <div className="hidden md:block absolute top-[14.5rem] right-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))]">
          <div className="grid gap-8 max-w-sm">
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
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer para desktop */}
        <div className="hidden md:block h-[20rem]" />
      </div>
    </section>
  );
}
