export default function Hero() {
  return (
    <section className="flex items-center justify-between p-20">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-6">
          Inteligência que revela o essencial no jurídico
        </h1>

        <p className="opacity-80 mb-6">
          Analise documentos jurídicos com IA e destaque informações relevantes automaticamente.
        </p>

        <button className="bg-[#6C63FF] px-6 py-3 rounded-xl">
          Começar
        </button>
      </div>

      <img src="/logo.png" alt="logo" className="w-96" />
    </section>
  );
}
