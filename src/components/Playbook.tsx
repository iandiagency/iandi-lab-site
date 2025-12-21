export default function Playbook() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-20 bg-black text-white border-t border-white/10">
      <div className="max-w-[1100px] mx-auto">

        <p className="text-xs tracking-widest text-gray-500 mb-4">
          INTERNAL GROWTH FRAMEWORK
        </p>

        <h2 className="text-2xl md:text-3xl font-light mb-8 max-w-3xl">
          Crescimento previsível é consequência de arquitetura.
        </h2>

        <p className="text-gray-400 max-w-3xl mb-12">
          Um sistema de decisão que reduz incerteza e aumenta eficiência.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {[
            ["Diagnóstico", "Leitura objetiva de dados e gargalos"],
            ["Arquitetura", "Desenho do sistema de aquisição"],
            ["Execução", "Testes e validação controlada"],
            ["Otimização", "Aprendizado contínuo e escala"],
          ].map(([title, desc], i) => (
            <div key={i} className="border-t border-white/10 pt-4">
              <h3 className="text-sm font-medium mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
