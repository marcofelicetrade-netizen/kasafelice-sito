import React, { useState } from 'react';
import { BRAND_INFO } from '../data/content';
import { ContactFormData } from '../types';
import {
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Instagram,
  Facebook,
  Anchor,
  Building2
} from 'lucide-react';

interface ContactSectionProps {
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onSuccess
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Valutazione Immobile',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const subjectOptions = [
    'Valutazione Immobile',
    'Acquisto Immobile / Villa',
    'Vendita Immobile',
    'Mediazione Marittima & Imbarcazioni',
    'Cessione Attività Commerciale',
    'Consulenza Generale'
  ];

  const whatsappNumber = BRAND_INFO.whatsappPhone.replace(/[^0-9]/g, '');

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    BRAND_INFO.whatsappMessage
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mdenjqqj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          tipo_richiesta: 'Contatto generico sito KasaFelice',
          nome_cognome: formData.fullName,
          telefono: formData.phone,
          email_cliente: formData.email,
          servizio_interesse: formData.subject,
          messaggio: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Errore durante l’invio della richiesta');
      }

      setSubmitted(true);

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);

      alert(
        'Si è verificato un errore durante l’invio. Puoi riprovare oppure contattarci tramite WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppSend = () => {
    const text = `Ciao Felice, ti contatto dal sito KasaFelice.it.

Oggetto: ${formData.subject}
Nome: ${formData.fullName || 'Non specificato'}
Email: ${formData.email || 'Non specificata'}
Telefono: ${formData.phone || 'Non specificato'}

Messaggio:
${formData.message || 'Desidero ricevere maggiori informazioni.'}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contatti"
      className="py-20 lg:py-28 bg-[#07111E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#F37021] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Contatti KasaFelice</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand-title">
            Dove trovarci e come contattarci.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Immobiliare, nautica e consulenza: scegli il canale più adatto
            alla tua richiesta e mettiti in contatto con KasaFelice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <a
              href={`tel:${BRAND_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="p-6 rounded-2xl bg-[#0B1A2E] border border-slate-800 hover:border-[#F37021]/60 transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F37021]/15 text-[#F37021] flex items-center justify-center group-hover:bg-[#F37021] group-hover:text-white transition-colors flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#F37021] uppercase tracking-wider block">
                  Immobiliare
                </span>

                <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  {BRAND_INFO.phoneDisplay}
                </span>

                <span className="text-xs text-slate-400 block mt-0.5">
                  Linea diretta settore immobiliare
                </span>
              </div>
            </a>

            <a
              href={`tel:${BRAND_INFO.nauticalPhone.replace(/[^0-9+]/g, '')}`}
              className="p-6 rounded-2xl bg-[#0B1A2E] border border-slate-800 hover:border-sky-600/60 transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors flex-shrink-0">
                <Anchor className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                  Nautica
                </span>

                <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  {BRAND_INFO.nauticalPhoneDisplay}
                </span>

                <span className="text-xs text-slate-400 block mt-0.5">
                  Linea dedicata alla mediazione marittima
                </span>
              </div>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 hover:border-emerald-700/70 transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                  WhatsApp
                </span>

                <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  {BRAND_INFO.whatsappPhoneDisplay}
                </span>

                <span className="text-xs text-slate-300 block mt-0.5">
                  Contatto rapido via WhatsApp
                </span>
              </div>
            </a>

            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="p-6 rounded-2xl bg-[#0B1A2E] border border-slate-800 hover:border-[#F37021]/60 transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F37021]/15 text-[#F37021] flex items-center justify-center group-hover:bg-[#F37021] group-hover:text-white transition-colors flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#F37021] uppercase tracking-wider block">
                  Email
                </span>

                <span className="text-base sm:text-lg font-bold text-white break-all">
                  {BRAND_INFO.email}
                </span>
              </div>
            </a>

            <a
              href={BRAND_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-[#0B1A2E] border border-slate-800 hover:border-[#F37021]/60 transition-all"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F37021] flex-shrink-0 mt-0.5" />

                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    Sede Operativa Immobiliare & Nautica
                  </span>

                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    Corso Vittorio Emanuele, 193
                    <br />
                    84122 Salerno (SA)
                  </p>

                  <span className="inline-block mt-2 text-xs font-semibold text-[#F37021]">
                    Apri in Google Maps →
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 mt-4 border-t border-slate-800">
                <Clock className="w-5 h-5 text-[#F37021] flex-shrink-0 mt-0.5" />

                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    Ricevimento
                  </span>

                  <p className="text-xs text-slate-300 mt-1">
                    {BRAND_INFO.hours}
                  </p>
                </div>
              </div>
            </a>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Segui KasaFelice:
              </span>

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

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0F223D] border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-brand-title">
                  Invia un messaggio
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Compila il modulo oppure invia direttamente la richiesta
                  tramite WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">
                    Messaggio inviato
                  </h4>

                  <p className="text-sm text-slate-300 mb-6">
                    Grazie per aver contattato KasaFelice. La tua richiesta è
                    stata inviata correttamente.
                  </p>

                  <button
                    type="button"
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
                    Nuovo messaggio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Nome e Cognome *
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fullName: e.target.value
                          })
                        }
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
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value
                          })
                        }
                        placeholder="+39 340 0000000"
                        className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Email
                      </label>

                      <input
                        type="text"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value
                          })
                        }
                        placeholder="mario@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Oggetto / Servizio
                      </label>

                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            subject: e.target.value
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      >
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Messaggio *
                    </label>

                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value
                        })
                      }
                      placeholder="Descrivi brevemente la tua richiesta..."
                      className="w-full px-4 py-3 rounded-xl bg-[#07111E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-slate-400">
                    I dati inseriti saranno utilizzati per ricontattarti in
                    merito alla richiesta.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all disabled:opacity-50"
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
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
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
