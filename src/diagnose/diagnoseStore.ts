import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Dimension } from "./questions";
import { trackEvent } from "@/lib/meta";

export type Tier = "A" | "B" | "C" | "D";

type Result = {
  totalScore: number;
  tier: Tier;
};

type State = {
  stepIndex: number;
  answers: Partial<Record<Dimension, number>>;
  result: Result | null;

  answerAndNext: (dimension: Dimension, score: number) => void;
  reset: () => void;
};

const QUESTION_STEPS = 4;

export const useDiagnoseStore = create<State>()(
  persist(
    (set, get) => ({
      stepIndex: 0,
      answers: {},
      result: null,

      answerAndNext: (dimension, score) => {
        const { stepIndex, answers, result } = get();

        if (result) return;

        const nextAnswers = {
          ...answers,
          [dimension]: score,
        };

        const isLastStep = stepIndex === QUESTION_STEPS - 1;

        if (isLastStep) {
          const scores = Object.values(nextAnswers).filter(
            (v): v is number => typeof v === "number"
          );

          if (scores.length < QUESTION_STEPS) return;

          const totalScore = scores.reduce((a, b) => a + b, 0);

          let tier: Tier = "D";
          if (totalScore >= 14) tier = "A";
          else if (totalScore >= 10) tier = "B";
          else if (totalScore >= 6) tier = "C";

          trackEvent("DiagnoseCompleted", {
            tier,
            score: totalScore,
          });

          set({
            answers: nextAnswers,
            result: { totalScore, tier },
            stepIndex: stepIndex + 1,
          });

          return;
        }

        set({
          answers: nextAnswers,
          stepIndex: stepIndex + 1,
        });
      },

      reset: () =>
        set({
          stepIndex: 0,
          answers: {},
          result: null,
        }),
    }),
    {
      name: "iandi-diagnose-store",
    }
  )
);
