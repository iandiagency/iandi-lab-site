import { useNavigate } from "react-router-dom";

type Props = {
  phone: string;
};

export default function NextStep({ phone }: Props) {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center space-y-10">

        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-5xl font-light leading-tight">
          O diagnóstico terminou.
          <br />
          O próximo passo é estratégico.
        </h1>

        {/* CONTEXTO */}
        <p className="text-zinc-400 text-lg">
          O IANDI Diagnose™ revelou onde o crescimento está a travar.
          Agora avaliamos, com clareza, se faz sentido avançar — e como.
        </p>

        {/* O QUE ACONTECE AGORA */}
        <div className="text-left text-zinc-300 space-y-3 text-sm border border-white/10 rounded-2xl p-6">
          <p>• Sessão estratégica 1:1 (60 minutos)</p>
          <p>• Leitura objetiva do teu sistema atual</p>
          <p>• Identificação do próximo passo realista</p>
          <p>• Decisão clara: corrigir, escalar ou não avançar</p>
        </div>

        {/* CORTE DE AUTORIDADE */}
        <p className="text-zinc-500 text-sm">
          Não executamos sem diagnóstico.
          <br />
          Nem todo negócio deve escalar agora.
        </p>

        {/* CTA ÚNICO → CHECKOUT */}
        <button
          onClick={() => navigate("/checkout")}
          className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-sm hover:border-white/40 transition"
        >
          Avançar para confirmação
        </button>

        {/* MICRO-AVISO */}
        <p className="text-xs text-zinc-600">
          Pagamento antecipado. Sessão agendada após confirmação.
          <br />
          WhatsApp: +{phone}
        </p>

      </div>
    </main>
  );
}
