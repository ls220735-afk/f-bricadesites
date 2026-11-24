export const WHATSAPP_NUMBER = '5514991642368';
export const WHATSAPP_DISPLAY = '(14) 99164-2368';

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMessage =
    'Olá! Vi a página da Fábrica de sites e quero garantir meu site profissional por R$ 399.';
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const HERO_IMAGE = '/src/assets/images/hero_mockup_showcase_1795551003329.jpg';

export interface ProblemItem {
  number: string;
  title: string;
  description: string;
}

export const PROBLEMS: ProblemItem[] = [
  {
    number: '01.',
    title: 'Credibilidade perdida no primeiro clique',
    description:
      'Quando alguém vê seu anúncio no Instagram ou recebe uma indicação, pesquisa sua empresa no Google. Sem um site próprio, o cliente desconfia e fecha com quem transmite mais segurança.',
  },
  {
    number: '02.',
    title: 'Clientes invisíveis no Google',
    description:
      'Todos os dias existem pessoas na sua cidade procurando exatamente o que você vende. Quem só tem perfil em rede social fica fora dessa fila de compradores prontos.',
  },
  {
    number: '03.',
    title: 'Dinheiro desperdiçado em anúncios',
    description:
      'Mandar tráfego pago direto para o WhatsApp frio ou para um link genérico faz você pagar por curiosos. Um site profissional filtra, convence e entrega o cliente pronto para comprar.',
  },
];

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName: 'palette' | 'smartphone' | 'message' | 'clipboard' | 'search' | 'server' | 'clock';
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'design',
    title: 'Design exclusivo para sua marca',
    description:
      'Nada de visual amador. Criamos uma página elegante com as cores, identidade e posicionamento da sua empresa.',
    iconName: 'palette',
  },
  {
    id: 'responsive',
    title: 'Perfeito no celular e no computador',
    description:
      'Mais de 85% dos cliques de Instagram e Facebook vêm pelo celular. Sua página abre rápido e converte em qualquer tela.',
    iconName: 'smartphone',
  },
  {
    id: 'whatsapp',
    title: 'Botão de WhatsApp estratégico',
    description:
      'Atalhos posicionados nos pontos exatos de decisão para o visitante chamar sua equipe com mensagem pronta em 1 toque.',
    iconName: 'message',
  },
  {
    id: 'form',
    title: 'Formulário de contato direto',
    description:
      'Capte nome, telefone e interesse do cliente de forma organizada para nunca perder orçamentos fora do horário comercial.',
    iconName: 'clipboard',
  },
  {
    id: 'seo',
    title: 'SEO básico para o Google',
    description:
      'Estrutura semântica, títulos, descrições e velocidade otimizada para sua empresa começar a ser encontrada nas buscas.',
    iconName: 'search',
  },
  {
    id: 'hosting',
    title: 'Hospedagem no 1º ano inclusa',
    description:
      'Você não se preocupa com servidores ou configurações técnicas. Entregamos no ar com certificado de segurança SSL.',
    iconName: 'server',
  },
];

export interface PortfolioItem {
  id: string;
  niche: 'Saúde' | 'Jurídico' | 'Gastronomia' | 'Arquitetura';
  title: string;
  clientType: string;
  summary: string;
  outcome: string;
  image: string;
  highlights: string[];
  whatsappPrompt: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'odontologia',
    niche: 'Saúde',
    title: 'Clínica Aura Odontologia',
    clientType: 'Clínicas, dentistas e estética',
    summary:
      'Página focada em agendamento de avaliações por WhatsApp com apresentação dos tratamentos e corpo clínico.',
    outcome: 'Estrutura criada para converter pacientes vindos de anúncios locais',
    image: '/src/assets/images/portfolio_odontologia_1795551005457.jpg',
    highlights: [
      'Botão de agendamento rápido em todas as dobras',
      'Apresentação clara de procedimentos e diferenciais',
      'Localização e prova de confiança para novos pacientes',
    ],
    whatsappPrompt:
      'Olá! Gostei do modelo de site para Saúde/Clínica da Fábrica de sites e quero um para minha empresa.',
  },
  {
    id: 'advocacia',
    niche: 'Jurídico',
    title: 'Monteiro & Associados Advocacia',
    clientType: 'Advogados, contadores e consultorias',
    summary:
      'Layout sóbrio em grafite e dourado que transmite autoridade imediata para captação de consultas jurídicas.',
    outcome: 'Posicionamento executivo para atendimento consultivo de alto valor',
    image: '/src/assets/images/portfolio_advocacia_1795551002936.jpg',
    highlights: [
      'Áreas de atuação organizadas com clareza',
      'Triagem inicial integrada ao WhatsApp',
      'Tipografia editorial de alta credibilidade',
    ],
    whatsappPrompt:
      'Olá! Gostei do modelo de site Jurídico/Consultoria da Fábrica de sites e quero um para meu escritório.',
  },
  {
    id: 'gastronomia',
    niche: 'Gastronomia',
    title: 'Aurora Bistrô & Steakhouse',
    clientType: 'Restaurantes, pizzarias e delivery',
    summary:
      'Experiência visual envolvente no celular com destaque para pratos, cardápio digital e reservas em 1 clique.',
    outcome: 'Acesso imediato ao cardápio e reservas sem taxas de aplicativos',
    image: '/src/assets/images/portfolio_gastronomia_1795551005140.jpg',
    highlights: [
      'Galeria otimizada para carregamento instantâneo no 4G',
      'Link direto para reservas e pedidos no WhatsApp',
      'Horários e mapa prontos para busca local',
    ],
    whatsappPrompt:
      'Olá! Gostei do modelo de site para Gastronomia da Fábrica de sites e quero um para meu negócio.',
  },
  {
    id: 'arquitetura',
    niche: 'Arquitetura',
    title: 'Elementa Arquitetura & Interiores',
    clientType: 'Arquitetos, engenheiros e reformas',
    summary:
      'Portfólio minimalista desenhado para valorizar projetos residenciais e comerciais e gerar pedidos de orçamento.',
    outcome: 'Vitrine de projetos que qualifica clientes antes do primeiro contato',
    image: '/src/assets/images/portfolio_arquitetura_1795551004904.jpg',
    highlights: [
      'Apresentação limpa que valoriza suas fotos',
      'Formulário de qualificação de projeto',
      'Carregamento leve com alto padrão visual',
    ],
    whatsappPrompt:
      'Olá! Gostei do modelo de site para Arquitetura/Serviços da Fábrica de sites e quero um para minha empresa.',
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Briefing rápido',
    duration: '10 minutos',
    description:
      'Após confirmar sua vaga no WhatsApp, você responde um questionário simples com os dados da sua empresa, serviços, fotos e diferenciais.',
  },
  {
    step: '02',
    title: 'Criação e ajustes',
    duration: '3 a 5 dias',
    description:
      'Desenvolvemos o design personalizado, escrevemos os textos focados em vendas e enviamos o link de prévia para você revisar e aprovar.',
  },
  {
    step: '03',
    title: 'Publicação no ar',
    duration: 'Até o 7º dia',
    description:
      'Com tudo aprovado, conectamos seu domínio, ativamos a hospedagem do 1º ano, configuramos o botão do WhatsApp e colocamos sua empresa no ar.',
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  quote: string;
  result: string;
}

/* ============================================================================
   ESPAÇO EDITÁVEL DE DEPOIMENTOS
   Substitua os dados abaixo pelos depoimentos reais dos seus clientes sempre
   que quiser atualizar a prova social da página.
   ============================================================================ */
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dep-1',
    name: 'Dr. Rafael Mendes',
    role: 'Cirurgião-Dentista',
    company: 'Clínica Sorriso Pleno',
    city: 'Bauru · SP',
    quote:
      'Eu investia no Instagram e mandava direto para o WhatsApp, mas chegava muita gente só perguntando preço. Depois que colocamos o site no ar em menos de uma semana, os pacientes já chegam entendendo o valor do tratamento.',
    result: 'Site entregue em 5 dias · Mais agendamentos qualificados',
  },
  {
    id: 'dep-2',
    name: 'Camila Ferreira',
    role: 'Sócia-Proprietária',
    company: 'Studio Camila Estética Avançada',
    city: 'Marília · SP',
    quote:
      'Achei que um site desse nível custaria mais de mil reais e levaria meses. O atendimento foi direto ao ponto, aprovaram tudo comigo pelo celular e o visual superou qualquer expectativa.',
    result: 'Visual premium no celular · Retorno já na primeira semana',
  },
  {
    id: 'dep-3',
    name: 'Eduardo Nogueira',
    role: 'Diretor Técnico',
    company: 'Nogueira Climatização & Engenharia',
    city: 'Botucatu · SP',
    quote:
      'Passamos a fechar contratos maiores porque as empresas pesquisavam nosso nome no Google e finalmente encontravam uma página profissional com nossos serviços e botão de orçamento.',
    result: 'Presença imediata no Google · Credibilidade comercial',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'prazo',
    question: 'Em quanto tempo meu site fica realmente pronto?',
    answer:
      'O prazo máximo é de até 7 dias corridos após você enviar as informações básicas do briefing. Na maioria dos projetos, a primeira prévia navegável já fica pronta entre 3 e 5 dias.',
  },
  {
    id: 'dominio',
    question: 'Eu preciso já ter um domínio (.com.br) comprado?',
    answer:
      'Não precisa ter antes de contratar. Se você ainda não tem, orientamos passo a passo para registrar o domínio no seu CPF ou CNPJ pelo Registro.br (cerca de R$ 40/ano pagos diretamente ao órgão oficial). Se já tiver um domínio, fazemos toda a conexão sem custo extra.',
  },
  {
    id: 'alteracoes',
    question: 'Posso pedir alterações no visual ou nos textos antes de publicar?',
    answer:
      'Sim. Antes de colocar o site no ar, você recebe um link exclusivo para testar no seu celular e computador. Ajustamos textos, fotos, cores e detalhes até você aprovar com total segurança.',
  },
  {
    id: 'pagamento',
    question: 'Como funciona o pagamento de R$ 399? Posso parcelar?',
    answer:
      'O valor promocional de R$ 399 é pagamento único pelo desenvolvimento completo (sem mensalidades obrigatórias de criação). Você pode pagar via Pix com entrada imediata na fila de produção ou parcelar em até 12x no cartão de crédito.',
  },
  {
    id: 'suporte',
    question: 'E depois que o site for publicado, como funciona a hospedagem e o suporte?',
    answer:
      'O primeiro ano de hospedagem em servidor rápido com certificado de segurança SSL já está incluso no valor de R$ 399. Além disso, você conta com nosso suporte direto pelo WhatsApp para tirar dúvidas e garantir que sua página continue operando perfeitamente.',
  },
];

export const OFFER_WEEKLY_CAPACITY = {
  totalSlots: 8,
  remainingSlots: 3,
  weekLabel: 'Lote semanal de produção',
};
