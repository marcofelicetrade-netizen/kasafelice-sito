import React, { useState } from 'react';
import {
  BriefcaseBusiness,
  Headphones,
  Users,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

type CareerFormData = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  role: string;
  experience: string;
  linkedin: string;
  message: string;
  privacyAccepted: boolean;
};

export const CareersSection: React.FC = () => {
  const [formData, setFormData] = useState<CareerFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    role: 'Collaboratore / Agente Immobiliare',
    experience: 'Nessuna esperienza',
    linkedin: '',
    message: '',
    privacyAccepted: false
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const roles = [
    {
      icon: BriefcaseBusiness,
      title: 'Collaboratori e Agenti Immobiliari',
      description:
        'Professionisti e aspiranti professionisti interessati a sviluppare attività di acquisizione, consulenza, mediazione e gestione della clientela.',
      points: [
        'Appuntamenti e opportunità qualificate',
        'Metodo commerciale strutturato',
        'Strumenti digitali e CRM',
        'Possibilità di crescita territoriale'
      ]
    },
    {
      icon: Headphones,
      title: 'Operatori Commerciali',
      description:
        'Figure dedicate al primo contatto con lead e clienti, alla qualificazione delle opportunità e alla programmazione degli appuntamenti.',
      points: [
        'Attività telefonica organizzata',
        'Formazione sul metodo KasaFelice',
        'Gestione e qualificazione lead',
        'Lavoro orientato a obiettivi misurabili'
      ]
    },
    {
      icon: Users,
      title: 'Candidatura Spontanea',
      description:
        'Se pensi di poter portare valore al progetto KasaFelice in un ruolo diverso, raccontaci chi sei e cosa potresti costruire insieme a noi.',
      points: [
        'Profili commerciali',
        'Marketing e comunicazione',
        'Supporto operativo',
        'Collaborazioni professionali'
      ]
    }
  ];

  const roleOptions = [
    'Collaboratore / Agente Immobiliare',
    'Operatore Commerciale / Telefonico',
    'Candidatura Spontanea'
  ];

  const experienceOptions = [
    'Nessuna esperienza',
    'Meno di 1 anno',
    '1 - 3 anni',
    '3 - 5 anni',
    'Oltre 5 anni'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyAccepted) {
      alert(
        'Per inviare la candidatura è necessario accettare il trattamento dei dati.'
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mdenjqqj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          tipo_richiesta: 'Candidatura Lavora con Noi - KasaFelice',
          nome_cognome: formData.fullName,
          telefono: formData.phone,
          email: formData.email,
          citta_provincia: formData.city,
          posizione_interesse: formData.role,
          esperienza: formData.experience,
          linkedin: formData.linkedin || 'Non indicato',
          presentazione: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Errore durante l’invio della candidatura');
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);

      alert(
        'Si è verificato un errore durante l’invio della candidatura. Riprova tra qualche momento.'
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);

    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      role: 'Collaboratore / Agente Immobiliare',
      experience: 'Nessuna esperienza',
      linkedin: '',
      message: '',
      privacyAccepted: false
    });
  };

  return (
    <section
      id="lavora-con-noi"
      className="py-20 lg:py-28 bg-[#0B1A2E] relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F37021]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111E] border border-slate-700 text-[#F37021] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lavora con noi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand-title">
            Cresci con KasaFelice.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Stiamo costruendo una realtà moderna nella mediazione immobiliare e
            marittima, fondata su competenza, tecnologia, organizzazione e
            rapporto umano.
          </p>

          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Cerchiamo persone motivate che vogliano contribuire allo sviluppo
            di un progetto destinato a crescere nel territorio, assumendosi
            responsabilità e creando valore insieme.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 lg:mb-16">
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.title}
                className="rounded-3xl bg-[#07111E] border border-slate-800 p-6 lg:p-7 hover:border-[#F37021]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F37021]/15 text-[#F37021] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white font-brand-title mb-3">
                  {role.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {role.description}
                </p>

                <div className="space-y-3">
                  {role.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <ArrowRight className="w-4 h-4 text-[#F37021] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiting statement */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-brand-title">
            Non cerchiamo semplicemente collaboratori.
          </h3>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Cerchiamo persone che vogliano crescere all’interno di un metodo di
            lavoro organizzato, misurabile e orientato al risultato. Esperienza,
            capacità relazionali e spirito commerciale sono importanti, ma
            contano anche affidabilità, responsabilità e volontà di imparare.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-[#07111E] border border-slate-700/80 p-6 sm:p-8 lg:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white font-brand-title">
                  Candidatura ricevuta.
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                  Grazie per il tuo interesse verso KasaFelice. Valuteremo le
                  informazioni che ci hai inviato e ti contatteremo qualora il
                  tuo profilo sia in linea con le opportunità disponibili.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-7 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Invia un’altra candidatura
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 text-[#F37021] text-xs font-bold uppercase tracking-wider mb-2">
                    <BriefcaseBusiness className="w-4 h-4" />
                    <span>Candidati</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-brand-title">
                    Raccontaci chi sei.
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Compila il modulo. Le candidature vengono ricevute
                    direttamente da KasaFelice.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Nome e Cognome *
                      </label>

                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

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
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0B1A2E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Telefono *
                      </label>

                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

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
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0B1A2E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email and city */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Email *
                      </label>

                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value
                            })
                          }
                          placeholder="mario@example.com"
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0B1A2E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Città / Provincia *
                      </label>

                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              city: e.target.value
                            })
                          }
                          placeholder="Salerno (SA)"
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0B1A2E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Role and experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Posizione di interesse *
                      </label>

                      <select
                        required
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            role: e.target.value
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1A2E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      >
                        {roleOptions.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                        Esperienza *
                      </label>

                      <select
                        required
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: e.target.value
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1A2E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      >
                        {experienceOptions.map((experience) => (
                          <option key={experience} value={experience}>
                            {experience}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Profilo LinkedIn
                      <span className="ml-2 normal-case text-slate-500 font-normal">
                        facoltativo
                      </span>
                    </label>

                    <div className="relative">
                      <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            linkedin: e.target.value
                          })
                        }
                        placeholder="https://www.linkedin.com/in/..."
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0B1A2E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none"
                      />
                    </div>
                  </div>

                  {/* Presentation */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Presentati *
                    </label>

                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value
                        })
                      }
                      placeholder="Raccontaci brevemente la tua esperienza, cosa stai cercando e perché vorresti collaborare con KasaFelice..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1A2E] border border-slate-700 text-white text-sm focus:border-[#F37021] outline-none resize-none"
                    />
                  </div>

                  {/* Privacy */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyAccepted}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          privacyAccepted: e.target.checked
                        })
                      }
                      className="mt-1 w-4 h-4 accent-[#F37021]"
                    />

                    <span className="text-xs text-slate-400 leading-relaxed">
                      Acconsento al trattamento dei dati personali inseriti
                      esclusivamente per la gestione della mia candidatura e
                      per essere ricontattato da KasaFelice. *
                    </span>
                  </label>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-950/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Invio candidatura...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Invia candidatura</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
