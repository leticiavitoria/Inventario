export type PassoTutorial = {
  titulo: string;
  texto: string;
  link?: { url: string; label: string };
};

export type Tutorial = {
  slug: string;
  titulo: string;
  resumo: string;
  passos: PassoTutorial[];
  avisos?: string[];
};

export const tutoriais: Record<string, Tutorial> = {
  "ctps-digital": {
    slug: "ctps-digital",
    titulo: "Como pegar a Carteira de Trabalho Digital",
    resumo:
      "Hoje a Carteira de Trabalho é um aplicativo no celular. Você precisa ter conta no Gov.br e baixar dois aplicativos.",
    avisos: [
      "Você precisa exportar o PDF com TODAS as páginas — não pode mandar só a tela do celular tirada por print.",
      "Se você nunca teve carteira de trabalho física, vai precisar preencher uma declaração explicando isso (peça à Letícia).",
    ],
    passos: [
      {
        titulo: "1. Criar conta no Gov.br (se ainda não tem)",
        texto:
          "Entre no site gov.br pelo celular ou computador. Clique em 'Entrar com gov.br' e depois 'Crie sua conta'. Você vai precisar do seu CPF, um e-mail e um celular para receber o código. Siga os passos para criar uma senha.",
        link: { url: "https://www.gov.br/pt-br/servicos/criar-sua-conta-gov.br", label: "Abrir Gov.br" },
      },
      {
        titulo: "2. Aumentar o nível da sua conta para PRATA ou OURO",
        texto:
          "Sua conta começa no nível BRONZE, que não dá acesso à Carteira Digital. Para subir, abra o app Gov.br, clique no seu nome, depois em 'Selos de confiabilidade'. Use o reconhecimento facial (tirar selfie) ou validação por banco. Quando virar Prata ou Ouro, pode continuar.",
      },
      {
        titulo: "3. Baixar o aplicativo Carteira de Trabalho Digital",
        texto:
          "Na loja de aplicativos do seu celular (Play Store no Android, App Store no iPhone), procure por 'Carteira de Trabalho Digital' e instale. É o app oficial do Ministério do Trabalho (ícone azul).",
      },
      {
        titulo: "4. Entrar com a sua conta Gov.br",
        texto:
          "Abra o app e clique em 'Entrar com gov.br'. Coloque seu CPF e a senha que você criou no passo 1.",
      },
      {
        titulo: "5. Gerar o PDF de TODAS as páginas",
        texto:
          "Dentro do app, clique em 'Contratos'. Você vai ver a lista de empregos. Clique no botão de COMPARTILHAR ou EXPORTAR (geralmente um ícone de seta para cima ou três pontinhos) e escolha 'Salvar como PDF' ou 'Compartilhar PDF'. Salve esse PDF e mande para a Letícia.",
      },
      {
        titulo: "Não consegue?",
        texto:
          "Ligue para a Letícia que ela te ajuda. Ou vá numa lan house / papelaria próxima e peça ajuda — geralmente fazem isso por uns 5 a 10 reais.",
      },
    ],
  },
  certidoes: {
    slug: "certidoes",
    titulo: "Como pegar certidões ATUALIZADAS",
    resumo:
      "'Atualizada' NÃO significa 'menos de 90 dias'. Quer dizer que ela está no NOVO PADRÃO estabelecido pela lei. Se a sua certidão é antiga (papel velho, formato diferente), você precisa pedir uma nova.",
    avisos: [
      "Não adianta ter uma certidão tirada esse mês mas no padrão antigo. Tem que ser no padrão NOVO.",
      "A certidão NOVA é mais larga, tem QR code e selo digital.",
    ],
    passos: [
      {
        titulo: "Opção 1: Ir no cartório onde foi registrado",
        texto:
          "Se você sabe em qual cartório foi registrado seu nascimento/casamento, vá até lá com seu RG e CPF. Custa em torno de R$ 50 a R$ 100 e fica pronta no mesmo dia ou em poucos dias. Em Ibirité, o Cartório de Registro Civil fica na Rua Coronel Lara, 75 — Centro. Telefone: (31) 3521-4567.",
        link: { url: "tel:+553135214567", label: "Ligar para o cartório" },
      },
      {
        titulo: "Opção 2: Pedir pela internet (Registro Civil Online)",
        texto:
          "Se não sabe qual cartório, ou se o cartório fica em outra cidade, peça pelo site oficial. Eles enviam pelos correios. Demora uns 5 a 10 dias úteis. Atenção: PRECISA chegar antes do prazo do inventário.",
        link: { url: "https://www.registrocivil.org.br", label: "Abrir Registro Civil Online" },
      },
      {
        titulo: "Quanto custa?",
        texto:
          "Se você é considerado de baixa renda, tem DIREITO À CERTIDÃO GRATUITA. Peça e mostre o RG. Se cobrarem, fica entre R$ 50 e R$ 100.",
      },
      {
        titulo: "Pedindo certidão de OUTRA pessoa (ex.: pai/mãe falecido)",
        texto:
          "Pode pedir, mas precisa apresentar seu próprio RG/CPF e provar o parentesco (sua certidão de nascimento, por exemplo).",
      },
    ],
  },
  escanear: {
    slug: "escanear",
    titulo: "Como ESCANEAR documentos pelo celular",
    resumo:
      "Foto de documento NÃO SERVE. Documento tem que estar escaneado (parecendo um xerox digital, reto, sem sombra, fundo branco).",
    avisos: [
      "NÃO MANDE foto de documento impresso. Não vale.",
      "Se você imprimiu de novo um documento que escaneou, mande o ARQUIVO PDF, não a foto da folha.",
    ],
    passos: [
      {
        titulo: "Opção mais fácil: app Microsoft Lens (grátis)",
        texto:
          "Baixe o app 'Microsoft Lens' na loja do seu celular. Abra, escolha 'Documento', mire no papel e ele tira a foto certinha — deixa reto, branco e em PDF. Você pode escanear várias páginas no mesmo PDF.",
        link: { url: "https://play.google.com/store/apps/details?id=com.microsoft.office.officelens", label: "Baixar Microsoft Lens (Android)" },
      },
      {
        titulo: "Alternativa: Google Drive (já vem no Android)",
        texto:
          "Abra o app Google Drive, clique no '+' (mais), escolha 'Digitalizar'. Mire no papel, ele tira a foto e salva como PDF.",
      },
      {
        titulo: "Alternativa: Adobe Scan",
        texto:
          "Outro app grátis que faz a mesma coisa. Funciona em Android e iPhone.",
        link: { url: "https://www.adobe.com/br/acrobat/mobile/scanner-app.html", label: "Adobe Scan" },
      },
      {
        titulo: "Não consigo de jeito nenhum",
        texto:
          "Vai numa PAPELARIA. Em Ibirité, sugiro: Papelaria Central Ibirité (Av. São Paulo, 890 — Centro) ou Papelaria Escolar (Rua das Flores, 222 — Vista Alegre). Custa uns R$ 1 a R$ 3 por página escaneada. Peça pra mandar por e-mail ou WhatsApp pra você.",
      },
      {
        titulo: "Dicas pra escanear bem",
        texto:
          "Use uma mesa de cor escura (o app destaca melhor o papel branco). Boa iluminação (sem sombra do seu corpo em cima do papel). Documento RETO, sem dobra. Cheque se o nome e os números aparecem nítidos antes de mandar.",
      },
    ],
  },
  "meu-inss": {
    slug: "meu-inss",
    titulo: "Como tirar o extrato do INSS (Meu INSS)",
    resumo:
      "Para quem é aposentado, pensionista ou está afastado. O extrato sai na hora pelo aplicativo ou site.",
    avisos: [
      "Você precisa ter conta no Gov.br (mesma conta da Carteira de Trabalho).",
    ],
    passos: [
      {
        titulo: "1. Baixar o aplicativo Meu INSS",
        texto:
          "Na loja do seu celular procure por 'Meu INSS' (ícone laranja, oficial do governo). Instale.",
        link: { url: "https://meu.inss.gov.br", label: "Site Meu INSS" },
      },
      {
        titulo: "2. Entrar com a conta Gov.br",
        texto:
          "Digite seu CPF e a senha do Gov.br.",
      },
      {
        titulo: "3. Pegar o EXTRATO DE PAGAMENTO",
        texto:
          "Na tela principal, clique em 'Extrato de Pagamento de Benefício'. Aparece o nome, número do benefício e os valores. Clique em compartilhar ou salvar como PDF.",
      },
      {
        titulo: "Não consigo entrar / esqueci a senha",
        texto:
          "Ligue 135 (gratuito). É a central do INSS. Eles ajudam a recuperar e podem até enviar o extrato pelos correios.",
        link: { url: "tel:135", label: "Ligar 135" },
      },
    ],
  },
  declaracoes: {
    slug: "declaracoes",
    titulo: "Como preencher e assinar as Declarações",
    resumo:
      "Os documentos do tópico 08 (Declaração de Hipossuficiência, Termo de Consentimento, Questionário Socioeconômico) e a Declaração de Uxória (se for casado) precisam ser IMPRESSOS, PREENCHIDOS À MÃO e ASSINADOS.",
    avisos: [
      "Tem que IMPRIMIR — não dá para preencher pelo celular.",
      "Tem que ser ASSINADO pela própria pessoa (sem assinatura, não vale).",
      "Depois de preencher e assinar, ESCANEIE (não foto) e mande pra Letícia.",
    ],
    passos: [
      {
        titulo: "1. Baixe o modelo correto",
        texto:
          "Vá em 'Declarações para baixar' e baixe o PDF da declaração que você precisa.",
        link: { url: "/declaracoes", label: "Ver declarações para baixar" },
      },
      {
        titulo: "2. Imprima em uma folha branca",
        texto:
          "Se não tem impressora em casa, vá numa papelaria (Papelaria Central Ibirité, Av. São Paulo, 890 — Centro). Custa uns R$ 0,50 por página.",
      },
      {
        titulo: "3. Preencha com CANETA AZUL ou PRETA",
        texto:
          "Preencha todos os campos com letra legível. Não rasure. Se errar, imprima outra folha.",
      },
      {
        titulo: "4. ASSINE",
        texto:
          "Assine no campo correspondente. A assinatura tem que ser igual à do seu RG.",
      },
      {
        titulo: "5. Escaneie e envie",
        texto:
          "Escaneie usando o Microsoft Lens (veja o tutorial 'Como escanear') e mande o PDF pra Letícia.",
      },
    ],
  },
};

export function getTutorial(slug: string) {
  return tutoriais[slug];
}
