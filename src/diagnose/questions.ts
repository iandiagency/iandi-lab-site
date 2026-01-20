export type Dimension =
  | "acquisition"
  | "system"
  | "friction"
  | "decision";

export type Option = {
  label: string;
  score: number;
};

export type Step = {
  key: Dimension;
  badge: string;
  title: string;
  desc: string;
  options: Option[];
};

export const STEPS: Step[] = [
  {
    key: "acquisition",
    badge: "ETAPA 1 — AQUISIÇÃO",
    title: "De onde vêm os clientes hoje?",
    desc: "Esta resposta define se o crescimento depende de sistema ou esforço.",
    options: [
      { label: "Tráfego pago previsível", score: 4 },
      { label: "Tráfego pago sem controlo", score: 1 },
      { label: "Orgânico / Conteúdo", score: 2 },
      { label: "Indicações / Networking", score: 1 },
      { label: "WhatsApp informal", score: 0 },
    ],
  },

  {
    key: "system",
    badge: "ETAPA 2 — SISTEMA",
    title: "Como os clientes avançam até à venda?",
    desc: "Crescimento previsível exige sistema.",
    options: [
      { label: "Funil estruturado", score: 4 },
      { label: "Depende de pessoas", score: 2 },
      { label: "Tudo manual", score: 0 },
    ],
  },

  {
    key: "friction",
    badge: "ETAPA 3 — FRICÇÃO",
    title: "O quão clara é a oferta?",
    desc: "Confusão gera fricção invisível.",
    options: [
      { label: "Muito clara", score: 4 },
      { label: "Clara mas complexa", score: 2 },
      { label: "Confusa", score: 0 },
    ],
  },

  {
    key: "decision",
    badge: "ETAPA 4 — DECISÃO",
    title: "Existe recorrência?",
    desc: "Retenção define sustentabilidade.",
    options: [
      { label: "Sim, consistente", score: 4 },
      { label: "Às vezes", score: 2 },
      { label: "Não existe", score: 0 },
    ],
  },
];
