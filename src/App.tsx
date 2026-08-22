import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MethodPillars } from './components/MethodPillars';
import { ServicesSection } from './components/ServicesSection';
import { ValuationSection } from './components/ValuationSection';
import { PropertiesSection } from './components/PropertiesSection';
import { MaritimeSection } from './components/MaritimeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { SearchModal, PrivacyModal, CookieModal } from './components/Modals';
import { ServiceItem } from './types';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenValuation = () => {
    const valuationEl = document.querySelector('#valuta-immobile');
    if (valuationEl) {
      valuationEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    const contactEl = document.querySelector('#contatti');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithProperty = (propertyTitle: string) => {
    const contactEl = document.querySelector('#contatti');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement;
    if (messageInput) {
      messageInput.value = `Salve Felice Marco, desidero ricevere la scheda dettagliata e maggiori informazioni relative all'opportunità: "${propertyTitle}".`;
    }
  };

  const handleContactNautica = () => {
    const contactEl = document.querySelector('#contatti');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    const subjectSelect = document.getElementById('contact-subject-select') as HTMLSelectElement;
    if (subjectSelect) {
      subjectSelect.value = 'Mediazione Marittima & Imbarcazioni';
    }
  };

  return (
    <div className="min-h-screen bg-[#07111E] text-slate-100 flex flex-col font-sans selection:bg-[#F37021] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          id="app-toast-notification"
          className="fixed top-20 right-4 z-50 p-4 rounded-xl bg-[#0F223D] border border-[#F37021] shadow-2xl text-white flex items-center gap-3 animate-fadeIn"
        >
          <CheckCircle2 className="w-5 h-5 text-[#F37021]" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar onOpenValuation={handleOpenValuation} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenValuation={handleOpenValuation} />

        {/* 2. Chi Sono & Filosofia KasaFelice */}
        <AboutSection onOpenValuation={handleOpenValuation} />

        {/* 3. Il Metodo KasaFelice */}
        <MethodPillars />

        {/* 4. I Servizi */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenValuation={handleOpenValuation}
        />

        {/* 5. Valutazione Immobile (Quanto vale il tuo immobile?) */}
        <ValuationSection
          onSuccess={() => showToast('Richiesta di valutazione inviata a Felice Marco!')}
        />

        {/* 6. Immobili & Opportunità Showcase */}
        <PropertiesSection
          onOpenSearchModal={() => setIsSearchModalOpen(true)}
          onOpenContactWithProperty={handleOpenContactWithProperty}
        />

        {/* 7. Mediazione Marittima & Nautica */}
        <MaritimeSection onContactNautica={handleContactNautica} />

        {/* 8. Contatti Diretti */}
        <ContactSection
          onSuccess={() => showToast('Messaggio inviato con successo!')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenCookie={() => setIsCookieModalOpen(true)}
        onOpenValuation={handleOpenValuation}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Modals */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <CookieModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
      />
    </div>
  );
}
