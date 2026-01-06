import { create } from "zustand";

/* ============================
   TYPES
============================ */

export type StepKey =
  | "context"
  | "system"
  | "friction"
  | "decision"
  | "lead_capture"
  | "result";

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

/* ============================
   FLOW DE STEPS (ORDEM ÚNICA)
============================ */

const steps: StepKey[] = [
  "context",
  "system",
  "friction",
  "decision",
  "lead_capture",
  "result",
];

/* ============================
   INITIAL STATE
============================ */

const initialScores: Record<Dimension, number> = {
  acquisition: 0,
  conversion: 0,
  retention: 0,
  data: 0,
};

/* ============================
   STORE
============================ */

export const useDiagnoseStore = create<DiagnoseState>((set, get) => ({
  step: "context",
  stepIndex: 0,
  answers: {},

  scores: { ...initialScores },
  riskFlags: [],
  tier: null,
  primaryLeak: null,

  /* ---------- ANSWERS ---------- */

  setAnswer: (id, value) => {
    set((state) => ({
      answers: { ...state.answers, [id]: value },
    }));
  },

  /* ---------- NAVIGATION ---------- */

  next: () => {
    const nextIndex = Math.min(get().stepIndex + 1, steps.length - 1);
    set({
      stepIndex: nextIndex,
      step: steps[nextIndex],
    });
  },

  back: () => {
    const prevIndex = Math.max(get().stepIndex - 1, 0);
    set({
      stepIndex: prevIndex,
      step: steps[prevIndex],
    });
  },

  /* ---------- COMPUTE ---------- */

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

    // Data / Tracking
    if (answers["q_tracking"] === true) scores.data += 2;
    if (answers["q_tracking"] === false) {
      riskFlags.push("Sem tracking de conversões.");
    }

    if (answers["q_knows_cac"] !== true) {
      riskFlags.push("Não sabe CAC/CPA.");
    }

    // Conversion
    const offer = Number(answers["q_offer_clarity"] ?? 0);
    if (offer >= 4) scores.conversion += 2;
    else if (offer >= 2) scores.conversion += 1;
    else {
      riskFlags.push("Oferta pouco clara.");
    }

    // Retention
    const ret = answers["q_retention"];
    if (ret === "strong") scores.retention += 2;
    if (ret === "some") scores.retention += 1;
    if (ret === "none") {
      riskFlags.push("Sem retenção ou recorrência.");
    }

    // Primary leak (menor score)
    const dims: Dimension[] = [
      "acquisition",
      "conversion",
      "retention",
      "data",
    ];

    const primaryLeak = dims.reduce((lowest, dim) =>
      scores[dim] < scores[lowest] ? dim : lowest
    , dims[0]);

    // Tier
    const total = dims.reduce((sum, d) => sum + scores[d], 0);

    let tier: Tier = "D";
    if (total >= 7) tier = "C";
    if (total >= 11) tier = "B";
    if (total >= 15) tier = "A";

    set({ scores, riskFlags, primaryLeak, tier });
  },

  /* ---------- RESET ---------- */

  reset: () => {
    set({
      step: "context",
      stepIndex: 0,
      answers: {},
      scores: { ...initialScores },
      riskFlags: [],
      tier: null,
      primaryLeak: null,
    });
  },
}));
