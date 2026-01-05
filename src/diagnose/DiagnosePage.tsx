import { useEffect } from "react";
import { useDiagnoseStore } from "./store/diagnoseStore";

export default function DiagnosePage() {
  const step = useDiagnoseStore((s) => s.step);
  const next = useDiagnoseStore((s) => s.next);
  const compute = useDiagnoseStore((s) => s.compute);

  useEffect(() => {
    if (step === "decision") compute();
  }, [step, compute]);

  return (
    <section className="page">
      <div className="diagnose-container">

        {/* EYEBROW */}
        <p className="eyebrow">
          Diagnóstico Estratégico — IANDI Lab
        </p>

        {/* HEADLINE */}
        <h1>
          Vamos identificar onde o teu crescimento está a falhar.
        </h1>

        {/* CONTEXTO */}
        <p className="mt-6 max-w-xl">
          Responde com honestidade. Isto não é um teste — é um sistema de decisão.
        </p>

        {/* EXEMPLO DE DECISÃO */}
        <div className="mt-12 space-y-4 max-w-2xl">
          <button className="diagnose-card" onClick={next}>
            <h3>Tenho vendas, mas não previsibilidade</h3>
            <p>
              O negócio depende de esforço manual e não de um sistema estável.
            </p>
          </button>

          <button className="diagnose-card" onClick={next}>
            <h3>Vendo bem, mas o lucro oscila</h3>
            <p>
              Cresce, mas sem controlo de CAC, margem ou retenção.
            </p>
          </button>
        </div>

        {/* CTA */}
        <button className="diagnose-cta" onClick={next}>
          Avançar análise
        </button>

        {/* PROGRESSO */}
        <p className="diagnose-progress">
          Etapa 1 de 4 — Contexto
        </p>

      </div>
    </section>
  );
}
