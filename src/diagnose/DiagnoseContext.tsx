import { useDiagnoseStore } from "./diagnoseStore";

export default function DiagnoseContext() {
  const setAnswer = useDiagnoseStore((s) => s.setAnswer);
  const next = useDiagnoseStore((s) => s.next);

  return (
    <section className="section">
      <h2>Contexto do Negócio</h2>

      <button onClick={() => {
        setAnswer("q_acq_main", "paid");
        next();
      }}>
        Tráfego Pago
      </button>
    </section>
  );
}
