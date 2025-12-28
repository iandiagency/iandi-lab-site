import type { Question } from "./questions";

/* =========================
   TYPES
========================= */

export type BlockName = Question["block"];

export type ScoreBreakdown = Record<BlockName, number>;

export type Stage =
  | "DIAGNOSE"
  | "PERFORMANCE"
  | "SCALE"
  | "GROWTH_PARTNER";

export type DiagnoseOutput = {
  scoreTotal: number;
  breakdown: ScoreBreakdown;

  stage: Stage;
  stageLabel: string;

  recommendedOffer:
    | "IANDI Diagnose™"
    | "IANDI Performance™"
    | "IANDI Scale™"
    | "IANDI Growth Partner™";

  bottlenecks: string[];
  roadmap: { title: string; bullets: string[] }[];

  estimatedMonthlyLeakKz: number;
};

/* =========================
   HELPERS
========================= */

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

function estimateLeak(scoreTotal: number): number {
  let revenueBase = 0;
  let leakRate = 0;

  if (scoreTotal <= 35) {
    revenueBase = 5_000_000;
    leakRate = 0.35;
  } else if (scoreTotal <= 60) {
    revenueBase = 12_000_000;
    leakRate = 0.22;
  } else if (scoreTotal <= 80) {
    revenueBase = 35_000_000;
    leakRate = 0.12;
  } else {
    revenueBase = 80_000_000;
    leakRate = 0.05;
  }

  return Math.round(revenueBase * leakRate);
}

/* =========================
   CORE ENGINE
========================= */

export function computeDiagnose(
  questions: Question[],
  answers: Record<string, number>
): DiagnoseOutput {
  const breakdown: ScoreBreakdown = {
    Clareza: 0,
    Aquisição: 0,
    Funil: 0,
    Criativos: 0,
    Escala: 0,
  };

  for (const q of questions) {
    const v = Number(answers[q.id] ?? 0);
    breakdown[q.block] += clamp(v, 0, 10);
  }

  const normalize = (block: BlockName, maxRaw: number) => {
    const raw = breakdown[block];
    return maxRaw === 20 ? raw : Math.round((raw / maxRaw) * 20);
  };

  breakdown.Clareza = normalize("Clareza", 30);
  breakdown.Escala = normalize("Escala", 30);

  const scoreTotal =
    breakdown.Clareza +
    breakdown.Aquisição +
    breakdown.Funil +
    breakdown.Criativos +
    breakdown.Escala;

  let stage: Stage;
  let stageLabel: string;
  let recommendedOffer: DiagnoseOutput["recommendedOffer"];

  if (scoreTotal <= 35) {
    stage = "DIAGNOSE";
    stageLabel = "Crescimento travado por falta de clareza e estrutura.";
    recommendedOffer = "IANDI Diagnose™";
  } else if (scoreTotal <= 60) {
    stage = "PERFORMANCE";
    stageLabel = "Operação ativa, mas instável e sem previsibilidade.";
    recommendedOffer = "IANDI Performance™";
  } else if (scoreTotal <= 80) {
    stage = "SCALE";
    stageLabel = "Crescimento possível, mas ainda pouco escalável.";
    recommendedOffer = "IANDI Scale™";
  } else {
    stage = "GROWTH_PARTNER";
    stageLabel = "Negócio pronto para crescimento estratégico contínuo.";
    recommendedOffer = "IANDI Growth Partner™";
  }

  const sortedBlocks = (Object.keys(breakdown) as BlockName[])
    .map((k) => ({ k, v: breakdown[k] }))
    .sort((a, b) => a.v - b.v);

  const worst = sortedBlocks.slice(0, 2).map((x) => x.k);

  const bottlenecksMap: Record<BlockName, string[]> = {
    Clareza: [
      "Oferta e posicionamento com baixa nitidez.",
      "Mensagem pouco clara para o cliente ideal.",
    ],
    Aquisição: [
      "Aquisição sem canal principal validado.",
      "Dependência de tráfego não previsível.",
    ],
    Funil: [
      "Funil com vazamentos após a entrada do lead.",
      "Follow-up e qualificação irregulares.",
    ],
    Criativos: [
      "Criativos sem sistema de teste estruturado.",
      "Decisões baseadas em opinião, não em dados.",
    ],
    Escala: [
      "Escala sem controlo de CAC e margem.",
      "Orçamento reativo e pouco planeado.",
    ],
  };

  const bottlenecks = worst
    .flatMap((b) => bottlenecksMap[b])
    .slice(0, 3);

  const estimatedMonthlyLeakKz = estimateLeak(scoreTotal);

  const roadmap = [
    {
      title: "Oferta & Clareza",
      bullets: [
        "Fixar uma oferta principal e promessa testável.",
        "Definir cliente ideal e recorte de mercado.",
        "Clarificar o porquê agora.",
      ],
    },
    {
      title: "Tráfego & Aquisição",
      bullets: [
        "Escolher um canal principal validado.",
        "Estruturar campanhas por objetivo.",
        "Padronizar métricas e otimização.",
      ],
    },
    {
      title: "Funil & Conversão",
      bullets: [
        "Mapear funil completo.",
        "Criar follow-up previsível.",
        "Reduzir vazamentos críticos.",
      ],
    },
    {
      title: "Criativos",
      bullets: [
        "Testes contínuos por hipótese.",
        "Banco de ângulos e variações.",
        "Documentar padrões vencedores.",
      ],
    },
    {
      title: "Escala & Orçamento",
      bullets: [
        "Definir CAC alvo.",
        "Escalar com limites claros.",
        "Planeamento semanal de orçamento.",
      ],
    },
  ];

  return {
    scoreTotal,
    breakdown,
    stage,
    stageLabel,
    recommendedOffer,
    bottlenecks,
    roadmap,
    estimatedMonthlyLeakKz,
  };
}
