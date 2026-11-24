import { useEffect } from 'react';
import { X, Check, ArrowUpRight, Layout } from 'lucide-react';
import { type PortfolioItem, buildWhatsAppUrl } from '../data/siteData';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.1] bg-[#121318] p-5 sm:p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-[#E6C86E] font-medium">{item.niche}</span>
              <span aria-hidden="true">·</span>
              <span>{item.clientType}</span>
            </div>
            <h3
              id="portfolio-modal-title"
              className="mt-1.5 font-display text-2xl font-semibold text-zinc-100"
            >
              {item.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar prévia do projeto"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-[#09090B] text-zinc-400 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090B]">
          {item.image ? (
            <img
              src={item.image}
              alt={`Mockup do projeto ${item.title} no nicho de ${item.niche}`}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-zinc-400">
              <Layout className="mb-2 h-8 w-8 text-[#D4AF37]" />
              <span className="text-sm">{item.title}</span>
            </div>
          )}
        </div>

        <p className="mt-5 text-sm leading-relaxed text-zinc-300">{item.summary}</p>

        <div className="mt-5 border-t border-white/[0.08] pt-5">
          <p className="text-xs font-semibold text-zinc-400">
            O que faz essa página converter clientes:
          </p>
          <ul className="mt-3 space-y-2.5">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5 text-sm text-zinc-200">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
          <p className="text-xs text-zinc-400">
            Personalizamos 100% para o seu negócio em até 7 dias por{' '}
            <strong className="text-zinc-100 tabular-nums">R$ 399</strong>.
          </p>
          <a
            href={buildWhatsAppUrl(item.whatsappPrompt)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#09090B] hover:bg-[#E6C86E] transition-colors whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>Quero um site neste padrão</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
