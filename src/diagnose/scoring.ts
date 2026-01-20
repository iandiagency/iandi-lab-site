// diagnose/scoring.ts

import { StepKey, Dimension } from "./types";

export const SCORE_MAP: Record<
  StepKey,
  Record<string, { score: number; dimension: Dimension }>
> = {
  acquisition: {
    paid_predictable: { score: 3, dimension: "acquisition" },
    organic: { score: 2, dimension: "acquisition" },
    referrals: { score: 1, dimension: "acquisition" },
    paid_uncontrolled: { score: 0, dimension: "acquisition" },
    whatsapp: { score: -1, dimension: "acquisition" },
  },

  system: {
    structured_funnel: { score: 3, dimension: "system" },
    people_dependent: { score: 1, dimension: "system" },
    fully_manual: { score: -2, dimension: "system" },
  },

  friction: {
    extremely_clear: { score: 3, dimension: "conversion" },
    clear_with_explanation: { score: 1, dimension: "conversion" },
    generic: { score: 0, dimension: "conversion" },
    confusing: { score: -1, dimension: "conversion" },
    improvised: { score: -2, dimension: "conversion" },
  },

  conversion: {
    clear_process: { score: 3, dimension: "conversion" },
    inconsistent_followup: { score: 1, dimension: "conversion" },
    different_every_time: { score: 0, dimension: "conversion" },
    leads_lost: { score: -2, dimension: "conversion" },
  },

  data: {
    metrics_and_decisions: { score: 3, dimension: "data" },
    some_numbers: { score: 1, dimension: "data" },
    scattered: { score: 0, dimension: "data" },
    none: { score: -2, dimension: "data" },
  },
};
