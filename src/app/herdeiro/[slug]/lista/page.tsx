"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getHerdeiro, gerarSecoes, contarTotalAFazer } from "@/data/herdeiros";
import { DocItem, DocItemPronto } from "@/components/DocItem";
import type { Secao } from "@/data/tipos";
import { config } from "@/lib/config";

export default function ListaPage() {
  const { slug: slugParam } = useParams();
  const slug = String(slugParam);
  const h = getHerdeiro(slug);
  const [secoes, setSecoes] = useState<Secao[]>([]);
  const [checks, setChecks] = useState(0);

  useEffect(() => {
    if (!h) return;
    const stored = localStorage.getItem(`perfilObj_${slug}`);
    const perfil = stored ? JSON.parse(stored) : h.perfilDefault;
    setSecoes(gerarSecoes(h, perfil));
  }, [h, slug]);

  useEffect(() => {
    function recount() {
      let c = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(`check_${slug}_`) && localStorage.getItem(k) === "1") c++;
      }
      setChecks(c);
    }
    recount();
    window.addEventListener("checks-changed", recount);
    return () => window.removeEventListener("checks-changed", recount);
  }, [slug, secoes]);

  if (!h) return <p>Não encontrado. <Link href="/" className="text-blue-700 underline">Voltar</Link></p>;

  const total = contarTotalAFazer(secoes);
  const completo = total > 0 && checks >= total;
  const whatsappMsg = encodeURIComponent(`Oi Letícia, sou ${h.nome}. Já tenho meus documentos impressos. Você está em casa?`);
  const whatsappUrl = `https://wa.me/${config.whatsappLeticia}?text=${whatsappMsg}`;

  return (
    <div className="space-y-4">
      <Link href={`/herdeiro/${slug}`} className="text-blue-700 underline text-sm">← Refazer questionário</Link>

      <header>
        <h1 className="text-xl font-bold text-gray-900">Documentos de {h.nome.split(" ")[0]}</h1>
        <p className="text-sm text-gray-700 mt-1">
          Toque em cada documento para ver como conseguir. Marque a caixinha quando estiver pronto.
        </p>
        {total > 0 && (
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="bg-green-500 h-full transition-all" style={{ width: `${Math.min(100, (checks / total) * 100)}%` }} />
            </div>
            <p className="text-xs text-gray-600 mt-1">{checks} de {total} marcados</p>
          </div>
        )}
      </header>

      {h.observacoesGerais && h.observacoesGerais.length > 0 && (
        <section className="rounded-lg border border-amber-500 bg-amber-50 p-3">
          <p className="font-bold text-amber-900 text-sm mb-1">📌 Atenção:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-amber-900">
            {h.observacoesGerais.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </section>
      )}

      {secoes.map((s) => (
        <section key={s.id} className="space-y-2">
          <header>
            <h2 className="text-base font-bold text-gray-900">{s.titulo}</h2>
            {s.subtitulo && <p className="text-xs text-gray-600">{s.subtitulo}</p>}
          </header>
          <div className="space-y-2">
            {s.docs.map((d) =>
              s.tipo === "ja_entregue" ? (
                <DocItemPronto key={d.id} catalogoId={d.catalogoId} nomeOverride={d.nomeOverride} />
              ) : (
                <DocItem
                  key={d.id}
                  slug={slug}
                  itemId={d.id}
                  catalogoId={d.catalogoId}
                  nomeOverride={d.nomeOverride}
                  status={d.status}
                  observacao={d.observacao}
                />
              )
            )}
          </div>
        </section>
      ))}

      {completo && (
        <section className="rounded-xl border-2 border-green-700 bg-green-50 p-4 space-y-3 mt-6">
          <h2 className="text-xl font-extrabold text-green-900">🎉 Documentos prontos!</h2>
          <p className="text-sm text-green-900">
            Agora <b>leve TODOS os papéis IMPRESSOS</b> para a Letícia. Não pode mandar foto. Não pode mandar PDF. <b>Só vale papel impresso na mão dela.</b>
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-green-900">
            <li><b>Mande mensagem pela Letícia ANTES</b> para confirmar que ela está em casa.</li>
            <li>Vá até <b>{config.enderecoEntrega}</b>.</li>
            <li>Entregue na mão dela.</li>
          </ol>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
            className="block text-center rounded-lg bg-green-700 hover:bg-green-800 text-white font-bold py-3 text-sm"
          >
            💬 Mandar mensagem para a Letícia agora →
          </a>
        </section>
      )}
    </div>
  );
}
