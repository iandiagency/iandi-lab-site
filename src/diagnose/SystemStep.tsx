import { useDiagnoseStore } from "./diagnoseStore";

export default function SystemStep() {
  const answerAndNext = useDiagnoseStore((s) => s.answerAndNext);
  const stepIndex = useDiagnoseStore((s) => s.stepIndex);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md w-full p-10 border border-white/20 rounded-xl">
        <p className="text-sm text-zinc-400 mb-4">
          STEP {stepIndex + 1} — Sistema
        </p>

        <h1 className="text-2xl font-light mb-6">
          Existe um sistema de aquisição documentado?
        </h1>

        <div className="space-y-3">
          <button
            onClick={() => answerAndNext("system", 3)}
            className="w-full border border-white/30 px-4 py-3 rounded hover:border-white transition"
          >
            Sim, com processos claros
          </button>

          <button
            onClick={() => answerAndNext("system", 2)}
            className="w-full border border-white/30 px-4 py-3 rounded hover:border-white transition"
          >
            Parcial / informal
          </button>

          <button
            onClick={() => answerAndNext("system", 1)}
            className="w-full border border-white/30 px-4 py-3 rounded hover:border-white transition"
          >
            Não existe sistema
          </button>
        </div>
      </div>
    </div>
  );
}
