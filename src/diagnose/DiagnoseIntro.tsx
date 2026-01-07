import { useDiagnoseStore } from "./diagnoseStore";

export default function DiagnoseIntro() {
  const next = useDiagnoseStore((s) => s.next);

  return (
    <section className="diagnose-container">
      {/* Autoridade */}
      <p className="eyebrow">Diagnóstico Estratégico — IANDI Lab</p>

      {/* Tese */}
      <h1>
        O problema não é tráfego.
        <br />
        É falta de estrutura para crescer.
      </h1>

      {/* Autoridade */}
      <p className="mt-6 max-w-xl">
        Este diagnóstico identifica onde o seu crescimento está a falhar —
        antes de anúncios amplificarem o prejuízo.
      </p>

      {/* Filtro */}
      <p className="mt-4 text-sm text-zinc-500 max-w-xl">
        Não é para quem quer impulsionar.{" "}
        <strong className="text-zinc-300">
          É para quem precisa decidir.
        </strong>
      </p>

      {/* CTA */}
      <button onClick={next} className="diagnose-cta">
        Avaliar a Estrutura do Negócio
      </button>

      {/* Microcopy */}
      <p className="diagnose-progress">
        Tempo estimado: 3–5 minutos · Sem achismos
      </p>
    </section>
  );
}
