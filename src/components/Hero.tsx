import CTA from "@/components/CTA";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        isolate
        pt-44 md:pt-56
        pb-32
      "
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-14">
          A VERDADE QUE NINGUÉM TE DIZ
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-14">
          Crescimento previsível
          <br />
          exige sistema —
          <br />
          não improviso.
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-20">
          A maior parte das marcas não cresce por falta de método.
          Eliminamos ineficiências e instalamos sistemas de aquisição
          que funcionam.
        </p>

        <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-24">
          IANDI LAB — SISTEMAS DE CRESCIMENTO
        </p>

        {/* CTA */}
        <CTA href="#contact" />
      </div>
    </section>
  );
}
