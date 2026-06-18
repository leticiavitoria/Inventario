import Link from "next/link";

export function Header() {
  return (
    <header className="border-b-2 border-gray-300 bg-white sticky top-0 z-30">
      <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="text-lg font-bold text-blue-900">📋 Inventário Família Martins</Link>
        <nav className="flex gap-3 text-sm">
          <Link href="/declaracoes" className="text-blue-700 underline">Declarações</Link>
          <Link href="/quiz-renda" className="text-blue-700 underline">Renda</Link>
        </nav>
      </div>
    </header>
  );
}
