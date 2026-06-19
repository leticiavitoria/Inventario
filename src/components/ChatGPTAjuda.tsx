"use client";
import { useState } from "react";

export function ChatGPTAjuda({ contextoDoc }: { contextoDoc: string }) {
  const [texto, setTexto] = useState("");

  function abrir() {
    const t = texto.trim();
    if (!t) return;
    const pergunta = `Estou juntando documentos para um processo de inventário pela Defensoria Pública. Sobre o documento "${contextoDoc}": ${t}. Responda de forma simples, direta, em português, como se eu fosse uma pessoa idosa com pouca familiaridade com tecnologia.`;
    const url = `https://chatgpt.com/?q=${encodeURIComponent(pergunta)}`;
    window.open(url, "_blank", "noopener");
  }

  return (
    <section className="rounded-lg border border-purple-400 bg-purple-50 p-3">
      <h3 className="font-semibold text-purple-900 text-sm">Ainda tem dúvida sobre este documento?</h3>
      <p className="text-xs text-purple-800 mt-1">
        Escreva sua dúvida abaixo e clique no botão para perguntar ao ChatGPT (uma inteligência artificial que responde grátis).
      </p>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Ex: Não sei onde fica o cartório onde fui registrado, como descubro?"
        className="mt-2 w-full rounded border border-purple-300 p-2 text-sm min-h-[80px]"
      />
      <button
        type="button"
        onClick={abrir}
        disabled={!texto.trim()}
        className="mt-2 w-full rounded-lg bg-purple-700 hover:bg-purple-800 disabled:bg-gray-300 text-white px-4 py-2 font-semibold text-sm"
      >
        🤖 Perguntar ao ChatGPT (abre em nova aba) →
      </button>
    </section>
  );
}
