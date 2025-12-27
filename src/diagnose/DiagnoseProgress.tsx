type Props = { current: number; total: number };

export default function DiagnoseProgress({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-[11px] tracking-[0.25em] text-gray-500 mb-3">
        <span>DIAGNOSE</span>
        <span>{current}/{total}</span>
      </div>
      <div className="h-[2px] w-full bg-white/10">
        <div
          className="h-[2px] bg-white/70 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
