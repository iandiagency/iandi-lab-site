import StepShell from "./StepShell";
import { STEPS } from "./questions";
import { useDiagnoseStore } from "./diagnoseStore";

export default function AcquisitionStep() {
  const step = STEPS[0];
  const answerAndNext = useDiagnoseStore((s) => s.answerAndNext);

  return (
    <StepShell badge={step.badge} title={step.title} desc={step.desc}>
      <div className="space-y-6">
        {step.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => answerAndNext(step.key, opt.score)}
            className="w-full rounded-xl border border-white/20 px-6 py-4 text-left text-xl text-white hover:border-white"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </StepShell>
  );
}
