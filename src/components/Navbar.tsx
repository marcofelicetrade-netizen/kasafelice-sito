import React, { useState, useEffect } from 'react';
import { KasaFeliceLogo } from './KasaFeliceLogo';
import { BRAND_INFO } from '../data/content';
import { Phone, MessageCircle, Menu, X, ArrowRight, Home, User, Layers, Anchor, Mail, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenValuation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenValuation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Chi Sono', href: '#chi-sono', icon: User },
    { label: 'Servizi', href: '#servizi', icon: Layers },
    { label: 'Immobili', href: '#immobili', icon: Home },
    { label: 'Nautica', href: '#nautica', icon: Anchor },
    { label: 'Contatti', href: '#contatti', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07111E]/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl py-2.5'
          : 'bg-gradient-to-b from-[#07111E]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center group transition-transform duration-200 hover:scale-[1.02]"
          >
            <KasaFeliceLogo variant="compact" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#F37021] transition-colors rounded-lg hover:bg-slate-800/40 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#F37021] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              </button>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone direct */}
            <a
              href={`tel:${BRAND_INFO.phone.replace(/\s+/g, '')}`}
              id="header-phone-btn"
              className="p-2.5 text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 rounded-lg transition-all"
              title={`Chiama ${BRAND_INFO.founder}`}
            >
              <Phone className="w-4 h-4 text-[#F37021]" />
            </a>

            {/* WhatsApp direct */}
            <a
              href={`https://wa.me/${BRAND_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="p-2.5 text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 rounded-lg transition-all"
              title="Scrivi su WhatsApp a Felice Marco"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </a>

            {/* Valuation CTA */}
            <button
              id="nav-cta-valuation"
              onClick={onOpenValuation}
              className="inline-flex items-center gap-2 bg-[#F37021] hover:bg-[#E05E10] text-white px-4 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wider shadow-lg shadow-orange-950/40 hover:shadow-orange-900/60 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Valuta Immobile</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-valuation-trigger"
              onClick={onOpenValuation}
              className="sm:hidden text-xs bg-[#F37021] text-white px-3 py-1.5 rounded-md font-semibold"
            >
              Valuta
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="lg:hidden fixed inset-0 top-[60px] bg-[#07111E]/95 backdrop-blur-xl border-t border-slate-800/80 p-6 flex flex-col justify-between z-40 transition-all animate-fadeIn"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.label}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between p-3.5 text-base font-semibold text-slate-100 hover:text-[#F37021] bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/30 rounded-xl transition-all"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#F37021]" />
                    {link.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}

            <button
              id="mobile-menu-valuation-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenValuation();
              }}
              className="mt-3 flex items-center justify-center gap-2 w-full p-4 bg-[#F37021] text-white rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-orange-950/50"
            >
              <Sparkles className="w-4 h-4" />
              <span>Valuta il tuo immobile</span>
            </button>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-col gap-3">
            <div className="text-xs text-slate-400 text-center font-medium">
              Contatto diretto con {BRAND_INFO.founder}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${BRAND_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 p-3 bg-slate-800 text-white rounded-xl text-xs font-semibold border border-slate-700"
              >
                <Phone className="w-4 h-4 text-[#F37021]" />
                <span>Chiama</span>
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-emerald-900/40 text-emerald-300 border border-emerald-700/50 rounded-xl text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
