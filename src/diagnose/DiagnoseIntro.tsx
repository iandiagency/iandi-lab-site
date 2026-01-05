import { useDiagnoseStore } from "./diagnoseStore";

export default function DiagnoseIntro() {
  const next = useDiagnoseStore((s) => s.next);

  return (
    <section className="section">
      <span className="eyebrow">Diagnóstico Estratégico</span>
      <h1>Crescimento previsível exige sistema.</h1>
      <p>
        Este diagnóstico identifica onde o seu crescimento está a falhar —
        antes que escalar torne o prejuízo maior.
      </p>

      <button onClick={next} className="cta">
        Iniciar Diagnóstico
      </button>
    </section>
  );
}
