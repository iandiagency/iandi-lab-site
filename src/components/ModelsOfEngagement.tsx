export default function ModelsOfEngagement() {
  return (
    <section id="models" className="section border-t border-white/10">
      <div className="page-container">

        <h2 className="text-2xl md:text-3xl mb-4 max-w-3xl">
          Modelos de atuação adaptados ao estágio do teu crescimento.
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl">
          Não acreditamos em soluções universais.
          Cada negócio exige um nível diferente de intervenção.
        </p>

        <p className="text-gray-300 mb-12 max-w-2xl leading-relaxed">
          Algumas empresas precisam de clareza.<br />
          Outras precisam de performance.<br />
          Outras precisam de escala.<br /><br />
          O IANDI Lab atua de forma diferente em cada estágio.
        </p>

        <div className="grid-cards">
          {[
            ["ESTÁGIO 1", "IANDI Diagnose™", "Entender o que está a travar o crescimento."],
            ["ESTÁGIO 2", "IANDI Performance™", "Eficiência e previsibilidade."],
            ["ESTÁGIO 3", "IANDI Scale™", "Crescimento com método e controlo."],
            ["ESTÁGIO 4", "IANDI Growth Partner™", "Crescimento como prioridade estratégica."]
          ].map(([stage, title, text], i) => (
            <div key={i} className="border border-white/10 p-6 rounded-sm">
              <p className="text-xs tracking-widest text-gray-500 mb-2">{stage}</p>
              <h3 className="text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm mb-4">{text}</p>
              {i === 0 && (
                <a href="#contact" className="cta-consulting">
                  Ver como funciona
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="#contact" className="cta-consulting">
            Agendar diagnóstico
          </a>
        </div>

      </div>
    </section>
  );
}
