import React from 'react';
import { BRAND_INFO } from '../data/content';
import { FounderPortrait } from './FounderPortrait';
import { Sparkles, ArrowRight, ShieldCheck, UserCheck, Anchor, KeyRound } from 'lucide-react';

interface HeroProps {
  onOpenValuation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenValuation }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-gradient-to-b from-[#07111E] via-[#0B1A2E] to-[#07111E] overflow-hidden"
    >
      {/* Subtle architectural background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Warm ambient glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F37021]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge: Slogan / Philosophy */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F37021]/15 border border-[#F37021]/30 text-[#F37021] text-xs sm:text-sm font-semibold tracking-wide mb-6 uppercase"
            >
              <KeyRound className="w-3.5 h-3.5 text-[#F37021]" />
              <span>Mediazione Immobiliare & Marittima</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-brand-title"
            >
              Le persone prima <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                degli immobili.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {BRAND_INFO.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-cta-valuation"
                onClick={onOpenValuation}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-orange-950/50 hover:shadow-orange-900/70 transition-all transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 text-orange-200 group-hover:rotate-12 transition-transform" />
                <span>Valuta il tuo immobile</span>
              </button>

              <button
                id="hero-cta-discover"
                onClick={() => scrollToSection('#chi-sono')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 hover:text-white font-semibold text-sm sm:text-base border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
              >
                <span>Scopri KasaFelice</span>
                <ArrowRight className="w-4 h-4 text-[#F37021]" />
              </button>
            </div>

            {/* Trust Points / Micro-Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0F223D] border border-slate-700/50 text-[#F37021] flex-shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Rapporto Diretto</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Seguito direttamente da Felice Marco</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0F223D] border border-slate-700/50 text-[#F37021] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Trasparenza Totale</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Nessun costo nascosto o vincolo opaco</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0F223D] border border-slate-700/50 text-[#F37021] flex-shrink-0">
                  <Anchor className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Terra & Acqua</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Mediazione immobiliare e marittima</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Portrait / Brand Frame for Felice Marco */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FounderPortrait variant="hero" />
          </div>

        </div>
      </div>
    </section>
  );
};
