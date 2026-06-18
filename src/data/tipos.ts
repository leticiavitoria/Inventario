export type StatusDoc = "ok" | "falta" | "errado" | "na";

export type Documento = {
  id: string;
  nome: string;
  descricao?: string;
  status: StatusDoc;
  observacao?: string;
  tutorialSlug?: string;
  modeloHref?: string;
};

export type SituacaoCivil = "solteiro" | "casado" | "divorciado" | "viuvo" | "uniao_estavel";
export type SituacaoRenda = "empregado" | "desempregado" | "autonomo" | "aposentado" | "pensionista" | "afastado_inss";

export type Morador = {
  nome: string;
  parentesco: string;
  situacaoRenda: SituacaoRenda;
};

export type Herdeiro = {
  slug: string;
  nome: string;
  parentesco: string;
  situacaoCivil: SituacaoCivil;
  situacaoRenda: SituacaoRenda;
  moradores: Morador[];
  documentos: Documento[];
  responsavelPorFalecido?: string;
  observacoesGerais?: string[];
};
