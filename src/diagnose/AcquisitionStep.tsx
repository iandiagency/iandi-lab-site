import { useDiagnoseStore } from "./diagnoseStore";

export default function AcquisitionStep() {
  const answerAndNext = useDiagnoseStore((s) => s.answerAndNext);
  const stepIndex = useDiagnoseStore((s) => s.stepIndex);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md w-full p-10 border border-white/20 rounded-xl">
        <p className="text-sm text-zinc-400 mb-4">
          STEP {stepIndex + 1} — Aquisição
        </p>

        <h1 className="text-2xl font-light mb-6">
          Como chegam novos clientes hoje?
        </h1>

        <div className="space-y-3">
          <button
            onClick={() => answerAndNext("acquisition", 3)}
            className="w-full border border-white/30 px-4 py-3 rounded hover:border-white transition"
          >
            Tráfego pago previsível
          </button>

          <button
            onClick={() => answerAndNext("acquisition", 2)}
            className="w-full border border-white/30 px-4 py-3 rounded hover:border-white transition"
          >
            Misto / inconsistente
          </button>

          <button
            onClick={() => answerAndNext("acquisition", 1)}
            className="w-full border border-white/30 px-4 py-3 rounded hover:border-white transition"
          >
            Orgânico / improvisado
          </button>
        </div>
      </div>
    </div>
  );
}
