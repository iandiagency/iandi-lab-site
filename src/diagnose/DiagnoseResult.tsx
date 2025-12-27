import type { DiagnoseOutput } from "./scoreEngine";

type Props = {
  result: DiagnoseOutput;
  onRestart: () => void;
};

function formatKz(n: number) {
  return new Intl.NumberFormat("pt-PT").format(n) + " Kz";
}

export default function DiagnoseResult({ result, onRestart }: Props) {
  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-6 space-y-12">
        <div className="border border-white/10 p-8">
          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-4">RESULTADO</p>
          <h1 className="text-3xl md:text-5xl leading-[1.05] mb-6">
            Score: <span className="text-white">{result.scoreTotal}</span>/100
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="border border-white/10 p-6">
              <p className="text-[11px] tracking-[0.3em] text-gray-500 mb-2">NÍVEL</p>
              <p className="text-lg text-gray-200">{result.level}</p>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                Recomendação: <span className="text-gray-200">{result.recommendedOffer}</span>
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <p className="text-[11px] tracking-[0.3em] text-gray-500 mb-2">PERDA ESTIMADA</p>
              <p className="text-lg text-gray-200">{formatKz(result.estimatedMonthlyLeakKz)}/mês</p>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Estimativa para priorização (não substitui análise financeira).
              </p>
            </div>
          </div>
        </div>

        <div className="border border-white/10 p-8">
          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-6">GARGALOS</p>
          <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
            {result.bottlenecks.map((b, i) => (
              <li key={i} className="border-l border-white/20 pl-4">
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-white/10 p-8">
          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-8">ROTEIRO RECOMENDADO</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {result.roadmap.map((r, i) => (
              <div key={i} className="border border-white/10 p-6">
                <h3 className="text-sm tracking-wide mb-4">{r.title}</h3>
                <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                  {r.bullets.map((x, j) => (
                    <li key={j}>— {x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA ÚNICO */}
        <div className="border border-white/10 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-3">PRÓXIMO PASSO</p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              O diagnóstico identifica a direção. A implementação exige sistema, métricas e rigor operacional.
            </p>
          </div>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-sm text-gray-100 hover:border-white hover:bg-white hover:text-black transition"
          >
            Agendar diagnóstico estratégico
          </a>
        </div>

        <button
          onClick={onRestart}
          className="text-sm text-gray-400 hover:text-white transition underline underline-offset-4"
        >
          Refazer diagnóstico
        </button>
      </div>
    </section>
  );
}
