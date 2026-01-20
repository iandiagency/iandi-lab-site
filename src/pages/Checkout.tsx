import { useNavigate } from "react-router-dom";

type Props = {
  phone: string;
};

export default function Checkout({ phone }: Props) {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full space-y-10">
        <h1 className="text-4xl font-light">
          Confirmar sessão de diagnóstico
        </h1>

        <p className="text-zinc-400">
          O <span className="text-white">IANDI Diagnose™</span> é uma sessão
          estratégica focada em leitura de dados, identificação de gargalos e
          direção clara do próximo passo.
        </p>

        <div className="border border-white/10 rounded-xl p-5 text-sm text-zinc-400">
          Este valor{" "}
          <span className="text-white">
            não inclui implementação, tráfego pago ou execução operacional
          </span>
          .
        </div>

        <div className="border border-white/10 rounded-2xl p-6 space-y-3 text-zinc-300">
          <p>• Sessão estratégica 1:1</p>
          <p>• Diagnóstico do sistema de crescimento</p>
          <p>• Identificação do principal gargalo</p>
          <p>• Direção objetiva do próximo passo</p>
          <p>• Sem obrigação de continuidade</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-400">Valor</span>
          <span className="text-2xl font-semibold">150.000 Kz</span>
        </div>

        <button
          onClick={() => navigate("/contrato")}
          className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-sm hover:border-white/40 transition"
        >
          Confirmar e pagar
        </button>

        <p className="text-xs text-zinc-500 text-center">
          Pagamento antecipado. A sessão é agendada após confirmação.
        </p>

        <p className="text-xs text-zinc-600 text-center">
          Suporte WhatsApp: +{phone}
        </p>
      </div>
    </main>
  );
}
