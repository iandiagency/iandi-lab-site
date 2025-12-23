import CTA from "@/components/CTA";

export default function Hero() {
  return (
    <section id="hero" className="pt-32 md:pt-40 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div className="max-w-xl">
          <p className="text-xs tracking-widest text-red-500 mb-5">
            A VERDADE QUE NINGUÉM TE DIZ
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl leading-[1.15] mb-8">
            Crescimento previsível
            <br />
            exige sistema —
            <br />
            não improviso.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
            A maior parte das marcas não cresce por falta de método.
            Eliminamos ineficiências e instalamos sistemas de aquisição
            que funcionam.
          </p>

          <p className="text-[0.7rem] tracking-[0.25em] text-gray-500 mb-10">
            IANDI LAB — SISTEMAS DE CRESCIMENTO
          </p>

          <CTA />
        </div>

        {/* RIGHT */}
        <div className="grid gap-6 max-w-sm">
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
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
