"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getHerdeiro, gerarDocumentos } from "@/data/herdeiros";
import { DocItem } from "@/components/DocItem";
import { config } from "@/lib/config";

export default function ListaPage() {
  const params = useParams();
  const slug = String(params.slug);
  const h = getHerdeiro(slug);
  const [docs, setDocs] = useState<ReturnType<typeof gerarDocumentos>>([]);

  useEffect(() => {
    if (!h) return;
    const stored = localStorage.getItem(`perfilObj_${slug}`);
    const perfil = stored ? JSON.parse(stored) : h.perfilDefault;
    setDocs(gerarDocumentos(h, perfil));
  }, [h, slug]);

  if (!h) {
    return <p>Não encontrado. <Link href="/" className="text-blue-700 underline">Voltar</Link></p>;
  }

  const whatsappMsg = encodeURIComponent(`Oi Letícia, sou ${h.nome}. Já tenho meus documentos prontos.`);
  const whatsappUrl = `https://wa.me/${config.whatsappLeticia}?text=${whatsappMsg}`;

  return (
    <div className="space-y-4">
      <Link href={`/herdeiro/${slug}`} className="text-blue-700 underline text-sm">← Refazer questionário</Link>

      <header>
        <h1 className="text-xl font-bold text-gray-900">Documentos de {h.nome.split(" ")[0]}</h1>
        <p className="text-sm text-gray-700 mt-1">
          Toque em cada documento para ver como conseguir. Marque a caixinha quando estiver pronto.
        </p>
      </header>

      {h.observacoesGerais && h.observacoesGerais.length > 0 && (
        <section className="rounded-lg border border-amber-500 bg-amber-50 p-3">
          <p className="font-bold text-amber-900 text-sm mb-1">📌 Atenção especial:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-amber-900">
            {h.observacoesGerais.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </section>
      )}

      <div className="space-y-2">
        {docs.map((d) => (
          <DocItem key={d.id} slug={slug} docId={d.id} status={d.status} observacao={d.observacao} />
        ))}
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener"
        className="block text-center rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-sm"
      >
        Já entreguei tudo → avisar a Letícia
      </a>
    </div>
  );
}
