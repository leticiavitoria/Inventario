"use client";
import { useState } from "react";
import Link from "next/link";

type Situacao = "empregado" | "desempregado" | "autonomo" | "aposentado" | "afastado";

const opcoes: { id: Situacao; label: string; descricao: string }[] = [
  { id: "empregado", label: "Empregado(a) com carteira assinada", descricao: "Você trabalha registrado(a), recebe contracheque todo mês." },
  { id: "desempregado", label: "Desempregado(a)", descricao: "Você não tem emprego no momento." },
  { id: "autonomo", label: "Autônomo(a) / informal", descricao: "Trabalha por conta própria, MEI, faxina, bicos, etc." },
  { id: "aposentado", label: "Aposentado(a) ou Pensionista", descricao: "Recebe aposentadoria ou pensão do INSS." },
  { id: "afastado", label: "Afastado(a) pelo INSS", descricao: "Está recebendo auxílio doença ou benefício por incapacidade." },
];

const docs: Record<Situacao, { titulo: string; itens: string[] }> = {
  empregado: {
    titulo: "Documentos que VOCÊ precisa enviar:",
    itens: [
      "Carteira de Trabalho FÍSICA — foto, dados, último contrato e a página seguinte",
      "Carteira de Trabalho DIGITAL — PDF com TODAS as páginas",
      "Contracheques dos últimos 3 meses",
      "Extratos bancários dos últimos 3 meses (de TODAS as contas)",
      "Declaração de Imposto de Renda do último ano (SE você declara)",
    ],
  },
  desempregado: {
    titulo: "Documentos que VOCÊ precisa enviar:",
    itens: [
      "Carteira de Trabalho FÍSICA — mostrando o desemprego (última baixa)",
      "Carteira de Trabalho DIGITAL — PDF com TODAS as páginas",
      "Declaração de ausência de renda formal (modelo da DPMG — peça pra Letícia)",
      "Extratos bancários dos últimos 3 meses (de TODAS as contas)",
      "Declaração de Imposto de Renda do último ano (SE declarou)",
    ],
  },
  autonomo: {
    titulo: "Documentos que VOCÊ precisa enviar:",
    itens: [
      "Carteira de Trabalho FÍSICA",
      "Carteira de Trabalho DIGITAL — PDF com TODAS as páginas",
      "Declaração de ausência de renda formal (modelo da DPMG — peça pra Letícia)",
      "Extratos bancários dos últimos 3 meses (TODAS as contas)",
      "Declaração de Imposto de Renda (SE declarou)",
    ],
  },
  aposentado: {
    titulo: "Documentos que VOCÊ precisa enviar:",
    itens: [
      "Extrato do benefício do INSS — com nome, número e valor atualizado (Meu INSS)",
      "Extratos bancários dos últimos 3 meses (TODAS as contas)",
      "Carteira de Trabalho (mesmo aposentado, pra mostrar o histórico)",
      "Declaração de Imposto de Renda (SE declara)",
    ],
  },
  afastado: {
    titulo: "Documentos que VOCÊ precisa enviar:",
    itens: [
      "Extrato de pagamento do benefício INSS (pelo app Meu INSS)",
      "3 ÚLTIMOS contracheques de ANTES do afastamento",
      "Carteira de Trabalho FÍSICA + DIGITAL (todas as páginas)",
      "Extratos bancários dos últimos 3 meses (TODAS as contas)",
    ],
  },
};

export default function QuizPage() {
  const [sit, setSit] = useState<Situacao | null>(null);

  return (
    <div className="space-y-5">
      <Link href="/" className="text-blue-700 underline">← Voltar</Link>
      <header>
        <h1 className="text-3xl font-extrabold text-blue-900">Quais documentos de renda preciso?</h1>
        <p className="text-lg text-gray-700 mt-2">
          Marque a sua situação atual. Esta pergunta vale pra você E para CADA pessoa maior de 18 anos que mora na sua casa (cada uma faz separado).
        </p>
      </header>

      <aside className="rounded-xl border-2 border-red-700 bg-red-50 p-4 text-red-900">
        <p className="font-bold">⚠️ Importante:</p>
        <p className="mt-1">TODOS precisam mandar extratos bancários dos últimos 3 meses, de TODAS as contas que têm.</p>
      </aside>

      <fieldset className="space-y-3">
        <legend className="text-lg font-bold mb-2">Qual é a sua situação?</legend>
        {opcoes.map((o) => (
          <button
            key={o.id}
            onClick={() => setSit(o.id)}
            className={`block w-full text-left rounded-xl border-2 p-4 ${sit === o.id ? "border-blue-700 bg-blue-50" : "border-gray-300 bg-white"} hover:border-blue-500`}
          >
            <p className="font-bold text-lg">{o.label}</p>
            <p className="text-sm text-gray-600 mt-1">{o.descricao}</p>
          </button>
        ))}
      </fieldset>

      {sit && (
        <section className="rounded-xl border-2 border-green-700 bg-green-50 p-5">
          <h2 className="text-xl font-extrabold text-green-900">{docs[sit].titulo}</h2>
          <ul className="mt-3 space-y-2">
            {docs[sit].itens.map((i, idx) => (
              <li key={idx} className="flex items-start gap-2 text-base">
                <span className="text-green-700 font-bold">✓</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-semibold text-gray-700">
            Lembrete: cada outro morador +18 anos da sua casa também precisa juntar a lista dele/dela.
          </p>
        </section>
      )}
    </div>
  );
}
