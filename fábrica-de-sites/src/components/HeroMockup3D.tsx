import { useState, type MouseEvent } from 'react';
import { Monitor, Smartphone, MessageCircle } from 'lucide-react';
import { HERO_IMAGE, buildWhatsAppUrl } from '../data/siteData';

export function HeroMockup3D() {
  const [viewMode, setViewMode] = useState<'studio' | 'mobile'>('studio');
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [imageError, setImageError] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: Number((-y * 6).toFixed(2)),
      rotateY: Number((x * 8).toFixed(2)),
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div className="perspective-scene w-full">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="preserve-3d relative rounded-2xl border border-white/[0.08] bg-[#121318] p-3 sm:p-4 shadow-2xl"
      >
        {/* Controles funcionais de visualização (Desktop 3D vs Celular) */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span>Desktop &amp; Celular</span>
            <span aria-hidden="true">·</span>
            <span>Pronto em até 7 dias</span>
          </div>

          <div
            role="tablist"
            aria-label="Modo de visualização do mockup"
            className="inline-flex items-center gap-1 rounded-lg bg-[#09090B] p-1 border border-white/[0.06]"
          >
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'studio'}
              onClick={() => setViewMode('studio')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 min-h-[34px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                viewMode === 'studio'
                  ? 'bg-[#D4AF37] text-[#09090B]'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              <Monitor className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Estúdio 3D</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'mobile'}
              onClick={() => setViewMode('mobile')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 min-h-[34px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                viewMode === 'mobile'
                  ? 'bg-[#D4AF37] text-[#09090B]'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>No Celular</span>
            </button>
          </div>
        </div>

        {/* Palco do Mockup */}
        {viewMode === 'studio' ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#09090B]">
            {!imageError ? (
              <img
                src={HERO_IMAGE}
                alt="Mockup 3D em estúdio mostrando site profissional exibido no monitor e no celular"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#121318] via-[#09090B] to-[#1A1710] p-6 text-center">
                <Monitor className="mb-3 h-10 w-10 text-[#D4AF37]" aria-hidden="true" />
                <p className="font-display text-xl text-zinc-100">
                  Design Sob Medida para Sua Empresa
                </p>
                <p className="mt-2 max-w-sm text-sm text-zinc-400">
                  Apresentação profissional no computador e no celular focada em gerar contatos no WhatsApp.
                </p>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/60 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0D0E12] to-[#09090B] p-4 sm:p-6">
            <div className="flex h-full max-h-[340px] w-full max-w-[235px] flex-col justify-between rounded-[26px] border border-[#D4AF37]/40 bg-[#121318] p-4 shadow-2xl">
              <div>
                <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-zinc-700" />
                <p className="text-[11px] font-medium text-[#E6C86E]">
                  Sua Empresa · Atendimento Imediato
                </p>
                <h4 className="mt-1.5 font-display text-base leading-snug text-zinc-100">
                  Solução profissional na sua cidade
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  Carregamento instantâneo no 4G com apresentação clara dos seus serviços e provas reais.
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Avaliação Google</span>
                  <span className="font-semibold text-[#E6C86E] tabular-nums">4.9 / 5.0</span>
                </div>
                <a
                  href={buildWhatsAppUrl('Olá! Quero ver como ficaria o site da minha empresa no celular.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#D4AF37] px-3 py-2 text-xs font-semibold text-[#09090B] hover:bg-[#E6C86E] transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>Solicitar Orçamento</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
