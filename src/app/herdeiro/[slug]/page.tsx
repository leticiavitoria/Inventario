import { notFound } from "next/navigation";
import Link from "next/link";
import { herdeiros, getHerdeiro, resumoStatus } from "@/data/herdeiros";
import { AvisoFixo } from "@/components/AvisoFixo";
import { ContagemRegressiva } from "@/components/ContagemRegressiva";
import { DocumentoCard } from "@/components/DocumentoCard";
import { config } from "@/lib/config";

export function generateStaticParams() {
  return herdeiros.map((h) => ({ slug: h.slug }));
}

export default function HerdeiroPage({ params }: { params: { slug: string } }) {
  const h = getHerdeiro(params.slug);
  if (!h) return notFound();
  const r = resumoStatus(h);
  const faltam = h.documentos.filter((d) => d.status === "falta" || d.status === "errado");
  const prontos = h.documentos.filter((d) => d.status === "ok");
  const na = h.documentos.filter((d) => d.status === "na");
  const whatsappMsg = encodeURIComponent(`Oi Letícia, sou ${h.nome}. Já tenho meus documentos prontos!`);
  const whatsappUrl = `https://wa.me/${config.whatsappLeticia}?text=${whatsappMsg}`;

  return (
    <div className="space-y-6">
      <Link href="/" className="text-blue-700 underline">← Voltar</Link>

      <section className="rounded-xl bg-blue-900 text-white p-5">
        <h1 className="text-2xl font-extrabold">Olá, {h.nome.split(" ")[0]}!</h1>
        <p className="text-base mt-1">{h.parentesco}</p>
        <p className="mt-3 text-lg font-bold">
          {r.ok} de {r.total} documentos prontos ({r.pct}%)
        </p>
        <div className="mt-2 w-full bg-blue-950 rounded-full h-4 overflow-hidden">
          <div className="bg-green-400 h-full" style={{ width: `${r.pct}%` }} />
        </div>
      </section>

      <ContagemRegressiva />
      <AvisoFixo />

      {h.observacoesGerais && h.observacoesGerais.length > 0 && (
        <section className="rounded-xl border-2 border-amber-600 bg-amber-50 p-4">
          <h2 className="text-lg font-bold text-amber-900 mb-2">📌 Atenção especial pra você:</h2>
          <ul className="list-disc pl-6 space-y-1 text-base text-amber-900">
            {h.observacoesGerais.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </section>
      )}

      {faltam.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-3 text-red-800">
            🚨 Falta ({faltam.length}) — comece por aqui:
          </h2>
          <div className="space-y-3">
            {faltam.map((d) => <DocumentoCard key={d.id} doc={d} />)}
          </div>
        </section>
      )}

      {prontos.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-3 text-green-800">✅ Já está pronto ({prontos.length})</h2>
          <div className="space-y-3">
            {prontos.map((d) => <DocumentoCard key={d.id} doc={d} />)}
          </div>
        </section>
      )}

      {na.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-3 text-gray-700">Não se aplica ({na.length})</h2>
          <div className="space-y-3">
            {na.map((d) => <DocumentoCard key={d.id} doc={d} />)}
          </div>
        </section>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener"
        className="block w-full text-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-6 py-4 text-lg font-bold shadow-lg"
      >
        💬 Já tenho TUDO — falar com a Letícia
      </a>
    </div>
  );
}
