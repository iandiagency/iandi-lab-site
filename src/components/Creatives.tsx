import React from "react";

export default function Creatives() {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-black text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <p className="text-sm tracking-widest text-purple-400 mb-4">
          PERSPECTIVA ORIENTADA A DADOS
        </p>

        <h2 className="text-3xl md:text-5xl font-light leading-tight mb-10">
          Criativos não são estética.<br />
          São instrumentos de eficiência.
        </h2>

        {/* Core Message */}
        <p className="text-gray-300 text-lg max-w-3xl leading-relaxed mb-14">
          Em ambientes competitivos, criativos funcionam como variáveis de 
          diagnóstico. Cada ângulo teste fornece um sinal — positivo ou negativo — 
          que orienta decisões de investimento, segmentação e oferta.
        </p>

        {/* Data-Driven Principles */}
        <div className="grid md:grid-cols-3 gap-10">

          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-light mb-4">
              1. Mensagens Ancoradas em Dados
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Os ângulos criativos são construídos a partir de comportamento real 
              do cliente: motivações, objeções e padrões de conversão.
            </p>
          </div>

          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-light mb-4">
              2. Testes Estruturados
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cada criativo existe para validar uma hipótese.  
              Métricas como CTR, CVR e eficiência marginal orientam expansão ou eliminação.
            </p>
          </div>

          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-light mb-4">
              3. Padrões de Conversão
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Identificamos padrões replicáveis — temas, formatos e mensagens que 
              consistentemente reduzem CAC e aumentam ROAS.
            </p>
          </div>

        </div>

        {/* Closing Statement */}
        <p className="text-gray-400 text-base max-w-3xl mt-14 leading-relaxed">
          O papel do criativo no sistema IANDI Lab é acelerar aprendizado.  
          Um criativo eficaz não apenas “funciona”; ele informa decisões de alocação, 
          define priorização e permite escala sustentável.
        </p>
      </div>
    </section>
  );
}
