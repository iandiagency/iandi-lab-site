import { useNavigate } from "react-router-dom";
import { useDiagnoseStore } from "@/diagnose/diagnoseStore";
import { trackEvent } from "@/lib/meta";

/* ================= CONTENT ================= */

const LEAKS = [
  "Falta de previsibilidade",
  "Aquisição inconsistente",
  "CAC elevado",
  "Segmentação ineficiente",
  "Criativos sem função estratégica",
];

const PROOF = [
  "Operações reduziram CAC em mais de 60%",
  "Funis instáveis tornados previsíveis em semanas",
  "Leads qualificados sem aumento de budget",
];

const STAGES = [
  {
    badge: "ESTÁGIO 1",
    title: "IANDI Diagnose™",
    desc: "Identificar com precisão o que está a travar o crescimento.",
    cta: "Iniciar diagnóstico →",
    to: "/diagnose",
  },
  {
    badge: "ESTÁGIO 2",
    title: "IANDI Performance™",
    desc: "Transformar tráfego num sistema previsível.",
  },
  {
    badge: "ESTÁGIO 3",
    title: "IANDI Scale™",
    desc: "Escalar com controlo de CAC e dados.",
  },
  {
    badge: "ESTÁGIO 4",
    title: "IANDI Growth Partner™",
    desc: "Crescimento como ativo estratégico contínuo.",
  },
];

const FRAMEWORK = [
  { title: "Diagnóstico", desc: "Leitura objetiva dos gargalos reais" },
  { title: "Arquitetura", desc: "Sistema de aquisição previsível" },
  { title: "Execução", desc: "Testes controlados orientados a dados" },
  { title: "Otimização", desc: "Escala sem colapsar CAC" },
];

/* ================= PAGE ================= */

export default function Index() {
  const navigate = useNavigate();
  const resetDiagnose = useDiagnoseStore((s) => s.reset);

  const startDiagnose = () => {
    trackEvent("HeroPrimaryClick");
    resetDiagnose();
    navigate("/diagnose");
  };

  return (
    <main className="bg-black text-white min-h-screen">

      {/* ================= HERO ================= */}

      <section className="min-h-[100svh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 max-w-[640px]">

          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            A verdade que ninguém te diz
          </p>

          <h1 className="mt-6 text-[2.8rem] sm:text-[3.8rem] leading-[1.1] font-light">
            Crescimento previsível exige sistema — não improviso.
          </h1>

          <p className="mt-6 text-lg text-zinc-400">
            Instalamos sistemas de aquisição que reduzem CAC e transformam
            tráfego em leads previsíveis antes de qualquer escala.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={startDiagnose}
              className="rounded-xl border border-white/30 px-7 py-4 text-sm hover:border-white/60 transition"
            >
              Iniciar diagnóstico estratégico
            </button>

            <span className="text-sm text-zinc-400 self-center">
              Sessão 1:1 após triagem
            </span>
          </div>

          <div className="mt-12 text-[11px] uppercase tracking-[0.35em] text-zinc-600">
            IANDI LAB — SISTEMAS DE CRESCIMENTO
          </div>
        </div>
      </section>

      {/* ================= VAZAMENTO (DOR REAL) ================= */}

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl font-light">
              Onde a maioria das marcas perde dinheiro
            </h2>

            <ul className="mt-8 space-y-3 text-zinc-400">
              {LEAKS.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 rounded-2xl p-8 text-zinc-400">
            Crescimento não quebra por falta de tráfego.  
            Quebra por falta de sistema.
          </div>

        </div>
      </section>

      {/* ================= PROVA ================= */}

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6 text-sm text-zinc-300">
          {PROOF.map((p) => (
            <div key={p} className="border border-white/10 rounded-xl p-6">
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODELOS ================= */}

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
            MODELOS DE ATUAÇÃO
          </p>

          <h2 className="mt-6 text-3xl font-light max-w-2xl">
            Modelos de atuação adaptados ao estágio do teu crescimento.
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl">
            Não acreditamos em soluções universais. Cada negócio exige um nível
            diferente de intervenção.
          </p>

          <div className="mt-6 text-zinc-400 space-y-2">
            <p>Algumas empresas precisam de clareza.</p>
            <p>Outras precisam de performance.</p>
            <p>Outras precisam de escala.</p>
          </div>

          <p className="mt-6 text-zinc-400">
            O IANDI Lab atua de forma diferente em cada estágio.
          </p>

          <p className="mt-12 text-zinc-400 max-w-xl">
            É por isso que estruturámos o crescimento em estágios claros —
            cada um resolve um bloqueio específico.
          </p>

        </div>
      </section>

      {/* ================= STAGES ================= */}

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-4">

          {STAGES.map((s) => (
            <div key={s.title} className="border border-white/10 rounded-2xl p-8">

              <p className="text-xs tracking-[0.3em] text-zinc-500">
                {s.badge}
              </p>

              <h3 className="mt-4 text-xl font-light">{s.title}</h3>
              <p className="mt-2 text-zinc-400">{s.desc}</p>

              {s.to && (
                <button
                  onClick={startDiagnose}
                  className="mt-5 text-sm text-zinc-400 hover:text-white"
                >
                  {s.cta}
                </button>
              )}

            </div>
          ))}

        </div>
      </section>

      {/* ================= FRAMEWORK ================= */}

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl font-light">
              Crescimento previsível é consequência de arquitetura
            </h2>

            <p className="mt-6 text-zinc-400">
              Um sistema de decisão que reduz incerteza e maximiza retorno.
            </p>
          </div>

          <div className="grid gap-4">
            {FRAMEWORK.map((f) => (
              <div key={f.title} className="border border-white/10 rounded-xl p-6">
                <p>{f.title}</p>
                <p className="mt-1 text-sm text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA FINAL ================= */}

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-light">
            Começa pelo diagnóstico certo
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl">
            Antes de investir mais em tráfego, identifica exatamente o que está a travar o crescimento.
          </p>

          <button
            onClick={startDiagnose}
            className="mt-8 rounded-xl border border-white/30 px-7 py-4 text-sm hover:border-white/60 transition"
          >
            Iniciar diagnóstico estratégico
          </button>

        </div>
      </section>

    </main>
  );
}
