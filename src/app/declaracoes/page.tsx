import Link from "next/link";

const modelos = [
  {
    nome: "Declaração de Hipossuficiência",
    descricao: "TODOS os herdeiros precisam preencher (declara que não tem condições de pagar advogado particular).",
    href: "/modelos/declaracao-hipossuficiencia.pdf",
    quem: "Todos",
    exemplo: [
      "Nome completo: escreva o seu nome igual está no RG",
      "CPF: número do CPF com pontos e traço",
      "RG: número do RG",
      "Endereço: rua, número, bairro, cidade-UF, CEP (igual ao comprovante)",
      "Estado civil: solteiro / casado / divorciado / viúvo",
      "Profissão: o que você faz, mesmo que esteja desempregado escreva a última profissão",
      "Renda mensal: quanto você ganha por mês (se desempregado, escreva 'sem renda')",
      "Data e ASSINATURA igual ao RG",
    ],
  },
  {
    nome: "Termo de Consentimento",
    descricao: "TODOS preenchem. Autoriza a Defensoria a usar seus dados no processo.",
    href: "/modelos/termo-consentimento.pdf",
    quem: "Todos",
    exemplo: [
      "Nome completo: igual ao RG",
      "CPF, RG e endereço completo",
      "Marque as opções de consentimento (geralmente todas)",
      "Data e ASSINATURA",
    ],
  },
  {
    nome: "Questionário Socioeconômico",
    descricao: "TODOS preenchem. Perguntas sobre renda da família, moradia, gastos.",
    href: "/modelos/questionario-socioeconomico.pdf",
    quem: "Todos",
    exemplo: [
      "Responda TODAS as perguntas, mesmo as que você acha óbvias",
      "Quantas pessoas moram com você (incluindo você)",
      "Renda de cada morador maior de 18 anos",
      "Quanto gasta com aluguel, luz, água, comida, remédios",
      "Se tem alguma doença ou pessoa com deficiência na casa",
      "Data e ASSINATURA no final",
    ],
  },
  {
    nome: "Declaração de Uxória",
    descricao: "SÓ quem é CASADO preenche. É a autorização do cônjuge para o inventário.",
    href: "/modelos/declaracao-uxoria.pdf",
    quem: "Só casados (Marcio, Lamarkiane)",
    exemplo: [
      "Nome do(a) cônjuge (esposo/esposa)",
      "CPF e RG do cônjuge",
      "Data do casamento (consultar a certidão de casamento)",
      "Regime de bens: comunhão parcial / total / separação (geralmente é comunhão parcial)",
      "Data e ASSINATURA do cônjuge (não é a sua, é a do seu marido/esposa)",
    ],
  },
];

export default function DeclaracoesPage() {
  return (
    <div className="space-y-6">
      <Link href="/" className="text-blue-700 underline">← Voltar</Link>
      <header>
        <h1 className="text-3xl font-extrabold text-blue-900">Declarações para baixar e preencher</h1>
        <p className="text-lg text-gray-700 mt-2">
          Essas declarações precisam ser <b>IMPRESSAS</b>, preenchidas <b>à mão com caneta azul ou preta</b>, e <b>ASSINADAS</b>. Depois você escaneia (não foto!) e manda pra Letícia.
        </p>
      </header>

      <aside className="rounded-xl border-2 border-red-700 bg-red-50 p-4 text-red-900">
        <p className="font-bold">⚠️ Antes de preencher:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Imprima a folha (em papelaria custa uns R$ 0,50)</li>
          <li>Use caneta AZUL ou PRETA, letra legível, sem rasura</li>
          <li>NÃO esqueça de ASSINAR — sem assinatura, não vale!</li>
          <li>Depois escaneie (vire PDF) — foto de papel impresso NÃO vale</li>
        </ul>
      </aside>

      <div className="space-y-5">
        {modelos.map((m) => (
          <article key={m.nome} className="rounded-xl border-2 border-gray-300 bg-white p-4">
            <h2 className="text-xl font-bold text-blue-900">{m.nome}</h2>
            <p className="text-sm font-semibold text-gray-600 mt-1">Quem preenche: {m.quem}</p>
            <p className="mt-2 text-base">{m.descricao}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={m.href}
                target="_blank"
                rel="noopener"
                className="rounded-lg bg-green-700 text-white px-4 py-2 font-bold hover:bg-green-800"
              >
                ⬇️ Baixar PDF para imprimir
              </a>
            </div>

            <details className="mt-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-3">
              <summary className="cursor-pointer font-bold text-blue-900">📝 Ver exemplo de como preencher</summary>
              <ul className="mt-3 list-disc pl-6 space-y-1 text-base text-gray-800">
                {m.exemplo.map((e, i) => <li key={i}>{e}</li>)}
              </ul>
            </details>
          </article>
        ))}
      </div>

      <aside className="rounded-xl border-2 border-blue-700 bg-blue-50 p-4">
        <p className="font-bold text-blue-900">Não tem Carteira de Trabalho física?</p>
        <p className="mt-2">Você precisa preencher uma declaração explicando isso. <b>Peça o modelo pra Letícia</b> pelo WhatsApp.</p>
      </aside>
    </div>
  );
}
