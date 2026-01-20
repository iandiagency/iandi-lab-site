// src/diagnose/types.ts

export type Dimension =
  | "acquisition"
  | "system"
  | "friction"
  | "decision"
  | "data";

export type StepKey = Dimension | "lead_capture" | "result";

export type Tier = "A" | "B" | "C" | "D";

export type ScoreMap = Partial<Record<Dimension, number>>;

export type DiagnoseResult = {
  totalScore: number;
  scores: Record<Dimension, number>;
  primaryLeak: Dimension;
  tier: Tier;
};
