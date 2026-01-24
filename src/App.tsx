import { Routes, Route } from "react-router-dom";
import SiteLayout from "./SiteLayout";

import Index from "./pages/Index";
import DiagnosePage from "./diagnose/DiagnosePage";
import NextStep from "./pages/NextStep";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/diagnose" element={<DiagnosePage />} />
        <Route path="/next-step" element={<NextStep />} />
      </Route>
    </Routes>
  );
}
