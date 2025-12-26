export default function ModelsOfEngagement() {
  return (
    <section id="models" className="py-28 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADLINE */}
        <h2 className="text-3xl md:text-4xl font-light mb-6 max-w-3xl">
          Modelos de atuação adaptados ao estágio do teu crescimento.
        </h2>

        {/* INTRO */}
        <p className="text-gray-400 max-w-2xl mb-10">
          Não acreditamos em soluções universais.  
          Cada negócio exige um nível diferente de intervenção.
        </p>

        {/* EDUCATIVO */}
        <p className="text-gray-300 max-w-2xl leading-relaxed mb-20">
          Algumas empresas precisam de clareza.  
          Outras precisam de performance.  
          Outras precisam de escala.
          <br /><br />
          O IANDI Lab atua de forma diferente em cada estágio.
        </p>

        {/* STAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* STAGE 1 — ENTRY */}
          <div className="border border-white/20 p-8">
            <p className="text-[11px] tracking-[0.3em] text-gray-500 mb-4">
              ESTÁGIO 1
            </p>
            <h3 className="text-xl mb-3">
              IANDI Diagnose™
            </h3>
            <p className="text-gray-400 mb-6">
              Entender o que está a travar o crescimento.
            </p>

            <a href="#diagnose" className="cta-consulting">
              Ver como funciona
            </a>
          </div>

          {/* STAGE 2 */}
          <div className="border border-white/10 p-8">
            <p className="text-[11px] tracking-[0.3em] text-gray-500 mb-4">
              ESTÁGIO 2
            </p>
            <h3 className="text-xl mb-3">
              IANDI Performance™
            </h3>
            <p className="text-gray-400">
              Eficiência e previsibilidade.
            </p>
          </div>

          {/* STAGE 3 */}
          <div className="border border-white/10 p-8">
            <p className="text-[11px] tracking-[0.3em] text-gray-500 mb-4">
              ESTÁGIO 3
            </p>
            <h3 className="text-xl mb-3">
              IANDI Scale™
            </h3>
            <p className="text-gray-400">
              Crescimento com método e controlo.
            </p>
          </div>

          {/* STAGE 4 */}
          <div className="border border-white/10 p-8">
            <p className="text-[11px] tracking-[0.3em] text-gray-500 mb-4">
              ESTÁGIO 4
            </p>
            <h3 className="text-xl mb-3">
              IANDI Growth Partner™
            </h3>
            <p className="text-gray-400">
              Crescimento como prioridade estratégica.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
