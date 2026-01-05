import { create } from "zustand";

export type StepKey =
  | "context"
  | "system"
  | "friction"
  | "decision"
  | "lead_capture";

export type Tier = "A" | "B" | "C" | "D";
export type Dimension = "acquisition" | "conversion" | "retention" | "data";
export type AnswerValue = string | boolean | number;

type DiagnoseState = {
  step: StepKey;
  stepIndex: number;
  answers: Record<string, AnswerValue>;

  scores: Record<Dimension, number>;
  riskFlags: string[];
  tier: Tier | null;
  primaryLeak: Dimension | null;

  setAnswer: (id: string, value: AnswerValue) => void;
  next: () => void;
  back: () => void;
  compute: () => void;
  reset: () => void;
};

const steps: StepKey[] = [
  "context",
  "system",
  "friction",
  "decision",
  "lead_capture",
];

const initialScores: Record<Dimension, number> = {
  acquisition: 0,
  conversion: 0,
  retention: 0,
  data: 0,
};

export const useDiagnoseStore = create<DiagnoseState>((set, get) => ({
  step: "context",
  stepIndex: 0,
  answers: {},

  scores: { ...initialScores },
  riskFlags: [],
  tier: null,
  primaryLeak: null,

  setAnswer: (id, value) =>
    set((s) => ({ answers: { ...s.answers, [id]: value } })),

  next: () => {
    const { stepIndex } = get();
    const nextIndex = Math.min(stepIndex + 1, steps.length - 1);
    set({ stepIndex: nextIndex, step: steps[nextIndex] });
  },

  back: () => {
    const { stepIndex } = get();
    const prevIndex = Math.max(stepIndex - 1, 0);
    set({ stepIndex: prevIndex, step: steps[prevIndex] });
  },

  compute: () => {
    const { answers } = get();

    const scores = { ...initialScores };
    const riskFlags: string[] = [];

    // Acquisition
    const acq = answers["q_acq_main"];
    if (acq === "paid") scores.acquisition += 2;
    if (acq === "organic" || acq === "referral") scores.acquisition += 1;
    if (acq === "whatsapp_only") {
      riskFlags.push("Dependência de WhatsApp sem sistema de aquisição.");
    }

    // Data
    if (answers["q_tracking"] === true) scores.data += 2;
    else riskFlags.push("Sem tracking de conversões (sem controlo).");

    if (answers["q_knows_cac"] === true) scores.data += 2;
    else riskFlags.push("Não sabe CAC/CPA (decisão às cegas).");

    // Conversion
    const offer = Number(answers["q_offer_clarity"] ?? 0);
    if (offer >= 4) scores.conversion += 2;
    else if (offer >= 2) scores.conversion += 1;
    else riskFlags.push("Oferta pouco clara (conversão fraca).");

    // Retention
    const ret = answers["q_retention"];
    if (ret === "strong") scores.retention += 2;
    else if (ret === "some") scores.retention += 1;
    else riskFlags.push("Sem retenção/recorrência.");

    const dims: Dimension[] = ["acquisition", "conversion", "retention", "data"];

    const hasDataRedFlag = riskFlags.some((r) =>
      r.toLowerCase().includes("cac") ||
      r.toLowerCase().includes("tracking")
    );

    const primaryLeak = hasDataRedFlag
      ? "data"
      : dims.reduce((min, d) => (scores[d] < scores[min] ? d : min), dims[0]);

    const total = dims.reduce((sum, d) => sum + scores[d], 0);

    let tier: Tier = "D";
    if (total >= 7) tier = "C";
    if (total >= 11) tier = "B";
    if (total >= 15) tier = "A";

    const leadIndex = steps.indexOf("lead_capture");

    set({
      scores,
      riskFlags,
      primaryLeak,
      tier,
      step: "lead_capture",
      stepIndex: leadIndex,
    });
  },

  reset: () =>
    set({
      step: "context",
      stepIndex: 0,
      answers: {},
      scores: { ...initialScores },
      riskFlags: [],
      tier: null,
      primaryLeak: null,
    }),
}));
