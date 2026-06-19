import type { SituacaoCivil, SituacaoRenda } from "./tipos";

export type OpcaoMC<T extends string> = {
  valor: T;
  label: string;
};

export type Pergunta =
  | { id: "civil"; titulo: string; opcoes: OpcaoMC<SituacaoCivil>[] }
  | { id: "filhos18"; titulo: string; opcoes: OpcaoMC<"sim" | "nao">[] }
  | { id: "moradores"; titulo: string; opcoes: OpcaoMC<"1" | "2" | "3" | "4" | "5+">[] }
  | { id: "maiores"; titulo: string; opcoes: OpcaoMC<"1" | "2" | "3" | "4+">[] }
  | { id: "renda"; titulo: string; opcoes: OpcaoMC<SituacaoRenda>[] };

export const perguntas: Pergunta[] = [
  {
    id: "civil",
    titulo: "Qual é o seu estado civil?",
    opcoes: [
      { valor: "solteiro", label: "Solteiro(a)" },
      { valor: "casado", label: "Casado(a)" },
      { valor: "divorciado", label: "Divorciado(a)" },
      { valor: "viuvo", label: "Viúvo(a)" },
      { valor: "uniao_estavel", label: "União estável" },
    ],
  },
  {
    id: "filhos18",
    titulo: "Você tem filhos maiores de 18 anos morando com você?",
    opcoes: [
      { valor: "sim", label: "Sim" },
      { valor: "nao", label: "Não" },
    ],
  },
  {
    id: "moradores",
    titulo: "Quantas pessoas moram na sua casa? (contando você)",
    opcoes: [
      { valor: "1", label: "Só eu" },
      { valor: "2", label: "2 pessoas" },
      { valor: "3", label: "3 pessoas" },
      { valor: "4", label: "4 pessoas" },
      { valor: "5+", label: "5 ou mais" },
    ],
  },
  {
    id: "maiores",
    titulo: "Quantos dos moradores têm mais de 18 anos? (contando você)",
    opcoes: [
      { valor: "1", label: "Só eu" },
      { valor: "2", label: "2 pessoas" },
      { valor: "3", label: "3 pessoas" },
      { valor: "4+", label: "4 ou mais" },
    ],
  },
  {
    id: "renda",
    titulo: "Como você ganha dinheiro hoje?",
    opcoes: [
      { valor: "empregado", label: "Trabalho de carteira assinada" },
      { valor: "autonomo", label: "Trabalho por conta própria / informal" },
      { valor: "desempregado", label: "Estou desempregado(a)" },
      { valor: "aposentado", label: "Sou aposentado(a) ou pensionista" },
      { valor: "afastado_inss", label: "Estou afastado(a) pelo INSS" },
    ],
  },
];
