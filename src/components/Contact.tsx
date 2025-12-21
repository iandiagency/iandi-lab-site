export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-32 px-6 md:px-20 border-t border-white/10"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Vamos estruturar o seu crescimento
        </h2>
        <p className="text-gray-400 mb-8">
          Diagnóstico estratégico para marcas que querem previsibilidade.
        </p>

        <a
          href="mailto:contacto@iandilab.com"
          className="inline-block px-8 py-4 bg-white text-black rounded-md hover:bg-gray-200 transition"
        >
          Iniciar Conversa →
        </a>
      </div>
    </section>
  );
}
