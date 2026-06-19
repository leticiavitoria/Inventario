"use client";
import { useState } from "react";
import type { Morador, RelacaoMorador, SituacaoRenda } from "@/data/tipos";
import { perguntaRelacao, perguntaRendaMorador } from "@/data/perguntas";

const config: Record<RelacaoMorador, { emoji: string; bg: string; border: string; label: string }> = {
  conjuge: { emoji: "💕", bg: "bg-pink-50", border: "border-pink-500", label: "Cônjuge" },
  filho: { emoji: "👨‍👩‍👧", bg: "bg-blue-50", border: "border-blue-500", label: "Filho(a)" },
  pai_mae: { emoji: "👵", bg: "bg-amber-50", border: "border-amber-500", label: "Pai/Mãe" },
  irmao: { emoji: "👫", bg: "bg-green-50", border: "border-green-500", label: "Irmão/Irmã" },
  outro: { emoji: "👤", bg: "bg-purple-50", border: "border-purple-500", label: "Outro parente" },
};

type Props = {
  index: number;
  total: number;
  onConcluido: (m: Morador) => void;
};

export function MoradorForm({ index, total, onConcluido }: Props) {
  const [relacao, setRelacao] = useState<RelacaoMorador | undefined>();
  const [nome, setNome] = useState("");
  const [nomeOk, setNomeOk] = useState(false);
  const [renda, setRenda] = useState<SituacaoRenda | undefined>();

  const c = relacao ? config[relacao] : { emoji: "👤", bg: "bg-white", border: "border-gray-300", label: "" };

  function concluir() {
    if (!relacao || !nome.trim() || !renda) return;
    onConcluido({ id: `m${index + 1}`, nome: nome.trim(), relacao, situacaoRenda: renda });
  }

  return (
    <section className={`rounded-xl border-2 ${c.border} ${c.bg} p-4 space-y-4`}>
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">Pessoa {index + 1} de {total}</p>
        <p className="text-4xl mt-1" aria-hidden>{c.emoji}</p>
        {nome.trim() && (
          <p className="text-lg font-bold text-gray-900 mt-1">{nome} {relacao && <span className="text-sm text-gray-700 font-normal">({c.label.toLowerCase()})</span>}</p>
        )}
      </header>

      {/* Etapa 1: relação */}
      {!relacao && (
        <div className="space-y-2">
          <h3 className="font-bold text-gray-900 text-sm">{perguntaRelacao.titulo}</h3>
          {perguntaRelacao.opcoes.map((o) => {
            const cc = config[o.valor];
            return (
              <button
                key={o.valor}
                onClick={() => setRelacao(o.valor)}
                className="block w-full text-left rounded-lg border-2 border-gray-300 bg-white p-3 font-semibold text-sm hover:border-blue-500"
              >
                <span className="text-xl mr-2" aria-hidden>{cc.emoji}</span>
                {o.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Etapa 2: nome */}
      {relacao && !nomeOk && (
        <div className="space-y-2">
          <h3 className="font-bold text-gray-900 text-sm">Qual o nome dessa pessoa?</h3>
          <p className="text-xs text-gray-700">Pode ser só o primeiro nome ou o apelido.</p>
          <input
            type="text"
            autoFocus
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Maria, João, mãe…"
            className="w-full rounded-lg border-2 border-gray-300 p-3 text-base"
          />
          <button
            onClick={() => setNomeOk(true)}
            disabled={!nome.trim()}
            className="w-full rounded-lg bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 text-white font-bold py-2 text-sm"
          >
            Continuar →
          </button>
        </div>
      )}

      {/* Etapa 3: renda */}
      {relacao && nomeOk && !renda && (
        <div className="space-y-2">
          <h3 className="font-bold text-gray-900 text-sm">Como {nome} ganha dinheiro?</h3>
          {perguntaRendaMorador.opcoes.map((o) => (
            <button
              key={o.valor}
              onClick={() => setRenda(o.valor)}
              className="block w-full text-left rounded-lg border-2 border-gray-300 bg-white p-3 font-semibold text-sm hover:border-blue-500"
            >
              {o.label}
            </button>
          ))}
        </div>
      )}

      {/* Etapa 4: confirmar */}
      {relacao && nomeOk && renda && (
        <div className="space-y-3">
          <div className="rounded-lg border border-gray-300 bg-white p-3 text-sm">
            <p><b>Nome:</b> {nome}</p>
            <p><b>Relação:</b> {c.label}</p>
            <p><b>Renda:</b> {perguntaRendaMorador.opcoes.find((o) => o.valor === renda)?.label}</p>
          </div>
          <button
            onClick={concluir}
            className="w-full rounded-lg bg-green-700 hover:bg-green-800 text-white font-bold py-3"
          >
            {index + 1 < total ? "Próxima pessoa →" : "Concluir →"}
          </button>
          <button
            onClick={() => { setRelacao(undefined); setNome(""); setNomeOk(false); setRenda(undefined); }}
            className="block w-full text-blue-700 underline text-sm"
          >
            ← Refazer essa pessoa
          </button>
        </div>
      )}
    </section>
  );
}
