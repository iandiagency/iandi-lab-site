import StepShell from "./StepShell";
import { STEPS } from "./questions";
import { useDiagnoseStore } from "./diagnoseStore";

export default function DecisionStep() {
  const step = STEPS[3];
  const answerAndNext = useDiagnoseStore((s) => s.answerAndNext);
  const calculate = useDiagnoseStore((s) => s.calculate);

  return (
    <StepShell badge={step.badge} title={step.title} desc={step.desc}>
      <div className="space-y-6">
        {step.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => {
              answerAndNext(step.key, opt.score);
              calculate();
            }}
            className="w-full rounded-xl border border-white/20 px-6 py-4 text-left text-xl text-white hover:border-white"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </StepShell>
  );
}
