"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getHerdeiro } from "@/data/herdeiros";
import { perguntas } from "@/data/perguntas";
import type { PerfilHerdeiro, SituacaoCivil, SituacaoRenda } from "@/data/tipos";

const moradoresMap: Record<string, number> = { "1": 1, "2": 2, "3": 3, "4": 4, "5+": 5 };
const maioresMap: Record<string, number> = { "1": 1, "2": 2, "3": 3, "4+": 4 };

export default function QuestionarioPage() {
  const params = useParams();
  const router = useRouter();
  const slug = String(params.slug);
  const h = getHerdeiro(slug);
  const [step, setStep] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!h) return;
    const saved = localStorage.getItem(`perfil_${slug}`);
    if (saved) {
      try { setRespostas(JSON.parse(saved)); } catch {}
    } else {
      const d = h.perfilDefault;
      setRespostas({
        civil: d.situacaoCivil,
        filhos18: d.temFilhosMaiores ? "sim" : "nao",
        moradores: d.qtdMoradores >= 5 ? "5+" : String(d.qtdMoradores),
        maiores: d.qtdMaiores >= 4 ? "4+" : String(d.qtdMaiores),
        renda: d.situacaoRenda,
      });
    }
  }, [h, slug]);

  if (!h) {
    return <p>Herdeiro não encontrado. <Link href="/" className="text-blue-700 underline">Voltar</Link></p>;
  }

  const totalSteps = perguntas.length + 1;

  function escolher(id: string, valor: string) {
    const novo = { ...respostas, [id]: valor };
    setRespostas(novo);
    setTimeout(() => setStep((s) => s + 1), 150);
  }

  function confirmar() {
    const perfil: PerfilHerdeiro = {
      situacaoCivil: respostas.civil as SituacaoCivil,
      temFilhosMaiores: respostas.filhos18 === "sim",
      qtdMoradores: moradoresMap[respostas.moradores] ?? 1,
      qtdMaiores: maioresMap[respostas.maiores] ?? 1,
      situacaoRenda: respostas.renda as SituacaoRenda,
    };
    localStorage.setItem(`perfil_${slug}`, JSON.stringify(respostas));
    localStorage.setItem(`perfilObj_${slug}`, JSON.stringify(perfil));
    router.push(`/herdeiro/${slug}/lista`);
  }

  return (
    <div className="space-y-4">
      <Link href="/" className="text-blue-700 underline text-sm">← Voltar</Link>
      <div className="bg-white rounded-lg border border-gray-300 p-3 text-center">
        <p className="text-sm text-gray-600">Olá,</p>
        <p className="text-lg font-bold text-blue-900">{h.nome.split(" ")[0]}</p>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="bg-blue-600 h-full transition-all" style={{ width: `${((step + 1) / totalSteps) * 100}%` }} />
        </div>
        <p className="text-xs text-gray-600 mt-1">Pergunta {Math.min(step + 1, totalSteps)} de {totalSteps}</p>
      </div>

      {step < perguntas.length ? (
        <PerguntaCard
          key={perguntas[step].id}
          pergunta={perguntas[step]}
          atual={respostas[perguntas[step].id]}
          onEscolher={(v: string) => escolher(perguntas[step].id, v)}
          onVoltar={step > 0 ? () => setStep((s) => s - 1) : null}
        />
      ) : (
        <Resumo respostas={respostas} onConfirmar={confirmar} onVoltar={() => setStep(perguntas.length - 1)} />
      )}
    </div>
  );
}

type PerguntaCardProps = {
  pergunta: { titulo: string; opcoes: { valor: string; label: string }[] };
  atual: string | undefined;
  onEscolher: (v: string) => void;
  onVoltar: (() => void) | null;
};

function PerguntaCard({ pergunta, atual, onEscolher, onVoltar }: PerguntaCardProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-gray-900">{pergunta.titulo}</h2>
      <div className="space-y-2">
        {pergunta.opcoes.map((o) => (
          <button
            key={o.valor}
            onClick={() => onEscolher(o.valor)}
            className={`block w-full text-left rounded-lg border-2 p-3 font-semibold text-sm ${
              atual === o.valor ? "border-blue-700 bg-blue-50 text-blue-900" : "border-gray-300 bg-white text-gray-900 hover:border-blue-400"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
      {onVoltar && (
        <button onClick={onVoltar} className="text-blue-700 underline text-sm">← Pergunta anterior</button>
      )}
    </section>
  );
}

type ResumoProps = { respostas: Record<string, string>; onConfirmar: () => void; onVoltar: () => void };

function Resumo({ respostas, onConfirmar, onVoltar }: ResumoProps) {
  const civilLabel = perguntas[0].opcoes.find((o) => o.valor === respostas.civil)?.label;
  const rendaLabel = perguntas[4].opcoes.find((o) => o.valor === respostas.renda)?.label;
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-gray-900">Confira suas respostas:</h2>
      <ul className="rounded-lg border border-gray-300 bg-white p-3 space-y-1.5 text-sm">
        <li><b>Estado civil:</b> {civilLabel}</li>
        <li><b>Filhos +18 morando junto:</b> {respostas.filhos18 === "sim" ? "Sim" : "Não"}</li>
        <li><b>Pessoas na casa:</b> {respostas.moradores}</li>
        <li><b>Adultos na casa:</b> {respostas.maiores}</li>
        <li><b>Renda:</b> {rendaLabel}</li>
      </ul>
      <button onClick={onConfirmar} className="w-full rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold py-3">
        Ver meus documentos →
      </button>
      <button onClick={onVoltar} className="text-blue-700 underline text-sm">← Mudar respostas</button>
    </section>
  );
}
