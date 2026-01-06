import { useEffect } from "react";
import { useDiagnoseStore } from "./store/diagnoseStore";

export default function DiagnosePage() {
  const step = useDiagnoseStore((s) => s.step);
  const compute = useDiagnoseStore((s) => s.compute);

  useEffect(() => {
    if (step === "decision") {
      compute();
    }
  }, [step, compute]);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white">
      {/* TODO: render dos steps D2 */}
    </div>
  );
}
