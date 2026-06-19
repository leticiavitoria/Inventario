"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getHerdeiro } from "@/data/herdeiros";
import {
  perguntaCivil, perguntaCtps, perguntaRenda, perguntaMoraAlguem, perguntaQtdMaiores,
} from "@/data/perguntas";
import type { PerfilEstendido, SituacaoCivil, SituacaoRenda, TemCTPSFisica, Morador } from "@/data/tipos";
import { MoradorForm } from "@/components/MoradorForm";

type Resp = {
  civil?: SituacaoCivil;
  ctps_fisica?: TemCTPSFisica;
  renda?: SituacaoRenda;
  mora_alguem?: "sim" | "nao";
  qtd_maiores?: 0 | 1 | 2 | 3 | 4;
  moradores: Morador[];
};

const qtdMap: Record<string, number> = { "0": 0, "1": 1, "2": 2, "3": 3, "4+": 4 };

export default function QuestionarioPage() {
  const { slug: slugParam } = useParams();
  const slug = String(slugParam);
  const router = useRouter();
  const h = getHerdeiro(slug);

  const [step, setStep] = useState(0);
  const [resp, setResp] = useState<Resp>({ moradores: [] });

  if (!h) return <p>Não encontrado. <Link href="/" className="text-blue-700 underline">Voltar</Link></p>;

  const totalSteps = calcularTotal(resp);
  const stepIndex = Math.min(step, totalSteps - 1);

  function avancar() { setStep((s) => s + 1); }
  function voltar() { if (step > 0) setStep((s) => s - 1); }

  function finalizar() {
    const perfil: PerfilEstendido = {
      situacaoCivil: resp.civil!,
      temCtpsFisica: resp.ctps_fisica!,
      situacaoRenda: resp.renda!,
      moradoresMaiores: resp.moradores,
    };
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
          <div className="bg-blue-600 h-full transition-all" style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }} />
        </div>
        <p className="text-xs text-gray-600 mt-1">Etapa {stepIndex + 1} de {totalSteps}</p>
      </div>

      {renderStep({ step: stepIndex, resp, setResp, avancar, finalizar })}

      {step > 0 && (
        <button onClick={voltar} className="text-blue-700 underline text-sm">← Pergunta anterior</button>
      )}
    </div>
  );
}

function calcularTotal(resp: Resp): number {
  let n = 4; // civil, ctps, renda, mora_alguem
  if (resp.mora_alguem === "sim") {
    n += 1; // qtd
    n += resp.qtd_maiores ?? 0; // 1 por morador (form interno)
  }
  n += 1; // resumo
  return n;
}

type RenderArgs = {
  step: number;
  resp: Resp;
  setResp: React.Dispatch<React.SetStateAction<Resp>>;
  avancar: () => void;
  finalizar: () => void;
};

function renderStep({ step, resp, setResp, avancar, finalizar }: RenderArgs) {
  if (step === 0) {
    return <CardPergunta titulo={perguntaCivil.titulo} opcoes={perguntaCivil.opcoes} valor={resp.civil}
      onEscolher={(v) => { setResp((r) => ({ ...r, civil: v as SituacaoCivil })); setTimeout(avancar, 150); }} />;
  }
  if (step === 1) {
    return <CardPergunta titulo={perguntaCtps.titulo} opcoes={perguntaCtps.opcoes} valor={resp.ctps_fisica}
      onEscolher={(v) => { setResp((r) => ({ ...r, ctps_fisica: v as TemCTPSFisica })); setTimeout(avancar, 150); }} />;
  }
  if (step === 2) {
    return <CardPergunta titulo={perguntaRenda.titulo} opcoes={perguntaRenda.opcoes} valor={resp.renda}
      onEscolher={(v) => { setResp((r) => ({ ...r, renda: v as SituacaoRenda })); setTimeout(avancar, 150); }} />;
  }
  if (step === 3) {
    return <CardPergunta titulo={perguntaMoraAlguem.titulo} opcoes={perguntaMoraAlguem.opcoes} valor={resp.mora_alguem}
      onEscolher={(v) => {
        const novo = v as "sim" | "nao";
        setResp((r) => ({ ...r, mora_alguem: novo, qtd_maiores: novo === "nao" ? 0 : r.qtd_maiores, moradores: novo === "nao" ? [] : r.moradores }));
        setTimeout(avancar, 150);
      }} />;
  }
  if (resp.mora_alguem === "nao") {
    return <Resumo resp={resp} onFinalizar={finalizar} />;
  }
  if (step === 4) {
    return <CardPergunta titulo={perguntaQtdMaiores.titulo} opcoes={perguntaQtdMaiores.opcoes}
      valor={resp.qtd_maiores !== undefined ? (resp.qtd_maiores === 4 ? "4+" : String(resp.qtd_maiores)) : undefined}
      onEscolher={(v) => {
        const q = qtdMap[v] ?? 0;
        setResp((r) => ({ ...r, qtd_maiores: q as 0 | 1 | 2 | 3 | 4, moradores: [] }));
        setTimeout(avancar, 150);
      }} />;
  }
  const q = resp.qtd_maiores ?? 0;
  if (q === 0) return <Resumo resp={resp} onFinalizar={finalizar} />;

  const moradorIdx = step - 5;
  if (moradorIdx >= 0 && moradorIdx < q) {
    return (
      <MoradorForm
        key={moradorIdx}
        index={moradorIdx}
        total={q}
        onConcluido={(m) => {
          setResp((r) => {
            const arr = [...r.moradores];
            arr[moradorIdx] = m;
            return { ...r, moradores: arr };
          });
          setTimeout(avancar, 150);
        }}
      />
    );
  }

  return <Resumo resp={resp} onFinalizar={finalizar} />;
}

function CardPergunta({ titulo, opcoes, valor, onEscolher }: {
  titulo: string;
  opcoes: { valor: string; label: string }[];
  valor: string | undefined;
  onEscolher: (v: string) => void;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-gray-900">{titulo}</h2>
      <div className="space-y-2">
        {opcoes.map((o) => (
          <button
            key={o.valor}
            onClick={() => onEscolher(o.valor)}
            className={`block w-full text-left rounded-lg border-2 p-3 font-semibold text-sm ${
              valor === o.valor ? "border-blue-700 bg-blue-50 text-blue-900" : "border-gray-300 bg-white text-gray-900 hover:border-blue-400"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </section>
  );
}

const relacaoEmoji: Record<string, string> = {
  conjuge: "💕", filho: "👨‍👩‍👧", pai_mae: "👵", irmao: "👫", outro: "👤",
};

function Resumo({ resp, onFinalizar }: { resp: Resp; onFinalizar: () => void }) {
  const civilLabel = perguntaCivil.opcoes.find((o) => o.valor === resp.civil)?.label ?? "?";
  const ctpsLabel = perguntaCtps.opcoes.find((o) => o.valor === resp.ctps_fisica)?.label ?? "?";
  const rendaLabel = perguntaRenda.opcoes.find((o) => o.valor === resp.renda)?.label ?? "?";
  const podeFinalizar = !!resp.civil && !!resp.ctps_fisica && !!resp.renda &&
    (resp.mora_alguem === "nao" || resp.moradores.length === (resp.qtd_maiores ?? 0));
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-gray-900">Pronto! Confira:</h2>
      <ul className="rounded-lg border border-gray-300 bg-white p-3 space-y-1.5 text-sm">
        <li><b>Estado civil:</b> {civilLabel}</li>
        <li><b>Carteira de Trabalho física:</b> {ctpsLabel}</li>
        <li><b>Renda:</b> {rendaLabel}</li>
        <li><b>Pessoas +18 cadastradas:</b> {resp.moradores.length}</li>
        {resp.moradores.map((m, i) => (
          <li key={i} className="pl-3 text-xs text-gray-700">
            {relacaoEmoji[m.relacao]} <b>{m.nome}</b> — {m.relacao === "conjuge" ? "cônjuge" : m.relacao === "filho" ? "filho(a)" : m.relacao === "pai_mae" ? "pai/mãe" : m.relacao === "irmao" ? "irmão/irmã" : "parente"}
          </li>
        ))}
      </ul>
      <button onClick={onFinalizar} disabled={!podeFinalizar}
        className="w-full rounded-lg bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 text-white font-bold py-3">
        Ver meus documentos →
      </button>
    </section>
  );
}
