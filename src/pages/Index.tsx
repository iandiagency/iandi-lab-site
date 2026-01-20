import { Link } from "react-router-dom";

const LEAKS = [
  "Falta de previsibilidade",
  "Aquisição inconsistente",
  "CAC elevado",
  "Segmentação ineficiente",
  "Criativos sem função estratégica",
];

const STAGES = [
  {
    badge: "ESTÁGIO 1",
    title: "IANDI Diagnose™",
    desc: "Entender o que está a travar o crescimento.",
    cta: "Ver como funciona",
    to: "/diagnose",
  },
  {
    badge: "ESTÁGIO 2",
    title: "IANDI Performance™",
    desc: "Eficiência e previsibilidade.",
    cta: "Agendar diagnóstico",
    to: "#cta",
  },
  {
    badge: "ESTÁGIO 3",
    title: "IANDI Scale™",
    desc: "Crescimento com método e controlo.",
    cta: "Agendar diagnóstico",
    to: "#cta",
  },
  {
    badge: "ESTÁGIO 4",
    title: "IANDI Growth Partner™",
    desc: "Crescimento como prioridade estratégica.",
    cta: "Agendar diagnóstico",
    to: "#cta",
  },
];

const FRAMEWORK = [
  { title: "Diagnóstico", desc: "Leitura objetiva de dados e gargalos" },
  { title: "Arquitetura", desc: "Desenho do sistema de aquisição" },
  { title: "Execução", desc: "Testes e validação controlada" },
  { title: "Otimização", desc: "Aprendizado contínuo e escala" },
];

const PROOF = [
  "73% de redução no custo por lead",
  "18% de variação média em campanhas antes instáveis",
  "Funis que escalam sem colapsar",
];

export default function Index() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* =====================================================
          1) HERO
      ===================================================== */}
      <section className="relative min-h-[100svh] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-[640px]">
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
              A verdade que ninguém te diz
            </p>

            <h1 className="mt-6 text-[2.6rem] leading-[1.1] sm:text-[3.8rem] font-light">
              Crescimento previsível
              <br />
              exige sistema —
              <br />
              não improviso.
            </h1>

            <p className="mt-6 text-base text-zinc-400 max-w-[34rem]">
              A maior parte das marcas não cresce por falta de método. Eliminamos
              ineficiências e instalamos sistemas de aquisição que funcionam.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 text-sm hover:border-white/40 transition"
              >
                Agendar diagnóstico
              </a>

              <Link
                to="/diagnose"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Ver como funciona →
              </Link>
            </div>

            <div className="mt-12 text-[11px] uppercase tracking-[0.35em] text-zinc-600">
              IANDI LAB — SISTEMAS DE CRESCIMENTO
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2) NÃO EXECUTAMOS TÁTICAS ISOLADAS
      ===================================================== */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light">
              Não executamos táticas isoladas.
            </h2>

            <p className="mt-6 text-zinc-400 max-w-md">
              Atuamos onde a maioria das operações perde eficiência:
            </p>

            <ul className="mt-8 space-y-3 text-zinc-400 text-sm">
              {LEAKS.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Modelos de atuação
            </p>

            <p className="mt-6 text-zinc-300">
              Modelos de atuação adaptados ao estágio do teu crescimento.
            </p>

            <p className="mt-6 text-zinc-400 text-sm">
              Não acreditamos em soluções universais. Cada negócio exige um nível
              diferente de intervenção.
            </p>

            <div className="mt-6 text-zinc-400 text-sm space-y-2">
              <p>Algumas empresas precisam de clareza.</p>
              <p>Outras precisam de performance.</p>
              <p>Outras precisam de escala.</p>
            </div>

            <p className="mt-6 text-zinc-400 text-sm">
              O IANDI Lab atua de forma diferente em cada estágio.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          3) ESTÁGIOS
      ===================================================== */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24 grid gap-4 md:grid-cols-2">
          {STAGES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 p-8 hover:border-white/25 transition"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                {s.badge}
              </p>

              <h3 className="mt-5 text-lg sm:text-xl font-light">
                {s.title}
              </h3>

              <p className="mt-3 text-sm text-zinc-400">{s.desc}</p>

              <div className="mt-7">
                {s.to.startsWith("/") ? (
                  <Link
                    to={s.to}
                    className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition"
                  >
                    {s.cta} <span className="ml-2">→</span>
                  </Link>
                ) : (
                  <a
                    href={s.to}
                    className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition"
                  >
                    {s.cta} <span className="ml-2">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          4) INTERNAL GROWTH FRAMEWORK
      ===================================================== */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24 grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              INTERNAL GROWTH FRAMEWORK
            </p>

            <h2 className="mt-6 text-2xl sm:text-3xl font-light">
              Crescimento previsível é consequência de arquitetura.
            </h2>

            <p className="mt-6 text-zinc-400 max-w-md">
              Um sistema de decisão que reduz incerteza e aumenta eficiência.
            </p>
          </div>

          <div className="grid gap-3">
            {FRAMEWORK.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 p-6"
              >
                <p className="text-sm text-white">{f.title}</p>
                <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          5) PROVAS
      ===================================================== */}
      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
            Provas, não promessas.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {PROOF.map((p) => (
              <div
                key={p}
                className="rounded-2xl border border-white/10 p-6"
              >
                <p className="text-sm text-zinc-200">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          6) CTA FINAL
      ===================================================== */}
      <section id="cta" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl sm:text-3xl font-light">
            Agendar diagnóstico
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl">
            Unidade de consultoria em crescimento. Estratégia, performance e
            sistemas previsíveis.
          </p>

          <a
            href="/diagnose"
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 text-sm hover:border-white/40 transition"
          >
            Agendar diagnóstico
          </a>
        </div>
      </section>

      {/* =====================================================
          7) FOOTER
      ===================================================== */}
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-4 text-xs text-zinc-500 text-center">
          <img
            src="/iandi-lab-logo-white.png"
            alt="IANDI Lab"
            className="h-6 opacity-80"
            draggable={false}
          />

          <p className="max-w-md leading-relaxed">
            Unidade de consultoria em crescimento. Estratégia, performance e
            sistemas previsíveis.
          </p>

          <p>© 2025 IANDI Lab</p>
        </div>
      </footer>
    </main>
  );
}
