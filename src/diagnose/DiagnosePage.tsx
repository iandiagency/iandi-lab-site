import { useEffect } from "react";
import { useDiagnoseStore } from "./diagnoseStore";

import DiagnoseContext from "./DiagnoseContext";
import DiagnoseForm from "./DiagnoseForm";
import DiagnoseDecision from "./DiagnoseDecision";
import DiagnoseResult from "./DiagnoseResult";
import DiagnoseLeadCapture from "./DiagnoseLeadCapture";
import DiagnoseProgress from "./DiagnoseProgress";

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

      {step === "context" && <DiagnoseContext />}
      {step === "system" && <DiagnoseForm />}
      {step === "friction" && <DiagnoseForm />}
      {step === "decision" && <DiagnoseDecision />}
      {step === "result" && <DiagnoseResult />}
      {step === "lead_capture" && <DiagnoseLeadCapture />}
    </main>
  );
}
