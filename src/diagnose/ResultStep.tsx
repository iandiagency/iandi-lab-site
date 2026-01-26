import { useDiagnoseStore } from "./diagnoseStore";
import { trackEvent } from "@/lib/meta";
import { TIER_COPY } from "./tierMessages";

export default function ResultStep() {
  const result = useDiagnoseStore((s) => s.result);
  const stepIndex = useDiagnoseStore((s) => s.stepIndex);

  if (!result || stepIndex < 4) return null;

  const { title, message, cta, whatsapp } = TIER_COPY[result.tier];

  const whatsappMessage = encodeURIComponent(
    whatsapp({ score: result.totalScore })
  );

  const whatsappUrl = `https://wa.me/244928697544?text=${whatsappMessage}`;

  const onWhatsAppClick = () => {
    trackEvent("DiagnoseWhatsAppClick", {
      tier: result.tier,
      score: result.totalScore,
    });

    window.location.href = whatsappUrl;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">

      <h1 className="text-3xl font-light mb-4">
        {title}
      </h1>

      <p className="text-zinc-400 max-w-md mb-10">
        {message}
      </p>

      <button
        onClick={onWhatsAppClick}
        className="rounded-xl border border-white/20 px-8 py-4 text-sm hover:border-white/40 transition"
      >
        {cta}
      </button>

      <p className="mt-4 text-xs text-zinc-500 max-w-sm">
        Sessão estratégica por convite. Avançamos apenas se fizer sentido.
      </p>

      <p className="mt-2 text-[11px] text-zinc-600">
        Tier {result.tier} · Score {result.totalScore}
      </p>

    </div>
  );
}
