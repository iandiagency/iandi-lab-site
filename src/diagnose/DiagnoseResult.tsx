import type { DiagnoseOutput, Stage } from "./scoreEngine";

type Props = {
  result: DiagnoseOutput;
  onRestart: () => void;
};

function formatKz(n: number) {
  return new Intl.NumberFormat("pt-PT").format(n) + " Kz";
}

function stageTitle(stage: Stage) {
  switch (stage) {
    case "DIAGNOSE":
      return "Crescimento travado";
    case "PERFORMANCE":
      return "Operação instável";
    case "SCALE":
      return "Crescimento estruturável";
    case "GROWTH_PARTNER":
      return "Pronto para escala";
  }
}

function stageSummary(stage: Stage) {
  switch (stage) {
    case "DIAGNOSE":
      return "O negócio não está bloqueado por esforço, mas por falta de clareza e estrutura. O próximo passo é diagnosticar e instalar bases mínimas de decisão.";
    case "PERFORMANCE":
      return "Há operação e vendas, mas o crescimento é volátil. O foco é estabilizar aquisição, conversão e rotinas de otimização para previsibilidade.";
    case "SCALE":
      return "O negócio cresce, mas ainda não escala com controlo. O foco é padronizar testes, criar guardrails e proteger margem/CAC.";
    case "GROWTH_PARTNER":
      return "O negócio está pronto para crescimento estratégico contínuo. O foco passa a ser alavancas, governança e expansão com disciplina.";
  }
}

function severityTag(score: number) {
  if (score <= 35) return { label: "Crítico", hint: "Requer intervenção imediata" };
  if (score <= 60) return { label: "Instável", hint: "Alta variância de resultado" };
  if (score <= 80) return { label: "Estruturável", hint: "Escalável com correções" };
  return { label: "Escalável", hint: "Pronto para expansão" };
}

function scoreBarWidth(v: number) {
  // breakdown é 0–20
  const pct = Math.max(0, Math.min(20, v)) / 20;
  return `${Math.round(pct * 100)}%`;
}

export default function DiagnoseResult({ result, onRestart }: Props) {
  const tag = severityTag(result.scoreTotal);

  return (
    <section
      className="min-h-screen bg-black text-white pt-28 md:pt-36 pb-24"
      // garante clique mesmo se algum container global estiver com overlay
      style={{ position: "relative", zIndex: 10 }}
    >
      <div className="max-w-[1100px] mx-auto px-6 space-y-10">
        {/* HEADER */}
        <header className="border border-white/10 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-4">
                RELATÓRIO EXECUTIVO — IANDI DIAGNOSE™
              </p>

              <h1 className="text-3xl md:text-5xl leading-[1.05] mb-4">
                Score: <span className="text-white">{result.scoreTotal}</span>/100
              </h1>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Este diagnóstico mede maturidade de crescimento em cinco dimensões. O objetivo não é “motivação” —
                é decisão: onde o sistema está a vazar e qual intervenção faz sentido agora.
              </p>
            </div>

            <div className="w-full md:w-[340px] border border-white/10 p-6">
              <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-3">STATUS</p>
              <div className="flex items-center justify-between">
                <p className="text-lg text-gray-200">{tag.label}</p>
                <p className="text-[11px] text-gray-500">{tag.hint}</p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5 space-y-2">
                <p className="text-[11px] tracking-[0.3em] text-gray-500">ESTÁGIO</p>
                <p className="text-gray-200">{stageTitle(result.stage)}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{result.stageLabel}</p>
              </div>
            </div>
          </div>
        </header>

        {/* EXEC SUMMARY */}
        <section className="border border-white/10 p-8 md:p-10">
          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-6">SUMÁRIO EXECUTIVO</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-gray-200">Conclusão central:</span> o crescimento atual não é consequência de um
                modelo previsível — depende de esforço pontual e decisões reativas.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                O foco agora é reduzir volatilidade e instalar um sistema de execução consistente: clareza, aquisição,
                conversão e ciclo de melhoria.
              </p>

              <div className="mt-6 border border-white/10 p-6">
                <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-2">RECOMENDAÇÃO</p>
                <p className="text-gray-200">
                  Oferta sugerida: <span className="text-white">{result.recommendedOffer}</span>
                </p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  A recomendação é baseada no estágio do negócio. Saltar etapas tende a aumentar custo e frustração.
                </p>
              </div>
            </div>

            <div className="border border-white/10 p-6 md:p-8">
              <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-3">PERDA ESTIMADA</p>
              <p className="text-2xl md:text-3xl text-gray-200">
                {formatKz(result.estimatedMonthlyLeakKz)} <span className="text-gray-500 text-sm">/ mês</span>
              </p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                Indicador de prioridade (não substitui análise financeira). Serve para dramatizar “vazamento” e orientar
                foco.
              </p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[11px] tracking-[0.3em] text-gray-500 mb-3">RESUMO DO ESTÁGIO</p>
                <p className="text-gray-400 text-sm leading-relaxed">{stageSummary(result.stage)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* BREAKDOWN */}
        <section className="border border-white/10 p-8 md:p-10">
          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-8">MAPA DE MATURIDADE (0–20)</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(
              Object.entries(result.breakdown) as Array<[keyof typeof result.breakdown, number]>
            ).map(([k, v]) => (
              <div key={String(k)} className="border border-white/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-200">{k}</p>
                  <p className="text-gray-500 text-sm">{v}/20</p>
                </div>

                <div className="h-[2px] bg-white/10">
                  <div className="h-[2px] bg-white" style={{ width: scoreBarWidth(v) }} />
                </div>

                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  {k === "Clareza" && "Oferta, ICP e mensagem: nitidez para o cliente entender rápido."}
                  {k === "Aquisição" && "Canal principal validado e previsibilidade de entrada."}
                  {k === "Funil" && "Processo de conversão + follow-up sem vazamentos."}
                  {k === "Criativos" && "Sistema de testes: hipóteses, variações e repetição de padrões vencedores."}
                  {k === "Escala" && "Controlo de CAC/margem e capacidade de aumentar orçamento sem quebrar."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTLENECKS */}
        <section className="border border-white/10 p-8 md:p-10">
          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-6">GARGALOS CRÍTICOS</p>
          <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
            {result.bottlenecks.map((b, i) => (
              <li key={i} className="border-l border-white/20 pl-4">
                {b}
              </li>
            ))}
          </ul>
        </section>

        {/* ROADMAP */}
        <section className="border border-white/10 p-8 md:p-10">
          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-8">ROTEIRO RECOMENDADO</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {result.roadmap.map((r, i) => (
              <div key={i} className="border border-white/10 p-6">
                <h3 className="text-sm tracking-wide mb-4 text-gray-200">{r.title}</h3>
                <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                  {r.bullets.map((x, j) => (
                    <li key={j}>— {x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* NEXT STEP — SINGLE CTA (clicável garantido) */}
        <section className="border border-white/10 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-3">PRÓXIMO PASSO</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              O diagnóstico define direção. A implementação exige sistema, métricas e rotina operacional.
              Se quiseres fechar com padrão consultivo, o próximo passo é uma call curta para alinhar escopo.
            </p>
          </div>

          <a
            href="/#contact"
            className="relative z-20 pointer-events-auto inline-flex items-center justify-center px-6 py-3 border border-white/30 text-sm text-gray-100 hover:border-white hover:bg-white hover:text-black transition"
          >
            Agendar diagnóstico estratégico
          </a>
        </section>

        <button
          onClick={onRestart}
          className="relative z-20 pointer-events-auto text-sm text-gray-500 hover:text-white transition underline underline-offset-4 w-fit"
        >
          Refazer diagnóstico
        </button>
      </div>
    </section>
  );
}
