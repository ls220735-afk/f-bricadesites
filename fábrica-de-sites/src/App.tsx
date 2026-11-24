import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ClipboardList,
  MessageCircle,
  Palette,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroMockup3D } from './components/HeroMockup3D';
import { PortfolioModal } from './components/PortfolioModal';
import { LeadContactForm } from './components/LeadContactForm';
import {
  FAQ_ITEMS,
  OFFER_WEEKLY_CAPACITY,
  PORTFOLIO_ITEMS,
  PROBLEMS,
  PROCESS_STEPS,
  SOLUTIONS,
  TESTIMONIALS,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
  type PortfolioItem,
  type SolutionItem,
} from './data/siteData';

const fadeUpProps = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
};

function SolutionIcon({ name }: { name: SolutionItem['iconName'] }) {
  const cls = 'h-5 w-5 text-[#D4AF37]';
  switch (name) {
    case 'palette':
      return <Palette className={cls} aria-hidden="true" />;
    case 'smartphone':
      return <Smartphone className={cls} aria-hidden="true" />;
    case 'message':
      return <MessageCircle className={cls} aria-hidden="true" />;
    case 'clipboard':
      return <ClipboardList className={cls} aria-hidden="true" />;
    case 'search':
      return <Search className={cls} aria-hidden="true" />;
    case 'server':
    default:
      return <Server className={cls} aria-hidden="true" />;
  }
}

function SectionFrame({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-white/[0.07] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export default function App() {
  const [selectedNiche, setSelectedNiche] = useState<string>('Todos');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string>('prazo');

  const niches = ['Todos', 'Saúde', 'Jurídico', 'Gastronomia', 'Arquitetura'];

  const filteredPortfolio =
    selectedNiche === 'Todos'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.niche === selectedNiche);

  const filledSlots = OFFER_WEEKLY_CAPACITY.totalSlots - OFFER_WEEKLY_CAPACITY.remainingSlots;
  const fillPercentage = Math.round((filledSlots / OFFER_WEEKLY_CAPACITY.totalSlots) * 100);

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5] overflow-x-clip">
      <Navbar />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative pt-10 pb-14 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.11),transparent_70%)]"
          />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="text-xs sm:text-sm font-medium text-[#E6C86E]">
                  Fábrica de sites · Entrega em até 7 dias
                </p>

                <h1 className="mt-4 font-display text-[clamp(2.15rem,4vw,3.6rem)] font-semibold leading-[1.1] tracking-tight text-zinc-50 text-balance">
                  Sua empresa com site profissional e mais clientes chegando pelo WhatsApp
                </h1>

                <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-300">
                  Pare de perder vendas por não ter uma página à altura do seu negócio. Desenvolvemos seu site completo de alta conversão por{' '}
                  <strong className="font-semibold text-zinc-100 tabular-nums">R$ 399</strong>, pronto para receber anúncios do Instagram e aparecer no Google.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={buildWhatsAppUrl(
                      'Olá! Quero meu site profissional de R$ 399 em até 7 dias.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-4 text-sm sm:text-base font-semibold text-[#09090B] hover:bg-[#E6C86E] transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span>Quero meu site no WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>

                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center rounded-lg border border-white/[0.12] px-5 py-4 text-sm font-medium text-zinc-200 hover:border-[#D4AF37]/50 hover:text-[#E6C86E] transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    Ver exemplos de sites
                  </a>
                </div>

                <p className="mt-4 text-xs text-zinc-400">
                  De <span className="line-through tabular-nums">R$ 900</span> por{' '}
                  <span className="text-zinc-200 font-medium tabular-nums">R$ 399</span> ou 12x no cartão · Garantia de 7 dias · Hospedagem no 1º ano inclusa
                </p>
              </div>

              <div className="lg:col-span-6 flex items-center">
                <HeroMockup3D />
              </div>
            </div>

            {/* Faixa horizontal completa de métricas concretas abaixo do Hero */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-[#121318]">
              <div className="px-6 py-5">
                <p className="font-display text-2xl font-semibold text-[#E6C86E] tabular-nums">
                  Até 7 dias
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Prazo máximo de entrega após o briefing
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="font-display text-2xl font-semibold text-zinc-100 tabular-nums">
                  R$ 399
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Pagamento único promocional ou 12x no cartão
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="font-display text-2xl font-semibold text-zinc-100 tabular-nums">
                  1º ano incluso
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Hospedagem rápida com certificado SSL ativo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEMA */}
        <SectionFrame id="problema">
          <motion.div {...fadeUpProps}>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#E6C86E]">O custo da invisibilidade</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 text-balance">
                O que sua empresa perde todos os dias sem um site profissional
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Depender apenas de perfil em rede social coloca o seu faturamento em risco e reduz a percepção de valor do seu serviço.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROBLEMS.map((problem) => (
                <article
                  key={problem.number}
                  className="rounded-2xl border border-white/[0.08] bg-[#121318] p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-display text-2xl font-semibold text-[#D4AF37] tabular-nums">
                      {problem.number}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-zinc-100 leading-snug">
                      {problem.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {problem.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </SectionFrame>

        {/* 3. SOLUÇÃO (O QUE ESTÁ INCLUSO) */}
        <SectionFrame id="solucao">
          <motion.div {...fadeUpProps}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="text-sm font-medium text-[#E6C86E]">Estrutura completa</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 text-balance">
                  Tudo o que sua empresa precisa para vender mais
                </h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">
                  Você não recebe apenas um layout bonito. Entregamos uma página de vendas planejada para transformar visitantes do Instagram, Facebook e Google em conversas reais no seu WhatsApp.
                </p>

                <div className="mt-8 rounded-2xl border border-[#D4AF37]/25 bg-[#121318] p-6">
                  <p className="text-sm font-semibold text-zinc-100">
                    Pronto para tráfego pago
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Estrutura otimizada para campanhas do Meta Ads e Google Ads com carregamento leve e espaço preparado para Pixel e Tag Manager.
                  </p>
                  <a
                    href={buildWhatsAppUrl(
                      'Olá! Quero entender como o site de R$ 399 pode ajudar nos meus anúncios.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#E6C86E] hover:text-[#F4F4F5] transition-colors"
                  >
                    <span>Tirar dúvidas no WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SOLUTIONS.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/[0.08] bg-[#121318] p-6 transition-colors hover:border-[#D4AF37]/30"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#09090B]">
                      <SolutionIcon name={item.iconName} />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </SectionFrame>

        {/* 4. PORTFÓLIO POR NICHO */}
        <SectionFrame id="portfolio">
          <motion.div {...fadeUpProps}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-sm font-medium text-[#E6C86E]">Portfólio por segmento</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 text-balance">
                  Exemplos de páginas desenhadas para converter
                </h2>
              </div>

              {/* Filtro interativo funcional por nicho */}
              <div
                role="tablist"
                aria-label="Filtrar portfólio por nicho"
                className="flex flex-wrap items-center gap-1 rounded-xl border border-white/[0.08] bg-[#121318] p-1"
              >
                {niches.map((niche) => (
                  <button
                    key={niche}
                    type="button"
                    role="tab"
                    aria-selected={selectedNiche === niche}
                    onClick={() => setSelectedNiche(niche)}
                    className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 min-h-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                      selectedNiche === niche
                        ? 'bg-[#D4AF37] text-[#09090B]'
                        : 'text-zinc-400 hover:text-zinc-100'
                    }`}
                  >
                    {niche}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPortfolio.map((item) => (
                <article
                  key={item.id}
                  className="group rounded-2xl border border-white/[0.08] bg-[#121318] overflow-hidden transition-colors hover:border-[#D4AF37]/40"
                >
                  <button
                    type="button"
                    onClick={() => setActiveProject(item)}
                    className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#09090B]">
                      <img
                        src={item.image}
                        alt={`Mockup do site ${item.title}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span className="text-[#E6C86E] font-medium">{item.niche}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.clientType}</span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold text-zinc-100 group-hover:text-[#E6C86E] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {item.summary}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 group-hover:text-[#E6C86E] transition-colors">
                        <span>Ver detalhes do modelo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </p>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </motion.div>
        </SectionFrame>

        {/* 5. COMO FUNCIONA (3 PASSOS) */}
        <SectionFrame id="como-funciona">
          <motion.div {...fadeUpProps}>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#E6C86E]">Processo descomplicado</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 text-balance">
                Do briefing ao seu site no ar em 3 passos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Sem reuniões longas ou termos técnicos confusos. Você foca no seu negócio enquanto cuidamos de toda a criação.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROCESS_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/[0.08] bg-[#121318] p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <span className="font-display text-3xl font-semibold text-[#D4AF37] tabular-nums">
                      {item.step}
                    </span>
                    <span className="text-xs font-medium text-zinc-400 tabular-nums">
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </SectionFrame>

        {/* 6. PROVA SOCIAL (DEPOIMENTOS EDITÁVEIS) */}
        <SectionFrame id="depoimentos">
          <motion.div {...fadeUpProps}>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#E6C86E]">Quem já colocou a empresa no digital</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 text-balance">
                Empresários que passaram a receber clientes com mais autoridade
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial) => (
                <blockquote
                  key={testimonial.id}
                  className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121318] p-6 sm:p-7"
                >
                  <div>
                    <p className="text-xs font-medium text-[#E6C86E]">{testimonial.result}</p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-200">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  <footer className="mt-6 border-t border-white/[0.08] pt-4">
                    <p className="text-sm font-semibold text-zinc-100">{testimonial.name}</p>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      {testimonial.role} · {testimonial.company} · {testimonial.city}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </motion.div>
        </SectionFrame>

        {/* 7. OFERTA ESPECIAL + GARANTIA + CONTADOR DE VAGAS */}
        <SectionFrame id="oferta">
          <motion.div {...fadeUpProps}>
            <div className="rounded-3xl border border-[#D4AF37]/35 bg-[#121318] p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7">
                  <p className="text-sm font-medium text-[#E6C86E]">
                    Condição promocional de lançamento
                  </p>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 text-balance">
                    Seu site profissional completo por menos da metade do valor de mercado
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-zinc-300">
                    Uma agência tradicional cobra a partir de R$ 900 a R$ 2.500 e leva semanas. Na Fábrica de sites, otimizamos o processo para entregar o mesmo padrão visual em até 7 dias por um valor acessível.
                  </p>

                  {/* Bônus e entregas */}
                  <div className="mt-8 border-t border-white/[0.08] pt-6">
                    <p className="text-sm font-semibold text-zinc-100">
                      O que você recebe ao fechar hoje:
                    </p>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
                      {[
                        'Site de 1 página exclusivo e responsivo',
                        'Entrega garantida em até 7 dias',
                        'Botão de WhatsApp e formulário ativo',
                        'SEO básico para buscas no Google',
                        'Bônus: Hospedagem do 1º ano grátis',
                        'Bônus: Espaço pronto para Pixel e GTM',
                      ].map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Garantia de 7 dias */}
                  <div className="mt-8 flex items-start gap-3.5 rounded-2xl border border-white/[0.08] bg-[#09090B] p-5">
                    <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-100">
                        Garantia incondicional de 7 dias
                      </p>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-400">
                        Você acompanha a construção da página e aprova o resultado. Se dentro de 7 dias não entregarmos o padrão combinado, devolvemos 100% do seu investimento.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card de Preço e Contador Visual de Vagas */}
                <div className="lg:col-span-5 rounded-2xl border border-[#D4AF37]/40 bg-[#09090B] p-6 sm:p-8">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>{OFFER_WEEKLY_CAPACITY.weekLabel}</span>
                    <span className="font-semibold text-[#E6C86E] tabular-nums">
                      Restam {OFFER_WEEKLY_CAPACITY.remainingSlots} de{' '}
                      {OFFER_WEEKLY_CAPACITY.totalSlots} vagas
                    </span>
                  </div>

                  {/* Barra visual de vagas semanais */}
                  <div
                    aria-label={`Vagas preenchidas esta semana: ${filledSlots} de ${OFFER_WEEKLY_CAPACITY.totalSlots}`}
                    className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-800"
                  >
                    <div
                      style={{ width: `${fillPercentage}%` }}
                      className="h-full rounded-full bg-[#D4AF37]"
                    />
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">
                    Limitamos o lote semanal para cumprir o prazo de 7 dias com qualidade.
                  </p>

                  <div className="mt-6 border-t border-white/[0.08] pt-6">
                    <p className="text-sm text-zinc-400">
                      Valor de mercado:{' '}
                      <span className="line-through tabular-nums">R$ 900</span>
                    </p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-sm font-medium text-zinc-300">Por apenas</span>
                      <span className="font-display text-5xl font-bold tracking-tight text-[#E6C86E] tabular-nums">
                        R$ 399
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-300">
                      À vista no Pix ou em até <strong className="text-zinc-100">12x no cartão</strong>
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppUrl(
                      'Olá! Quero garantir uma das 3 vagas da semana para fazer meu site profissional por R$ 399.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-4 text-sm sm:text-base font-semibold text-[#09090B] hover:bg-[#E6C86E] transition-colors min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span>Garantir minha vaga no WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>

                  <p className="mt-3 text-center text-xs text-zinc-500">
                    Atendimento imediato · {WHATSAPP_DISPLAY}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </SectionFrame>

        {/* 8. FAQ */}
        <SectionFrame id="faq">
          <motion.div {...fadeUpProps}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <p className="text-sm font-medium text-[#E6C86E]">Dúvidas frequentes</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-zinc-50 text-balance">
                  Perguntas sobre prazo, domínio e pagamento
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  Transparência total antes de você dar o próximo passo com sua empresa.
                </p>
              </div>

              <div className="lg:col-span-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {FAQ_ITEMS.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div key={faq.id} className="py-5">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                        className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm min-h-[40px]"
                      >
                        <span className="text-base font-semibold text-zinc-100">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-[#D4AF37] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <p className="mt-3 pr-8 text-sm leading-relaxed text-zinc-400">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </SectionFrame>

        {/* 9. CTA FINAL + FORMULÁRIO DE CONTATO */}
        <SectionFrame id="contato">
          <motion.div {...fadeUpProps}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <p className="text-sm font-medium text-[#E6C86E]">Próximo passo</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50 text-balance">
                  Coloque sua empresa na frente dos clientes ainda esta semana
                </h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-300">
                  Chame agora no WhatsApp ou preencha o formulário ao lado para reservar sua vaga promocional de <strong className="text-zinc-100 tabular-nums">R$ 399</strong>. Em até 7 dias seu site profissional estará no ar.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={buildWhatsAppUrl(
                      'Olá! Quero contratar meu site profissional com a Fábrica de sites por R$ 399.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-4 text-sm sm:text-base font-semibold text-[#09090B] hover:bg-[#E6C86E] transition-colors whitespace-nowrap shrink-0 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Chamar no WhatsApp {WHATSAPP_DISPLAY}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <LeadContactForm />
              </div>
            </div>
          </motion.div>
        </SectionFrame>
      </main>

      {/* RODAPÉ QUIETO */}
      <footer className="border-t border-white/[0.08] bg-[#09090B] py-10 px-4 sm:px-6 lg:px-8 pb-24 sm:pb-12">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg font-semibold text-zinc-100">Fábrica de sites</p>
            <p className="mt-1 text-xs text-zinc-500">
              Sites profissionais de alta conversão para pequenas e médias empresas · {WHATSAPP_DISPLAY}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <a href="#problema" className="hover:text-zinc-100 transition-colors">
              Problema
            </a>
            <a href="#solucao" className="hover:text-zinc-100 transition-colors">
              O que inclui
            </a>
            <a href="#portfolio" className="hover:text-zinc-100 transition-colors">
              Portfólio
            </a>
            <a href="#oferta" className="hover:text-zinc-100 transition-colors">
              Oferta R$ 399
            </a>
            <span className="text-zinc-600">© {new Date().getFullYear()} Fábrica de sites</span>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP (Compacto para respeitar limite mobile < 15%) */}
      <a
        href={buildWhatsAppUrl(
          'Olá! Estou na página da Fábrica de sites e quero garantir meu site por R$ 399.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar agora pelo WhatsApp com a Fábrica de sites"
        className="fixed bottom-4 right-4 z-40 inline-flex h-12 items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37] px-4 sm:px-5 text-sm font-semibold text-[#09090B] shadow-2xl hover:bg-[#E6C86E] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C86E]"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline whitespace-nowrap">Falar no WhatsApp</span>
      </a>

      <PortfolioModal item={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
