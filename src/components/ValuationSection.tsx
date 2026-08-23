import React, { useState } from 'react';
import { BRAND_INFO } from '../data/content';
import { ValuationFormData } from '../types';
import { TrendingUp, Sparkles, Building2, Home, MapPin, CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface ValuationSectionProps {
  onSuccess?: () => void;
}

export const ValuationSection: React.FC<ValuationSectionProps> = ({ onSuccess }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<ValuationFormData>({
    propertyType: 'Appartamento',
    location: '',
    surface: '',
    rooms: '3 locali',
    condition: 'Ottimo / Ristrutturato',
    timeline: 'Entro 3-6 mesi',
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const propertyTypes = [
    'Appartamento',
    'Villa / Villa Singola',
    'Attico di Prestigio',
    'Rustico / Casale',
    'Attività Commerciale',
    'Altro Immobile'
  ];

  const conditionOptions = [
    'Nuova Costruzione',
    'Ottimo / Ristrutturato',
    'Buono / Abitabile',
    'Da Ristrutturare'
  ];

  const timelineOptions = [
    'Voglio vendere subito (1-3 mesi)',
    'Entro 3-6 mesi',
    'Entro 12 mesi',
    'Solo per conoscere il valore reale'
  ];

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('https://formspree.io/f/mdenjqqj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        tipologia: formData.propertyType,
        comune_zona: formData.location,
        superficie_mq: formData.surface,
        stato_immobile: formData.condition,
        tempistica: formData.timeline,
        nome_cognome: formData.fullName,
        telefono: formData.phone,
        email: formData.email,
        note: formData.notes
      })
    });

    if (!response.ok) {
      throw new Error('Errore durante l’invio della richiesta');
    }

    setSubmitted(true);
    if (onSuccess) onSuccess();
  } catch (error) {
    console.error(error);
    alert('Si è verificato un errore durante l’invio. Riprova tra qualche istante.');
  } finally {
    setLoading(false);
  }
};

  const handleWhatsAppDirect = () => {
    const text = `Salve Felice Marco, desidero richiedere una valutazione per il mio immobile:
- Tipologia: ${formData.propertyType}
- Zona/Comune: ${formData.location || 'Da comunicare'}
- Superficie: ${formData.surface || 'N/D'} mq
- Stato: ${formData.condition}
- Tempistica: ${formData.timeline}
- Nome: ${formData.fullName}
- Telefono: ${formData.phone}`;

    const url = `https://wa.me/${BRAND_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      propertyType: 'Appartamento',
      location: '',
      surface: '',
      rooms: '3 locali',
      condition: 'Ottimo / Ristrutturato',
      timeline: 'Entro 3-6 mesi',
      fullName: '',
      phone: '',
      email: '',
      notes: ''
    });
  };

  return (
    <section
      id="valuta-immobile"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#0B1A2E] via-[#07111E] to-[#0B1A2E] relative overflow-hidden border-y border-slate-800"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#F37021]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F37021]/15 border border-[#F37021]/30 text-[#F37021] text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Valutazione Professionale</span>
          </div>
          <h2
            id="valuation-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand-title"
          >
            Quanto vale il tuo immobile?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Una stima reale, accurata e motivata è la chiave per valorizzare la tua proprietà e vendere alle migliori condizioni di mercato. 
            Nessun algoritmo automatico: la valutazione viene redatta personalmente da <span className="text-white font-semibold">Felice Marco</span>.
          </p>
        </div>

        {/* Valuation Card Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-[#0F223D] border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
            
            {/* Top Guarantees Pill Bar */}
            <div className="flex flex-wrap items-center justify-around gap-4 pb-6 mb-8 border-b border-slate-800 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#F37021]" />
                Valutazione Gratuita e Riservata
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#F37021]" />
                Senza Alcun Impegno
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-[#F37021]" />
                Risposta Entro 24/48h
              </span>
            </div>

            {submitted ? (
              /* Success confirmation state */
              <div
                id="valuation-success-card"
                className="py-10 text-center animate-fadeIn flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-brand-title mb-2">
                  Richiesta Inviata con Successo!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Grazie <strong className="text-white">{formData.fullName || 'Gentile Proprietario'}</strong>. 
                  Felice Marco analizzerà i dati dell'immobile a <strong className="text-white">{formData.location || 'indicato'}</strong> e ti ricontatterà a breve al recapito indicato.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Invia anche promemoria su WhatsApp</span>
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                  >
                    Effettua un'altra richiesta
                  </button>
                </div>
              </div>
            ) : (
              /* Interactive Multi-step Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#F37021] uppercase tracking-wider">
                      Fase {step} di 2
                    </span>
                    <span className="text-xs text-slate-400">
                      {step === 1 ? '— Dettagli Immobile' : '— I Tuoi Recapiti'}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className={`h-1.5 w-8 rounded-full ${step >= 1 ? 'bg-[#F37021]' : 'bg-slate-700'}`}></div>
                    <div className={`h-1.5 w-8 rounded-full ${step >= 2 ? 'bg-[#F37021]' : 'bg-slate-700'}`}></div>
                  </div>
                </div>

                {step === 1 ? (
                  /* Step 1: Property characteristics */
                  <div className="space-y-5 animate-fadeIn">
                    {/* Property Type selection */}
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5">
                        1. Tipologia di Immobile
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {propertyTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            id={`type-btn-${type.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setFormData({ ...formData, propertyType: type })}
                            className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                              formData.propertyType === type
                                ? 'bg-[#F37021] text-white border-[#F37021] shadow-md shadow-orange-950/40'
                                : 'bg-[#07111E] text-slate-300 border-slate-700/80 hover:border-slate-500'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Location & Surface */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                          2. Comune o Zona dell'immobile *
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            id="valuation-location"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="Es. Desenzano del Garda, Sirmione, Brescia..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                          3. Superficie stimata (m²) *
                        </label>
                        <input
                          type="number"
                          required
                          id="valuation-surface"
                          value={formData.surface}
                          onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                          placeholder="Es. 120"
                          className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] outline-none"
                        />
                      </div>
                    </div>

                    {/* Condition & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                          4. Stato attuale dell'immobile
                        </label>
                        <select
                          id="valuation-condition"
                          value={formData.condition}
                          onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                        >
                          {conditionOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#07111E] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                          5. Tempistica desiderata
                        </label>
                        <select
                          id="valuation-timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                        >
                          {timelineOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#07111E] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Next step button */}
                    <div className="pt-3">
                      <button
                        type="button"
                        id="valuation-step1-next"
                        onClick={() => {
                          if (!formData.location || !formData.surface) {
                            alert('Compila il Comune/Zona e la Superficie stimata per procedere.');
                            return;
                          }
                          setStep(2);
                        }}
                        className="w-full py-4 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-orange-950/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Continua: Inserisci i tuoi dati di contatto</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Step 2: Contact info */
                  <div className="space-y-4 animate-fadeIn">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Nome e Cognome *
                      </label>
                      <input
                        type="text"
                        required
                        id="valuation-fullname"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Es. Mario Rossi"
                        className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                          Recapito Telefonico *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            id="valuation-phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Es. +39 340 1234567"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                          Indirizzo Email *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            id="valuation-email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="mario.rossi@email.it"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Note o caratteristiche particolari (opzionale)
                      </label>
                      <textarea
                        rows={2}
                        id="valuation-notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Es. Balcone vista lago, posto auto coperto, giardino privato..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none resize-none"
                      ></textarea>
                    </div>

                    <div className="text-[11px] text-slate-400">
                      Inviando questo modulo acconsenti al trattamento dei dati personali per la stima dell'immobile, nel rispetto della privacy.
                    </div>

                    {/* Submit Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Indietro
                      </button>

                      <button
                        type="submit"
                        id="valuation-submit-btn"
                        disabled={loading}
                        className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-950/40 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          <span>Elaborazione stima...</span>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            <span>Richiedi una valutazione</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
