import { useMemo, useState } from "react";
import { QUESTIONS } from "./questions";
import DiagnoseProgress from "./DiagnoseProgress";
import { computeDiagnose } from "./engine";
import DiagnoseResult from "./DiagnoseResult";

export default function DiagnoseForm() {
  const total = QUESTIONS.length;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const current = QUESTIONS[step];

  const canNext = useMemo(() => {
    if (!current) return false;
    return typeof answers[current.id] === "number";
  }, [answers, current]);

  const result = useMemo(() => {
    return computeDiagnose(QUESTIONS, answers);
  }, [answers]);

  const onPick = (value: number) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  };

  const next = () => {
    if (!canNext) return;

    const isLast = step >= total - 1;
    if (isLast) {
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
  };

  const back = () => {
    setStep((s) => Math.max(0, s - 1));
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  if (done) {
    return <DiagnoseResult result={result} onRestart={restart} />;
  }

  return (
    <section className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="max-w-[780px] mx-auto px-6 space-y-10">
        <DiagnoseProgress current={step + 1} total={total} />

        <div className="border border-white/10 p-8">
          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-4">
            {current.block.toUpperCase()}
          </p>

          <h1 className="text-2xl md:text-3xl leading-[1.15] mb-8">
            {current.title}
          </h1>

          <div className="space-y-3">
            {current.options.map((opt) => {
              const active = answers[current.id] === opt.value;
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => onPick(opt.value)}
                  className={[
                    "w-full text-left border p-4 transition",
                    "border-white/10 hover:border-white/30",
                    "text-gray-200",
                    active ? "bg-white text-black border-white" : "bg-transparent",
                  ].join(" ")}
                >
                  <span className="text-sm leading-relaxed">{opt.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="text-sm text-gray-400 hover:text-white transition disabled:opacity-30 disabled:hover:text-gray-400"
            >
              Voltar
            </button>

            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className={[
                "inline-flex items-center justify-center px-6 py-3 border text-sm transition",
                !canNext
                  ? "border-white/10 text-gray-600 cursor-not-allowed"
                  : "border-white/30 text-gray-100 hover:border-white hover:bg-white hover:text-black",
              ].join(" ")}
            >
              {step === total - 1 ? "Ver resultado" : "Continuar"}
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed">
          Este diagnóstico gera um score e hipóteses de gargalos. O aprofundamento acontece no diagnóstico estratégico.
        </p>
      </div>
    </section>
  );
}
