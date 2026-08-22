import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import { Home, TrendingUp, Users, ShieldCheck, Briefcase, Anchor, ArrowRight, Check, Sparkles, X } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Home,
  TrendingUp,
  Users,
  ShieldCheck,
  Briefcase,
  Anchor
};

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenValuation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenValuation }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleCardClick = (service: ServiceItem) => {
    if (service.id === 'valutazione-immobile') {
      onOpenValuation();
    } else {
      setActiveModalService(service);
    }
  };

  const handleContactForService = (serviceTitle: string) => {
    setActiveModalService(null);
    const contactSection = document.querySelector('#contatti');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    // We can also broadcast or pass the subject to contact form if needed
    const subjectSelect = document.getElementById('contact-subject-select') as HTMLSelectElement;
    if (subjectSelect) {
      subjectSelect.value = serviceTitle;
    }
  };

  return (
    <section
      id="servizi"
      className="py-20 lg:py-28 bg-[#07111E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#F37021] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Servizi Professionali</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand-title">
            Mediazione, consulenza e valorizzazione.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Un ventaglio di servizi dedicati alla gestione del patrimonio immobiliare, commerciale e marittimo, 
            condotti sempre con approccio su misura e totale riservatezza.
          </p>
        </div>

        {/* Services Grid (6 Core Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Home;
            const isValuation = service.id === 'valutazione-immobile';

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 border ${
                  isValuation
                    ? 'bg-gradient-to-b from-[#0F223D] to-[#0B1A2E] border-[#F37021]/50 shadow-xl shadow-orange-950/20 hover:border-[#F37021]'
                    : 'bg-[#0B1A2E] border-slate-800 hover:border-slate-700 hover:bg-[#0F223D]/60'
                } group hover:-translate-y-1`}
              >
                {/* Top Badge for Valuation */}
                {isValuation && (
                  <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#F37021] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    In Evidenza
                  </span>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700/60 text-[#F37021] flex items-center justify-center mb-6 group-hover:bg-[#F37021] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-brand-title group-hover:text-[#F37021] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Features Preview */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#F37021] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    id={`btn-service-detail-${service.id}`}
                    onClick={() => handleCardClick(service)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#F37021] group-hover:text-orange-400 uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>{isValuation ? 'Richiedi Valutazione' : 'Approfondisci'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">
                    KasaFelice
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div
          id="service-detail-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveModalService(null)}
        >
          <div
            id="service-detail-modal-card"
            className="relative w-full max-w-xl bg-[#0B1A2E] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-[#F37021]/15 text-[#F37021]">
                {React.createElement(iconMap[activeModalService.iconName] || Home, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-xs font-bold text-[#F37021] uppercase tracking-wider">
                  Servizio KasaFelice
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-brand-title">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalService.fullDescription}
            </p>

            {/* Features List */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Cosa comprende il servizio:
              </h4>
              <div className="space-y-2.5">
                {activeModalService.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#07111E]/60 border border-slate-800">
                    <Check className="w-4 h-4 text-[#F37021] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleContactForService(activeModalService.title)}
                className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-950/40 transition-all text-center cursor-pointer"
              >
                Richiedi Consulenza su questo servizio
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-colors text-center cursor-pointer"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
