import type { DocCatalogo } from "./tipos";

const youtube = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export const catalogoDocs: Record<string, DocCatalogo> = {
  rg_cpf: {
    id: "rg_cpf",
    nome: "Cópia do RG e CPF",
    descricao: "Documento de identidade com foto e o número do CPF.",
    iconesApps: ["papelaria"],
    avisos: [
      "Se o seu RG já tem o número do **CPF impresso nele**, ele serve pelos dois — não precisa de cartão de CPF separado.",
      "Tirar xerox **dos dois lados** do RG.",
    ],
    comoConseguir: [
      "Pegue o RG original.",
      "Vá numa papelaria perto da sua casa.",
      "Peça xerox dos dois lados do RG.",
      "Se você tem o cartão CPF separado, leve também e tire xerox.",
    ],
  },

  certidao_nascimento: {
    id: "certidao_nascimento",
    nome: "Certidão de nascimento",
    descricao: "Para quem é solteiro.",
    iconesApps: ["papelaria"],
    avisos: [
      "Tem que estar no **NOVO PADRÃO** (com QR code e selo digital). Certidão antiga (papel pequeno, modelo antigo) **não vale**.",
      "Se a sua é antiga, peça uma nova no cartório.",
    ],
    comoConseguir: [
      "Se a sua certidão já é nova: pegue o original e vá na papelaria tirar xerox.",
      "Se for antiga: vá no cartório onde foi feito seu registro. Custa entre R$ 50 e R$ 100. Pessoas de baixa renda têm direito **gratuito** — peça e mostre o RG.",
      "Quando receber a nova, leve na papelaria e tire xerox.",
    ],
    videoYoutube: youtube("como pedir certidão nascimento novo padrão cartório"),
  },

  certidao_casamento: {
    id: "certidao_casamento",
    nome: "Certidão de casamento",
    descricao: "Para quem é casado, divorciado, separado ou viúvo.",
    iconesApps: ["papelaria"],
    avisos: [
      "Tem que estar no **NOVO PADRÃO** (com QR code).",
      "Se você é **divorciado**: a certidão tem que ter a **AVERBAÇÃO do divórcio**. Sem isso, não vale.",
    ],
    comoConseguir: [
      "Se a sua certidão já é nova: pegue o original e vá na papelaria tirar xerox.",
      "Se for antiga ou não tem averbação: vá no cartório onde casaram. Pessoas de baixa renda têm direito **gratuito**.",
      "Depois leve a nova na papelaria e tire xerox.",
    ],
    videoYoutube: youtube("como pedir certidão casamento averbação divórcio cartório"),
  },

  comprovante_residencia: {
    id: "comprovante_residencia",
    nome: "Comprovante de residência",
    descricao: "Conta de luz, água, internet ou cartão.",
    iconesApps: ["papelaria"],
    avisos: [
      "Tem que estar **NO SEU NOME**.",
      "Tem que ser **DESTE MÊS**. Mês passado não vale.",
      "Se não tem nada no seu nome: peça à pessoa que mora com você uma **declaração de residência** reconhecida em cartório.",
    ],
    comoConseguir: [
      "Pegue a conta mais recente (luz, água, internet ou cartão) que está NO SEU NOME e é DESTE MÊS.",
      "Vá na papelaria e tire xerox.",
    ],
  },

  ctps_fisica: {
    id: "ctps_fisica",
    nome: "Carteira de Trabalho física",
    descricao: "A carteira de trabalho antiga, azulzinha de papel.",
    iconesApps: ["papelaria"],
    avisos: [
      "Tire xerox apenas destas páginas: a **página com sua foto**, a **página com seus dados**, a **página do último contrato de trabalho** e a **página seguinte**.",
    ],
    comoConseguir: [
      "Pegue sua carteira física.",
      "Vá numa papelaria.",
      "Peça xerox da página da foto, da página dos dados, da página do último contrato e da página seguinte. Tudo em folhas separadas.",
    ],
  },

  ctps_digital: {
    id: "ctps_digital",
    nome: "Carteira de Trabalho Digital",
    descricao: "É o aplicativo oficial do governo. Substitui a carteira de papel.",
    iconesApps: ["govbr", "ctps", "papelaria"],
    avisos: [
      "Você precisa ter conta no **Gov.br** no nível **PRATA ou OURO** (Bronze não funciona).",
      "Tem que ter **TODAS as páginas** — não pode ser print de tela.",
      "Depois de gerar o arquivo no celular, é preciso **IMPRIMIR** — peça numa papelaria pra imprimir o arquivo do seu celular.",
    ],
    comoConseguir: [
      "Crie ou entre na sua conta Gov.br pelo celular.",
      "Suba sua conta para PRATA (validação por reconhecimento facial ou pelo seu banco).",
      "Baixe o aplicativo 'Carteira de Trabalho Digital' na loja do celular.",
      "Abra, entre com Gov.br, vá em 'Contratos' e gere o arquivo com TODAS as páginas.",
      "Vá numa papelaria com o celular e peça pra **imprimir o arquivo**.",
    ],
    videoYoutube: youtube("como gerar arquivo completo carteira trabalho digital todas as paginas"),
  },

  declaracao_inexistencia_ctps: {
    id: "declaracao_inexistencia_ctps",
    nome: "Declaração de Inexistência da Carteira de Trabalho",
    descricao: "Para quem não tem mais a carteira de trabalho de papel.",
    avisos: [
      "Só preencha se você **realmente não tem mais** a carteira física.",
      "Preencher à mão com **caneta azul ou preta**, sem rasura.",
      "**Assinar igual ao RG.**",
    ],
    comoConseguir: [
      "Toque em **Baixar modelo** aqui embaixo.",
      "Vá numa papelaria e peça pra **imprimir o arquivo**.",
      "Preencha à mão com caneta azul ou preta.",
      "Assine igual ao RG.",
    ],
    modeloHref: "/modelos/declaracao-inexistencia-ctps.pdf",
  },

  contracheques: {
    id: "contracheques",
    nome: "Contracheques dos últimos 3 meses",
    descricao: "Para quem trabalha de carteira assinada.",
    iconesApps: ["papelaria"],
    avisos: [
      "Tem que ser os **3 últimos meses seguidos**. Não pode pular nenhum.",
    ],
    comoConseguir: [
      "Peça os contracheques ao RH ou ao seu chefe.",
      "Algumas empresas mandam por e-mail todo mês — procure no seu e-mail.",
      "Leve o arquivo (no celular ou pen drive) numa papelaria e peça pra imprimir.",
    ],
  },

  contracheques_antes_inss: {
    id: "contracheques_antes_inss",
    nome: "3 últimos contracheques antes do afastamento",
    descricao: "Para quem está afastado pelo INSS.",
    avisos: [
      "São os contracheques de **antes** do afastamento — não os atuais.",
    ],
    comoConseguir: [
      "Peça ao RH da empresa onde você trabalhava antes do afastamento.",
      "Leve numa papelaria e peça pra imprimir.",
    ],
  },

  extratos_bancarios: {
    id: "extratos_bancarios",
    nome: "Extratos bancários dos últimos 3 meses",
    descricao: "De TODAS as contas bancárias que você tem.",
    iconesApps: ["papelaria"],
    avisos: [
      "**TODAS as contas**: poupança, conta corrente, conta digital (Nubank, Inter, PicPay, C6, Mercado Pago, etc.).",
      "Os **3 últimos meses completos** de cada conta.",
    ],
    comoConseguir: [
      "Abra cada aplicativo de banco no celular.",
      "Vá em 'Extrato' e escolha o período de 3 meses.",
      "Salve o arquivo (PDF) no celular.",
      "Vá numa papelaria com o celular e peça pra **imprimir todos os arquivos**.",
    ],
    videoYoutube: youtube("como tirar extrato bancário 3 meses aplicativo banco celular"),
  },

  extrato_inss: {
    id: "extrato_inss",
    nome: "Extrato de benefício do INSS",
    descricao: "Para aposentados, pensionistas ou afastados pelo INSS.",
    iconesApps: ["govbr", "meuinss", "papelaria"],
    avisos: [
      "Precisa de conta Gov.br (mesma da Carteira de Trabalho Digital).",
      "Se não conseguir entrar, ligue **135** (gratuito).",
    ],
    comoConseguir: [
      "Baixe o aplicativo **Meu INSS** na loja do celular.",
      "Entre com sua conta Gov.br.",
      "Toque em 'Extrato de Pagamento de Benefício'.",
      "Salve como PDF no celular.",
      "Vá numa papelaria e peça pra imprimir.",
    ],
    videoYoutube: youtube("como tirar extrato benefício meu inss aplicativo passo a passo"),
  },

  declaracao_ausencia_renda: {
    id: "declaracao_ausencia_renda",
    nome: "Declaração de Ausência de Renda Formal",
    descricao: "Para quem está desempregado ou trabalha por conta própria (informal).",
    avisos: [
      "Preencher à mão com **caneta azul ou preta**.",
      "**Assinar igual ao RG.**",
    ],
    comoConseguir: [
      "Toque em **Baixar modelo** aqui embaixo.",
      "Vá numa papelaria e peça pra **imprimir o arquivo**.",
      "Preencha à mão e assine.",
    ],
    modeloHref: "/modelos/declaracao-ausencia-renda.pdf",
  },

  declaracao_uxoria: {
    id: "declaracao_uxoria",
    nome: "Declaração de Uxória",
    descricao: "Para quem é casado ou em união estável. É a autorização do cônjuge.",
    avisos: [
      "Quem assina é o **cônjuge** (esposo ou esposa), não você.",
      "Preencher à mão com caneta azul ou preta.",
      "**Assinatura igual ao RG do cônjuge.**",
    ],
    comoConseguir: [
      "Toque em **Baixar modelo** aqui embaixo.",
      "Vá numa papelaria e peça pra imprimir.",
      "Preencha com os dados do cônjuge: nome, CPF, RG, data do casamento, regime de bens.",
      "O cônjuge assina.",
    ],
    modeloHref: "/modelos/declaracao-uxoria.pdf",
  },

  declaracao_hipossuficiencia: {
    id: "declaracao_hipossuficiencia",
    nome: "Declaração de Hipossuficiência",
    descricao: "Todos preenchem. Declara que você não tem condições de pagar advogado particular.",
    avisos: [
      "Preencher à mão com caneta azul ou preta.",
      "**Assinatura igual ao RG.**",
    ],
    comoConseguir: [
      "Toque em **Baixar modelo** aqui embaixo.",
      "Vá numa papelaria e peça pra imprimir.",
      "Preencha à mão: nome, CPF, RG, endereço, estado civil, profissão, renda mensal. Se está sem renda, escreva 'sem renda'.",
      "Assine.",
    ],
    modeloHref: "/modelos/declaracao-hipossuficiencia.pdf",
  },

  termo_consentimento: {
    id: "termo_consentimento",
    nome: "Termo de Consentimento",
    descricao: "Todos preenchem. Autoriza a Defensoria a usar seus dados no processo.",
    avisos: [
      "Marcar todas as opções de consentimento.",
      "**Assinatura igual ao RG.**",
    ],
    comoConseguir: [
      "Toque em **Baixar modelo** aqui embaixo.",
      "Vá numa papelaria e peça pra imprimir.",
      "Preencha: nome, CPF, RG e endereço.",
      "Marque as opções e assine.",
    ],
    modeloHref: "/modelos/termo-consentimento.pdf",
  },

  questionario_socioeconomico: {
    id: "questionario_socioeconomico",
    nome: "Questionário Socioeconômico",
    descricao: "Todos preenchem. Perguntas sobre renda, moradia e gastos da família.",
    avisos: [
      "**Responda TODAS as perguntas**, mesmo as que parecem óbvias.",
      "**Assinatura igual ao RG no final.**",
    ],
    comoConseguir: [
      "Toque em **Baixar modelo** aqui embaixo.",
      "Vá numa papelaria e peça pra imprimir.",
      "Responda à mão tudo: quantas pessoas moram com você, renda de cada um, gastos com aluguel, luz, água, comida, remédios, se tem alguém doente ou com deficiência na casa.",
      "Assine no final.",
    ],
    modeloHref: "/modelos/questionario-socioeconomico.pdf",
  },

  certidao_obito_pai: {
    id: "certidao_obito_pai",
    nome: "Certidão de óbito do seu pai",
    descricao: "Para netos cujo pai (herdeiro) já faleceu.",
    avisos: ["Tem que estar no **NOVO PADRÃO**."],
    comoConseguir: [
      "Pegue o original e vá numa papelaria tirar xerox.",
      "Se não tem: vá no cartório onde foi registrado o óbito.",
    ],
  },

  cpf_pai: {
    id: "cpf_pai",
    nome: "CPF do seu pai falecido",
    descricao: "Cartão CPF ou comprovante de inscrição do herdeiro falecido.",
    avisos: ["Tire xerox do cartão ou imprima o comprovante da Receita Federal."],
    comoConseguir: [
      "Pegue o cartão CPF original do seu pai e vá numa papelaria tirar xerox.",
      "Se não acha: entre no site da Receita Federal com o CPF dele e imprima o comprovante.",
    ],
  },

  certidao_nascimento_casamento_pai: {
    id: "certidao_nascimento_casamento_pai",
    nome: "Certidão de nascimento ou casamento do seu pai falecido",
    descricao: "Se era solteiro: certidão de nascimento. Se era casado/divorciado: certidão de casamento (com averbação do divórcio).",
    avisos: ["Tem que estar no **NOVO PADRÃO**."],
    comoConseguir: [
      "Pegue o original e tire xerox numa papelaria.",
      "Se não tem: vá ao cartório onde foi feito o registro.",
    ],
  },

  // Documento específico para Milene/Lamarkiane/Kelriane/Jane Kelly: certidão da Patrícia
  certidao_casamento_patricia: {
    id: "certidao_casamento_patricia",
    nome: "Certidão de casamento ATUALIZADA da Patrícia com o Marcos",
    descricao: "É essa que substitui a certidão de nascimento do seu pai (Marcos).",
    avisos: [
      "Quem pega é a **Patrícia** (segunda ex-esposa do Marcos).",
      "Tem que ter a **averbação do divórcio**.",
      "Tem que estar no **NOVO PADRÃO**.",
    ],
    comoConseguir: [
      "**Ligue para a Patrícia ou peça pessoalmente.**",
      "Ela vai no cartório onde casaram e pede a certidão atualizada com averbação do divórcio.",
      "Quando ela conseguir, leve o original na papelaria e tire xerox.",
    ],
  },

  // Docs para moradores +18
  m_contracheques: {
    id: "m_contracheques",
    nome: "Contracheques dos últimos 3 meses",
    descricao: "",
    avisos: ["Os **3 últimos meses seguidos**, não pode pular nenhum."],
    comoConseguir: [
      "Peça ao RH da empresa ou procure no e-mail.",
      "Leve numa papelaria e peça pra imprimir.",
    ],
  },
  m_extratos: {
    id: "m_extratos",
    nome: "Extratos bancários dos últimos 3 meses",
    descricao: "",
    avisos: ["De **TODAS as contas** (corrente, poupança, conta digital)."],
    comoConseguir: [
      "Pegue o extrato em cada aplicativo de banco.",
      "Salve no celular e mande imprimir na papelaria.",
    ],
  },
  m_ausencia_renda: {
    id: "m_ausencia_renda",
    nome: "Declaração de Ausência de Renda Formal",
    descricao: "Para desempregados e autônomos.",
    avisos: ["Preencher à mão e **assinar igual ao RG**."],
    comoConseguir: [
      "Baixe o modelo aqui embaixo, imprima na papelaria, preencha e assine.",
    ],
    modeloHref: "/modelos/declaracao-ausencia-renda.pdf",
  },
  m_extrato_inss: {
    id: "m_extrato_inss",
    nome: "Extrato de benefício do INSS",
    descricao: "Para aposentados ou pensionistas.",
    iconesApps: ["meuinss"],
    avisos: ["Precisa de conta Gov.br. Se não consegue, ligue 135."],
    comoConseguir: [
      "Pelo aplicativo Meu INSS: 'Extrato de Pagamento de Benefício'.",
      "Salve no celular e imprima na papelaria.",
    ],
  },
  m_mei_empresario: {
    id: "m_mei_empresario",
    nome: "Documentos de MEI ou empresário",
    descricao: "Documentos específicos para quem tem CNPJ ou é empresário.",
    avisos: [
      "Esta situação precisa de documentos específicos (DECORE, pró-labore, faturamento).",
      "**Fale com a Letícia pelo WhatsApp** para receber a lista exata.",
    ],
    comoConseguir: [
      "Mande mensagem para a Letícia pelo WhatsApp pedindo a lista de documentos pra MEI/empresário.",
    ],
  },
};

export function getDoc(id: string) {
  return catalogoDocs[id];
}
