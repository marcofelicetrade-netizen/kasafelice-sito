import React from 'react';
import { BRAND_INFO } from '../data/content';
import { Anchor, Compass, ShieldCheck, Waves, FileText, ArrowRight, Phone, MessageCircle } from 'lucide-react';

interface MaritimeSectionProps {
  onContactNautica: () => void;
}

export const MaritimeSection: React.FC<MaritimeSectionProps> = ({ onContactNautica }) => {
  const nauticalServices = [
    {
      icon: Compass,
      title: 'Compravendita Imbarcazioni',
      description: 'Mediazione per yacht a motore, imbarcazioni da diporto e natanti, con selezione mirata di acquirenti qualificati.'
    },
    {
      icon: FileText,
      title: 'Pratiche e Registri Navali',
      description: 'Gestione documentale completa: passaggi di proprietà marittimi, cancellazioni, bandiere e conformità di bordo.'
    },
    {
      icon: ShieldCheck,
      title: 'Perizie & Prove in Mare',
      description: 'Assistenza durante le ispezioni tecniche, prove di navigazione e stime imparziali del valore nautico.'
    },
    {
      icon: Waves,
      title: 'Consulenza Armatoriale',
      description: 'Supporto personalizzato per la ricerca di posti barca, manutenzione e gestione operativa sul Lago di Garda e bacini marittimi.'
    }
  ];

  return (
    <section
      id="nautica"
      className="py-20 lg:py-28 bg-[#0B1A2E] relative overflow-hidden border-t border-slate-800"
    >
      {/* Ambient Sea-Blue Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#F37021] text-xs font-semibold uppercase tracking-wider mb-3">
            <Anchor className="w-3.5 h-3.5" />
            <span>Mediazione Marittima & Nautica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand-title">
            Dalla terraferma alle acque. <br />
            <span className="text-[#F37021]">La tua rotta</span> con Felice Marco.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Come <strong className="text-white">Mediatore Marittimo</strong>, Felice Marco dedica la medesima cura, 
            trasparenza e precisione contrattuale alla compravendita di imbarcazioni e yacht da diporto.
          </p>
        </div>

        {/* Featured Showcase Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#07111E] border border-slate-700/80 mb-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Image Left */}
            <div className="lg:col-span-6 relative aspect-video lg:aspect-auto lg:h-[420px]">
              <img
                src="/src/assets/images/luxury_yacht_sea_1787423173950.jpg"
                alt="Mediazione Marittima KasaFelice - Felice Marco"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#07111E]/80"></div>
              
              <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-[#07111E]/90 backdrop-blur-md border border-slate-700">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Mediazione Nautica
                </span>
                <span className="text-[11px] text-[#F37021]">
                  KasaFelice • Felice Marco
                </span>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12">
              <div className="text-xs font-bold text-[#F37021] uppercase tracking-wider mb-2">
                Un Unico Referente di Fiducia
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-brand-title">
                Consulenza e mediazione per la compravendita della tua imbarcazione.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Dalla valutazione dell'imbarcazione alla selezione di acquirenti qualificati, 
                dall'assistenza per le perizie fino al completamento delle pratiche navali e al passaggio di proprietà.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onContactNautica}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-950/40 transition-all cursor-pointer"
                >
                  <span>Richiedi Consulenza Nautica</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${BRAND_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Salve Felice Marco, vorrei informazioni sulla mediazione marittima e compravendita imbarcazioni.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Diretto</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Nautical Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nauticalServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                id={`nautical-service-${idx}`}
                className="p-6 rounded-2xl bg-[#0F223D] border border-slate-700/60 hover:border-slate-600 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#07111E] border border-slate-700 text-[#F37021] flex items-center justify-center mb-4 group-hover:bg-[#F37021] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wide">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
