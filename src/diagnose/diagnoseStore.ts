import { create } from "zustand";
import { Dimension } from "./questions";

type Result = {
  totalScore: number;
  tier: "A" | "B" | "C" | "D";
};

type State = {
  stepIndex: number;
  answers: Record<Dimension, number>;
  result: Result | null;

  answerAndNext: (dimension: Dimension, score: number) => void;
  calculate: () => void;
};

export const useDiagnoseStore = create<State>((set, get) => ({
  stepIndex: 0,
  answers: {},
  result: null,

  answerAndNext: (dimension, score) =>
    set((state) => ({
      answers: { ...state.answers, [dimension]: score },
      stepIndex: state.stepIndex + 1,
    })),

  calculate: () => {
    const scores = Object.values(get().answers);
    const totalScore = scores.reduce((a, b) => a + b, 0);

    let tier: Result["tier"] = "D";
    if (totalScore >= 14) tier = "A";
    else if (totalScore >= 10) tier = "B";
    else if (totalScore >= 6) tier = "C";

    set({ result: { totalScore, tier } });
  },
}));
