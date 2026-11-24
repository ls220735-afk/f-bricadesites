import { ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/siteData';

export function Navbar() {
  return (
    <header className="relative z-30 border-b border-white/[0.08] bg-[#09090B]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4 sm:px-6 lg:px-8">
        {/* Zona 1: Wordmark único */}
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-[#F4F4F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
        >
          Fábrica de sites
        </a>

        {/* Zona 2: Links de navegação concisos em linha única */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400"
        >
          <a
            href="#problema"
            className="hover:text-[#F4F4F5] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            O que perde
          </a>
          <a
            href="#solucao"
            className="hover:text-[#F4F4F5] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Incluso
          </a>
          <a
            href="#portfolio"
            className="hover:text-[#F4F4F5] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Portfólio
          </a>
          <a
            href="#oferta"
            className="hover:text-[#F4F4F5] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Oferta
          </a>
        </nav>

        {/* Zona 3: Ação primária única */}
        <div className="flex items-center shrink-0">
          <a
            href={buildWhatsAppUrl('Olá! Quero saber mais sobre o site profissional de R$ 399.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-xs sm:text-sm font-semibold text-[#E6C86E] hover:bg-[#D4AF37] hover:text-[#09090B] transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
