import { notFound } from "next/navigation";
import Link from "next/link";
import { tutoriais, getTutorial } from "@/data/tutoriais";

export function generateStaticParams() {
  return Object.keys(tutoriais).map((slug) => ({ slug }));
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const t = getTutorial(params.slug);
  if (!t) return notFound();

  return (
    <div className="space-y-5">
      <Link href="/" className="text-blue-700 underline">← Voltar</Link>
      <header>
        <h1 className="text-3xl font-extrabold text-blue-900">{t.titulo}</h1>
        <p className="text-lg text-gray-700 mt-2">{t.resumo}</p>
      </header>

      {t.avisos && t.avisos.length > 0 && (
        <aside className="rounded-xl border-2 border-red-700 bg-red-50 p-4">
          <p className="font-bold text-red-900 mb-2">⚠️ Atenção:</p>
          <ul className="list-disc pl-6 text-red-900 space-y-1">
            {t.avisos.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </aside>
      )}

      <ol className="space-y-4">
        {t.passos.map((p, i) => (
          <li key={i} className="rounded-xl border-2 border-gray-300 bg-white p-4">
            <h2 className="text-xl font-bold text-blue-900">{p.titulo}</h2>
            <p className="mt-2 text-base text-gray-800 whitespace-pre-line">{p.texto}</p>
            {p.link && (
              <a
                href={p.link.url}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-block rounded-lg bg-blue-700 text-white px-4 py-2 font-bold hover:bg-blue-800"
              >
                🔗 {p.link.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
