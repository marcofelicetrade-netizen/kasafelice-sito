import React, { useState } from 'react';
import { BRAND_INFO } from '../data/content';
import { ContactFormData } from '../types';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2, Sparkles, Instagram, Facebook } from 'lucide-react';

interface ContactSectionProps {
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Valutazione Immobile',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const subjectOptions = [
    'Valutazione Immobile',
    'Acquisto Immobile / Villa',
    'Vendita Immobile',
    'Mediazione Marittima & Imbarcazioni',
    'Cessione Attività Commerciale',
    'Consulenza Generale'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = `Salve Felice Marco, ti scrivo dal sito KasaFelice:
- Oggetto: ${formData.subject}
- Nome: ${formData.fullName || 'Non specificato'}
- Email: ${formData.email || 'Non specificata'}
- Telefono: ${formData.phone || 'Non specificato'}
- Messaggio: ${formData.message || 'Desidero una consulenza.'}`;

    const url = `https://wa.me/${BRAND_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="contatti"
      className="py-20 lg:py-28 bg-[#07111E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#F37021] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Contatto Diretto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand-title">
            Parla direttamente con Felice Marco.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Senza intermediari, centralini o attese: ricevi una consulenza personalizzata per il tuo immobile o la tua imbarcazione.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Card */}
            <a
              href={`tel:${BRAND_INFO.phone.replace(/\s+/g, '')}`}
              id="contact-phone-card"
              className="p-6 rounded-2xl bg-[#0B1A2E] border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F37021]/15 text-[#F37021] flex items-center justify-center group-hover:bg-[#F37021] group-hover:text-white transition-colors flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#F37021] uppercase tracking-wider block">
                  Telefono & Chiamata Diretta
                </span>
                <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  {BRAND_INFO.phoneDisplay}
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">
                  Disponibile per chiamate e appuntamenti
                </span>
              </div>
            </a>

            {/* Direct WhatsApp Card */}
            <a
              href={`https://wa.me/${BRAND_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-card"
              className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 hover:border-emerald-700/60 transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                  Messaggio WhatsApp Rapido
                </span>
                <span className="text-lg font-bold text-white tracking-wide">
                  Scrivi in tempo reale
                </span>
                <span className="text-xs text-slate-300 block mt-0.5">
                  Risposta rapida diretta da Felice Marco
                </span>
              </div>
            </a>

            {/* Direct Email Card */}
            <a
              href={`mailto:${BRAND_INFO.email}`}
              id="contact-email-card"
              className="p-6 rounded-2xl bg-[#0B1A2E] border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F37021]/15 text-[#F37021] flex items-center justify-center group-hover:bg-[#F37021] group-hover:text-white transition-colors flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#F37021] uppercase tracking-wider block">
                  Email Ufficiale
                </span>
                <span className="text-base sm:text-lg font-bold text-white tracking-wide break-all">
                  {BRAND_INFO.email}
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">
                  Per documentazione e comunicazioni formali
                </span>
              </div>
            </a>

            {/* Location & Operating Details */}
            <div className="p-6 rounded-2xl bg-[#0B1A2E] border border-slate-800 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F37021] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    Area Operativa
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {BRAND_INFO.operatingArea}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-800/80">
                <Clock className="w-5 h-5 text-[#F37021] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    Orari e Ricevimento
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {BRAND_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Segui KasaFelice:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-[#F37021] hover:bg-slate-700 transition-colors"
                  aria-label="Instagram KasaFelice"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-[#F37021] hover:bg-slate-700 transition-colors"
                  aria-label="Facebook KasaFelice"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0F223D] border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-brand-title">
                  Invia un messaggio
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Compila il form per richiedere un appuntamento o informazioni specifiche.
                </p>
              </div>

              {submitted ? (
                <div
                  id="contact-form-success"
                  className="py-12 text-center flex flex-col items-center animate-fadeIn"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-brand-title">
                    Messaggio Inviato!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Grazie per aver contattato KasaFelice. Felice Marco prenderà in carico la tua richiesta e ti ricontatterà al più presto.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        subject: 'Valutazione Immobile',
                        message: ''
                      });
                    }}
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Nome e Cognome *
                      </label>
                      <input
                        type="text"
                        required
                        id="contact-fullname"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Mario Rossi"
                        className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        required
                        id="contact-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+39 340 0000000"
                        className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="mario@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Oggetto / Servizio di interesse
                      </label>
                      <select
                        id="contact-subject-select"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      >
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#07111E] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Messaggio *
                    </label>
                    <textarea
                      rows={4}
                      required
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descrivi brevemente la tua richiesta o l'immobile/imbarcazione..."
                      className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="text-[11px] text-slate-400">
                    I tuoi dati sono protetti e trattati esclusivamente da KasaFelice per ricontattarti in merito alla tua richiesta.
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={loading}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-950/40 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Invio in corso...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Invia Richiesta</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Invia via WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
