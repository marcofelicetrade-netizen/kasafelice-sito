import React, { useState } from 'react';
import { BRAND_INFO } from '../data/content';
import { PropertySearchFormData } from '../types';
import { X, Search, CheckCircle2, ShieldCheck, Cookie } from 'lucide-react';

// Custom Property Search Modal
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<PropertySearchFormData>({
    fullName: '',
    email: '',
    phone: '',
    category: 'Residenziale / Villa',
    targetLocation: '',
    budgetRange: '',
    specificRequirements: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="search-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="search-modal-card"
        className="relative w-full max-w-xl bg-[#0B1A2E] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-[#F37021]/15 text-[#F37021]">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#F37021] uppercase tracking-wider">
              Scouting su Misura
            </span>
            <h3 className="text-xl font-bold text-white font-brand-title">
              Incarico di Ricerca Personalizzato
            </h3>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Richiesta Ricevuta!</h4>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-sm mx-auto">
              Felice Marco avvierà una ricerca dedicata sul territorio o nel settore nautico e ti contatterà appena disponibili opportunità in linea.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#F37021] text-white text-xs font-bold uppercase tracking-wider"
            >
              Chiudi
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              Non hai trovato l'immobile o l'imbarcazione perfetta? Descrivi ciò che cerchi: Felice Marco attiverà la sua rete di contatti off-market riservati per trovare la soluzione ideale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Tipologia Cercata
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111E] border border-slate-700 text-white text-xs focus:border-[#F37021] outline-none"
                >
                  <option>Residenziale / Villa</option>
                  <option>Attico di Prestigio</option>
                  <option>Imbarcazione / Yacht</option>
                  <option>Attività Commerciale</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Zona / Località Preferita
                </label>
                <input
                  type="text"
                  required
                  value={formData.targetLocation}
                  onChange={(e) => setFormData({ ...formData, targetLocation: e.target.value })}
                  placeholder="Es. Desenzano, Sirmione..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111E] border border-slate-700 text-white text-xs focus:border-[#F37021] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Budget Indicativo (Opzionale)
                </label>
                <input
                  type="text"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  placeholder="Es. 500.000€ - 800.000€"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111E] border border-slate-700 text-white text-xs focus:border-[#F37021] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Mario Rossi"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111E] border border-slate-700 text-white text-xs focus:border-[#F37021] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Telefono *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+39 340 0000000"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111E] border border-slate-700 text-white text-xs focus:border-[#F37021] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="mario@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111E] border border-slate-700 text-white text-xs focus:border-[#F37021] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                Dettagli e Requisiti Specifici
              </label>
              <textarea
                rows={2}
                value={formData.specificRequirements}
                onChange={(e) => setFormData({ ...formData, specificRequirements: e.target.value })}
                placeholder="Es. Vista lago, terrazza vivibile, posto barca incluso, giardino..."
                className="w-full px-3.5 py-2 rounded-xl bg-[#07111E] border border-slate-700 text-white text-xs focus:border-[#F37021] outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-950/40 transition-colors"
            >
              Invia Richiesta di Ricerca
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// Privacy Policy Modal
export const PrivacyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0B1A2E] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh] text-slate-300 text-xs space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#F37021]" />
          <h3 className="text-lg font-bold text-white font-brand-title">
            Informativa sulla Privacy (GDPR)
          </h3>
        </div>

        <p>
          Ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR), ti informiamo che i dati personali forniti tramite i moduli del sito web di <strong className="text-white">KasaFelice</strong> di <strong className="text-white">Felice Marco</strong> saranno trattati con la massima riservatezza.
        </p>

        <h4 className="text-xs font-bold text-white uppercase tracking-wider">1. Titolare del Trattamento</h4>
        <p>
          Il Titolare del trattamento è Felice Marco, referente dell'attività KasaFelice, contattabile all'indirizzo email <strong className="text-white">info@kasafelice.it</strong>.
        </p>

        <h4 className="text-xs font-bold text-white uppercase tracking-wider">2. Finalità e Base Giuridica</h4>
        <p>
          I dati raccolti (nome, cognome, email, recapito telefonico, dettagli dell'immobile o dell'imbarcazione) sono utilizzati esclusivamente per:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Rispondere alle richieste di valutazione o di contatto inviate dall'utente.</li>
          <li>Fornire la consulenza e i servizi di mediazione immobiliare e marittima richiesti.</li>
        </ul>

        <h4 className="text-xs font-bold text-white uppercase tracking-wider">3. Modalità del Trattamento e Conservazione</h4>
        <p>
          I dati non saranno ceduti a terzi per scopi pubblicitari o di marketing massivo. Saranno conservati per il tempo strettamente necessario all'evasione della richiesta e agli obblighi di legge.
        </p>

        <h4 className="text-xs font-bold text-white uppercase tracking-wider">4. Diritti dell'Interessato</h4>
        <p>
          L'utente ha il diritto di richiedere l'accesso, la rettifica, la cancellazione o la limitazione del trattamento dei propri dati scrivendo a info@kasafelice.it.
        </p>

        <div className="pt-3 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#F37021] text-white font-semibold text-xs"
          >
            Ho Capito
          </button>
        </div>
      </div>
    </div>
  );
};

// Cookie Policy Modal
export const CookieModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#0B1A2E] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh] text-slate-300 text-xs space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <Cookie className="w-6 h-6 text-[#F37021]" />
          <h3 className="text-lg font-bold text-white font-brand-title">
            Informativa sui Cookie
          </h3>
        </div>

        <p>
          Il sito web di <strong className="text-white">KasaFelice</strong> utilizza esclusivamente cookie tecnici strettamente necessari al funzionamento del sito e alla corretta visualizzazione delle sezioni interattive.
        </p>

        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tipologie di cookie utilizzati:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Cookie Tecnici:</strong> Necessari per la navigazione, la gestione delle sessioni e la corretta visualizzazione responsive.</li>
          <li><strong>Nessun Cookie di Profilazione di Terze Parti:</strong> Il sito non effettua tracciamento invasivo o profilazione pubblicitaria senza consenso.</li>
        </ul>

        <div className="pt-3 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#F37021] text-white font-semibold text-xs"
          >
            Accetta e Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
