import type { Herdeiro, PerfilEstendido, StatusDoc, Secao, SituacaoRenda, DocItemSecao, Morador } from "./tipos";
import { catalogoDocs } from "./documentos";

export const herdeiros: Herdeiro[] = [
  {
    slug: "marcio",
    nome: "Márcio Martins",
    parentesco: "Filho",
    perfilDefault: {
      situacaoCivil: "casado",
      temCtpsFisica: "sim",
      situacaoRenda: "aposentado",
      moradoresMaiores: [
        { id: "m1", nome: "Esposa", relacao: "conjuge", situacaoRenda: "empregado" },
        { id: "m2", nome: "Filha 1", relacao: "filho", situacaoRenda: "empregado" },
        { id: "m3", nome: "Filha 2", relacao: "filho", situacaoRenda: "empregado" },
      ],
    },
    observacoesGerais: [
      "Como você é casado, sua esposa precisa assinar a Declaração de Uxória.",
    ],
    statusConhecido: {
      rg_cpf: { status: "falta" },
      certidao_casamento: { status: "falta" },
      comprovante_residencia: { status: "falta" },
      ctps_fisica: { status: "falta" },
      ctps_digital: { status: "falta" },
      contracheques: { status: "falta" },
      extratos_bancarios: { status: "falta" },
      extrato_inss: { status: "falta" },
      declaracao_uxoria: { status: "falta" },
      declaracao_hipossuficiencia: { status: "falta" },
      questionario_socioeconomico: { status: "falta" },
      termo_consentimento: { status: "falta" },
    },
  },
  {
    slug: "moacir",
    nome: "Moacir Martins",
    parentesco: "Filho",
    perfilDefault: {
      situacaoCivil: "solteiro",
      temCtpsFisica: "sim",
      situacaoRenda: "empregado",
      moradoresMaiores: [],
    },
    observacoesGerais: ["Seus documentos estão todos em ordem."],
    statusConhecido: {
      rg_cpf: { status: "ok" },
      certidao_nascimento: { status: "ok" },
      comprovante_residencia: { status: "ok" },
      ctps_fisica: { status: "ok" },
      ctps_digital: { status: "ok" },
      contracheques: { status: "ok" },
      extratos_bancarios: { status: "ok" },
      declaracao_hipossuficiencia: { status: "ok" },
      questionario_socioeconomico: { status: "ok" },
      termo_consentimento: { status: "ok" },
    },
  },
  {
    slug: "antonio",
    nome: "Antônio Marcílio Martins",
    parentesco: "Filho",
    perfilDefault: {
      situacaoCivil: "solteiro",
      temCtpsFisica: "sim",
      situacaoRenda: "afastado_inss",
      moradoresMaiores: [],
    },
    observacoesGerais: [
      "Você está afastado pelo INSS. Precisa do extrato do benefício e dos 3 contracheques anteriores ao afastamento.",
    ],
    statusConhecido: {
      rg_cpf: { status: "falta" },
      certidao_nascimento: { status: "falta" },
      comprovante_residencia: { status: "falta" },
      ctps_fisica: { status: "falta" },
      ctps_digital: { status: "falta" },
      extrato_inss: { status: "falta" },
      contracheques_antes_inss: { status: "falta" },
      extratos_bancarios: { status: "falta" },
      declaracao_hipossuficiencia: { status: "falta" },
      questionario_socioeconomico: { status: "falta" },
      termo_consentimento: { status: "falta" },
    },
  },
  {
    slug: "milene",
    nome: "Milene Martins",
    parentesco: "Neta (filha do Marcos)",
    perfilDefault: {
      situacaoCivil: "solteiro",
      temCtpsFisica: "sim",
      situacaoRenda: "empregado",
      moradoresMaiores: [
        { id: "m1", nome: "Patrícia (mãe)", relacao: "pai_mae", situacaoRenda: "empregado" },
      ],
    },
    paiFalecido: { nome: "Marcos Martins" },
    observacoesGerais: [
      "Peça à sua mãe (Patrícia) a certidão de casamento dela com o Marcos no NOVO PADRÃO, com a averbação do divórcio. É essa certidão que entra no processo no lugar da certidão de nascimento do seu pai.",
    ],
    statusConhecido: {
      rg_cpf: { status: "falta" },
      certidao_nascimento: { status: "falta" },
      comprovante_residencia: { status: "falta" },
      ctps_fisica: { status: "falta" },
      ctps_digital: { status: "falta" },
      contracheques: { status: "falta" },
      extratos_bancarios: { status: "falta" },
      declaracao_hipossuficiencia: { status: "falta" },
      questionario_socioeconomico: { status: "falta" },
      termo_consentimento: { status: "falta" },
      certidao_obito_pai: { status: "ok" },
      cpf_pai: { status: "ok" },
      certidao_casamento_patricia: { status: "falta", observacao: "Solicitar à Patrícia." },
    },
  },
  {
    slug: "lamarkiane",
    nome: "Lamarkiane Martins",
    parentesco: "Neta (filha do Marcos)",
    perfilDefault: {
      situacaoCivil: "casado",
      temCtpsFisica: "sim",
      situacaoRenda: "empregado",
      moradoresMaiores: [
        { id: "m1", nome: "Marido", relacao: "conjuge", situacaoRenda: "empregado" },
        { id: "m2", nome: "Filho(a) +18", relacao: "filho", situacaoRenda: "empregado" },
      ],
    },
    paiFalecido: { nome: "Marcos Martins" },
    observacoesGerais: [
      "Peça também à Patrícia a certidão de casamento dela com o Marcos no NOVO PADRÃO (com averbação do divórcio). A Milene já está pedindo, mas como a entrega está corrida, peça você também — quem chegar primeiro com a certidão resolve.",
    ],
    statusConhecido: {
      rg_cpf: { status: "ok" },
      certidao_casamento: { status: "errado", observacao: "Tem que estar no novo padrão." },
      comprovante_residencia: { status: "ok" },
      ctps_fisica: { status: "falta" },
      ctps_digital: { status: "falta" },
      contracheques: { status: "falta" },
      extratos_bancarios: { status: "falta" },
      declaracao_uxoria: { status: "falta" },
      declaracao_hipossuficiencia: { status: "ok" },
      questionario_socioeconomico: { status: "ok" },
      termo_consentimento: { status: "ok" },
      certidao_obito_pai: { status: "ok" },
      cpf_pai: { status: "ok" },
      certidao_casamento_patricia: { status: "falta", observacao: "Solicitar à Patrícia." },
    },
  },
  {
    slug: "kelriane",
    nome: "Kelriane Martins",
    parentesco: "Neta (filha do Marcos)",
    perfilDefault: {
      situacaoCivil: "solteiro",
      temCtpsFisica: "sim",
      situacaoRenda: "empregado",
      moradoresMaiores: [
        { id: "m1", nome: "Mãe", relacao: "pai_mae", situacaoRenda: "empregado" },
        { id: "m2", nome: "Jane Kelly", relacao: "irmao", situacaoRenda: "empregado" },
      ],
    },
    paiFalecido: { nome: "Marcos Martins" },
    observacoesGerais: [
      "Peça também à Patrícia a certidão de casamento dela com o Marcos no NOVO PADRÃO (com averbação do divórcio). Quem chegar primeiro com a certidão resolve.",
      "Você e a Jane Kelly fazem cadastros separados, mesmo morando juntas.",
    ],
    statusConhecido: {
      rg_cpf: { status: "ok" },
      certidao_nascimento: { status: "errado", observacao: "Tem que estar no novo padrão." },
      comprovante_residencia: { status: "errado", observacao: "Precisa estar no seu nome e ser deste mês." },
      ctps_fisica: { status: "falta" },
      ctps_digital: { status: "errado", observacao: "Faltam páginas. Tem que ter todas." },
      contracheques: { status: "errado", observacao: "Precisa ser dos 3 últimos meses." },
      extratos_bancarios: { status: "falta" },
      declaracao_hipossuficiencia: { status: "ok" },
      questionario_socioeconomico: { status: "falta" },
      termo_consentimento: { status: "ok" },
      certidao_obito_pai: { status: "ok" },
      cpf_pai: { status: "ok" },
      certidao_casamento_patricia: { status: "falta", observacao: "Solicitar à Patrícia." },
    },
  },
  {
    slug: "jane-kelly",
    nome: "Jane Kelly Martins",
    parentesco: "Neta (filha do Marcos)",
    perfilDefault: {
      situacaoCivil: "solteiro",
      temCtpsFisica: "sim",
      situacaoRenda: "empregado",
      moradoresMaiores: [
        { id: "m1", nome: "Mãe", relacao: "pai_mae", situacaoRenda: "empregado" },
        { id: "m2", nome: "Kelriane", relacao: "irmao", situacaoRenda: "empregado" },
      ],
    },
    paiFalecido: { nome: "Marcos Martins" },
    observacoesGerais: [
      "Peça também à Patrícia a certidão de casamento dela com o Marcos no NOVO PADRÃO (com averbação do divórcio). Quem chegar primeiro com a certidão resolve.",
      "Você e a Kelriane fazem cadastros separados, mesmo morando juntas.",
    ],
    statusConhecido: {
      rg_cpf: { status: "ok" },
      certidao_nascimento: { status: "errado", observacao: "Tem que estar no novo padrão." },
      comprovante_residencia: { status: "errado", observacao: "Precisa estar no seu nome e ser deste mês." },
      ctps_fisica: { status: "falta" },
      ctps_digital: { status: "errado", observacao: "Faltam páginas. Tem que ter todas." },
      contracheques: { status: "errado", observacao: "Precisa ser dos 3 últimos meses." },
      extratos_bancarios: { status: "falta" },
      declaracao_hipossuficiencia: { status: "ok" },
      questionario_socioeconomico: { status: "falta" },
      termo_consentimento: { status: "ok" },
      certidao_obito_pai: { status: "ok" },
      cpf_pai: { status: "ok" },
      certidao_casamento_patricia: { status: "falta", observacao: "Solicitar à Patrícia." },
    },
  },
  {
    slug: "leticia",
    nome: "Letícia Martins",
    parentesco: "Neta (filha do Anísio)",
    perfilDefault: {
      situacaoCivil: "solteiro",
      temCtpsFisica: "nao",
      situacaoRenda: "empregado",
      moradoresMaiores: [
        { id: "m1", nome: "Mãe", relacao: "pai_mae", situacaoRenda: "empregado" },
      ],
    },
    paiFalecido: { nome: "Anísio Martins" },
    observacoesGerais: ["Seus documentos estão todos em ordem."],
    statusConhecido: {
      rg_cpf: { status: "ok" },
      certidao_nascimento: { status: "ok" },
      comprovante_residencia: { status: "ok" },
      ctps_digital: { status: "ok" },
      extratos_bancarios: { status: "ok" },
      questionario_socioeconomico: { status: "ok" },
      termo_consentimento: { status: "ok" },
      certidao_obito_pai: { status: "ok" },
      cpf_pai: { status: "ok" },
      certidao_nascimento_casamento_pai: { status: "ok" },
    },
  },
];

export function getHerdeiro(slug: string) {
  return herdeiros.find((h) => h.slug === slug);
}

function docsDeRenda(renda: SituacaoRenda, ctpsFisica: boolean): string[] {
  const ids: string[] = [];
  if (ctpsFisica) ids.push("ctps_fisica");
  else ids.push("declaracao_inexistencia_ctps");
  ids.push("ctps_digital");
  if (renda === "empregado") {
    ids.push("contracheques", "extratos_bancarios");
  } else if (renda === "autonomo") {
    ids.push("imposto_renda", "declaracao_ausencia_renda", "extratos_bancarios");
  } else if (renda === "desempregado") {
    ids.push("declaracao_ausencia_renda", "extratos_bancarios");
  } else if (renda === "aposentado") {
    ids.push("extrato_inss", "extratos_bancarios");
  } else if (renda === "afastado_inss") {
    ids.push("extrato_inss", "contracheques_antes_inss", "extratos_bancarios");
  } else if (renda === "mei_empresario") {
    ids.push("extratos_bancarios");
  }
  return ids;
}

// Moradores seguem a MESMA regra do herdeiro por situação trabalhista.
// Diferenças: assumimos que o morador tem CTPS física (sem perguntar) e
// não duplicamos extratos bancários gerais.
function docsDeRendaParaMorador(renda: SituacaoRenda): string[] {
  const ids: string[] = ["ctps_fisica", "ctps_digital"];
  if (renda === "empregado") {
    ids.push("contracheques");
  } else if (renda === "autonomo") {
    ids.push("imposto_renda", "declaracao_ausencia_renda");
  } else if (renda === "desempregado") {
    // só CTPS (mostra o desemprego pela ausência de novo contrato)
  } else if (renda === "aposentado") {
    ids.push("extrato_inss");
  } else if (renda === "afastado_inss") {
    ids.push("extrato_inss", "contracheques_antes_inss");
  } else if (renda === "mei_empresario") {
    ids.push("m_mei_empresario");
  }
  return ids;
}

function buildDoc(catalogoId: string, uniqueId: string, status: StatusDoc, observacao?: string): DocItemSecao {
  return { id: uniqueId, catalogoId, status, observacao };
}

export function gerarSecoes(h: Herdeiro, perfil: PerfilEstendido): Secao[] {
  const secoes: Secao[] = [];
  const status = h.statusConhecido ?? {};
  const known = (id: string): { status: StatusDoc; observacao?: string } | undefined => status[id];

  // === SEÇÃO 1: documentos do herdeiro ===
  const docsHerdeiro: DocItemSecao[] = [];
  const idsHerdeiro: string[] = ["rg_cpf"];
  if (perfil.situacaoCivil === "solteiro") idsHerdeiro.push("certidao_nascimento");
  else idsHerdeiro.push("certidao_casamento");
  idsHerdeiro.push("comprovante_residencia");
  for (const id of docsDeRenda(perfil.situacaoRenda, perfil.temCtpsFisica === "sim")) idsHerdeiro.push(id);
  if (perfil.situacaoCivil === "casado" || perfil.situacaoCivil === "uniao_estavel") idsHerdeiro.push("declaracao_uxoria");
  idsHerdeiro.push("declaracao_hipossuficiencia", "questionario_socioeconomico", "termo_consentimento");

  const idsHerdeiroAFazer = idsHerdeiro.filter((id) => known(id)?.status !== "ok");
  for (const id of idsHerdeiroAFazer) {
    const k = known(id);
    docsHerdeiro.push(buildDoc(id, id, k?.status ?? "falta", k?.observacao));
  }
  if (docsHerdeiro.length > 0) {
    secoes.push({ id: "herdeiro", titulo: "Meus documentos", tipo: "herdeiro", docs: docsHerdeiro });
  }

  // === SEÇÃO 2+: moradores +18 ===
  for (const m of perfil.moradoresMaiores) {
    const idsMorador = docsDeRendaParaMorador(m.situacaoRenda);
    const docsM: DocItemSecao[] = idsMorador.map((cid) =>
      buildDoc(cid, `${m.id}__${cid}`, "falta")
    );
    secoes.push({
      id: `morador-${m.id}`,
      titulo: `Documentos de ${m.nome}`,
      subtitulo: `${m.relacao === "conjuge" ? "Cônjuge" : m.relacao === "filho" ? "Filho(a)" : m.relacao === "pai_mae" ? "Pai/Mãe" : m.relacao === "irmao" ? "Irmão/Irmã" : "Outro parente"}`,
      tipo: "morador",
      docs: docsM,
    });
  }

  // === SEÇÃO PAI FALECIDO ===
  if (h.paiFalecido) {
    const idsPai = ["certidao_obito_pai", "cpf_pai", "certidao_nascimento_casamento_pai", "certidao_casamento_patricia"];
    const docsPaiAFazer: DocItemSecao[] = [];
    for (const id of idsPai) {
      if (!catalogoDocs[id]) continue;
      const k = known(id);
      if (k?.status === "ok") continue;
      // certidão da Patrícia só aparece pras filhas do Marcos
      if (id === "certidao_casamento_patricia" && h.paiFalecido.nome !== "Marcos Martins") continue;
      // certidão nascimento/casamento do pai: pra filhas do Marcos NÃO mostrar (vai ser a da Patrícia)
      if (id === "certidao_nascimento_casamento_pai" && h.paiFalecido.nome === "Marcos Martins") continue;
      docsPaiAFazer.push(buildDoc(id, `pai__${id}`, k?.status ?? "falta", k?.observacao));
    }
    if (docsPaiAFazer.length > 0) {
      secoes.push({
        id: "pai",
        titulo: `Documentos do seu pai (${h.paiFalecido.nome})`,
        tipo: "pai_falecido",
        docs: docsPaiAFazer,
      });
    }
  }

  // === SEÇÃO "JÁ COM A LETÍCIA" ===
  const jaOk: DocItemSecao[] = [];
  for (const [id, v] of Object.entries(status)) {
    if (v.status !== "ok") continue;
    if (!catalogoDocs[id]) continue;
    jaOk.push(buildDoc(id, `ok__${id}`, "ok"));
  }
  if (jaOk.length > 0) {
    secoes.push({ id: "ja-entregue", titulo: "Já está com a Letícia ✅", tipo: "ja_entregue", docs: jaOk });
  }

  return secoes;
}

export function contarTotalAFazer(secoes: Secao[]) {
  let total = 0;
  for (const s of secoes) {
    if (s.tipo === "ja_entregue") continue;
    total += s.docs.length;
  }
  return total;
}

// Garantir tipos exportados não-mortos
export type { Morador };
