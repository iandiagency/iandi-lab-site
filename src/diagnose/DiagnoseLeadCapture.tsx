type Props = {
  stageLabel: string;
  recommendedOffer: string;
};

export default function DiagnoseLeadCapture({ stageLabel, recommendedOffer }: Props) {
  return (
    <div className="border border-white/10 p-8 mt-16">
      <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-4">
        PRÓXIMO PASSO
      </p>

      <h3 className="text-xl mb-4">
        Queremos acompanhar este crescimento.
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xl">
        Este diagnóstico indica um cenário de <span className="text-gray-200">{stageLabel}</span>.
        O próximo passo recomendado é <span className="text-gray-200">{recommendedOffer}</span>.
        <br /><br />
        Se quiseres receber o resumo executivo e os próximos passos estratégicos,
        deixa o teu email abaixo.
      </p>

      <form className="flex flex-col sm:flex-row gap-4 max-w-lg">
        <input
          type="email"
          required
          placeholder="O teu melhor email profissional"
          className="flex-1 bg-black border border-white/20 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white"
        />

        <button
          type="submit"
          className="px-6 py-3 border border-white/30 text-sm text-white hover:bg-white hover:text-black transition"
        >
          Receber resumo
        </button>
      </form>

      <p className="text-[11px] text-gray-600 mt-4">
        Não enviamos spam. Informação estratégica apenas.
      </p>
    </div>
  );
}
