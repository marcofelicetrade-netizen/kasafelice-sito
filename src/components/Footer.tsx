import React from 'react';
import { KasaFeliceLogo } from './KasaFeliceLogo';
import { BRAND_INFO } from '../data/content';
import { Phone, Mail, MapPin, MessageCircle, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenCookie: () => void;
  onOpenValuation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenCookie,
  onOpenValuation
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Chi Sono', href: '#chi-sono' },
    { label: 'Servizi', href: '#servizi' },
    { label: 'Immobili & Opportunità', href: '#immobili' },
    { label: 'Mediazione Marittima', href: '#nautica' },
    { label: 'Contatti', href: '#contatti' },
  ];

  return (
    <footer id="main-footer" className="bg-[#050C16] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-start">
              <KasaFeliceLogo variant="compact" />
            </div>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Attività di mediazione immobiliare, marittima e consulenza compravendita fondata e condotta da <strong className="text-white">Felice Marco</strong>.
            </p>

            <div className="p-3.5 rounded-xl bg-[#0B1A2E] border border-slate-800 text-slate-300 text-xs inline-block">
              <span className="text-[#F37021] font-semibold block uppercase tracking-wider text-[10px]">
                Filosofia
              </span>
              "{BRAND_INFO.slogan}"
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Navigazione Rapida
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#F37021] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenValuation}
                  className="text-[#F37021] font-semibold hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Valuta il tuo immobile →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Area (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Contatti Diretti
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${BRAND_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F37021]" />
                  <span>{BRAND_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F37021]" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#F37021] flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location} & territorio nazionale</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">KasaFelice</strong> di Felice Marco. Tutti i diritti riservati.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#F37021] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenCookie}
              className="hover:text-[#F37021] transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Torna su"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
