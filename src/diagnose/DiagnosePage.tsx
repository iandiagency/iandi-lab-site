import { useDiagnoseStore } from "./diagnoseStore";
import AcquisitionStep from "./AcquisitionStep";
import SystemStep from "./SystemStep";
import FrictionStep from "./FrictionStep";
import DecisionStep from "./DecisionStep";
import ResultStep from "./ResultStep";

export default function DiagnosePage() {
  const stepIndex = useDiagnoseStore((s) => s.stepIndex);

  if (stepIndex === 0) return <AcquisitionStep />;
  if (stepIndex === 1) return <SystemStep />;
  if (stepIndex === 2) return <FrictionStep />;
  if (stepIndex === 3) return <DecisionStep />;

  return <ResultStep />;
}
