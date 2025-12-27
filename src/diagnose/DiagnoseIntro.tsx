type Props = { onStart: () => void };

export default function DiagnoseIntro({ onStart }: Props) {
  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-[900px] mx-auto px-6">
        <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-6">
          IANDI DIAGNOSE™
        </p>

        <h1 className="text-3xl md:text-5xl leading-[1.05] mb-8">
          Avalie o nível de crescimento do teu negócio em minutos.
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
          Perguntas estruturadas. Resultado objetivo. Gargalos e prioridades.
          Um diagnóstico rápido com lógica consultiva — sem “planos” e sem ruído.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {[
            "Score de desempenho (0–100)",
            "Gargalos identificados",
            "Estimativa de perda atual",
            "Roteiro recomendado (oferta, tráfego, funil, criativos, orçamento)",
          ].map((x) => (
            <div key={x} className="border border-white/10 p-6">
              <p className="text-gray-300 text-sm leading-relaxed">{x}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-sm text-gray-100 hover:border-white hover:bg-white hover:text-black transition"
        >
          Iniciar diagnóstico
        </button>
      </div>
    </section>
  );
}
