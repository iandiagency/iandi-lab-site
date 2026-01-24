import { useDiagnoseStore } from "./diagnoseStore";
import { trackEvent } from "@/lib/meta";

export default function ResultStep() {
  const result = useDiagnoseStore((s) => s.result);
  const stepIndex = useDiagnoseStore((s) => s.stepIndex);

  if (!result || stepIndex < 4) return null;

  // ⚠️ Mensagem simples e segura (sem caracteres problemáticos)
  const message = encodeURIComponent(
    `Olá, concluí o diagnóstico da IANDI.\nResultado: Tier ${result.tier} | Score ${result.totalScore}.\nQuero avançar para a sessão estratégica.`
  );

  const whatsappUrl = `https://wa.me/244928697544?text=${message}`;

  const handleWhatsAppClick = () => {
    // Meta Pixel
    trackEvent("DiagnoseWhatsAppClick", {
      tier: result.tier,
      score: result.totalScore,
    });

    // Google Analytics 4 (garante que existe)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "diagnose_whatsapp_click", {
        event_category: "diagnose",
        tier: result.tier,
        score: result.totalScore,
      });
    }

    // ✅ Redirect direto (funciona em mobile, webview e desktop)
    window.location.href = whatsappUrl;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center">
      <h1 className="text-3xl font-light mb-2">
        Diagnóstico concluído
      </h1>

      <p className="text-zinc-400 mb-6">
        Classificação: Tier {result.tier} · Score {result.totalScore}
      </p>

      <p className="text-zinc-400 max-w-md mb-10">
        O crescimento atual depende mais de esforço individual do que de sistema.
        Escalar agora aumentaria risco e desperdício, não resultados.
      </p>

      <button
        onClick={handleWhatsAppClick}
        className="rounded-xl border border-white/20 px-8 py-4 text-sm hover:border-white/40 transition"
      >
        Falar connosco no WhatsApp
      </button>

      <p className="mt-4 text-xs text-zinc-500 max-w-sm">
        Sessão estratégica por convite. Avançamos apenas se fizer sentido.
      </p>
    </div>
  );
}
