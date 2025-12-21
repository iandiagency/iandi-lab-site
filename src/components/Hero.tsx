export default function Hero() {
  return (
    <section id="hero" className="section pt-28 md:pt-36">
      <div className="page-container grid-consulting">

        {/* LEFT */}
        <div className="max-w-xl">
          <p className="text-xs tracking-widest text-red-500 mb-4">
            A VERDADE QUE NINGUÉM TE DIZ
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl leading-[1.15] mb-6">
            Crescimento previsível exige sistema —
            <br /> não improviso.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            A maior parte das marcas não cresce por falta de método.
            Eliminamos ineficiências e instalamos sistemas de aquisição que funcionam.
          </p>

          <p className="text-[0.7rem] tracking-[0.2em] text-gray-500 mb-8">
            IANDI LAB — SISTEMAS DE CRESCIMENTO
          </p>

          <a href="#contact" className="cta-consulting">
            Agendar diagnóstico
          </a>
        </div>

        {/* RIGHT */}
        <div className="grid gap-6 max-w-sm">
          {[
            {
              title: "Eficiência Estrutural",
              text: "Eliminamos fricções, perdas e inconsistências no processo de aquisição."
            },
            {
              title: "Modelagem de Crescimento",
              text: "Sistemas previsíveis baseados em dados, não suposições."
            },
            {
              title: "Escala Controlada",
              text: "Crescimento com estabilidade de custo e qualidade."
            }
          ].map((item, i) => (
            <div key={i} className="border border-white/10 p-6 rounded-sm">
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
