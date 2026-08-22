import React, { useState } from 'react';
import { SHOWCASE_LISTINGS } from '../data/content';
import { PropertyListing } from '../types';
import { Home, Sparkles, MapPin, Maximize, BedDouble, Bath, Anchor, ArrowRight, ShieldCheck, Search, Filter, X } from 'lucide-react';

interface PropertiesSectionProps {
  onOpenSearchModal: () => void;
  onOpenContactWithProperty: (propertyTitle: string) => void;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  onOpenSearchModal,
  onOpenContactWithProperty,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('tutti');
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);

  const categories = [
    { id: 'tutti', label: 'Tutte le Opportunità' },
    { id: 'prestigio', label: 'Residenziale & Prestigio' },
    { id: 'nautica', label: 'Nautica & Imbarcazioni' },
    { id: 'commerciale', label: 'Attività Commerciali' },
  ];

  const filteredListings = activeCategory === 'tutti'
    ? SHOWCASE_LISTINGS
    : SHOWCASE_LISTINGS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="immobili"
      className="py-20 lg:py-28 bg-[#07111E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#F37021] text-xs font-semibold uppercase tracking-wider mb-3">
              <Home className="w-3.5 h-3.5" />
              <span>Portfolio & Opportunità</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand-title">
              Immobili e Opportunità
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-xl">
              Selezione di immobili, cessioni d'azienda e imbarcazioni gestite direttamente da Felice Marco con la massima riservatezza.
            </p>
          </div>

          {/* Custom Search Trigger Button */}
          <button
            id="btn-custom-search-trigger"
            onClick={onOpenSearchModal}
            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white border border-slate-700 text-xs font-bold uppercase tracking-wider transition-all self-start md:self-auto cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#F37021]" />
            <span>Incarico di Ricerca su Misura</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#F37021] text-white shadow-md shadow-orange-950/40'
                  : 'bg-[#0B1A2E] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Listings Grid or Prepared Structure State */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((item) => (
              <div
                key={item.id}
                id={`property-card-${item.id}`}
                className="rounded-2xl overflow-hidden bg-[#0B1A2E] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Image Container with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#07111E]/85 backdrop-blur-md border border-slate-700/60 text-[#F37021] text-[10px] font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-lg bg-[#07111E]/90 backdrop-blur-md border border-slate-700 text-white text-xs font-bold font-brand-title">
                    {item.price}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#F37021]" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight font-brand-title group-hover:text-[#F37021] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.highlights.slice(0, 2).map((h, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#07111E] text-slate-300 border border-slate-800">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="text-xs text-slate-400 font-medium">
                      {item.surface} {item.length ? `• ${item.length}` : ''}
                    </div>

                    <button
                      onClick={() => setSelectedProperty(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F37021] hover:text-orange-400 uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Dettagli</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Prepared Structure & Confidential State without fake listings */
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Category 1 Card Placeholder */}
              <div className="rounded-2xl p-7 bg-[#0B1A2E] border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#07111E] border border-slate-700 text-[#F37021] text-[10px] font-bold uppercase tracking-wider">
                      Residenziale & Prestigio
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Gestione Diretta</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-brand-title">
                    Immobili Residenziali e Ville
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Incarichi di vendita e acquisto gestiti con riservatezza. Le nuove opportunità vengono condivise in via prioritaria con i clienti accreditati.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Trattative riservate</span>
                  <button
                    onClick={onOpenSearchModal}
                    className="text-xs font-bold text-[#F37021] hover:text-orange-400 uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Invia Richiesta</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Category 2 Card Placeholder */}
              <div className="rounded-2xl p-7 bg-[#0B1A2E] border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#07111E] border border-slate-700 text-[#F37021] text-[10px] font-bold uppercase tracking-wider">
                      Nautica & Imbarcazioni
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Mediazione Marittima</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-brand-title">
                    Imbarcazioni da Diporto e Yacht
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Mediazione nautica dedicata per natanti, imbarcazioni a motore e yacht. Consulenza tecnica, prove in mare e passaggi di proprietà.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Canale riservato</span>
                  <button
                    onClick={onOpenSearchModal}
                    className="text-xs font-bold text-[#F37021] hover:text-orange-400 uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Invia Richiesta</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Category 3 Card Placeholder */}
              <div className="rounded-2xl p-7 bg-[#0B1A2E] border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#07111E] border border-slate-700 text-[#F37021] text-[10px] font-bold uppercase tracking-wider">
                      Attività Commerciali
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Cessioni d'Azienda</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-brand-title">
                    Locali e Attività Commerciali
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Mediazione confidenziale per cessioni d'azienda, negozi e locali commerciali sul territorio. Tutela del valore e massima discrezione.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Off-market</span>
                  <button
                    onClick={onOpenSearchModal}
                    className="text-xs font-bold text-[#F37021] hover:text-orange-400 uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Invia Richiesta</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Portfolio Footer Note: Discretion & Custom Scouting */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0F223D] border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#F37021]/15 text-[#F37021] flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                Trattative Riservate & Off-Market
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Per tutelare la privacy dei venditori, molte proprietà di prestigio e attività commerciali sono gestite in forma confidenziale.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenSearchModal}
            className="w-full md:w-auto whitespace-nowrap px-6 py-3.5 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-950/40 transition-colors cursor-pointer"
          >
            Richiedi Portfolio Riservato
          </button>
        </div>

      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div
          id="property-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            id="property-modal-card"
            className="relative w-full max-w-2xl bg-[#0B1A2E] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-video w-full bg-slate-900 flex-shrink-0">
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 p-2 bg-[#07111E]/80 text-slate-300 hover:text-white rounded-full backdrop-blur-sm border border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-lg bg-[#07111E]/90 backdrop-blur-md border border-slate-700 text-white text-sm font-bold">
                {selectedProperty.price}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#F37021] font-semibold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedProperty.location}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-brand-title">
                  {selectedProperty.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProperty.description}
              </p>

              {/* Characteristics Grid */}
              <div className="p-4 rounded-xl bg-[#07111E] border border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Superficie</span>
                  <span className="text-white font-semibold">{selectedProperty.surface}</span>
                </div>
                {selectedProperty.rooms && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Locali</span>
                    <span className="text-white font-semibold">{selectedProperty.rooms}</span>
                  </div>
                )}
                {selectedProperty.length && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Lunghezza</span>
                    <span className="text-white font-semibold">{selectedProperty.length}</span>
                  </div>
                )}
                {selectedProperty.year && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Anno / Stato</span>
                    <span className="text-white font-semibold">{selectedProperty.year}</span>
                  </div>
                )}
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5">
                  Caratteristiche Chiave:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProperty.highlights.map((h, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-lg bg-[#0F223D] text-slate-200 border border-slate-700">
                      • {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = selectedProperty.title;
                    setSelectedProperty(null);
                    onOpenContactWithProperty(title);
                  }}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-950/40 text-center transition-colors cursor-pointer"
                >
                  Richiedi Informazioni / Scheda Dettagliata
                </button>
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
