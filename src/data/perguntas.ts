import type { SituacaoCivil, SituacaoRenda, TemCTPSFisica, RelacaoMorador } from "./tipos";

export type OpcaoMC<T extends string> = { valor: T; label: string };

export const perguntaCivil = {
  id: "civil",
  titulo: "Qual é o seu estado civil?",
  opcoes: [
    { valor: "solteiro", label: "Solteiro(a)" },
    { valor: "casado", label: "Casado(a)" },
    { valor: "divorciado", label: "Divorciado(a)" },
    { valor: "viuvo", label: "Viúvo(a)" },
    { valor: "uniao_estavel", label: "União estável" },
  ] as OpcaoMC<SituacaoCivil>[],
};

export const perguntaCtps = {
  id: "ctps_fisica",
  titulo: "Você tem a Carteira de Trabalho de papel (a azulzinha)?",
  opcoes: [
    { valor: "sim", label: "Sim, eu tenho" },
    { valor: "nao", label: "Não, perdi ou nunca tive" },
  ] as OpcaoMC<TemCTPSFisica>[],
};

export const perguntaRenda = {
  id: "renda",
  titulo: "Como você ganha dinheiro hoje?",
  opcoes: [
    { valor: "empregado", label: "Trabalho de carteira assinada" },
    { valor: "autonomo", label: "Trabalho por conta própria (informal)" },
    { valor: "desempregado", label: "Estou desempregado(a)" },
    { valor: "aposentado", label: "Sou aposentado(a) ou pensionista" },
    { valor: "afastado_inss", label: "Estou afastado(a) pelo INSS" },
    { valor: "mei_empresario", label: "Sou MEI ou empresário(a)" },
  ] as OpcaoMC<SituacaoRenda>[],
};

export const perguntaMoraAlguem = {
  id: "mora_alguem",
  titulo: "Mora mais alguém com você (além de você)?",
  opcoes: [
    { valor: "sim", label: "Sim" },
    { valor: "nao", label: "Não, moro só" },
  ] as OpcaoMC<"sim" | "nao">[],
};

export const perguntaQtdMaiores = {
  id: "qtd_maiores",
  titulo: "Quantas dessas pessoas têm 18 anos ou mais?",
  opcoes: [
    { valor: "0", label: "Nenhuma (só crianças)" },
    { valor: "1", label: "1 pessoa" },
    { valor: "2", label: "2 pessoas" },
    { valor: "3", label: "3 pessoas" },
    { valor: "4+", label: "4 ou mais" },
  ] as OpcaoMC<"0" | "1" | "2" | "3" | "4+">[],
};

export const perguntaRelacao = {
  id: "relacao",
  titulo: "Qual a relação dessa pessoa com você?",
  opcoes: [
    { valor: "conjuge", label: "Esposo, esposa ou companheiro(a)" },
    { valor: "filho", label: "Filho ou filha" },
    { valor: "pai_mae", label: "Pai ou mãe" },
    { valor: "irmao", label: "Irmão ou irmã" },
    { valor: "outro", label: "Outro parente" },
  ] as OpcaoMC<RelacaoMorador>[],
};

export const perguntaRendaMorador = {
  id: "renda_morador",
  titulo: "Como essa pessoa ganha dinheiro?",
  opcoes: perguntaRenda.opcoes,
};

export const relacaoLabel: Record<RelacaoMorador, string> = {
  conjuge: "cônjuge",
  filho: "filho(a)",
  pai_mae: "pai/mãe",
  irmao: "irmão/irmã",
  outro: "parente",
};

export const rendaLabel: Record<SituacaoRenda, string> = {
  empregado: "carteira assinada",
  autonomo: "trabalha por conta própria",
  desempregado: "desempregado(a)",
  aposentado: "aposentado(a) ou pensionista",
  afastado_inss: "afastado(a) pelo INSS",
  mei_empresario: "MEI ou empresário(a)",
};
