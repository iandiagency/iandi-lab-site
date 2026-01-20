import { useNavigate } from "react-router-dom";
import { useDiagnoseStore } from "./diagnoseStore";

export default function ResultStep() {
  const navigate = useNavigate();
  const result = useDiagnoseStore((s) => s.result);

  if (!result) return null;

  const tierMessage = {
    A: "O teu sistema apresenta previsibilidade e estrutura. O foco agora é otimizar e escalar com controlo.",
    B: "Existe base para crescimento, mas há pontos de instabilidade que precisam de correção.",
    C: "O crescimento atual é instável. Escalar agora aumentaria o risco e o desperdício.",
    D: "O sistema não é previsível. Escalar neste estado gera perda direta de recursos.",
  }[result.tier];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl text-center space-y-8">

        {/* TÍTULO */}
        <h1 className="text-4xl sm:text-5xl font-light">
          Resultado
        </h1>

        {/* SCORE */}
        <div className="space-y-2">
          <p className="text-xl text-zinc-400">
            Score total
          </p>
          <p className="text-3xl font-medium">
            {result.totalScore}
          </p>
        </div>

        {/* TIER */}
        <div className="space-y-2">
          <p className="text-xl text-zinc-400">
            Classificação
          </p>
          <p className="text-2xl font-semibold">
            Tier {result.tier}
          </p>
        </div>

        {/* MENSAGEM CONTEXTUAL */}
        <p className="text-zinc-400 leading-relaxed">
          {tierMessage}
        </p>

        {/* CTA ÚNICO */}
        <button
          onClick={() => navigate("/next-step")}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-4 text-base font-medium hover:opacity-90 transition"
        >
          Explorar crescimento avançado
        </button>

      </div>
    </div>
  );
}
