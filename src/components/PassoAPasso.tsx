"use client";
import { useState } from "react";
import type { Fluxo } from "@/data/tipos";
import { FormattedText } from "./FormattedText";

type Props = {
  fluxos: Record<string, Fluxo>;
  inicial: string;
};

export function PassoAPasso({ fluxos, inicial }: Props) {
  const [stack, setStack] = useState<string[]>([inicial]);
  const atualId = stack[stack.length - 1];

  if (atualId === "fim") {
    return (
      <section className="rounded-lg border-2 border-green-600 bg-green-50 p-4">
        <p className="font-bold text-green-900">✅ Pronto!</p>
        <p className="text-sm text-green-900 mt-1">
          Quando entregar o documento <b>impresso</b> na mão da Letícia, volte aqui e toque em <b>&quot;Marcar como feito&quot;</b>.
        </p>
        {stack.length > 1 && (
          <button
            onClick={() => setStack(stack.slice(0, -1))}
            className="mt-3 text-blue-700 underline text-sm"
          >
            ← Voltar
          </button>
        )}
      </section>
    );
  }

  const atual = fluxos[atualId];
  if (!atual) return null;

  return (
    <section className="space-y-3">
      {stack.length > 1 && (
        <button
          onClick={() => setStack(stack.slice(0, -1))}
          className="text-blue-700 underline text-sm"
        >
          ← Voltar uma etapa
        </button>
      )}

      {atual.titulo && <h3 className="text-base font-bold text-gray-900">{atual.titulo}</h3>}
      {atual.intro && <p className="text-sm text-gray-800"><FormattedText text={atual.intro} /></p>}

      {atual.passos && atual.passos.length > 0 && (
        <ol className="space-y-2">
          {atual.passos.map((p, i) => (
            <li key={i} className="flex items-start gap-3 rounded-lg border border-gray-300 bg-white p-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-blue-700 text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
              {p.emoji && <span className="text-2xl shrink-0 leading-none" aria-hidden>{p.emoji}</span>}
              <span className="text-sm text-gray-900 leading-relaxed"><FormattedText text={p.texto} /></span>
            </li>
          ))}
        </ol>
      )}

      {atual.videoYoutube && (
        <a
          href={atual.videoYoutube}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-sm"
        >
          ▶ Ver vídeo no YouTube — toque aqui →
        </a>
      )}

      {atual.ramificacao && (
        <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-3 space-y-2">
          <p className="font-bold text-blue-900 text-sm">{atual.ramificacao.pergunta}</p>
          {atual.ramificacao.opcoes.map((o, i) => (
            <button
              key={i}
              onClick={() => setStack([...stack, o.vaiPara])}
              className="block w-full text-left rounded-lg border-2 border-blue-300 bg-white px-3 py-2 text-sm font-semibold text-blue-900 hover:border-blue-700"
            >
              👉 {o.label}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
