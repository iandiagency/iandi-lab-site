import React from "react";

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="w-full bg-black px-6 md:px-20 py-24 md:py-32"
    >
      <div className="max-w-[720px] mx-auto">

        {/* Headline */}
        <h3 className="text-xl md:text-2xl font-light mb-4">
          Solicitar diagnóstico estratégico
        </h3>

        {/* Contexto */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
          Esta conversa serve para avaliar se existe alinhamento estratégico.
          Nem todas as operações estão prontas para estruturação de crescimento —
          e está tudo bem.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 gap-6">

          {/* Nome */}
          <div>
            <label className="block text-xs text-gray-500 mb-2">
              Nome completo
            </label>
            <input
              type="text"
              required
              className="
                w-full 
                bg-black 
                border 
                border-white/20 
                rounded-sm 
                px-4 
                py-3 
                text-sm 
                text-white 
                focus:outline-none 
                focus:border-white/40
              "
            />
          </div>

          {/* Empresa */}
          <div>
            <label className="block text-xs text-gray-500 mb-2">
              Empresa / Projeto
            </label>
            <input
              type="text"
              required
              className="
                w-full 
                bg-black 
                border 
                border-white/20 
                rounded-sm 
                px-4 
                py-3 
                text-sm 
                text-white 
                focus:outline-none 
                focus:border-white/40
              "
            />
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-xs text-gray-500 mb-2">
              Principal objetivo de crescimento
            </label>
            <textarea
              rows={4}
              required
              className="
                w-full 
                bg-black 
                border 
                border-white/20 
                rounded-sm 
                px-4 
                py-3 
                text-sm 
                text-white 
                resize-none
                focus:outline-none 
                focus:border-white/40
              "
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="
              mt-4
              self-start
              px-7 
              py-3 
              text-sm 
              font-medium 
              rounded-sm
              bg-zinc-200 
              text-black 
              hover:bg-zinc-300 
              transition
            "
          >
            Enviar solicitação
          </button>
        </form>

        {/* Nota */}
        <p className="text-gray-500 text-xs mt-8">
          Respondemos apenas a solicitações com potencial de alinhamento estratégico.
        </p>
      </div>
    </section>
  );
}
