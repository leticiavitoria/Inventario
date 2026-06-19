import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-300 bg-white sticky top-0 z-30">
      <div className="mx-auto max-w-3xl px-4 py-3">
        <Link href="/" className="text-base font-semibold text-blue-900">
          Inventário Família Martins
        </Link>
      </div>
    </header>
  );
}
