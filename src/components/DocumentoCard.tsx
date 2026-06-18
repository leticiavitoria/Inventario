import Link from "next/link";
import type { Documento } from "@/data/tipos";
import { StatusBadge } from "./StatusBadge";

export function DocumentoCard({ doc }: { doc: Documento }) {
  return (
    <article className="rounded-xl border-2 border-gray-300 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-lg font-bold text-gray-900">{doc.nome}</h3>
        <StatusBadge status={doc.status} />
      </div>
      {doc.observacao && (
        <p className="mt-2 rounded bg-yellow-50 border-l-4 border-yellow-500 px-3 py-2 text-base text-yellow-900">
          ⚠️ {doc.observacao}
        </p>
      )}
      {doc.descricao && <p className="mt-2 text-base text-gray-700">{doc.descricao}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {doc.tutorialSlug && (
          <Link
            href={`/tutoriais/${doc.tutorialSlug}`}
            className="rounded-lg bg-blue-700 px-4 py-2 text-base font-bold text-white hover:bg-blue-800"
          >
            📖 Como conseguir
          </Link>
        )}
        {doc.modeloHref && (
          <a
            href={doc.modeloHref}
            target="_blank"
            rel="noopener"
            className="rounded-lg bg-green-700 px-4 py-2 text-base font-bold text-white hover:bg-green-800"
          >
            ⬇️ Baixar modelo
          </a>
        )}
      </div>
    </article>
  );
}
