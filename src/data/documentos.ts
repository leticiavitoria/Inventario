import type { DocCatalogo } from "./tipos";

const youtube = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export const catalogoDocs: Record<string, DocCatalogo> = {
  rg: {
    id: "rg",
    nome: "Cópia do RG (ou RIC)",
    descricao: "Documento de identidade com foto. Pode ser RG antigo ou RIC novo.",
    iconesApps: ["googledrive"],
    avisos: [
      "NÃO mande foto do RG. Tem que estar ESCANEADO (PDF).",
      "Os dois lados do RG, em uma mesma folha ou PDF.",
    ],
    comoConseguir: [
      "Pegue seu RG.",
      "Abra o Google Drive no celular.",
      "Toque no botão + e escolha 'Digitalizar'.",
      "Tire foto da frente e do verso (vire o documento).",
      "Salve como PDF e mande para a Letícia pelo WhatsApp.",
    ],
    videoYoutube: youtube("como escanear documento pelo celular google drive passo a passo"),
  },
  cpf: {
    id: "cpf",
    nome: "Cópia do CPF",
    descricao: "Comprovante do número do CPF.",
    iconesApps: ["googledrive"],
    avisos: [
      "Se o seu RG já tem o número do CPF, ele já serve como CPF — não precisa de outro.",
      "NÃO mande foto. Tem que ser ESCANEADO (PDF).",
    ],
    comoConseguir: [
      "Se você tem o cartão CPF: escaneie pelo Google Drive.",
      "Se NÃO tem mais o cartão: você pode imprimir o comprovante de inscrição pelo site da Receita Federal.",
      "Escaneie o papel impresso e envie em PDF.",
    ],
    videoYoutube: youtube("como tirar segunda via cpf pelo celular receita federal"),
  },
  certidao_nascimento: {
    id: "certidao_nascimento",
    nome: "Certidão de nascimento ATUALIZADA",
    descricao: "Só para quem é solteiro. Precisa estar no novo padrão.",
    avisos: [
      "ATUALIZADA NÃO significa menos de 90 dias — significa NOVO PADRÃO (com QR code e selo digital).",
      "Certidão antiga (papel velho, formato pequeno) NÃO vale.",
    ],
    comoConseguir: [
      "Opção 1: Vá até o cartório onde foi feito seu registro. Custa de R$ 50 a R$ 100. Sai no mesmo dia.",
      "Opção 2: Peça pela internet no Registro Civil Online. Demora de 5 a 10 dias úteis.",
      "Se você é considerado de baixa renda, tem direito a uma certidão GRATUITA — peça e mostre o RG.",
    ],
    videoYoutube: youtube("como pedir certidão nascimento atualizada novo padrão"),
  },
  certidao_casamento: {
    id: "certidao_casamento",
    nome: "Certidão de casamento ATUALIZADA",
    descricao: "Para quem é casado, divorciado, separado ou viúvo. Precisa estar no novo padrão.",
    avisos: [
      "ATUALIZADA significa NOVO PADRÃO (com QR code), NÃO menos de 90 dias.",
      "Se você é divorciado: a certidão tem que estar com a AVERBAÇÃO do divórcio.",
      "Se você é viúvo: peça também a certidão de óbito do cônjuge.",
    ],
    comoConseguir: [
      "Vá ao cartório onde casaram. Leve seu RG e CPF.",
      "Ou peça pelo Registro Civil Online (chega em 5 a 10 dias úteis).",
      "Pessoas de baixa renda têm direito a uma certidão gratuita.",
    ],
    videoYoutube: youtube("como pedir certidão casamento atualizada averbação divórcio"),
  },
  comprovante_residencia: {
    id: "comprovante_residencia",
    nome: "Comprovante de residência DESTE MÊS",
    descricao: "Conta de luz, água, internet, cartão ou correspondência oficial.",
    avisos: [
      "Tem que estar NO SEU NOME.",
      "Tem que ser DESTE MÊS (não vale do mês passado).",
      "Se não tem nada no seu nome: peça à pessoa que mora com você uma declaração de residência reconhecida em cartório.",
    ],
    comoConseguir: [
      "Pegue a conta mais recente (luz, água, internet, cartão de crédito).",
      "Confira: está no seu nome? É deste mês?",
      "Escaneie pelo Google Drive e mande em PDF.",
    ],
    videoYoutube: youtube("como tirar segunda via conta de luz cemig pela internet"),
  },
  ctps_fisica: {
    id: "ctps_fisica",
    nome: "Carteira de Trabalho FÍSICA",
    descricao: "A carteira antiga, de papel azul.",
    iconesApps: ["googledrive"],
    avisos: [
      "Escaneie só estas páginas: FOTO, DADOS PESSOAIS, ÚLTIMO CONTRATO e a PÁGINA SEGUINTE.",
      "Se você NÃO tem mais a carteira física: baixe a 'Declaração de Inexistência de CTPS' (está logo abaixo na lista) e preencha.",
    ],
    comoConseguir: [
      "Pegue sua carteira de trabalho física.",
      "Abra o Google Drive, toque em + e 'Digitalizar'.",
      "Escaneie: página com sua foto, página com seus dados, página do último contrato de trabalho, e a página de trás dela.",
      "Salve tudo no MESMO PDF e mande.",
    ],
    videoYoutube: youtube("como escanear carteira de trabalho física pelo celular"),
  },
  ctps_digital: {
    id: "ctps_digital",
    nome: "Carteira de Trabalho DIGITAL (PDF)",
    descricao: "O aplicativo oficial do governo. Substitui a carteira física.",
    iconesApps: ["govbr", "ctps"],
    avisos: [
      "PRECISA conter TODAS as páginas. Não pode ser print de tela.",
      "Sua conta no Gov.br precisa estar no nível PRATA ou OURO (não funciona com BRONZE).",
    ],
    comoConseguir: [
      "Crie ou entre na sua conta Gov.br (precisa do CPF).",
      "Aumente o nível da sua conta para PRATA (validação por reconhecimento facial ou banco).",
      "Baixe o app 'Carteira de Trabalho Digital' na loja do seu celular.",
      "Abra o app, entre com Gov.br, vá em 'Contratos'.",
      "Toque em compartilhar e escolha 'Salvar como PDF' — TODAS as páginas.",
    ],
    videoYoutube: youtube("como gerar pdf carteira trabalho digital todas as paginas 2025"),
  },
  declaracao_inexistencia_ctps: {
    id: "declaracao_inexistencia_ctps",
    nome: "Declaração de Inexistência de CTPS",
    descricao: "Use APENAS se você não tem mais a Carteira de Trabalho física.",
    avisos: [
      "Só preencha se REALMENTE não tem mais a carteira física.",
      "Tem que IMPRIMIR, preencher à mão com caneta azul ou preta, e ASSINAR.",
      "Depois ESCANEIE (não foto) e envie.",
    ],
    comoConseguir: [
      "Baixe o PDF clicando no botão 'Baixar modelo'.",
      "Imprima em uma folha branca (papelaria cobra uns R$ 0,50).",
      "Preencha à mão e assine igual ao RG.",
      "Escaneie e envie em PDF.",
    ],
    modeloHref: "/modelos/declaracao-inexistencia-ctps.pdf",
    videoYoutube: youtube("como preencher declaração próprio punho documento simples"),
  },
  contracheques: {
    id: "contracheques",
    nome: "Contracheques dos últimos 3 MESES",
    descricao: "Para quem trabalha de carteira assinada.",
    avisos: [
      "Os 3 ÚLTIMOS meses, não pode pular nenhum.",
      "Se vários moradores +18 trabalham, cada um manda os DELE.",
    ],
    comoConseguir: [
      "Peça ao seu chefe ou ao RH da empresa.",
      "Algumas empresas mandam por e-mail todo mês — procure no seu e-mail.",
      "Escaneie ou salve como PDF e envie.",
    ],
    videoYoutube: youtube("como pedir contracheque empresa rh por email"),
  },
  contracheques_antes_inss: {
    id: "contracheques_antes_inss",
    nome: "3 últimos contracheques ANTES do afastamento",
    descricao: "Para quem está afastado pelo INSS — os contracheques de quando ainda trabalhava.",
    avisos: [
      "Os 3 últimos ANTES do afastamento, não os atuais.",
    ],
    comoConseguir: [
      "Peça ao RH da empresa onde você trabalhava antes do afastamento.",
      "Se trabalhou em mais de uma empresa: peça pra cada uma.",
    ],
  },
  extratos_bancarios: {
    id: "extratos_bancarios",
    nome: "Extratos bancários dos últimos 3 meses",
    descricao: "De TODAS as contas que você tem.",
    avisos: [
      "TODAS as contas: corrente, poupança, conta digital (Nubank, Inter, PicPay, C6, etc.).",
      "Os 3 últimos meses completos.",
      "Cada morador +18 da casa também precisa enviar OS DELE.",
    ],
    comoConseguir: [
      "Abra o aplicativo do seu banco no celular.",
      "Vá em 'Extrato' e escolha o período de 3 meses.",
      "Toque em compartilhar e 'Salvar como PDF'.",
      "Repita para CADA conta em cada banco.",
    ],
    videoYoutube: youtube("como tirar extrato bancário pdf aplicativo banco celular"),
  },
  extrato_inss: {
    id: "extrato_inss",
    nome: "Extrato de benefício do INSS",
    descricao: "Para aposentados, pensionistas ou afastados.",
    iconesApps: ["govbr", "meuinss"],
    avisos: [
      "Precisa ter conta Gov.br (a mesma da CTPS Digital).",
      "Se não conseguir entrar, ligue 135 (gratuito) — a central do INSS.",
    ],
    comoConseguir: [
      "Baixe o app 'Meu INSS' na loja do seu celular.",
      "Entre com sua conta Gov.br.",
      "Toque em 'Extrato de Pagamento de Benefício'.",
      "Toque em compartilhar e salvar como PDF.",
    ],
    videoYoutube: youtube("como tirar extrato de pagamento benefício meu inss app celular"),
  },
  declaracao_uxoria: {
    id: "declaracao_uxoria",
    nome: "Declaração de Uxória",
    descricao: "Só para quem é CASADO. É a autorização do cônjuge.",
    avisos: [
      "Tem que IMPRIMIR — não dá pra preencher pelo celular.",
      "Preencher com caneta AZUL ou PRETA, sem rasura.",
      "Quem assina é o(a) CÔNJUGE (esposo/esposa), não você.",
      "Depois ESCANEAR (não foto) e enviar em PDF.",
    ],
    comoConseguir: [
      "Toque em 'Baixar modelo' aqui embaixo.",
      "Imprima em folha branca (papelaria cobra ~R$ 0,50).",
      "Preencha os dados do cônjuge: nome, CPF, RG, data do casamento, regime de bens.",
      "O cônjuge assina igual ao RG dele/dela.",
      "Escaneie pelo Google Drive e envie o PDF.",
    ],
    modeloHref: "/modelos/declaracao-uxoria.pdf",
    videoYoutube: youtube("o que é declaração uxória como preencher"),
  },
  declaracao_hipossuficiencia: {
    id: "declaracao_hipossuficiencia",
    nome: "Declaração de Hipossuficiência",
    descricao: "TODOS preenchem. Declara que não tem condições de pagar advogado particular.",
    avisos: [
      "Tem que IMPRIMIR.",
      "Preencher à mão com caneta azul ou preta.",
      "ASSINAR igual ao RG.",
      "Depois ESCANEAR e enviar em PDF.",
    ],
    comoConseguir: [
      "Toque em 'Baixar modelo'.",
      "Imprima e preencha: nome, CPF, RG, endereço (igual ao comprovante), estado civil, profissão, renda mensal (se está sem renda, escreva 'sem renda').",
      "Assine e escaneie.",
    ],
    modeloHref: "/modelos/declaracao-hipossuficiencia.pdf",
  },
  termo_consentimento: {
    id: "termo_consentimento",
    nome: "Termo de Consentimento",
    descricao: "TODOS preenchem. Autoriza a Defensoria a usar seus dados no processo.",
    avisos: [
      "Imprima, preencha à mão, assine e escaneie.",
    ],
    comoConseguir: [
      "Baixe, imprima e preencha: nome, CPF, RG e endereço completo.",
      "Marque as opções de consentimento (geralmente todas).",
      "Assine.",
    ],
    modeloHref: "/modelos/termo-consentimento.pdf",
  },
  questionario_socioeconomico: {
    id: "questionario_socioeconomico",
    nome: "Questionário Socioeconômico",
    descricao: "TODOS preenchem. Perguntas sobre renda, moradia e gastos da família.",
    avisos: [
      "Responda TODAS as perguntas, mesmo as óbvias.",
      "Imprima, preencha à mão, assine e escaneie.",
    ],
    comoConseguir: [
      "Baixe, imprima e responda: quantas pessoas moram com você, renda de cada um, gastos com aluguel, luz, água, comida, remédios, se tem doente ou pessoa com deficiência na casa.",
      "Assine e escaneie.",
    ],
    modeloHref: "/modelos/questionario-socioeconomico.pdf",
  },
  certidao_obito_pai: {
    id: "certidao_obito_pai",
    nome: "Certidão de óbito do seu pai",
    descricao: "Para os netos que perderam o pai (herdeiro falecido).",
    avisos: [
      "Tem que estar no NOVO PADRÃO.",
    ],
    comoConseguir: [
      "Vá ao cartório onde foi registrado o óbito.",
      "Ou peça pelo Registro Civil Online.",
    ],
  },
  cpf_pai: {
    id: "cpf_pai",
    nome: "CPF do seu pai falecido",
    descricao: "Documento de CPF do herdeiro falecido.",
    avisos: ["Escaneie o cartão de CPF dele, ou imprima o comprovante pela Receita Federal."],
    comoConseguir: [
      "Procure entre os documentos antigos dele.",
      "Se não achar: entre no site da Receita Federal com o CPF e imprima o comprovante.",
    ],
  },
  certidao_nascimento_casamento_pai: {
    id: "certidao_nascimento_casamento_pai",
    nome: "Certidão de nascimento OU casamento do seu pai falecido",
    descricao: "Se ele era solteiro: certidão de nascimento. Se era casado/divorciado: certidão de casamento atualizada (com averbação do divórcio se houver).",
    avisos: ["Tem que estar no NOVO PADRÃO."],
    comoConseguir: [
      "Vá ao cartório onde foi feito o registro.",
      "Ou peça pelo Registro Civil Online.",
    ],
  },
};

export function getDoc(id: string) {
  return catalogoDocs[id];
}
