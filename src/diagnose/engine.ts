import { Dimension } from "./questions";

type Result = {
  totalScore: number;
  scores: Record<Dimension, number>;
  primaryLeak: Dimension;
  tier: "A" | "B" | "C" | "D";
};

export function calculateResults(
  answers: Record<Dimension, number>
): Result {
  const dimensions: Dimension[] = [
    "acquisition",
    "system",
    "friction",
    "decision",
  ];

  const scores: Record<Dimension, number> = {
    acquisition: answers.acquisition ?? 0,
    system: answers.system ?? 0,
    friction: answers.friction ?? 0,
    decision: answers.decision ?? 0,
    data: 0,
  };

  const totalScore = dimensions.reduce(
    (sum, d) => sum + scores[d],
    0
  );

  // Primary leak = menor score
  const primaryLeak = dimensions.reduce((worst, d) =>
    scores[d] < scores[worst] ? d : worst
  );

  let tier: Result["tier"] = "D";

  if (totalScore >= 13) tier = "A";
  else if (totalScore >= 9) tier = "B";
  else if (totalScore >= 5) tier = "C";

  return {
    totalScore,
    scores,
    primaryLeak,
    tier,
  };
}
