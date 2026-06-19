export type StatusDoc = "ok" | "falta" | "errado" | "na";

export type SituacaoCivil = "solteiro" | "casado" | "divorciado" | "viuvo" | "uniao_estavel";
export type SituacaoRenda = "empregado" | "desempregado" | "autonomo" | "aposentado" | "afastado_inss";

export type PerfilHerdeiro = {
  situacaoCivil: SituacaoCivil;
  temFilhosMaiores: boolean;
  qtdMoradores: number;
  qtdMaiores: number;
  situacaoRenda: SituacaoRenda;
};

export type AppIcon = "govbr" | "googledrive" | "meuinss" | "ctps" | "whatsapp" | "youtube";

export type DocCatalogo = {
  id: string;
  nome: string;
  descricao: string;
  iconesApps?: AppIcon[];
  avisos: string[];
  comoConseguir: string[];
  videoYoutube?: string;
  modeloHref?: string;
  imagemExemplo?: string;
};

export type DocPersonalizado = {
  id: string;
  nomeOverride?: string;
  status: StatusDoc;
  observacao?: string;
};

export type Herdeiro = {
  slug: string;
  nome: string;
  parentesco: string;
  perfilDefault: PerfilHerdeiro;
  observacoesGerais?: string[];
  docsExtras?: DocPersonalizado[];
  statusConhecido?: Record<string, { status: StatusDoc; observacao?: string }>;
};
