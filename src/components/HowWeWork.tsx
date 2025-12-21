import React from "react";

export default function HowWeWork() {
  return (
    <section className="py-32 px-6 md:px-20 bg-black text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <p className="text-sm tracking-widest text-red-500 mb-4">
          COMO O LAB OPERA
        </p>

        <h2 className="text-3xl md:text-5xl font-light leading-tight mb-12">
          Crescimento não surge do caos.  
          Surge de disciplina operacional.
        </h2>

        <p className="text-lg text-gray-300 max-w-3xl mb-16 leading-relaxed">
          Não trabalhamos com improviso, campanhas sem rumo ou produção aleatória.  
          Operamos com um sistema — um modelo de crescimento replicável  
          que reduz incerteza e aumenta eficiência a cada ciclo.
        </p>


        {/* GRID DO OPERATING MODEL */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* BLOCO 1 */}
          <div className="border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-light mb-3">1. Rigor na Análise</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Cada decisão nasce de dados, não de opiniões.  
              Eliminamos ruído, identificamos fricções e priorizamos o que realmente move métricas.
            </p>
          </div>

          {/* BLOCO 2 */}
          <div className="border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-light mb-3">2. Estrutura Antes de Escalar</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Nenhuma marca escala sem estabilidade.  
              Ajustamos funis, oferta, segmentação e criativos antes de pisar no acelerador.
            </p>
          </div>

          {/* BLOCO 3 */}
          <div className="border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-light mb-3">3. Execução com Precisão</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Testes estruturados, hipóteses claras e ciclos curtos.  
              Cada campanha é uma peça dentro de um sistema — não um tiro no escuro.
            </p>
          </div>

          {/* BLOCO 4 */}
          <div className="border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-light mb-3">4. Eficiência Marginal</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Medimos o impacto real de cada ação.  
              Só escalamos o que prova eficiência.  
              O resto é descartado sem hesitação.
            </p>
          </div>

          {/* BLOCO 5 */}
          <div className="border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-light mb-3">5. Aprendizado Contínuo</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Cada semana gera novos insights.  
              Aprendizado acumulado aumenta previsibilidade  
              e reduz custos ao longo do tempo.
            </p>
          </div>

          {/* BLOCO 6 */}
          <div className="border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-light mb-3">6. Transparência Radical</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Sem métricas cosméticas. Sem vaidade.  
              O cliente vê o que importa: eficiência, CAC, ROAS, estabilidade e crescimento.
            </p>
          </div>
        </div>

        {/* ENCERRAMENTO */}
        <p className="text-gray-400 text-base max-w-3xl mt-16 leading-relaxed">
          Este não é um modelo “bonito”.  
          É um modelo eficiente — criado para marcas que exigem previsibilidade,  
          controle e crescimento sustentável.
        </p>

      </div>
    </section>
  );
}
