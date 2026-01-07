import { useDiagnoseStore } from "./diagnoseStore";

export default function DiagnoseContext() {
  const setAnswer = useDiagnoseStore((s) => s.setAnswer);
  const next = useDiagnoseStore((s) => s.next);

  function handleSelect(value: string) {
    setAnswer("q_acq_main", value);
    next();
  }

  return (
    <section className="diagnose-container">
      {/* AUTORIDADE */}
      <p className="eyebrow">
        Diagnóstico Estratégico — IANDI Lab
      </p>

      {/* TESE FORTE */}
      <h1>
        O problema não é tráfego.
        <br />
        É falta de estrutura para crescer.
      </h1>

      {/* CONSEQUÊNCIA */}
      <p className="mt-6 max-w-xl">
        Tráfego não cria crescimento. Ele apenas amplifica o que já existe.
        Quando a estrutura está errada, escalar torna o prejuízo maior — e mais rápido.
      </p>

      {/* FILTRO */}
      <p className="mt-4 text-sm text-zinc-500 max-w-xl">
        Não é para quem quer impulsionar.{" "}
        <strong className="text-zinc-300">
          É para quem precisa decidir.
        </strong>
      </p>

      {/* TRANSIÇÃO PARA DECISÃO */}
      <h2 className="mt-12 text-lg text-white">
        Para começar, precisamos entender uma coisa:
      </h2>

      <p className="mt-2 max-w-xl">
        De onde vêm hoje os clientes do teu negócio?
      </p>

      {/* OPÇÕES */}
      <div className="mt-8 grid gap-4 max-w-2xl">
        <button
          className="diagnose-card"
          onClick={() => handleSelect("paid_controlled")}
        >
          <h3>Tráfego pago previsível</h3>
          <p>Existe investimento recorrente com controlo de resultados.</p>
        </button>

        <button
          className="diagnose-card"
          onClick={() => handleSelect("paid_uncontrolled")}
        >
          <h3>Tráfego pago sem controlo</h3>
          <p>Investe-se, mas sem clareza de CAC ou previsibilidade.</p>
        </button>

        <button
          className="diagnose-card"
          onClick={() => handleSelect("organic")}
        >
          <h3>Orgânico / conteúdo</h3>
          <p>Clientes chegam por reputação, conteúdo ou presença digital.</p>
        </button>

        <button
          className="diagnose-card"
          onClick={() => handleSelect("referral")}
        >
          <h3>Indicações / networking</h3>
          <p>O crescimento depende de relações e recomendações.</p>
        </button>

        <button
          className="diagnose-card"
          onClick={() => handleSelect("whatsapp_only")}
        >
          <h3>WhatsApp informal</h3>
          <p>Vendas manuais, sem sistema claro de aquisição.</p>
        </button>
      </div>

      {/* PROGRESSO */}
      <p className="diagnose-progress">
        Etapa 1 de 4 — Aquisição
      </p>
    </section>
  );
}
