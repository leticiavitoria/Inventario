"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getHerdeiro } from "@/data/herdeiros";
import {
  perguntaCivil, perguntaCtps, perguntaRenda, perguntaMoraAlguem, perguntaQtdMaiores,
  perguntaRelacao, perguntaRendaMorador,
} from "@/data/perguntas";
import type { PerfilEstendido, SituacaoCivil, SituacaoRenda, TemCTPSFisica, RelacaoMorador, Morador } from "@/data/tipos";

type Resp = {
  civil?: SituacaoCivil;
  ctps_fisica?: TemCTPSFisica;
  renda?: SituacaoRenda;
  mora_alguem?: "sim" | "nao";
  qtd_maiores?: 0 | 1 | 2 | 3 | 4;
  moradores: Partial<Morador>[];
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

  const totalSteps = calcularTotalSteps(resp);
  const stepIndex = Math.min(step, totalSteps - 1);

  function avancar() { setStep((s) => s + 1); }
  function voltar() { if (step > 0) setStep((s) => s - 1); }

  function setMorador(idx: number, patch: Partial<Morador>) {
    setResp((r) => {
      const arr = [...r.moradores];
      arr[idx] = { ...arr[idx], ...patch };
      return { ...r, moradores: arr };
    });
  }

  function finalizar() {
    const perfil: PerfilEstendido = {
      situacaoCivil: resp.civil!,
      temCtpsFisica: resp.ctps_fisica!,
      situacaoRenda: resp.renda!,
      moradoresMaiores: resp.moradores.filter((m): m is Morador =>
        !!m.nome && !!m.relacao && !!m.situacaoRenda
      ).map((m, i) => ({ ...m, id: m.id ?? `m${i}` })),
    };
    localStorage.setItem(`perfilObj_${slug}`, JSON.stringify(perfil));
    router.push(`/herdeiro/${slug}/lista`);
  }

  const conteudo = renderStep({
    step: stepIndex, resp, setResp, setMorador, avancar, finalizar, herdeiro: h,
  });

  return (
    <div className="space-y-4">
      <Link href="/" className="text-blue-700 underline text-sm">← Voltar</Link>
      <div className="bg-white rounded-lg border border-gray-300 p-3 text-center">
        <p className="text-sm text-gray-600">Olá,</p>
        <p className="text-lg font-bold text-blue-900">{h.nome.split(" ")[0]}</p>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="bg-blue-600 h-full transition-all" style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }} />
        </div>
        <p className="text-xs text-gray-600 mt-1">Pergunta {stepIndex + 1} de {totalSteps}</p>
      </div>
      {conteudo}
      {step > 0 && (
        <button onClick={voltar} className="text-blue-700 underline text-sm">← Pergunta anterior</button>
      )}
    </div>
  );
}

function calcularTotalSteps(resp: Resp): number {
  // 1=civil, 2=ctps_fisica, 3=renda, 4=mora_alguem
  let n = 4;
  if (resp.mora_alguem === "sim") {
    n += 1; // qtd_maiores
    const q = resp.qtd_maiores ?? 0;
    n += q * 3; // pra cada morador: relação, renda, nome
  }
  n += 1; // resumo final
  return n;
}

type RenderArgs = {
  step: number;
  resp: Resp;
  setResp: React.Dispatch<React.SetStateAction<Resp>>;
  setMorador: (idx: number, patch: Partial<Morador>) => void;
  avancar: () => void;
  finalizar: () => void;
  herdeiro: ReturnType<typeof getHerdeiro>;
};

function renderStep({ step, resp, setResp, setMorador, avancar, finalizar }: RenderArgs) {
  // 0: civil
  if (step === 0) {
    return <CardPergunta titulo={perguntaCivil.titulo} opcoes={perguntaCivil.opcoes} valor={resp.civil}
      onEscolher={(v) => { setResp((r) => ({ ...r, civil: v as SituacaoCivil })); setTimeout(avancar, 150); }} />;
  }
  // 1: ctps_fisica
  if (step === 1) {
    return <CardPergunta titulo={perguntaCtps.titulo} opcoes={perguntaCtps.opcoes} valor={resp.ctps_fisica}
      onEscolher={(v) => { setResp((r) => ({ ...r, ctps_fisica: v as TemCTPSFisica })); setTimeout(avancar, 150); }} />;
  }
  // 2: renda
  if (step === 2) {
    return <CardPergunta titulo={perguntaRenda.titulo} opcoes={perguntaRenda.opcoes} valor={resp.renda}
      onEscolher={(v) => { setResp((r) => ({ ...r, renda: v as SituacaoRenda })); setTimeout(avancar, 150); }} />;
  }
  // 3: mora_alguem
  if (step === 3) {
    return <CardPergunta titulo={perguntaMoraAlguem.titulo} opcoes={perguntaMoraAlguem.opcoes} valor={resp.mora_alguem}
      onEscolher={(v) => {
        const novoV = v as "sim" | "nao";
        setResp((r) => ({ ...r, mora_alguem: novoV, qtd_maiores: novoV === "nao" ? 0 : r.qtd_maiores, moradores: novoV === "nao" ? [] : r.moradores }));
        setTimeout(avancar, 150);
      }} />;
  }
  // Se mora_alguem === "nao", o próximo step é o resumo
  if (resp.mora_alguem === "nao") {
    return <Resumo resp={resp} onFinalizar={finalizar} />;
  }
  // 4: qtd_maiores
  if (step === 4) {
    return <CardPergunta titulo={perguntaQtdMaiores.titulo} opcoes={perguntaQtdMaiores.opcoes} valor={resp.qtd_maiores !== undefined ? (resp.qtd_maiores === 4 ? "4+" : String(resp.qtd_maiores)) : undefined}
      onEscolher={(v) => {
        const q = qtdMap[v] ?? 0;
        const arr: Partial<Morador>[] = Array.from({ length: q }, (_, i) => resp.moradores[i] ?? { id: `m${i + 1}` });
        setResp((r) => ({ ...r, qtd_maiores: q as 0 | 1 | 2 | 3 | 4, moradores: arr }));
        setTimeout(avancar, 150);
      }} />;
  }
  // Steps por morador
  const q = resp.qtd_maiores ?? 0;
  if (q === 0) {
    return <Resumo resp={resp} onFinalizar={finalizar} />;
  }
  const baseMorador = 5;
  if (step >= baseMorador && step < baseMorador + q * 3) {
    const offset = step - baseMorador;
    const moradorIdx = Math.floor(offset / 3);
    const subStep = offset % 3;
    const m = resp.moradores[moradorIdx] ?? {};
    const tituloPrefix = `Morador #${moradorIdx + 1}`;

    if (subStep === 0) {
      return <CardPergunta titulo={`${tituloPrefix}: ${perguntaRelacao.titulo}`} opcoes={perguntaRelacao.opcoes} valor={m.relacao}
        onEscolher={(v) => { setMorador(moradorIdx, { relacao: v as RelacaoMorador }); setTimeout(avancar, 150); }} />;
    }
    if (subStep === 1) {
      return <CardPergunta titulo={`${tituloPrefix}: ${perguntaRendaMorador.titulo}`} opcoes={perguntaRendaMorador.opcoes} valor={m.situacaoRenda}
        onEscolher={(v) => { setMorador(moradorIdx, { situacaoRenda: v as SituacaoRenda }); setTimeout(avancar, 150); }} />;
    }
    // subStep === 2: nome (única exceção: campo de texto)
    return (
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">{tituloPrefix}: Qual o nome dessa pessoa?</h2>
        <p className="text-sm text-gray-600">Pode ser só o primeiro nome ou o apelido.</p>
        <input
          type="text"
          autoFocus
          value={m.nome ?? ""}
          onChange={(e) => setMorador(moradorIdx, { nome: e.target.value })}
          placeholder="Ex: Maria, João, mãe…"
          className="w-full rounded-lg border-2 border-gray-300 p-3 text-base"
        />
        <button
          onClick={avancar}
          disabled={!(m.nome ?? "").trim()}
          className="w-full rounded-lg bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 text-white font-bold py-3"
        >
          Continuar →
        </button>
      </section>
    );
  }
  // Resumo final
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

function Resumo({ resp, onFinalizar }: { resp: Resp; onFinalizar: () => void }) {
  const civilLabel = perguntaCivil.opcoes.find((o) => o.valor === resp.civil)?.label ?? "?";
  const ctpsLabel = perguntaCtps.opcoes.find((o) => o.valor === resp.ctps_fisica)?.label ?? "?";
  const rendaLabel = perguntaRenda.opcoes.find((o) => o.valor === resp.renda)?.label ?? "?";
  const podeFinalizar = !!resp.civil && !!resp.ctps_fisica && !!resp.renda;
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-gray-900">Pronto! Confira:</h2>
      <ul className="rounded-lg border border-gray-300 bg-white p-3 space-y-1.5 text-sm">
        <li><b>Estado civil:</b> {civilLabel}</li>
        <li><b>Carteira de Trabalho física:</b> {ctpsLabel}</li>
        <li><b>Renda:</b> {rendaLabel}</li>
        <li><b>Moradores +18 cadastrados:</b> {resp.moradores.length}</li>
        {resp.moradores.map((m, i) => (
          <li key={i} className="pl-3 text-xs text-gray-700">
            → {m.nome ?? "?"} ({m.relacao ?? "?"})
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
