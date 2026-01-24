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

/**
 * 🔒 Número REAL de steps de PERGUNTA
 * (resultado não conta como step)
 */
const QUESTION_STEPS = 4; // 0–3

export const useDiagnoseStore = create<State>()(
  persist(
    (set, get) => ({
      stepIndex: 0,
      answers: {},
      result: null,

      answerAndNext: (dimension, score) => {
        const { stepIndex, answers } = get();

        const nextAnswers = {
          ...answers,
          [dimension]: score,
        };

        const isLastQuestionStep = stepIndex === QUESTION_STEPS - 1;

        // 🔥 Se for o último step de pergunta, calcula automaticamente
        if (isLastQuestionStep) {
          const scores = Object.values(nextAnswers);
          const totalScore = scores.reduce((a, b) => a + (b ?? 0), 0);

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
            stepIndex: stepIndex + 1, // entra no estado RESULTADO
          });

          return;
        }

        // 🔁 Steps normais
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
