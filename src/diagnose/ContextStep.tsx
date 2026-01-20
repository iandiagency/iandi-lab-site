import { useDiagnoseStore } from "./diagnoseStore";

export default function ContextStep() {
  const setAnswer = useDiagnoseStore((s) => s.setAnswer);

  return (
    <div className="space-y-4">
      <button
        onClick={() =>
          setAnswer("acquisition", "Tráfego pago previsível")
        }
        className="w-full rounded-xl border border-white/20 px-6 py-4 text-left"
      >
        Tráfego pago previsível
      </button>

      <button
        onClick={() =>
          setAnswer("acquisition", "Tráfego pago sem controlo")
        }
        className="w-full rounded-xl border border-white/20 px-6 py-4 text-left"
      >
        Tráfego pago sem controlo
      </button>

      <button
        onClick={() =>
          setAnswer("acquisition", "Orgânico / Conteúdo")
        }
        className="w-full rounded-xl border border-white/20 px-6 py-4 text-left"
      >
        Orgânico / Conteúdo
      </button>

      <button
        onClick={() =>
          setAnswer("acquisition", "WhatsApp informal")
        }
        className="w-full rounded-xl border border-white/20 px-6 py-4 text-left"
      >
        WhatsApp informal
      </button>
    </div>
  );
}
