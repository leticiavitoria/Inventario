import type { DocCatalogo, Fluxo } from "./tipos";

const youtube = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

const DICA_PAPELARIA = "👉 **Faça a cópia em uma papelaria próxima** usando o documento original. NÃO mande foto. NÃO mande PDF. Só vale entregue **impresso na mão** da Letícia.";

// ============================================================================
// Fluxos reutilizáveis (Gov.br, certidões, bancos)
// ============================================================================

const fluxosGovBr: Record<string, Fluxo> = {
  govbr_inicio: {
    id: "govbr_inicio",
    titulo: "Conta no gov.br",
    intro: "A conta gov.br é uma senha única do governo. Você usa ela para a Carteira de Trabalho Digital, Meu INSS e outros serviços.",
    ramificacao: {
      pergunta: "Você já tem conta gov.br?",
      opcoes: [
        { label: "Sim, já tenho e lembro a senha", vaiPara: "govbr_nivel" },
        { label: "Tenho, mas esqueci a senha", vaiPara: "govbr_recuperar" },
        { label: "Não tenho / nunca usei", vaiPara: "govbr_instalar" },
      ],
    },
  },
  govbr_instalar: {
    id: "govbr_instalar",
    titulo: "Vamos instalar o aplicativo gov.br",
    passos: [
      { emoji: "📱", texto: "Pegue seu celular e deixe ele desbloqueado." },
      { emoji: "🟢", texto: "**No Android**: procure o ícone **Play Store** — um triângulo colorido (azul, vermelho, amarelo, verde). **No iPhone**: procure o ícone **App Store** — letra **A** branca em fundo azul. Toque nele." },
      { emoji: "🔍", texto: "Lá em cima tem um campo de busca com uma lupinha. Toque nele e escreva **gov br**. Depois toque em **buscar** (ou na lupa)." },
      { emoji: "🇧🇷", texto: "Vai aparecer um aplicativo escrito **gov.br** com as cores verde e amarelo (igual à bandeira do Brasil). Toque em **Instalar**." },
      { emoji: "⏳", texto: "Espere baixar. Pode demorar uns 2 a 3 minutos. Não desligue o celular." },
      { emoji: "▶️", texto: "Quando terminar, toque em **Abrir** (no mesmo lugar onde estava o botão 'Instalar')." },
    ],
    videoYoutube: youtube("como baixar aplicativo gov.br no celular android passo a passo"),
    ramificacao: {
      pergunta: "Conseguiu instalar e abrir o aplicativo?",
      opcoes: [
        { label: "Sim, está aberto na minha tela", vaiPara: "govbr_criar_conta" },
        { label: "Não consegui — me ajude", vaiPara: "govbr_ajuda" },
      ],
    },
  },
  govbr_criar_conta: {
    id: "govbr_criar_conta",
    titulo: "Vamos criar sua conta",
    passos: [
      { emoji: "👆", texto: "Na primeira tela, toque em **Entrar com gov.br**." },
      { emoji: "🔢", texto: "Vai pedir seu **CPF**. Digite só os números (sem pontos nem traço)." },
      { emoji: "➡️", texto: "Toque em **Continuar**." },
      { emoji: "📝", texto: "Se aparecer **'Crie sua conta gov.br'**, toque nessa opção." },
      { emoji: "📧", texto: "Vai pedir um **e-mail** e o **número do seu celular**. Digite os seus. Se você não tem e-mail, pode pular essa parte e fazer só pelo celular." },
      { emoji: "💬", texto: "O governo vai mandar um **código por SMS** pro seu celular. Abra suas mensagens, copie o código e cole no aplicativo." },
      { emoji: "🔐", texto: "Crie uma **senha** com pelo menos 8 letras/números. **ANOTE NUM PAPEL** essa senha — você vai precisar várias vezes." },
      { emoji: "✅", texto: "Pronto, sua conta gov.br está criada!" },
    ],
    videoYoutube: youtube("como criar conta gov.br pelo celular passo a passo 2025"),
    ramificacao: {
      pergunta: "E agora?",
      opcoes: [{ label: "Continuar — preciso aumentar o nível da conta", vaiPara: "govbr_nivel" }],
    },
  },
  govbr_recuperar: {
    id: "govbr_recuperar",
    titulo: "Recuperar sua senha",
    passos: [
      { emoji: "📱", texto: "Abra o aplicativo gov.br no celular." },
      { emoji: "👆", texto: "Toque em **Entrar com gov.br**." },
      { emoji: "🔢", texto: "Digite seu CPF e toque em **Continuar**." },
      { emoji: "❓", texto: "Vai aparecer **'Esqueceu sua senha?'** logo abaixo do campo da senha. Toque nessa frase." },
      { emoji: "📧", texto: "Escolha receber o código no **e-mail** ou no **celular**." },
      { emoji: "💬", texto: "Digite o código que chegou e crie uma **senha nova**. Anote num papel." },
    ],
    ramificacao: {
      pergunta: "Conseguiu recuperar?",
      opcoes: [
        { label: "Sim, entrei na conta", vaiPara: "govbr_nivel" },
        { label: "Não consegui de jeito nenhum", vaiPara: "govbr_ajuda" },
      ],
    },
  },
  govbr_nivel: {
    id: "govbr_nivel",
    titulo: "Aumentar o nível da sua conta",
    intro: "Sua conta gov.br tem 3 níveis: **Bronze, Prata e Ouro**. Para usar a Carteira de Trabalho Digital e o Meu INSS, ela precisa estar em **Prata** ou **Ouro**.",
    passos: [
      { emoji: "📱", texto: "Abra o aplicativo gov.br e entre com sua senha." },
      { emoji: "👤", texto: "Toque no seu **nome** lá em cima na tela." },
      { emoji: "🏆", texto: "Toque em **Selos de confiabilidade** (ou **Aumentar nível da conta**)." },
      { emoji: "📸", texto: "**Caminho mais rápido**: escolha **Reconhecimento facial pela CNH** ou **Validação facial gov.br**. Você vai tirar uma selfie movendo a cabeça (o app pede pra olhar de um lado pro outro). Demora 2 minutos." },
      { emoji: "🏦", texto: "**Caminho alternativo**: se você tem conta no Banco do Brasil, Caixa, Bradesco, Santander, Itaú, Sicoob, BRB ou Banrisul, escolha **Validação por banco**. O app vai abrir o app do seu banco pra confirmar sua identidade." },
      { emoji: "✅", texto: "Quando aparecer **selo PRATA** ou **OURO** no seu perfil, você está pronto." },
    ],
    videoYoutube: youtube("como subir nivel gov.br para prata ouro reconhecimento facial"),
    ramificacao: {
      pergunta: "Sua conta já está em nível Prata ou Ouro?",
      opcoes: [{ label: "Sim, pronto — continuar", vaiPara: "fim" }],
    },
  },
  govbr_ajuda: {
    id: "govbr_ajuda",
    titulo: "Precisa de ajuda?",
    intro: "Se você não consegue de jeito nenhum:",
    passos: [
      { emoji: "📞", texto: "Ligue para a central do gov.br no número **[156](tel:156)** (gratuito de qualquer telefone). Eles ajudam a recuperar conta e tirar dúvidas." },
      { emoji: "🤖", texto: "Use a caixinha **'Ainda tem dúvida?'** logo abaixo, escrevendo o que aconteceu e tocando no botão pra perguntar ao ChatGPT." },
    ],
  },
};

const fluxosCertidao = (qual: "nascimento" | "casamento" | "obito"): Record<string, Fluxo> => {
  const nomeCert = qual === "nascimento" ? "certidão de nascimento" : qual === "casamento" ? "certidão de casamento" : "certidão de óbito";
  return {
    cert_inicio: {
      id: "cert_inicio",
      ramificacao: {
        pergunta: `Sua ${nomeCert} está no **NOVO PADRÃO** (papel maior, com QR code preto e branco no canto e selo digital)?`,
        opcoes: [
          { label: "Sim, é nova", vaiPara: "cert_xerox" },
          { label: "Não, é antiga / não sei", vaiPara: "cert_atualizar" },
        ],
      },
    },
    cert_xerox: {
      id: "cert_xerox",
      titulo: "Caminho rápido — só tirar xerox",
      passos: [
        { emoji: "📄", texto: `Pegue a sua ${nomeCert} **original**.` },
        { emoji: "🚶", texto: "Vá numa papelaria perto da sua casa." },
        { emoji: "🖨️", texto: "Peça **xerox da frente e do verso** (se tiver verso)." },
        { emoji: "✅", texto: "Confira se está legível. Pronto!" },
      ],
    },
    cert_atualizar: {
      id: "cert_atualizar",
      titulo: "Precisa atualizar a certidão",
      intro: "Calma — a Defensoria emite **gratuitamente** para pessoas de baixa renda. Você se enquadra nisso (por isso estamos no processo de inventário pela Defensoria).",
      ramificacao: {
        pergunta: "Você sabe em qual cartório foi feito o registro?",
        opcoes: [
          { label: "Sim, sei", vaiPara: "cert_cartorio" },
          { label: "Não, não lembro", vaiPara: "cert_online" },
        ],
      },
    },
    cert_cartorio: {
      id: "cert_cartorio",
      titulo: "Indo no cartório",
      passos: [
        { emoji: "📞", texto: "**Antes de sair de casa**, ligue para o cartório e confirme: 1) horário de funcionamento, 2) se pode pedir a certidão atualizada gratuita pela Defensoria. Diga: *'Quero a certidão atualizada e tenho direito à gratuidade — sou atendido pela Defensoria Pública'*." },
        { emoji: "🪪", texto: "Leve: **RG**, **CPF** (ou o RG se ele já tem o CPF), e o que mais o cartório pedir." },
        { emoji: "🖊️", texto: "Lá, preencha o pedido e diga que quer a **2ª via no novo padrão**." },
        { emoji: "⏳", texto: "Geralmente fica pronta no mesmo dia ou em poucos dias úteis." },
        { emoji: "🖨️", texto: "Quando receber, leve numa papelaria e tire **xerox** da frente e do verso." },
      ],
    },
    cert_online: {
      id: "cert_online",
      titulo: "Pedir pela internet",
      intro: "O site oficial **Registro Civil Online** faz busca em todos os cartórios do Brasil e envia a certidão pelos correios.",
      passos: [
        { emoji: "🌐", texto: "Entre no site [registrocivil.org.br](https://www.registrocivil.org.br) (toque no link)." },
        { emoji: "👆", texto: "Toque em **'Solicitar Certidão'** ou **'Pedir certidão de 2ª via'**." },
        { emoji: "📝", texto: "Preencha com seu nome completo, nome dos pais e data de nascimento (ou as informações que o site pedir)." },
        { emoji: "📬", texto: "Coloque seu endereço — a certidão chega pelo correio em **5 a 10 dias úteis**." },
        { emoji: "⚠️", texto: "**Atenção ao prazo do inventário**! Se faltam poucos dias, prefira ir no cartório." },
        { emoji: "🖨️", texto: "Quando chegar, leve na papelaria e tire xerox." },
      ],
    },
  };
};

const fluxosCtpsDigital: Record<string, Fluxo> = {
  ...fluxosGovBr,
  ctps_inicio: {
    id: "ctps_inicio",
    intro: "Você vai precisar de: 1) celular com internet, 2) seu CPF, 3) uma conta gov.br em nível **Prata ou Ouro**.",
    ramificacao: {
      pergunta: "Você já tem conta gov.br em nível PRATA ou OURO?",
      opcoes: [
        { label: "Sim, já tenho", vaiPara: "ctps_instalar" },
        { label: "Não tenho / não sei", vaiPara: "govbr_inicio" },
      ],
    },
  },
  ctps_instalar: {
    id: "ctps_instalar",
    titulo: "Instalar o aplicativo Carteira de Trabalho Digital",
    passos: [
      { emoji: "📱", texto: "Abra a **Play Store** (Android — triângulo colorido) ou a **App Store** (iPhone — letra A azul)." },
      { emoji: "🔍", texto: "No campo de busca, escreva **carteira de trabalho digital** e toque na lupa." },
      { emoji: "💼", texto: "Procure o aplicativo **azul** com o desenho de uma **carteirinha** (oficial do Ministério do Trabalho). Toque em **Instalar**." },
      { emoji: "⏳", texto: "Espere baixar." },
      { emoji: "▶️", texto: "Toque em **Abrir**." },
    ],
    videoYoutube: youtube("como baixar aplicativo carteira de trabalho digital celular"),
    ramificacao: {
      pergunta: "Instalou e abriu o app?",
      opcoes: [{ label: "Sim, vamos gerar o documento", vaiPara: "ctps_gerar" }],
    },
  },
  ctps_gerar: {
    id: "ctps_gerar",
    titulo: "Gerar o documento da Carteira de Trabalho",
    passos: [
      { emoji: "👆", texto: "Toque em **Entrar com gov.br**." },
      { emoji: "🔢", texto: "Digite seu **CPF** e a senha do gov.br. Toque em **Continuar**." },
      { emoji: "🏠", texto: "Vai abrir a tela principal. Lá no menu de baixo, toque em **Contratos**." },
      { emoji: "📜", texto: "Vai aparecer a lista dos seus empregos (do mais novo para o mais velho)." },
      { emoji: "📤", texto: "Lá em cima, no canto direito da tela, procure um botãozinho com **3 pontinhos** (⋮) ou um desenho de **seta saindo de um quadrado** (📤). Toque nele." },
      { emoji: "💾", texto: "No menu que aparece, toque em **Compartilhar PDF** ou **Exportar PDF**." },
      { emoji: "☑️", texto: "Vai aparecer uma lista com opções: **Contratos**, **Alterações**, **Anotações**, **FGTS**, **Observações**. **MARQUE TODAS**. NÃO deixe nenhuma sem marcar." },
      { emoji: "✅", texto: "Toque em **Gerar PDF** (ou **Confirmar**)." },
      { emoji: "📲", texto: "Quando o PDF estiver pronto, toque em **Compartilhar** e escolha **WhatsApp**. Procure seu próprio nome (aparece como **'Você'** no topo) e envie pra você mesmo." },
    ],
    videoYoutube: youtube("como gerar pdf completo carteira trabalho digital todas paginas 2025"),
    ramificacao: {
      pergunta: "Conseguiu gerar e mandar pro seu WhatsApp?",
      opcoes: [
        { label: "Sim, está no meu WhatsApp", vaiPara: "ctps_imprimir" },
        { label: "Não consegui — me ajude", vaiPara: "govbr_ajuda" },
      ],
    },
  },
  ctps_imprimir: {
    id: "ctps_imprimir",
    titulo: "Imprimir o documento",
    passos: [
      { emoji: "🚶", texto: "Vá numa papelaria perto da sua casa **com o seu celular**." },
      { emoji: "💬", texto: "Diga ao atendente: *'Preciso imprimir um arquivo que está no meu WhatsApp.'*" },
      { emoji: "📤", texto: "Abra a conversa **'Você'** no seu WhatsApp, toque no arquivo PDF e escolha **Compartilhar** ou **Baixar**." },
      { emoji: "🖨️", texto: "Peça pra imprimir **TODAS as páginas**, em **preto e branco** (mais barato e funciona)." },
      { emoji: "✅", texto: "Confira se imprimiu tudo e está legível." },
    ],
  },
};

const fluxosMeuInss: Record<string, Fluxo> = {
  ...fluxosGovBr,
  inss_inicio: {
    id: "inss_inicio",
    intro: "Você vai precisar de: 1) celular com internet, 2) sua conta gov.br.",
    ramificacao: {
      pergunta: "Você já tem conta gov.br?",
      opcoes: [
        { label: "Sim, já tenho", vaiPara: "inss_instalar" },
        { label: "Não tenho", vaiPara: "govbr_inicio" },
      ],
    },
  },
  inss_instalar: {
    id: "inss_instalar",
    titulo: "Instalar o aplicativo Meu INSS",
    passos: [
      { emoji: "📱", texto: "Abra a **Play Store** (Android) ou **App Store** (iPhone)." },
      { emoji: "🔍", texto: "Escreva **meu inss** na busca e toque na lupa." },
      { emoji: "🏛️", texto: "Procure o app **laranja** escrito **Meu INSS** (oficial do governo). Toque em **Instalar**." },
      { emoji: "▶️", texto: "Quando terminar, toque em **Abrir**." },
    ],
    ramificacao: {
      pergunta: "Instalou e abriu?",
      opcoes: [{ label: "Sim, continuar", vaiPara: "inss_extrato" }],
    },
  },
  inss_extrato: {
    id: "inss_extrato",
    titulo: "Gerar o extrato do benefício",
    passos: [
      { emoji: "👆", texto: "Toque em **Entrar com gov.br**." },
      { emoji: "🔢", texto: "Digite seu CPF e a senha do gov.br." },
      { emoji: "🏠", texto: "Na tela principal, procure por **'Extrato de Pagamento de Benefício'** (ou **'Extrato de Pagamento'**). Toque nele." },
      { emoji: "📅", texto: "Vai aparecer a lista dos últimos pagamentos. Procure o **mês mais recente** e toque em cima." },
      { emoji: "👀", texto: "Confira: o documento tem que ter seu **nome**, o **número do benefício** e o **valor** que você recebe." },
      { emoji: "📤", texto: "Toque no botão **Compartilhar** (geralmente no canto superior direito, ícone de seta saindo de um quadrado)." },
      { emoji: "📲", texto: "Mande pra você mesmo no WhatsApp (escolha **WhatsApp** → **Você**)." },
      { emoji: "🖨️", texto: "Leve o celular na papelaria e peça pra imprimir." },
    ],
    videoYoutube: youtube("como tirar extrato pagamento beneficio meu inss aplicativo celular"),
    ramificacao: {
      pergunta: "Conseguiu?",
      opcoes: [
        { label: "Sim, tudo certo", vaiPara: "fim" },
        { label: "Não consegui — alternativa", vaiPara: "inss_alternativa" },
      ],
    },
  },
  inss_alternativa: {
    id: "inss_alternativa",
    titulo: "Alternativa: ligar para o INSS",
    passos: [
      { emoji: "📞", texto: "Ligue **[135](tel:135)** — é a central de atendimento do INSS (gratuita de qualquer telefone)." },
      { emoji: "🗣️", texto: "Diga: *'Preciso do extrato de pagamento do meu benefício.'*" },
      { emoji: "📬", texto: "Eles podem enviar pelos **correios** ou orientar a buscar numa agência mais perto de você." },
    ],
  },
};

const fluxosExtratosBancarios: Record<string, Fluxo> = {
  banco_inicio: {
    id: "banco_inicio",
    intro: "Você precisa do extrato dos **3 últimos meses** de **TODAS** as suas contas. Se você tem conta em mais de um banco (corrente, poupança, Nubank, Inter, etc.), tem que tirar de **cada uma**.",
    ramificacao: {
      pergunta: "Qual banco você usa? (Toque no seu — repita o processo se tiver em mais de um)",
      opcoes: [
        { label: "Caixa Econômica", vaiPara: "banco_caixa" },
        { label: "Banco do Brasil", vaiPara: "banco_bb" },
        { label: "Nubank", vaiPara: "banco_nubank" },
        { label: "Outro banco (Bradesco, Itaú, Santander, Inter, etc.)", vaiPara: "banco_generico" },
      ],
    },
  },
  banco_caixa: {
    id: "banco_caixa",
    titulo: "Extrato — Caixa Econômica",
    passos: [
      { emoji: "📱", texto: "Abra o aplicativo **CAIXA** no celular (ícone laranja com a logo da Caixa)." },
      { emoji: "🔓", texto: "Faça login com sua senha (ou biometria)." },
      { emoji: "📊", texto: "Toque em **Extrato** (geralmente em destaque na tela principal)." },
      { emoji: "📅", texto: "Toque em **Período** ou no ícone de calendário e escolha **últimos 90 dias** ou **3 meses**." },
      { emoji: "📤", texto: "Toque em **Compartilhar** (ícone de seta) e escolha **WhatsApp** → **Você**." },
      { emoji: "🖨️", texto: "Leve o celular na papelaria e mande imprimir." },
    ],
    videoYoutube: youtube("como tirar extrato 3 meses aplicativo caixa economica"),
  },
  banco_bb: {
    id: "banco_bb",
    titulo: "Extrato — Banco do Brasil",
    passos: [
      { emoji: "📱", texto: "Abra o aplicativo **Banco do Brasil** (ícone amarelo)." },
      { emoji: "🔓", texto: "Faça login." },
      { emoji: "📊", texto: "Toque em **Extrato** na tela principal." },
      { emoji: "📅", texto: "Procure **Período** e escolha **90 dias** ou **3 meses**." },
      { emoji: "📤", texto: "Toque em **Compartilhar** e mande pro seu WhatsApp." },
      { emoji: "🖨️", texto: "Imprima na papelaria." },
    ],
    videoYoutube: youtube("como tirar extrato 90 dias aplicativo banco do brasil"),
  },
  banco_nubank: {
    id: "banco_nubank",
    titulo: "Extrato — Nubank",
    passos: [
      { emoji: "📱", texto: "Abra o aplicativo **Nubank** (ícone roxo)." },
      { emoji: "🔓", texto: "Faça login." },
      { emoji: "📊", texto: "Na tela principal, toque em **Conta** → **Histórico**." },
      { emoji: "📅", texto: "Toque no ícone de **filtro** (linhas horizontais) lá em cima." },
      { emoji: "📆", texto: "Escolha o período dos **últimos 3 meses**." },
      { emoji: "📤", texto: "Toque em **Compartilhar comprovante** ou **Exportar**." },
      { emoji: "📲", texto: "Mande pro seu WhatsApp." },
      { emoji: "🖨️", texto: "Imprima na papelaria." },
    ],
    videoYoutube: youtube("como tirar extrato 3 meses nubank pdf compartilhar"),
  },
  banco_generico: {
    id: "banco_generico",
    titulo: "Outro banco",
    intro: "Em quase todos os bancos o caminho é parecido:",
    passos: [
      { emoji: "📱", texto: "Abra o aplicativo do seu banco e faça login." },
      { emoji: "🔍", texto: "Procure por **Extrato**, **Histórico** ou **Movimentações**. Geralmente está em destaque na tela principal." },
      { emoji: "📅", texto: "Toque em **Período** ou **Filtro** e escolha **3 meses** ou **90 dias**." },
      { emoji: "📤", texto: "Procure por um botão de **Compartilhar** ou **Baixar PDF**." },
      { emoji: "📲", texto: "Mande o arquivo pro seu WhatsApp." },
      { emoji: "🖨️", texto: "Leve o celular na papelaria e peça pra imprimir." },
    ],
    videoYoutube: youtube("como tirar extrato bancário 3 meses pelo aplicativo celular"),
  },
};

// ============================================================================
// Catálogo principal
// ============================================================================

export const catalogoDocs: Record<string, DocCatalogo> = {
  rg_cpf: {
    id: "rg_cpf",
    nome: "Cópia do RG e CPF",
    descricao: "Documento de identidade com foto e o número do CPF.",
    dicaCopia: DICA_PAPELARIA,
    avisos: [
      "Se o seu RG já tem o número do **CPF impresso nele**, ele serve pelos dois.",
      "Tirar xerox **dos dois lados** do RG.",
    ],
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "📄", texto: "Pegue o **RG original**." },
          { emoji: "👀", texto: "Olhe o RG: ele tem o número do **CPF** impresso? Se sim, vai servir pelos dois — você não precisa do cartão de CPF separado." },
          { emoji: "🚶", texto: "Vá numa papelaria perto da sua casa." },
          { emoji: "🖨️", texto: "Peça **xerox da frente e do verso** do RG." },
          { emoji: "🪪", texto: "Se você tem o cartão de CPF separado, leve também e tire xerox." },
          { emoji: "✅", texto: "Confira se está legível antes de sair da papelaria." },
        ],
      },
    },
  },

  certidao_nascimento: {
    id: "certidao_nascimento",
    nome: "Certidão de nascimento",
    descricao: "Para quem é solteiro.",
    dicaCopia: DICA_PAPELARIA,
    avisos: [
      "Tem que estar no **NOVO PADRÃO** (papel maior, com QR code e selo digital).",
      "Pelo processo da Defensoria, você tem direito à **2ª via gratuita** por ser de baixa renda.",
    ],
    fluxoInicial: "cert_inicio",
    fluxos: fluxosCertidao("nascimento"),
  },

  certidao_casamento: {
    id: "certidao_casamento",
    nome: "Certidão de casamento",
    descricao: "Para quem é casado, divorciado, separado ou viúvo.",
    dicaCopia: DICA_PAPELARIA,
    avisos: [
      "Tem que estar no **NOVO PADRÃO** (com QR code).",
      "Se você é **divorciado**: a certidão tem que ter a **AVERBAÇÃO do divórcio** anotada.",
      "Pelo processo da Defensoria, você tem direito à **2ª via gratuita**.",
    ],
    fluxoInicial: "cert_inicio",
    fluxos: fluxosCertidao("casamento"),
  },

  comprovante_residencia: {
    id: "comprovante_residencia",
    nome: "Comprovante de residência",
    descricao: "Conta de luz, água, internet ou cartão.",
    dicaCopia: DICA_PAPELARIA,
    avisos: [
      "Tem que estar **NO SEU NOME**.",
      "Tem que ser **DESTE MÊS**.",
    ],
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        ramificacao: {
          pergunta: "Você tem alguma conta (luz, água, internet, cartão) no seu nome e deste mês?",
          opcoes: [
            { label: "Sim, tenho", vaiPara: "tem" },
            { label: "Não, todas as contas estão no nome de outra pessoa", vaiPara: "nao_tem" },
          ],
        },
      },
      tem: {
        id: "tem",
        passos: [
          { emoji: "📄", texto: "Pegue a conta original mais recente (deste mês)." },
          { emoji: "👀", texto: "Confira: está no **seu nome**? Tem a **data deste mês**? Mostra o **CEP**?" },
          { emoji: "🚶", texto: "Vá numa papelaria e tire xerox." },
        ],
      },
      nao_tem: {
        id: "nao_tem",
        titulo: "Declaração de residência",
        passos: [
          { emoji: "🖋️", texto: "Peça à pessoa em cujo nome estão as contas (pai, mãe, irmão, etc.) pra fazer uma **Declaração de Residência** dizendo que você mora junto." },
          { emoji: "🏛️", texto: "Essa pessoa precisa **reconhecer firma** num cartório (vai junto com o RG e a declaração assinada)." },
          { emoji: "🚶", texto: "Junte: a declaração com firma reconhecida + a conta no nome dela. Vá numa papelaria e tire xerox dos dois." },
        ],
      },
    },
  },

  ctps_fisica: {
    id: "ctps_fisica",
    nome: "Carteira de Trabalho física",
    descricao: "A carteira de trabalho antiga, azulzinha de papel.",
    dicaCopia: DICA_PAPELARIA,
    avisos: [
      "Tire xerox apenas destas páginas: **página da foto**, **página dos dados pessoais**, **página do último contrato de trabalho** e a **página seguinte**.",
    ],
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "📘", texto: "Pegue sua carteira de trabalho física." },
          { emoji: "📖", texto: "Abra na **página da sua foto** (geralmente nas primeiras páginas)." },
          { emoji: "📖", texto: "Identifique a **página dos seus dados** (nome, filiação, RG, etc.)." },
          { emoji: "📖", texto: "Vá até a **última anotação de contrato de trabalho** — e a **página seguinte** dela (em branco ou com a próxima anotação)." },
          { emoji: "🚶", texto: "Vá na papelaria com essas 4 páginas em mente." },
          { emoji: "🖨️", texto: "Peça xerox **só dessas páginas**, cada uma numa folha." },
        ],
      },
    },
  },

  ctps_digital: {
    id: "ctps_digital",
    nome: "Carteira de Trabalho Digital",
    descricao: "É o aplicativo oficial do governo. Substitui a carteira de papel.",
    dicaCopia: DICA_PAPELARIA,
    avisos: [
      "Você precisa de **conta gov.br** no nível **PRATA ou OURO**.",
      "Tem que conter **TODAS as páginas**. Print de tela NÃO vale.",
    ],
    fluxoInicial: "ctps_inicio",
    fluxos: fluxosCtpsDigital,
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
    modeloHref: "/modelos/declaracao-inexistencia-ctps.pdf",
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "⬇️", texto: "Toque em **Baixar modelo** logo abaixo. Vai abrir um PDF." },
          { emoji: "📲", texto: "No canto da tela toque em **Compartilhar** e mande o PDF pro seu próprio WhatsApp (contato **'Você'**)." },
          { emoji: "🚶", texto: "Vá numa papelaria com o celular." },
          { emoji: "🖨️", texto: "Peça pra **imprimir o arquivo que está no seu WhatsApp**." },
          { emoji: "✍️", texto: "Preencha à mão com caneta **azul ou preta**: nome, CPF, RG, endereço, data." },
          { emoji: "✏️", texto: "**Assine igual ao seu RG.**" },
          { emoji: "👀", texto: "Confira: está legível? Tem assinatura?" },
        ],
      },
    },
  },

  contracheques: {
    id: "contracheques",
    nome: "Contracheques dos últimos 3 meses",
    descricao: "Para quem trabalha de carteira assinada.",
    dicaCopia: DICA_PAPELARIA,
    avisos: ["Os **3 últimos meses seguidos**, não pode pular nenhum."],
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "🏢", texto: "Peça os contracheques ao **RH** ou ao seu chefe." },
          { emoji: "📧", texto: "Muitas empresas mandam por e-mail todo mês — procure no seu e-mail por palavras como **'contracheque'**, **'holerite'** ou **'demonstrativo de pagamento'**." },
          { emoji: "📲", texto: "Mande os arquivos pro seu WhatsApp." },
          { emoji: "🖨️", texto: "Leve o celular na papelaria e imprima cada mês numa folha separada." },
        ],
      },
    },
  },

  contracheques_antes_inss: {
    id: "contracheques_antes_inss",
    nome: "3 últimos contracheques antes do afastamento",
    descricao: "Para quem está afastado pelo INSS.",
    avisos: ["São os contracheques de **antes** do afastamento — não os atuais."],
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "🏢", texto: "Ligue para o **RH** da empresa onde você trabalhava antes do afastamento. Diga: *'Preciso dos 3 últimos contracheques de antes do meu afastamento pelo INSS.'*" },
          { emoji: "📧", texto: "Procure também no seu e-mail antigo." },
          { emoji: "📲", texto: "Mande os arquivos pro seu WhatsApp." },
          { emoji: "🖨️", texto: "Imprima na papelaria." },
        ],
      },
    },
  },

  extratos_bancarios: {
    id: "extratos_bancarios",
    nome: "Extratos bancários dos últimos 3 meses",
    descricao: "De TODAS as contas que você tem.",
    dicaCopia: DICA_PAPELARIA,
    avisos: [
      "**TODAS as contas**: corrente, poupança, conta digital (Nubank, Inter, PicPay, C6, Mercado Pago, etc.).",
      "Os **3 últimos meses completos** de cada conta.",
    ],
    fluxoInicial: "banco_inicio",
    fluxos: fluxosExtratosBancarios,
  },

  extrato_inss: {
    id: "extrato_inss",
    nome: "Extrato de benefício do INSS",
    descricao: "Para aposentados, pensionistas ou afastados pelo INSS.",
    dicaCopia: DICA_PAPELARIA,
    avisos: ["Se não conseguir entrar, ligue **[135](tel:135)** (gratuito) — central do INSS."],
    fluxoInicial: "inss_inicio",
    fluxos: fluxosMeuInss,
  },

  declaracao_ausencia_renda: {
    id: "declaracao_ausencia_renda",
    nome: "Declaração de Ausência de Renda Formal",
    descricao: "Para quem está desempregado ou trabalha por conta própria (informal).",
    avisos: [
      "Preencher à mão com **caneta azul ou preta**.",
      "**Assinar igual ao RG.**",
    ],
    modeloHref: "/modelos/declaracao-ausencia-renda.pdf",
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "⬇️", texto: "Toque em **Baixar modelo** logo abaixo." },
          { emoji: "📲", texto: "Compartilhe o PDF pro seu próprio WhatsApp (contato **'Você'**)." },
          { emoji: "🚶", texto: "Vá numa papelaria com o celular." },
          { emoji: "🖨️", texto: "Peça pra **imprimir o arquivo do seu WhatsApp**." },
          { emoji: "✍️", texto: "Preencha à mão com caneta azul ou preta." },
          { emoji: "✏️", texto: "**Assine igual ao RG.**" },
        ],
      },
    },
  },

  declaracao_uxoria: {
    id: "declaracao_uxoria",
    nome: "Declaração de Uxória",
    descricao: "Para quem é casado ou em união estável. É a autorização do cônjuge.",
    avisos: [
      "Quem assina é o **cônjuge** (esposo ou esposa), não você.",
      "Preencher à mão com **caneta azul ou preta**.",
      "**Assinatura igual ao RG do cônjuge.**",
    ],
    modeloHref: "/modelos/declaracao-uxoria.pdf",
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "⬇️", texto: "Toque em **Baixar modelo** logo abaixo." },
          { emoji: "📲", texto: "Compartilhe o PDF pro seu WhatsApp." },
          { emoji: "🚶", texto: "Vá numa papelaria e imprima." },
          { emoji: "✍️", texto: "Preencha com os dados do **cônjuge** (esposo/esposa): nome completo, CPF, RG, data do casamento, regime de bens." },
          { emoji: "✏️", texto: "**O cônjuge assina** — não é você que assina." },
          { emoji: "👀", texto: "Confira: a assinatura está parecida com a do RG dele/dela?" },
        ],
      },
    },
  },

  declaracao_hipossuficiencia: {
    id: "declaracao_hipossuficiencia",
    nome: "Declaração de Hipossuficiência",
    descricao: "Todos preenchem. Declara que você não tem condições de pagar advogado particular.",
    avisos: [
      "Preencher à mão com caneta azul ou preta.",
      "**Assinatura igual ao RG.**",
    ],
    modeloHref: "/modelos/declaracao-hipossuficiencia.pdf",
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "⬇️", texto: "Toque em **Baixar modelo** logo abaixo." },
          { emoji: "📲", texto: "Mande o PDF pro seu WhatsApp." },
          { emoji: "🚶", texto: "Imprima na papelaria." },
          { emoji: "✍️", texto: "Preencha à mão: **nome completo**, **CPF**, **RG**, **endereço**, **estado civil**, **profissão** (mesmo que esteja sem trabalho, escreva sua última profissão), **renda mensal** (se está sem renda, escreva 'sem renda')." },
          { emoji: "✏️", texto: "**Assine.**" },
        ],
      },
    },
  },

  termo_consentimento: {
    id: "termo_consentimento",
    nome: "Termo de Consentimento",
    descricao: "Todos preenchem. Autoriza a Defensoria a usar seus dados no processo.",
    avisos: [
      "Marque **todas as opções** de consentimento.",
      "**Assinatura igual ao RG.**",
    ],
    modeloHref: "/modelos/termo-consentimento.pdf",
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "⬇️", texto: "Toque em **Baixar modelo**." },
          { emoji: "📲", texto: "Mande pro seu WhatsApp e imprima na papelaria." },
          { emoji: "✍️", texto: "Preencha: nome, CPF, RG e endereço completo." },
          { emoji: "☑️", texto: "**Marque todas as opções** de consentimento." },
          { emoji: "✏️", texto: "**Assine.**" },
        ],
      },
    },
  },

  questionario_socioeconomico: {
    id: "questionario_socioeconomico",
    nome: "Questionário Socioeconômico",
    descricao: "Todos preenchem. Perguntas sobre renda, moradia e gastos da família.",
    avisos: [
      "**Responda TODAS as perguntas**, mesmo as que parecem óbvias.",
      "**Assinatura igual ao RG no final.**",
    ],
    modeloHref: "/modelos/questionario-socioeconomico.pdf",
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "⬇️", texto: "Toque em **Baixar modelo**." },
          { emoji: "📲", texto: "Mande pro seu WhatsApp e imprima TODAS as páginas na papelaria." },
          { emoji: "✍️", texto: "Responda **uma pergunta por vez**, à mão, com calma. Não pule nenhuma." },
          { emoji: "👨‍👩‍👧", texto: "Perguntas comuns: quantas pessoas moram com você, quanto cada um ganha, quanto gasta com aluguel, luz, água, comida, remédios, e se tem alguém doente ou com deficiência na casa." },
          { emoji: "✏️", texto: "**Assine no final.**" },
        ],
      },
    },
  },

  certidao_obito_pai: {
    id: "certidao_obito_pai",
    nome: "Certidão de óbito do seu pai",
    descricao: "Para netos cujo pai (herdeiro) já faleceu.",
    dicaCopia: DICA_PAPELARIA,
    avisos: ["Tem que estar no **NOVO PADRÃO**."],
    fluxoInicial: "cert_inicio",
    fluxos: fluxosCertidao("obito"),
  },

  cpf_pai: {
    id: "cpf_pai",
    nome: "CPF do seu pai falecido",
    descricao: "Cartão CPF ou comprovante de inscrição.",
    dicaCopia: DICA_PAPELARIA,
    avisos: ["Tire xerox do cartão; se não tem, imprima o comprovante do site da Receita Federal."],
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        ramificacao: {
          pergunta: "Você tem o cartão de CPF do seu pai?",
          opcoes: [
            { label: "Sim, tenho o cartão", vaiPara: "tem" },
            { label: "Não tenho", vaiPara: "nao_tem" },
          ],
        },
      },
      tem: {
        id: "tem",
        passos: [
          { emoji: "🪪", texto: "Pegue o cartão original." },
          { emoji: "🚶", texto: "Vá numa papelaria." },
          { emoji: "🖨️", texto: "Tire xerox." },
        ],
      },
      nao_tem: {
        id: "nao_tem",
        passos: [
          { emoji: "🌐", texto: "Entre no site da [Receita Federal](https://servicos.receita.fazenda.gov.br/Servicos/CPF/ImpressaoComprovante/ConsultaImpressao.asp)." },
          { emoji: "🔢", texto: "Digite o **CPF e a data de nascimento** do seu pai." },
          { emoji: "🖨️", texto: "Vai aparecer um comprovante. Toque em **Imprimir** ou salve como PDF e mande pro WhatsApp pra imprimir na papelaria." },
        ],
      },
    },
  },

  certidao_nascimento_casamento_pai: {
    id: "certidao_nascimento_casamento_pai",
    nome: "Certidão de nascimento ou casamento do seu pai falecido",
    descricao: "Se era solteiro: certidão de nascimento. Se era casado/divorciado: certidão de casamento (com averbação do divórcio).",
    dicaCopia: DICA_PAPELARIA,
    avisos: ["Tem que estar no **NOVO PADRÃO**."],
    fluxoInicial: "cert_inicio",
    fluxos: fluxosCertidao("casamento"),
  },

  certidao_casamento_patricia: {
    id: "certidao_casamento_patricia",
    nome: "Certidão de casamento ATUALIZADA da Patrícia com o Marcos",
    descricao: "É essa que substitui a certidão de nascimento do Marcos.",
    avisos: [
      "Quem pega é a **Patrícia** (segunda ex-esposa do Marcos).",
      "Tem que ter a **averbação do divórcio**.",
      "Tem que estar no **NOVO PADRÃO**.",
    ],
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "📞", texto: "Ligue para a **Patrícia** ou passe na casa dela. Explique que é pra finalizar o inventário do Marcos." },
          { emoji: "💬", texto: "Diga: *'Patrícia, preciso da sua certidão de casamento atualizada com o Marcos, com a averbação do divórcio, no novo padrão.'*" },
          { emoji: "🏛️", texto: "Ela vai no cartório onde casaram e pede a 2ª via atualizada. Tem direito à **gratuidade** (cônjuge de pessoa de baixa renda)." },
          { emoji: "🚶", texto: "Quando ela conseguir, pegue o **original** e leve numa papelaria pra tirar xerox." },
        ],
      },
    },
  },

  // Docs para moradores +18
  m_contracheques: {
    id: "m_contracheques",
    nome: "Contracheques dos últimos 3 meses",
    descricao: "",
    dicaCopia: DICA_PAPELARIA,
    avisos: ["Os **3 últimos meses seguidos**."],
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "🏢", texto: "Peça ao RH da empresa onde essa pessoa trabalha." },
          { emoji: "📧", texto: "Ou procure no e-mail dela por **'contracheque'** ou **'holerite'**." },
          { emoji: "🖨️", texto: "Imprima na papelaria." },
        ],
      },
    },
  },
  m_extratos: {
    id: "m_extratos",
    nome: "Extratos bancários dos últimos 3 meses",
    descricao: "",
    dicaCopia: DICA_PAPELARIA,
    avisos: ["De **TODAS as contas** dessa pessoa (corrente, poupança, conta digital)."],
    fluxoInicial: "banco_inicio",
    fluxos: fluxosExtratosBancarios,
  },
  m_ausencia_renda: {
    id: "m_ausencia_renda",
    nome: "Declaração de Ausência de Renda Formal",
    descricao: "Para desempregados e autônomos.",
    avisos: ["Preencher à mão e **assinar igual ao RG**."],
    modeloHref: "/modelos/declaracao-ausencia-renda.pdf",
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "⬇️", texto: "Toque em **Baixar modelo**." },
          { emoji: "📲", texto: "Mande pro WhatsApp e imprima na papelaria." },
          { emoji: "✍️", texto: "A pessoa preenche à mão e **assina**." },
        ],
      },
    },
  },
  m_extrato_inss: {
    id: "m_extrato_inss",
    nome: "Extrato de benefício do INSS",
    descricao: "Para aposentados ou pensionistas.",
    dicaCopia: DICA_PAPELARIA,
    avisos: ["Se essa pessoa não conseguir entrar, ligue **[135](tel:135)** — central do INSS."],
    fluxoInicial: "inss_inicio",
    fluxos: fluxosMeuInss,
  },
  m_mei_empresario: {
    id: "m_mei_empresario",
    nome: "Documentos de MEI ou empresário",
    descricao: "Quem tem CNPJ, MEI ou é empresário.",
    avisos: [
      "Esta situação precisa de documentos específicos (**DECORE**, **pró-labore**, **faturamento**).",
      "**Fale com a Letícia pelo WhatsApp** para receber a lista exata.",
    ],
    fluxoInicial: "inicio",
    fluxos: {
      inicio: {
        id: "inicio",
        passos: [
          { emoji: "💬", texto: "Mande mensagem pra Letícia no WhatsApp e diga: *'A pessoa X mora comigo e é MEI/empresário. Quais documentos preciso enviar?'*" },
          { emoji: "📋", texto: "Ela vai te passar a lista exata baseada no caso." },
        ],
      },
    },
  },
};

export function getDoc(id: string) {
  return catalogoDocs[id];
}
