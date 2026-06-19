export type StatusDoc = "ok" | "falta" | "errado" | "na";

export type SituacaoCivil = "solteiro" | "casado" | "divorciado" | "viuvo" | "uniao_estavel";
export type SituacaoRenda = "empregado" | "desempregado" | "autonomo" | "aposentado" | "afastado_inss" | "mei_empresario";
export type TemCTPSFisica = "sim" | "nao";
export type RelacaoMorador = "conjuge" | "filho" | "pai_mae" | "irmao" | "outro";

export type Morador = {
  id: string;
  nome: string;
  relacao: RelacaoMorador;
  situacaoRenda: SituacaoRenda;
};

export type PerfilEstendido = {
  situacaoCivil: SituacaoCivil;
  temCtpsFisica: TemCTPSFisica;
  situacaoRenda: SituacaoRenda;
  moradoresMaiores: Morador[];
};

export type AppIcon = "govbr" | "googledrive" | "meuinss" | "ctps" | "whatsapp" | "youtube" | "papelaria";

export type DocCatalogo = {
  id: string;
  nome: string;
  descricao: string;
  iconesApps?: AppIcon[];
  avisos: string[];
  comoConseguir: string[];
  videoYoutube?: string;
  modeloHref?: string;
};

export type DocItemSecao = {
  id: string;
  catalogoId: string;
  nomeOverride?: string;
  status: StatusDoc;
  observacao?: string;
};

export type Secao = {
  id: string;
  titulo: string;
  subtitulo?: string;
  tipo: "herdeiro" | "morador" | "pai_falecido" | "ja_entregue";
  docs: DocItemSecao[];
};

export type Herdeiro = {
  slug: string;
  nome: string;
  parentesco: string;
  perfilDefault: PerfilEstendido;
  observacoesGerais?: string[];
  statusConhecido?: Record<string, { status: StatusDoc; observacao?: string }>;
  paiFalecido?: { nome: string; observacao?: string };
};
