import React from "react";

export default function CaseStudies() {
  return (
    <section className="py-32 px-6 md:px-20 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <p className="text-sm tracking-widest text-purple-400 mb-4">
          CASE STUDIES — MÉTODO APLICADO
        </p>

        <h2 className="text-3xl md:text-5xl font-light leading-tight mb-16">
          Crescimento previsível não é teoria.  
          É prática — aplicada com rigor.
        </h2>


        {/* =============================
            CASE 01 — Redução de CAC
        ============================== */}
        <div className="border border-white/10 rounded-xl p-10 mb-20">
          <h3 className="text-2xl md:text-3xl font-light mb-6">
            Case 01 — Redução de 73% no custo por lead em 90 dias
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                O cliente operava com campanhas instáveis, segmentação pobre e 
                criativos desconectados do comportamento real do público.
              </p>

              <p className="text-gray-300 leading-relaxed">
                O CAC era imprevisível e as decisões eram tomadas com base em suposições, 
                não em dados. O crescimento era impossível de sustentar.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <p className="text-sm tracking-widest text-purple-300 mb-3">
                RESULTADO-CHAVE
              </p>
              <p className="text-4xl font-light text-white mb-2">73%</p>
              <p className="text-gray-400 text-sm">redução no custo por lead</p>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-gray-300">

            <div>
              <h4 className="font-light text-white mb-1">Problema</h4>
              <p className="text-gray-400">
                Campanhas inconsistentes, funil sem estrutura e decisões sem rigor analítico.
              </p>
            </div>

            <div>
              <h4 className="font-light text-white mb-1">Intervenção</h4>
              <p className="text-gray-400">
                Diagnóstico completo → arquitetura de crescimento → testes estruturados → 
                reconstrução da oferta e do funil de aquisição.
              </p>
            </div>

            <div>
              <h4 className="font-light text-white mb-1">Resultado</h4>
              <p className="text-gray-400">
                CAC estabilizado, escalabilidade recuperada e eficiência orçamental duradoura.
              </p>
            </div>

          </div>
        </div>


        {/* =============================
            CASE 02 — Estabilidade Operacional
        ============================== */}
        <div className="border border-white/10 rounded-xl p-10 mb-20">
          <h3 className="text-2xl md:text-3xl font-light mb-6">
            Case 02 — Campanhas estabilizadas com variação inferior a 18%
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                O cliente sofria com “picos e quedas” constantes.  
                O aumento de budget destruía métricas e o funil colapsava.
              </p>

              <p className="text-gray-300 leading-relaxed">
                O problema não era apenas técnico — era estrutural.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <p className="text-sm tracking-widest text-purple-300 mb-3">
                RESULTADO-CHAVE
              </p>
              <p className="text-4xl font-light text-white mb-2">18%</p>
              <p className="text-gray-400 text-sm">
                variação máxima em períodos de escala
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-gray-300">

            <div>
              <h4 className="font-light text-white mb-1">Problema</h4>
              <p className="text-gray-400">
                Funil instável, segmentação dispersa e criativos sem função estratégica.
              </p>
            </div>

            <div>
              <h4 className="font-light text-white mb-1">Intervenção</h4>
              <p className="text-gray-400">
                Reengenharia do funil → redefinição de audiências → matriz de criativos 
                orientada a hipóteses → alinhamento de oferta.
              </p>
            </div>

            <div>
              <h4 className="font-light text-white mb-1">Resultado</h4>
              <p className="text-gray-400">
                Crescimento recuperado, previsibilidade instalada e escalabilidade sustentável.
              </p>
            </div>

          </div>
        </div>


        {/* =============================
            CASE 03 — Sistema de Crescimento
        ============================== */}
        <div className="border border-white/10 rounded-xl p-10">
          <h3 className="text-2xl md:text-3xl font-light mb-6">
            Case 03 — Crescimento previsível em funis antes instáveis
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                A marca queria escalar, mas cada tentativa de expansão 
                aumentava custos e reduzia conversão.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Faltava sistema. Faltava sequência. Faltava disciplina.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <p className="text-sm tracking-widest text-purple-300 mb-3">
                RESULTADO-CHAVE
              </p>
              <p className="text-4xl font-light text-white mb-2">+32%</p>
              <p className="text-gray-400 text-sm">
                aumento de eficiência orçamental
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-gray-300">

            <div>
              <h4 className="font-light text-white mb-1">Problema</h4>
              <p className="text-gray-400">
                Expansão sem estratégia, métricas distorcidas e funis colapsando em escala.
              </p>
            </div>

            <div>
              <h4 className="font-light text-white mb-1">Intervenção</h4>
              <p className="text-gray-400">
                Implementação do método IANDI Lab → testes de eficiência marginal → 
                reconstrução da jornada → modelação de aquisição.
              </p>
            </div>

            <div>
              <h4 className="font-light text-white mb-1">Resultado</h4>
              <p className="text-gray-400">
                Crescimento previsível, estabilidade operacional e sistema pronto para escalar.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
