import React from 'react';
import { BRAND_INFO } from '../data/content';
import { FounderPortrait } from './FounderPortrait';
import { ShieldCheck, UserCheck, CheckCircle2, Award, ArrowUpRight, Handshake } from 'lucide-react';

interface AboutSectionProps {
  onOpenValuation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenValuation }) => {
  return (
    <section
      id="chi-sono"
      className="py-20 lg:py-28 bg-[#0B1A2E] relative overflow-hidden border-t border-slate-800/80"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#F37021]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#F37021] text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Chi Sono & La Filosofia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand-title">
            KasaFelice: <br />
            <span className="text-[#F37021]">Le persone</span> al centro di ogni scelta.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            KasaFelice nasce dalla convinzione che la compravendita di un immobile o di un'imbarcazione 
            non sia una semplice transazione, ma un progetto di vita che richiede ascolto, 
            etica e cura dedicata.
          </p>
        </div>

        {/* Main Grid: Portrait & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Frame of Felice Marco */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <FounderPortrait variant="about" />
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            
            {/* Core Principle Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#07111E]/90 border border-slate-700/80 mb-8 w-full">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F37021] uppercase tracking-wider mb-2">
                <Handshake className="w-4 h-4" />
                <span>La Filosofia di KasaFelice</span>
              </div>
              <p className="text-lg sm:text-xl text-white font-medium leading-relaxed font-brand-title">
                "Le persone prima degli immobili."
              </p>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Un approccio sartoriale e trasparente, dove ogni cliente è seguito personalmente da Felice Marco in ogni singola fase della trattativa.
              </p>
            </div>

            {/* Core Narrative Paragraphs */}
            <div className="space-y-4 text-slate-300 text-base leading-relaxed mb-8">
              <p>
                In un mercato immobiliare spesso dominato da modelli impersonali e procedure standardizzate, 
                <strong className="text-white font-semibold"> KasaFelice</strong> privilegia il rapporto diretto, umano e fiduciario tra cliente e professionista.
              </p>
              <p>
                Affidarsi a KasaFelice significa avere come unico interlocutore dedicato <strong className="text-white font-semibold">Felice Marco</strong>: 
                dalla prima valutazione di mercato fino alla stipula definitiva dell'atto notarile o al closing marittimo, 
                con la massima riservatezza e chiarezza contrattuale.
              </p>
            </div>

            {/* Qualifications / Dual Roles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              
              {/* Agente Immobiliare */}
              <div className="p-4 rounded-xl bg-[#0F223D] border border-slate-700/60 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F37021]/15 text-[#F37021] flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Mediazione Immobiliare</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Assistenza personalizzata nella compravendita di immobili residenziali, di pregio e commerciali.
                  </p>
                </div>
              </div>

              {/* Mediatore Marittimo */}
              <div className="p-4 rounded-xl bg-[#0F223D] border border-slate-700/60 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F37021]/15 text-[#F37021] flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Mediazione Marittima</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Intermediazione e consulenza dedicata per la compravendita di imbarcazioni e pratiche nautiche.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Action Link */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#F37021] hover:text-orange-400 transition-colors uppercase tracking-wider group"
              >
                <span>Contatta direttamente Felice Marco</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

