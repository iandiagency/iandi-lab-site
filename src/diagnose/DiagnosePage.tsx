import { useDiagnoseStore } from "./diagnoseStore";

import ContextStep from "./ContextStep";
import SystemStep from "./SystemStep";
import FrictionStep from "./FrictionStep";
import DecisionStep from "./DecisionStep";
import ResultStep from "./ResultStep";
import LeadCaptureStep from "./LeadCaptureStep";

export default function DiagnosePage() {
  const step = useDiagnoseStore((s) => s.step);

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl border border-white/10 rounded-xl p-8 space-y-6">
        {step === "context" && <ContextStep />}
        {step === "system" && <SystemStep />}
        {step === "friction" && <FrictionStep />}
        {step === "decision" && <DecisionStep />}
        {step === "result" && <ResultStep />}
        {step === "lead_capture" && <LeadCaptureStep />}
      </div>
    </main>
  );
}
