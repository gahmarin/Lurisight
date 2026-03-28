import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold text-[#6C63FF]">
        Jurisight
      </h1>

      <nav className="flex gap-6 items-center">
        <a href="#" className="opacity-80 hover:opacity-100">Início</a>
        <a href="#" className="opacity-80 hover:opacity-100">Funcionalidades</a>
        <a href="#" className="opacity-80 hover:opacity-100">Sobre</a>

        <Link href="/dashboard">
          <button className="bg-[#6C63FF] px-4 py-2 rounded-xl">
            Entrar
          </button>
        </Link>
      </nav>
    </header>
  );
}
