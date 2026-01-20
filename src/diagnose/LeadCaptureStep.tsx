import StepShell from "./StepShell";
import { STEPS } from "./questions";

export default function LeadCaptureStep() {
  const step = STEPS[4];

  return (
    <StepShell badge={step.badge} title={step.title} desc={step.desc}>
      <div className="space-y-6">
        {step.options.map((opt) => (
          <div
            key={opt.label}
            className="rounded-xl border border-white/20 px-6 py-4 text-white"
          >
            {opt.label}
          </div>
        ))}
      </div>
    </StepShell>
  );
}
