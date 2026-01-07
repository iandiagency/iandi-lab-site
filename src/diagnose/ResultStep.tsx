import { useDiagnoseStore } from "./diagnoseStore";

const tierLabel: Record<string, string> = {
  A: "Estrutura pronta para escalar",
  B: "Base sólida, com ajustes críticos",
  C: "Crescimento frágil",
  D: "Risco elevado ao escalar",
};

const leakLabel: Record<string, string> = {
  acquisition: "Aquisição",
  conversion: "Conversão",
  retention: "Retenção",
  data: "Dados & Decisão",
};

export default function ResultStep() {
  const tier = useDiagnoseStore((s) => s.tier);
  const primaryLeak = useDiagnoseStore((s) => s.primaryLeak);
  const riskFlags = useDiagnoseStore((s) => s.riskFlags);
  const next = useDiagnoseStore((s) => s.next);

  return (
    <section className="space-y-10">
      {/* HEADER */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Resultado do Diagnóstico
        </p>

        <h1 className="text-2xl font-semibold">
          Nível de prontidão: Tier {tier}
        </h1>

        <p className="text-zinc-400">
          {tier ? tierLabel[tier] : ""}
        </p>
      </div>

      {/* PRIMARY LEAK */}
      <div className="border border-white/10 rounded-lg p-4 space-y-2">
        <p className="text-sm text-zinc-400">
          Principal travão identificado
        </p>

        <p className="text-lg font-medium">
          {primaryLeak ? leakLabel[primaryLeak] : "-"}
        </p>
      </div>

      {/* RISKS */}
      {riskFlags.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-zinc-400">
            Riscos críticos se escalar agora
          </p>

          <ul className="list-disc list-inside text-sm text-zinc-300 space-y-1">
            {riskFlags.slice(0, 3).map((risk, i) => (
              <li key={i}>{risk}</li>
            ))}
          </ul>
        </div>
      )}

      {/* WARNING */}
      <div className="border-l-2 border-white/30 pl-4 text-sm text-zinc-400">
        Escalar sem corrigir isto tende a amplificar custos,
        não resultados.
      </div>

      {/* CTA */}
      <div className="pt-4 border-t border-white/10">
        <button
          onClick={next}
          className="w-full px-6 py-3 border border-white/20 rounded-md hover:border-white transition"
        >
          Ver próximo passo
        </button>
      </div>
    </section>
  );
}
