import { useDiagnoseStore } from "./diagnoseStore";

export default function DecisionStep() {
  const setAnswer = useDiagnoseStore((s) => s.setAnswer);
  const compute = useDiagnoseStore((s) => s.compute);
  const back = useDiagnoseStore((s) => s.back);

  function select(value: string) {
    setAnswer("q_decision_posture", value);
    // Aqui fechamos a coleta e disparamos o cérebro
    compute();
  }

  return (
    <section className="space-y-10">
      {/* HEADER */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Etapa 4 — Decisão
        </p>

        <h1 className="text-2xl font-semibold">
          Como você toma decisões hoje?
        </h1>

        <p className="text-zinc-400">
          Crescer exige escolher o momento certo —  
          e corrigir antes de escalar.
        </p>
      </div>

      {/* OPTIONS */}
      <div className="space-y-3">
        <button
          onClick={() => select("data_driven")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          Decido com dados, métricas e análises claras
        </button>

        <button
          onClick={() => select("mixed")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          Uso dados, mas ainda confio muito na intuição
        </button>

        <button
          onClick={() => select("intuition_only")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          Decido principalmente por feeling e experiência
        </button>
      </div>

      {/* NAV */}
      <div className="pt-4 border-t border-white/10">
        <button
          onClick={back}
          className="text-sm text-zinc-400 hover:text-white transition"
        >
          ← Voltar
        </button>
      </div>
    </section>
  );
}
