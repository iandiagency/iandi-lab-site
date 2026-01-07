import { useState } from "react";
import { useDiagnoseStore } from "./diagnoseStore";

function buildWhatsAppUrl(params: {
  phone: string;
  name: string;
  email: string;
  whatsapp: string;
  tier: string | null;
  primaryLeak: string | null;
}) {
  const { phone, name, email, whatsapp, tier, primaryLeak } = params;

  const leakLabel: Record<string, string> = {
    acquisition: "Aquisição",
    conversion: "Conversão",
    retention: "Retenção",
    data: "Dados & Decisão",
  };

  const message = `
Olá, IANDI Lab.

Concluí o Diagnóstico Estratégico e gostaria de agendar a sessão.

• Nome: ${name}
• Email: ${email}
• WhatsApp: ${whatsapp}
• Tier: ${tier ?? "-"}
• Principal travão: ${primaryLeak ? leakLabel[primaryLeak] : "-"}

Obrigado.
`.trim();

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function LeadCaptureStep() {
  const reset = useDiagnoseStore((s) => s.reset);
  const tier = useDiagnoseStore((s) => s.tier);
  const primaryLeak = useDiagnoseStore((s) => s.primaryLeak);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // ⚠️ Número final (formato internacional, sem +)
  const WHATSAPP_PHONE = "244928697544";

  function handleSubmit() {
    const url = buildWhatsAppUrl({
      phone: WHATSAPP_PHONE,
      name,
      email,
      whatsapp,
      tier,
      primaryLeak,
    });

    window.open(url, "_blank", "noopener,noreferrer");

    reset();
  }

  return (
    <section className="space-y-10">
      {/* HEADER */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Próximo passo
        </p>

        <h1 className="text-2xl font-semibold">
          Diagnóstico feito.  
          Agora vem a decisão.
        </h1>

        <p className="text-zinc-400">
          O diagnóstico identifica o problema.  
          A correção exige método.
        </p>
      </div>

      {/* VALUE */}
      <div className="border border-white/10 rounded-lg p-4 space-y-2">
        <p className="text-sm text-zinc-400">
          O que acontece na sessão estratégica:
        </p>

        <ul className="list-disc list-inside text-sm text-zinc-300 space-y-1">
          <li>Análise do principal travão</li>
          <li>Validação se faz sentido escalar agora</li>
          <li>Direção clara do próximo passo</li>
        </ul>
      </div>

      {/* FORM */}
      <div className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white"
        />

        <input
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="WhatsApp"
          className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-white"
        />
      </div>

      {/* CTA */}
      <div className="pt-4 border-t border-white/10 space-y-4">
        <button
          onClick={handleSubmit}
          disabled={!name || !email}
          className="w-full px-6 py-3 border border-white/20 rounded-md hover:border-white transition disabled:opacity-40"
        >
          Agendar Diagnóstico Estratégico
        </button>

        <p className="text-xs text-zinc-500 text-center">
          Sessão sem compromisso. Indicada apenas para negócios em crescimento.
        </p>
      </div>
    </section>
  );
}
