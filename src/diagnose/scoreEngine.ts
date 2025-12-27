import type { Question } from "./questions";

export type BlockName = Question["block"];

export type ScoreBreakdown = Record<BlockName, number>;

export type DiagnoseOutput = {
  scoreTotal: number; // 0–100
  breakdown: ScoreBreakdown; // 0–20 cada bloco
  level: "Crescimento travado" | "Operação instável" | "Crescimento estruturável" | "Pronto para escala";
  recommendedOffer: "IANDI Diagnose™" | "IANDI Performance™" | "IANDI Scale™" | "IANDI Growth Partner™";
  bottlenecks: string[];
  roadmap: { title: string; bullets: string[] }[];
  estimatedMonthlyLeakKz: number; // estimativa simples para dramatizar perda (não “finance advice”)
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

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

  // Normaliza por bloco para no máximo 20 (porque alguns blocos têm 2 perguntas e outros 3)
  // Regras:
  // - Clareza tem 3 perguntas => max 30, normaliza para 20
  // - Escala tem 3 perguntas => max 30, normaliza para 20
  // - Aquisição/Funil/Criativos têm 2 => max 20, mantém
  const normalize = (block: BlockName, maxRaw: number) => {
    const raw = breakdown[block];
    if (maxRaw === 20) return raw; // já está
    return Math.round((raw / maxRaw) * 20);
  };

  breakdown.Clareza = normalize("Clareza", 30);
  breakdown.Escala = normalize("Escala", 30);

  const scoreTotal =
    breakdown.Clareza +
    breakdown.Aquisição +
    breakdown.Funil +
    breakdown.Criativos +
    breakdown.Escala;

  const level =
    scoreTotal <= 35
      ? "Crescimento travado"
      : scoreTotal <= 60
      ? "Operação instável"
      : scoreTotal <= 80
      ? "Crescimento estruturável"
      : "Pronto para escala";

  const recommendedOffer =
    scoreTotal <= 35
      ? "IANDI Diagnose™"
      : scoreTotal <= 60
      ? "IANDI Performance™"
      : scoreTotal <= 80
      ? "IANDI Scale™"
      : "IANDI Growth Partner™";

  // Gargalos: pega os 2 piores blocos
  const sortedBlocks = (Object.keys(breakdown) as BlockName[])
    .map((k) => ({ k, v: breakdown[k] }))
    .sort((a, b) => a.v - b.v);

  const worst = sortedBlocks.slice(0, 2).map((x) => x.k);

  const bottlenecksMap: Record<BlockName, string[]> = {
    Clareza: [
      "Oferta e posicionamento com baixa nitidez (cliente não entende rápido).",
      "Falta de foco em uma oferta principal, gerando dispersão.",
    ],
    Aquisição: [
      "Aquisição sem canal principal validado (instabilidade de entrada).",
      "Dependência de orgânico/indicação sem previsibilidade.",
    ],
    Funil: [
      "Funil sem estrutura, gerando vazamento após o lead entrar.",
      "Follow-up/nutrição irregular (oportunidade morre no meio).",
    ],
    Criativos: [
      "Criativos sem sistema de teste (performance não evolui).",
      "Decisões criativas sem evidência (mais opinião do que dado).",
    ],
    Escala: [
      "Escala sem controlo de CAC/margem (cresce e quebra).",
      "Orçamento reativo, não planejado (oscila, perde eficiência).",
    ],
  };

  const bottlenecks = worst.flatMap((b) => bottlenecksMap[b]).slice(0, 3);

  // Estimativa simples de “vazamento” (só para priorização)
  // Regra: quanto menor o score, maior o leak.
  const estimatedMonthlyLeakKz = Math.round(((100 - scoreTotal) / 100) * 4_500_000);

  const roadmap = [
    {
      title: "Oferta & Clareza",
      bullets: [
        "Fixar uma oferta principal + promessa testável.",
        "Definir ICP (cliente ideal) e recorte de mercado.",
        "Mensagem: o que muda, para quem, e por quê agora.",
      ],
    },
    {
      title: "Tráfego & Aquisição",
      bullets: [
        "Escolher 1 canal principal e validar com métricas.",
        "Criar estrutura de campanha por objetivo (não por “post bonito”).",
        "Padronizar tracking e rotina semanal de otimização.",
      ],
    },
    {
      title: "Funil & Conversão",
      bullets: [
        "Mapear o funil (entrada → qualificação → oferta → fechamento).",
        "Criar follow-up e qualificação em passos (não improviso no WhatsApp).",
        "Definir métricas de vazamento e correções.",
      ],
    },
    {
      title: "Criativos",
      bullets: [
        "Criar banco de ângulos + testes contínuos (sem parar).",
        "Separar criativo por hipótese (dor, prova, mecanismo, urgência).",
        "Documentar o que funciona e repetir com variações.",
      ],
    },
    {
      title: "Orçamento & Escala",
      bullets: [
        "Definir CAC alvo e margem mínima aceitável.",
        "Escalar com guardrails (limite de CPA, frequência, criativos).",
        "Plano de orçamento semanal (previsível, não emocional).",
      ],
    },
  ];

  return {
    scoreTotal,
    breakdown,
    level,
    recommendedOffer,
    bottlenecks,
    roadmap,
    estimatedMonthlyLeakKz,
  };
}
