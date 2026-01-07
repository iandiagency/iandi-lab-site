import { useState } from "react";
import { useDiagnoseStore } from "./diagnoseStore";
import StepShell from "./StepShell";

export default function ContextStep() {
  const setAnswer = useDiagnoseStore((s) => s.setAnswer);
  const next = useDiagnoseStore((s) => s.next);

  const [selected, setSelected] = useState<string | null>(null);

  function select(value: string) {
    setSelected(value);
    setAnswer("q_acq_main", value);
  }

  function handleNext() {
    if (!selected) return;
    next();
  }

  return (
    <StepShell
      eyebrow="Etapa 1 — Aquisição"
      title="De onde vêm os clientes hoje?"
      description="Esta resposta define se o crescimento depende de sistema ou de esforço."
      onNext={handleNext}
      canProceed={!!selected}
    >
      <div className="grid gap-3">
        {[
          { id: "paid_controlled", label: "Tráfego pago previsível" },
          { id: "paid_uncontrolled", label: "Tráfego pago sem controlo" },
          { id: "organic", label: "Orgânico / Conteúdo" },
          { id: "referral", label: "Indicações / Networking" },
          { id: "whatsapp_only", label: "WhatsApp informal" },
        ].map((opt) => (
          <button
            key={opt.id}
            onClick={() => select(opt.id)}
            className={`p-4 border rounded-md text-left transition
              ${
                selected === opt.id
                  ? "border-white"
                  : "border-white/10 hover:border-white/40"
              }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </StepShell>
  );
}
