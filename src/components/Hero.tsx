import CTA from "@/components/CTA";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-visible pt-44 pb-28"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* LEFT */}
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
        <div className="hidden md:block absolute top-0 right-0">
          <div className="grid gap-8 max-w-sm">
            <div className="border border-white/10 p-6">
              <h3 className="text-sm mb-3">Eficiência Estrutural</h3>
              <p className="text-gray-400 text-sm">
                Eliminamos fricções, perdas e inconsistências.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="text-sm mb-3">Modelagem de Crescimento</h3>
              <p className="text-gray-400 text-sm">
                Sistemas previsíveis baseados em dados.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="text-sm mb-3">Escala Controlada</h3>
              <p className="text-gray-400 text-sm">
                Crescimento com estabilidade.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
