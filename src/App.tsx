import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DiagnosePage from "./diagnose/DiagnosePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/diagnose" element={<DiagnosePage />} />
      </Routes>
    </BrowserRouter>
  );
}
