import { useState } from "react";
import DiagnoseIntro from "./DiagnoseIntro";
import DiagnoseForm from "./DiagnoseForm";

export default function DiagnosePage() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <DiagnoseIntro onStart={() => setStarted(true)} />;
  }

  return <DiagnoseForm />;
}
