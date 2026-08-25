import React from 'react';
import { BRAND_INFO } from '../data/content';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  // Numero WhatsApp dedicato:
  // +39 324 876 3190 → 393248763190
  const whatsappNumber = BRAND_INFO.whatsappPhone.replace(/[^0-9]/g, '');

  // Link WhatsApp con messaggio precompilato
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    BRAND_INFO.whatsappMessage
  )}`;

  return (
    <aside
      id="floating-whatsapp-widget"
      aria-label="Contatto rapido WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
    >
      {/* Tooltip prompt */}
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-xl bg-[#07111E]/95 backdrop-blur-md border border-slate-700 text-white text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Scrivimi su WhatsApp
      </span>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Contatta Felice Marco di KasaFelice su WhatsApp"
        title="Scrivimi su WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  );
};
