import { useDiagnoseStore } from "./diagnoseStore";

export default function FrictionStep() {
  const setAnswer = useDiagnoseStore((s) => s.setAnswer);
  const next = useDiagnoseStore((s) => s.next);
  const back = useDiagnoseStore((s) => s.back);

  function select(value: string) {
    setAnswer("q_friction", value);
    next();
  }

  return (
    <section className="space-y-10">
      {/* HEADER */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Etapa 3 — Fricção
        </p>

        <h1 className="text-2xl font-semibold">
          Onde os clientes travam hoje?
        </h1>

        <p className="text-zinc-400">
          Crescimento não falha por falta de tráfego,  
          mas por fricções não resolvidas.
        </p>
      </div>

      {/* OPTIONS */}
      <div className="space-y-3">
        <button
          onClick={() => select("no_clarity")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          O cliente não entende claramente a oferta
        </button>

        <button
          onClick={() => select("low_trust")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          Falta confiança (prova, autoridade, posicionamento)
        </button>

        <button
          onClick={() => select("slow_response")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          Demora no atendimento ou follow-up
        </button>

        <button
          onClick={() => select("price_resistance")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          Resistência ao preço / valor percebido
        </button>

        <button
          onClick={() => select("uncertain")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          Não sei exatamente onde está o problema
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
