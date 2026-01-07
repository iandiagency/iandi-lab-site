type StepShellProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  onNext: () => void;
  onBack?: () => void;
  canProceed: boolean;
};

export default function StepShell({
  eyebrow,
  title,
  description,
  children,
  onNext,
  onBack,
  canProceed,
}: StepShellProps) {
  return (
    <section className="space-y-8">
      {/* HEADER */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          {eyebrow}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        {description && (
          <p className="text-zinc-400">{description}</p>
        )}
      </div>

      {/* CONTENT */}
      <div>{children}</div>

      {/* FOOTER */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
        {onBack ? (
          <button
            onClick={onBack}
            className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition"
          >
            Voltar
          </button>
        ) : (
          <span />
        )}

        <button
          onClick={onNext}
          disabled={!canProceed}
          className="px-6 py-3 border border-white/20 rounded-md
                     hover:border-white transition disabled:opacity-40"
        >
          Próximo
        </button>
      </div>
    </section>
  );
}
