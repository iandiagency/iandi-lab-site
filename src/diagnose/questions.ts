export type AnswerValue = 0 | 5 | 10;

export type Question = {
  id: string;
  block: "Clareza" | "Aquisição" | "Funil" | "Criativos" | "Escala";
  title: string;
  options: { label: string; value: AnswerValue }[];
};

export const QUESTIONS: Question[] = [
  // BLOCO 1 — Clareza (0–20)
  {
    id: "q1",
    block: "Clareza",
    title: "A sua proposta de valor é clara para o cliente em até 5 segundos?",
    options: [
      { label: "Sim, é clara e diferenciada", value: 10 },
      { label: "Parcialmente clara", value: 5 },
      { label: "Não é clara", value: 0 },
    ],
  },
  {
    id: "q2",
    block: "Clareza",
    title: "O seu negócio tem foco em uma oferta principal?",
    options: [
      { label: "Sim, uma oferta bem definida", value: 10 },
      { label: "Duas ou três ofertas concorrentes", value: 5 },
      { label: "Muitas ofertas, sem foco", value: 0 },
    ],
  },
  {
    id: "q3",
    block: "Clareza",
    title: "O seu cliente ideal está claramente definido?",
    options: [
      { label: "Sim", value: 10 },
      { label: "Mais ou menos", value: 5 },
      { label: "Não", value: 0 },
    ],
  },

  // BLOCO 2 — Aquisição (0–20)
  {
    id: "q4",
    block: "Aquisição",
    title: "Como o seu negócio adquire clientes hoje?",
    options: [
      { label: "Tráfego pago com previsibilidade", value: 10 },
      { label: "Indicações / orgânico irregular", value: 5 },
      { label: "Não há sistema claro", value: 0 },
    ],
  },
  {
    id: "q5",
    block: "Aquisição",
    title: "Existe um canal principal validado?",
    options: [
      { label: "Sim, com métricas claras", value: 10 },
      { label: "Em teste", value: 5 },
      { label: "Não", value: 0 },
    ],
  },

  // BLOCO 3 — Funil (0–20)
  {
    id: "q6",
    block: "Funil",
    title: "O seu funil de vendas está mapeado e documentado?",
    options: [
      { label: "Sim", value: 10 },
      { label: "Parcialmente", value: 5 },
      { label: "Não", value: 0 },
    ],
  },
  {
    id: "q7",
    block: "Funil",
    title: "Os leads são nutridos ou acompanhados?",
    options: [
      { label: "Sim, com processo", value: 10 },
      { label: "Manual / irregular", value: 5 },
      { label: "Não", value: 0 },
    ],
  },

  // BLOCO 4 — Criativos (0–20)
  {
    id: "q8",
    block: "Criativos",
    title: "Os criativos são testados sistematicamente?",
    options: [
      { label: "Sim, com testes constantes", value: 10 },
      { label: "Ocasionalmente", value: 5 },
      { label: "Não", value: 0 },
    ],
  },
  {
    id: "q9",
    block: "Criativos",
    title: "As decisões criativas são baseadas em dados?",
    options: [
      { label: "Sim", value: 10 },
      { label: "Parcialmente", value: 5 },
      { label: "Não", value: 0 },
    ],
  },

  // BLOCO 5 — Escala (0–20)
  {
    id: "q10",
    block: "Escala",
    title: "O CAC (custo por aquisição) é conhecido?",
    options: [
      { label: "Sim", value: 10 },
      { label: "Estimado", value: 5 },
      { label: "Não sei", value: 0 },
    ],
  },
  {
    id: "q11",
    block: "Escala",
    title: "O negócio consegue escalar sem perder margem?",
    options: [
      { label: "Sim", value: 10 },
      { label: "Não sei", value: 5 },
      { label: "Não", value: 0 },
    ],
  },
  {
    id: "q12",
    block: "Escala",
    title: "O orçamento de marketing é controlado e planejado?",
    options: [
      { label: "Sim", value: 10 },
      { label: "Parcialmente", value: 5 },
      { label: "Não", value: 0 },
    ],
  },
];
