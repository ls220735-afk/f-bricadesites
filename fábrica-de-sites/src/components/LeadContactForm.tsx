import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/siteData';

export function LeadContactForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const formatPhone = (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const phoneDigits = phone.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      setError('Informe seu nome para continuarmos.');
      return;
    }
    if (trimmedCompany.length < 2) {
      setError('Informe o nome ou ramo da sua empresa.');
      return;
    }
    if (phoneDigits.length < 10) {
      setError('Informe um WhatsApp válido com DDD.');
      return;
    }

    setError(null);
    const customMsg = `Olá! Me chamo ${trimmedName}, da empresa ${trimmedCompany} (WhatsApp: ${phone}). Quero garantir meu site profissional por R$ 399.`;
    setSubmittedUrl(buildWhatsAppUrl(customMsg));
  };

  if (submittedUrl) {
    return (
      <div className="rounded-2xl border border-[#D4AF37]/40 bg-[#121318] p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#D4AF37]" aria-hidden="true" />
          <div>
            <h3 className="font-display text-xl font-semibold text-zinc-100">
              Dados preparados com sucesso
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              Clique abaixo para abrir o WhatsApp com sua mensagem já preenchida e reservar uma das vagas desta semana.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={submittedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-3.5 text-sm font-semibold text-[#09090B] hover:bg-[#E6C86E] transition-colors whitespace-nowrap min-h-[44px]"
          >
            <span>Enviar agora no WhatsApp</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setSubmittedUrl(null)}
            className="inline-flex items-center justify-center rounded-lg border border-white/[0.1] px-4 py-3.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 hover:border-white/20 transition-colors whitespace-nowrap min-h-[44px]"
          >
            Editar dados
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-white/[0.08] bg-[#121318] p-6 sm:p-8"
    >
      <h3 className="font-display text-2xl font-semibold text-zinc-100">
        Solicite seu site agora
      </h3>
      <p className="mt-2 text-sm text-zinc-400">
        Preencha em 15 segundos para iniciar seu atendimento direto no WhatsApp com prioridade.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="lead-name" className="block text-xs font-medium text-zinc-300">
            Seu nome
          </label>
          <input
            id="lead-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex.: João Carlos"
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-white/[0.1] bg-[#09090B] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-[#D4AF37] focus:outline-none min-h-[44px]"
          />
        </div>

        <div>
          <label htmlFor="lead-company" className="block text-xs font-medium text-zinc-300">
            Nome da empresa ou ramo de atuação
          </label>
          <input
            id="lead-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Ex.: Clínica Vida / Oficina Silva"
            className="mt-1.5 w-full rounded-lg border border-white/[0.1] bg-[#09090B] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-[#D4AF37] focus:outline-none min-h-[44px]"
          />
        </div>

        <div>
          <label htmlFor="lead-phone" className="block text-xs font-medium text-zinc-300">
            Seu WhatsApp com DDD
          </label>
          <input
            id="lead-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            placeholder="(14) 99999-9999"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-lg border border-white/[0.1] bg-[#09090B] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 tabular-nums focus:border-[#D4AF37] focus:outline-none min-h-[44px]"
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-xs font-medium text-amber-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#09090B] hover:bg-[#E6C86E] transition-colors min-h-[46px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
      >
        <span>Continuar para o WhatsApp</span>
        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      </button>

      <p className="mt-3 text-center text-xs text-zinc-500">
        Atendimento humano e direto · Garantia de 7 dias
      </p>
    </form>
  );
}
