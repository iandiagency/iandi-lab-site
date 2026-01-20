type Props = {
  phone?: string;
};

export default function Contrato({ phone = "244928697544" }: Props) {
  const message =
    "Olá, terminei o IANDI Diagnose™ e quero confirmar a sessão estratégica. " +
    "Estou de acordo com os termos e o valor de 150.000 Kz.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full space-y-10">
        {/* TÍTULO */}
        <h1 className="text-4xl sm:text-5xl font-light leading-tight">
          Termos simples — IANDI Diagnose™
        </h1>

        {/* TERMOS */}
        <div className="space-y-4 text-zinc-300 text-sm">
          <p>
            <strong>1) Natureza do serviço:</strong> sessão estratégica de
            diagnóstico (leitura de dados, identificação de gargalos e direção
            do próximo passo).
          </p>

          <p>
            <strong>2) Não inclui implementação:</strong> este valor não
            corresponde a operação, tráfego pago, produção de criativos ou
            gestão contínua.
          </p>

          <p>
            <strong>3) Pagamento:</strong> 100% antecipado (150.000 Kz).
          </p>

          <p>
            <strong>4) Agendamento:</strong> feito via WhatsApp após
            confirmação.
          </p>
        </div>

        {/* CTA ÚNICO */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-sm hover:border-white/40 transition"
        >
          Confirmar no WhatsApp
        </a>

        {/* AVISO */}
        <p className="text-xs text-zinc-600 text-center">
          Ao continuar, assume concordância com os termos acima.
        </p>
      </div>
    </main>
  );
}
