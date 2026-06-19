"use client";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { catalogoDocs } from "@/data/documentos";
import { getHerdeiro } from "@/data/herdeiros";
import { AppIconBadge } from "@/components/AppIcon";
import { MarcarFeito } from "@/components/MarcarFeito";
import { ChatGPTAjuda } from "@/components/ChatGPTAjuda";
import { FormattedText } from "@/components/FormattedText";

export default function DocPage() {
  const { slug: slugParam, docId: docIdParam } = useParams();
  const sp = useSearchParams();
  const slug = String(slugParam);
  const docId = String(docIdParam);
  const itemId = sp.get("item") ?? docId;
  const h = getHerdeiro(slug);
  const doc = catalogoDocs[docId];

  if (!h || !doc) {
    return <p>Documento não encontrado. <Link href="/" className="text-blue-700 underline">Voltar</Link></p>;
  }

  return (
    <div className="space-y-4">
      <Link href={`/herdeiro/${slug}/lista`} className="text-blue-700 underline text-sm">← Voltar para meus documentos</Link>

      <header>
        <h1 className="text-xl font-bold text-blue-900">{doc.nome}</h1>
        {doc.descricao && <p className="text-sm text-gray-700 mt-1">{doc.descricao}</p>}
      </header>

      {doc.iconesApps && doc.iconesApps.length > 0 && (
        <section className="rounded-lg border border-gray-300 bg-white p-3">
          <p className="text-xs font-semibold text-gray-700 mb-2">Onde fazer:</p>
          <div className="flex flex-wrap gap-2">
            {doc.iconesApps.map((ic) => <AppIconBadge key={ic} icon={ic} />)}
          </div>
        </section>
      )}

      {doc.avisos.length > 0 && (
        <section className="rounded-lg border-2 border-amber-500 bg-amber-50 p-3">
          <p className="font-bold text-amber-900 text-sm mb-2">⚠️ Atenção:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-amber-900">
            {doc.avisos.map((a, i) => <li key={i}><FormattedText text={a} /></li>)}
          </ul>
        </section>
      )}

      <section className="rounded-lg border border-gray-300 bg-white p-3">
        <p className="font-bold text-gray-900 text-sm mb-2">Como conseguir:</p>
        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-gray-800">
          {doc.comoConseguir.map((p, i) => <li key={i}><FormattedText text={p} /></li>)}
        </ol>
      </section>

      {doc.videoYoutube && (
        <a
          href={doc.videoYoutube}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-sm"
        >
          ▶ Ver vídeo no YouTube — toque aqui →
        </a>
      )}

      {doc.modeloHref && (
        <a
          href={doc.modeloHref}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 rounded-lg bg-green-700 hover:bg-green-800 text-white font-bold py-3 text-sm"
        >
          ⬇ Baixar modelo (depois imprima na papelaria) →
        </a>
      )}

      <section className="rounded-lg border-2 border-blue-500 bg-blue-50 p-3">
        <p className="font-bold text-blue-900 text-sm mb-1">Última checagem:</p>
        <p className="text-sm text-blue-900">
          Você consegue <b>ler o documento impresso com facilidade</b>?
        </p>
        <p className="text-xs text-blue-900 mt-1">
          ✅ Se SIM: ok, pode marcar como feito.<br/>
          ❌ Se NÃO: jogue fora e faça outro. Documento ilegível não vale.
        </p>
      </section>

      <MarcarFeito slug={slug} itemId={itemId} />

      <ChatGPTAjuda contextoDoc={doc.nome} />
    </div>
  );
}
