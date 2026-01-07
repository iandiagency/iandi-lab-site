export default function Index() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">IANDI Lab</h1>
        <p className="text-gray-400">
          Diagnóstico de Crescimento • Estratégia • Dados • Escala
        </p>
        <a
          href="/diagnose"
          className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-md"
        >
          Iniciar Diagnóstico
        </a>
      </div>
    </main>
  );
}
