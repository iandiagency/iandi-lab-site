import { Tier } from "./diagnoseStore";

type TierCopy = {
  title: string;
  message: string;
  cta: string;
  whatsapp: (data: { score: number }) => string;
};

export const TIER_COPY: Record<Tier, TierCopy> = {
  A: {
    title: "Estrutura pronta para escalar",
    message:
      "O teu sistema mostra maturidade acima da média. O foco agora é escalar com controlo de CAC.",
    cta: "Avançar para plano de escala",
    whatsapp: ({ score }) =>
      `Concluí o IANDI Diagnose™. Tier A (score ${score}). Quero estruturar a fase de escala.`,
  },

  B: {
    title: "Base sólida com gargalos claros",
    message:
      "Existe potencial real de crescimento, mas há ineficiências a corrigir antes de escalar.",
    cta: "Corrigir gargalos estratégicos",
    whatsapp: ({ score }) =>
      `Concluí o IANDI Diagnose™. Tier B (score ${score}). Quero eliminar gargalos e estruturar crescimento.`,
  },

  C: {
    title: "Sistema instável",
    message:
      "O crescimento atual depende de improviso. É preciso construir arquitetura de aquisição.",
    cta: "Construir sistema previsível",
    whatsapp: ({ score }) =>
      `Concluí o IANDI Diagnose™. Tier C (score ${score}). Preciso estruturar um sistema de aquisição.`,
  },

  D: {
    title: "Alto risco de desperdício",
    message:
      "Investir em tráfego agora tende a gerar perdas. Primeiro é preciso organizar a base.",
    cta: "Organizar base de crescimento",
    whatsapp: ({ score }) =>
      `Concluí o IANDI Diagnose™. Tier D (score ${score}). Quero organizar a base antes de investir mais.`,
  },
};
