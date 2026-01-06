import { useEffect } from "react";
import { useDiagnoseStore } from "./diagnoseStore";

import DiagnoseIntro from "./DiagnoseIntro";
import DiagnoseForm from "./DiagnoseForm";
import DiagnoseProgress from "./DiagnoseProgress";
import DiagnoseDecision from "./DiagnoseDecision";
import DiagnoseLeadCapture from "./DiagnoseLeadCapture";
import DiagnoseResult from "./DiagnoseResult";

export default function DiagnosePage() {
  const step = useDiagnoseStore((s) => s.step);
  const compute = useDiagnoseStore((s) => s.compute);

  useEffect(() => {
    if (step === "decision") {
      compute();
    }
  }, [step, compute]);

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white">
      <DiagnoseProgress />

      {step === "context" && <DiagnoseIntro />}
      {step === "system" && <DiagnoseForm />}
      {step === "friction" && <DiagnoseForm />}
      {step === "decision" && <DiagnoseDecision />}
      {step === "lead_capture" && <DiagnoseLeadCapture />}
      {step === "result" && <DiagnoseResult />}
    </main>
  );
}
