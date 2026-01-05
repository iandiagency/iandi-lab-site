import { useDiagnoseStore } from "./diagnoseStore";

export default function DiagnoseDecision() {
  const next = useDiagnoseStore((s) => s.next);

  return (
    <section className="section">
      <h2>Decisão Estratégica</h2>

      <button onClick={next}>
        Ver Diagnóstico
      </button>
    </section>
  );
}
