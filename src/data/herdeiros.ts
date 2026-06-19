import type { Herdeiro, PerfilHerdeiro, StatusDoc } from "./tipos";
import { catalogoDocs } from "./documentos";

export const herdeiros: Herdeiro[] = [
  {
    slug: "marcio",
    nome: "Márcio Martins",
    parentesco: "Filho",
    perfilDefault: { situacaoCivil: "casado", temFilhosMaiores: true, qtdMoradores: 3, qtdMaiores: 3, situacaoRenda: "aposentado" },
    observacoesGerais: [
      "Como você é casado, sua esposa precisa assinar a Declaração de Uxória.",
      "Sua esposa e suas filhas maiores de 18 anos também precisam mandar comprovante de renda e extratos bancários.",
    ],
    statusConhecido: {
      rg: { status: "falta" },
      cpf: { status: "falta" },
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
    perfilDefault: { situacaoCivil: "solteiro", temFilhosMaiores: false, qtdMoradores: 1, qtdMaiores: 1, situacaoRenda: "empregado" },
    observacoesGerais: ["Seus documentos estão todos em ordem. Só confirme."],
    statusConhecido: {
      rg: { status: "ok" }, cpf: { status: "ok" }, certidao_nascimento: { status: "ok" },
      comprovante_residencia: { status: "ok" }, ctps_fisica: { status: "ok" }, ctps_digital: { status: "ok" },
      contracheques: { status: "ok" }, extratos_bancarios: { status: "ok" },
      declaracao_hipossuficiencia: { status: "ok" }, questionario_socioeconomico: { status: "ok" }, termo_consentimento: { status: "ok" },
    },
  },
  {
    slug: "antonio",
    nome: "Antônio Marcílio Martins",
    parentesco: "Filho",
    perfilDefault: { situacaoCivil: "solteiro", temFilhosMaiores: false, qtdMoradores: 1, qtdMaiores: 1, situacaoRenda: "afastado_inss" },
    observacoesGerais: [
      "Você está afastado pelo INSS. Precisa do extrato do benefício + os 3 contracheques de antes do afastamento.",
    ],
    statusConhecido: {
      rg: { status: "falta" }, cpf: { status: "falta" }, certidao_nascimento: { status: "falta" },
      comprovante_residencia: { status: "falta" }, ctps_fisica: { status: "falta" }, ctps_digital: { status: "falta" },
      extrato_inss: { status: "falta" }, contracheques_antes_inss: { status: "falta" }, extratos_bancarios: { status: "falta" },
      declaracao_hipossuficiencia: { status: "falta" }, questionario_socioeconomico: { status: "falta" }, termo_consentimento: { status: "falta" },
    },
  },
  {
    slug: "milene",
    nome: "Milene Martins",
    parentesco: "Neta (filha do Marcos)",
    perfilDefault: { situacaoCivil: "solteiro", temFilhosMaiores: false, qtdMoradores: 2, qtdMaiores: 2, situacaoRenda: "empregado" },
    observacoesGerais: [
      "MUITO IMPORTANTE: peça à sua mãe (Patrícia) a certidão de casamento ATUALIZADA dela com o Marcos (com a averbação do divórcio). É essa que substitui a certidão de nascimento do seu pai.",
    ],
    docsExtras: [
      { id: "certidao_casamento_patricia_marcos", status: "falta" },
    ],
    statusConhecido: {
      rg: { status: "falta" }, cpf: { status: "falta" }, certidao_nascimento: { status: "falta" },
      comprovante_residencia: { status: "falta" }, ctps_fisica: { status: "falta" }, ctps_digital: { status: "falta" },
      contracheques: { status: "falta" }, extratos_bancarios: { status: "falta" },
      declaracao_hipossuficiencia: { status: "falta" }, questionario_socioeconomico: { status: "falta" }, termo_consentimento: { status: "falta" },
    },
  },
  {
    slug: "lamarkiane",
    nome: "Lamarkiane Martins",
    parentesco: "Neta (filha do Marcos)",
    perfilDefault: { situacaoCivil: "casado", temFilhosMaiores: true, qtdMoradores: 5, qtdMaiores: 3, situacaoRenda: "empregado" },
    observacoesGerais: [
      "Você é a responsável por enviar os documentos do seu pai Marcos (óbito e CPF).",
      "Confira com a Milene se a Patrícia já enviou a certidão de casamento atualizada (precisa pra completar os documentos do Marcos).",
    ],
    statusConhecido: {
      rg: { status: "ok" }, cpf: { status: "ok" },
      certidao_casamento: { status: "errado", observacao: "Precisa ser atualizada para o novo padrão." },
      comprovante_residencia: { status: "ok" }, ctps_fisica: { status: "falta" }, ctps_digital: { status: "falta" },
      contracheques: { status: "falta" }, extratos_bancarios: { status: "falta" },
      declaracao_uxoria: { status: "falta" },
      declaracao_hipossuficiencia: { status: "ok" }, questionario_socioeconomico: { status: "ok" }, termo_consentimento: { status: "ok" },
      certidao_obito_pai: { status: "ok" }, cpf_pai: { status: "ok" },
    },
  },
  {
    slug: "kelriane",
    nome: "Kelriane Martins",
    parentesco: "Neta (filha do Marcos)",
    perfilDefault: { situacaoCivil: "solteiro", temFilhosMaiores: false, qtdMoradores: 3, qtdMaiores: 3, situacaoRenda: "empregado" },
    observacoesGerais: [
      "Confira com a Milene se a Patrícia já enviou a certidão de casamento atualizada do seu pai.",
      "Cada irmã (você e Jane Kelly) faz seu próprio cadastro separado.",
    ],
    statusConhecido: {
      rg: { status: "ok" }, cpf: { status: "ok" },
      certidao_nascimento: { status: "errado", observacao: "Precisa ser atualizada para o novo padrão." },
      comprovante_residencia: { status: "errado", observacao: "Precisa estar no seu próprio nome e ser deste mês." },
      ctps_fisica: { status: "falta" },
      ctps_digital: { status: "errado", observacao: "Faltam páginas — precisa ser TODAS." },
      contracheques: { status: "errado", observacao: "Precisa ser os 3 últimos meses." },
      extratos_bancarios: { status: "falta" },
      declaracao_hipossuficiencia: { status: "ok" }, questionario_socioeconomico: { status: "falta" }, termo_consentimento: { status: "ok" },
    },
  },
  {
    slug: "jane-kelly",
    nome: "Jane Kelly Martins",
    parentesco: "Neta (filha do Marcos)",
    perfilDefault: { situacaoCivil: "solteiro", temFilhosMaiores: false, qtdMoradores: 3, qtdMaiores: 3, situacaoRenda: "empregado" },
    observacoesGerais: [
      "Confira com a Milene se a Patrícia já enviou a certidão de casamento atualizada do seu pai.",
      "Cada irmã (você e Kelriane) faz seu próprio cadastro separado.",
    ],
    statusConhecido: {
      rg: { status: "ok" }, cpf: { status: "ok" },
      certidao_nascimento: { status: "errado", observacao: "Precisa ser atualizada para o novo padrão." },
      comprovante_residencia: { status: "errado", observacao: "Precisa estar no seu próprio nome e ser deste mês." },
      ctps_fisica: { status: "falta" },
      ctps_digital: { status: "errado", observacao: "Faltam páginas — precisa ser TODAS." },
      contracheques: { status: "errado", observacao: "Precisa ser os 3 últimos meses." },
      extratos_bancarios: { status: "falta" },
      declaracao_hipossuficiencia: { status: "ok" }, questionario_socioeconomico: { status: "falta" }, termo_consentimento: { status: "ok" },
    },
  },
  {
    slug: "leticia",
    nome: "Letícia Martins",
    parentesco: "Neta (filha do Anísio)",
    perfilDefault: { situacaoCivil: "solteiro", temFilhosMaiores: false, qtdMoradores: 2, qtdMaiores: 2, situacaoRenda: "empregado" },
    observacoesGerais: ["Seus documentos estão todos em ordem."],
    statusConhecido: {
      rg: { status: "ok" }, cpf: { status: "ok" }, certidao_nascimento: { status: "ok" },
      comprovante_residencia: { status: "ok" }, ctps_digital: { status: "ok" },
      extratos_bancarios: { status: "ok" },
      questionario_socioeconomico: { status: "ok" }, termo_consentimento: { status: "ok" },
      certidao_obito_pai: { status: "ok" }, cpf_pai: { status: "ok" }, certidao_nascimento_casamento_pai: { status: "ok" },
    },
  },
];

export function getHerdeiro(slug: string) {
  return herdeiros.find((h) => h.slug === slug);
}

// Gera lista de documentos a partir do perfil — fonte única de verdade.
export function gerarDocumentos(h: Herdeiro, perfil: PerfilHerdeiro): { id: string; status: StatusDoc; observacao?: string }[] {
  const ids: string[] = [];
  ids.push("rg", "cpf");

  if (perfil.situacaoCivil === "solteiro") {
    ids.push("certidao_nascimento");
  } else {
    ids.push("certidao_casamento");
  }

  ids.push("comprovante_residencia");

  // Documentos de renda baseados na situação
  if (perfil.situacaoRenda === "empregado") {
    ids.push("ctps_fisica", "ctps_digital", "contracheques", "extratos_bancarios");
  } else if (perfil.situacaoRenda === "autonomo" || perfil.situacaoRenda === "desempregado") {
    ids.push("ctps_fisica", "ctps_digital", "extratos_bancarios");
  } else if (perfil.situacaoRenda === "aposentado") {
    ids.push("ctps_fisica", "ctps_digital", "extrato_inss", "extratos_bancarios");
  } else if (perfil.situacaoRenda === "afastado_inss") {
    ids.push("ctps_fisica", "ctps_digital", "extrato_inss", "contracheques_antes_inss", "extratos_bancarios");
  }

  // Declaração de inexistência de CTPS — sempre opcional (mostrar como opcional)
  ids.push("declaracao_inexistencia_ctps");

  // Declaração uxória só para casados / união estável
  if (perfil.situacaoCivil === "casado" || perfil.situacaoCivil === "uniao_estavel") {
    ids.push("declaracao_uxoria");
  }

  ids.push("declaracao_hipossuficiencia", "questionario_socioeconomico", "termo_consentimento");

  // Para netos (filhos de herdeiros falecidos), incluir docs do pai
  if (h.parentesco.startsWith("Neta") || h.parentesco.startsWith("Neto")) {
    ids.push("certidao_obito_pai", "cpf_pai", "certidao_nascimento_casamento_pai");
  }

  // Filtrar duplicatas mantendo ordem
  const unicos = Array.from(new Set(ids));

  // Aplicar status conhecido e filtrar docs que não existem no catálogo
  const resultado = unicos
    .filter((id) => !!catalogoDocs[id])
    .map((id) => {
      const known = h.statusConhecido?.[id];
      return {
        id,
        status: (known?.status ?? "falta") as StatusDoc,
        observacao: known?.observacao,
      };
    });

  // Adicionar docs extras (ex: certidão Patrícia para Milene) — mas só se id existir no catálogo
  if (h.docsExtras) {
    for (const ex of h.docsExtras) {
      if (catalogoDocs[ex.id] && !resultado.find((r) => r.id === ex.id)) {
        resultado.push({ id: ex.id, status: ex.status, observacao: ex.observacao });
      }
    }
  }

  return resultado;
}

export function resumoStatus(docs: { status: StatusDoc }[]) {
  const total = docs.filter((d) => d.status !== "na").length;
  const ok = docs.filter((d) => d.status === "ok").length;
  return { ok, total, pct: total > 0 ? Math.round((ok / total) * 100) : 0 };
}
