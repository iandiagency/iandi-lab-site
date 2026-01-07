import { useDiagnoseStore } from "./diagnoseStore";

export default function SystemStep() {
  const setAnswer = useDiagnoseStore((s) => s.setAnswer);
  const next = useDiagnoseStore((s) => s.next);
  const back = useDiagnoseStore((s) => s.back);

  function select(value: string) {
    setAnswer("q_system", value);
    next();
  }

  return (
    <section className="space-y-10">
      {/* HEADER */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Etapa 2 — Sistema
        </p>

        <h1 className="text-2xl font-semibold">
          Como os clientes avançam até à venda?
        </h1>

        <p className="text-zinc-400">
          Crescimento previsível exige sistema.  
          Esforço constante é um limite invisível.
        </p>
      </div>

      {/* OPTIONS */}
      <div className="space-y-3">
        <button
          onClick={() => select("structured_funnel")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          Existe um funil estruturado e previsível
        </button>

        <button
          onClick={() => select("semi_structured")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          Existe algum processo, mas depende de pessoas
        </button>

        <button
          onClick={() => select("manual")}
          className="w-full text-left px-5 py-4 border border-white/10 rounded-lg hover:border-white transition"
        >
          Tudo é manual (mensagens, ligações, improviso)
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
