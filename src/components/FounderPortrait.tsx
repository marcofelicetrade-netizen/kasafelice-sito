import React, { useState } from 'react';
import { KasaFeliceIcon } from './KasaFeliceLogo';
import { User, Award, ShieldCheck, Sparkles } from 'lucide-react';

interface FounderPortraitProps {
  variant?: 'hero' | 'about';
  photoSrc?: string;
  className?: string;
}

export const FounderPortrait: React.FC<FounderPortraitProps> = ({
  variant = 'hero',
  photoSrc,
  className = '',
}) => {
  const candidateSources = photoSrc
    ? [photoSrc]
    : variant === 'hero'
    ? [
        '/felice_marco_hero.jpg',
        '/felice_marco_hero(1).jpg',
        '/felice_marco_hero (1).jpg',
        '/felice_marco_hero.png',
        '/felice_marco.jpg',
        '/felice_marco.png',
        '/src/assets/images/felice_marco_hero.jpg',
        '/src/assets/images/felice_marco.jpg'
      ]
    : [
        '/felice_marco_marina.jpg',
        '/felice_marco_marina(1).jpg',
        '/felice_marco_marina (1).jpg',
        '/felice_marco_about.jpg',
        '/felice_marco_marina.png',
        '/felice_marco.jpg',
        '/felice_marco.png',
        '/src/assets/images/felice_marco_marina.jpg',
        '/src/assets/images/felice_marco.jpg'
      ];

  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (currentSourceIndex < candidateSources.length - 1) {
      setCurrentSourceIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const activeSrc = candidateSources[currentSourceIndex];

  return (
    <div className={`relative w-full max-w-md lg:max-w-none ${className}`}>
      {/* Outer subtle glow frame */}
      <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#F37021]/30 via-slate-700/20 to-blue-600/20 blur-md opacity-70 pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0F223D] shadow-2xl flex flex-col w-full">
        {/* If image is available and not errored */}
        {!imageError ? (
          <div className="relative aspect-[3/4] w-full bg-[#0F223D] overflow-hidden">
            <img
              src={activeSrc}
              alt="Felice Marco - KasaFelice"
              onError={handleImageError}
              className="w-full h-full object-cover object-center filter brightness-[1.02] block"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              referrerPolicy="no-referrer"
            />

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#07111E] via-[#07111E]/85 to-transparent p-6 pt-12">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-white font-brand-title">
                    Felice Marco
                  </div>
                  <div className="text-xs font-semibold text-[#F37021] tracking-wider uppercase mt-0.5">
                    {variant === 'hero'
                      ? 'Agente Immobiliare & Mediatore Marittimo'
                      : 'Mediatore e Fondatore'}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Brand</div>
                  <div className="text-sm font-extrabold text-white tracking-wider font-brand-title">
                    KASAFELICE
                  </div>
                </div>
              </div>
            </div>

            {/* Floating pill badge */}
            <div className="absolute top-4 left-4 bg-[#07111E]/90 backdrop-blur-md border border-slate-700/70 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#F37021] animate-pulse"></span>
              <span className="text-[11px] font-medium text-slate-200">
                {variant === 'hero' ? 'Consulenza Personale' : 'Professionista di Riferimento'}
              </span>
            </div>
          </div>
        ) : (
          /* High-end graphic brand presentation when photo file is awaiting upload */
          <div className="relative aspect-[3/4] w-full bg-gradient-to-b from-[#0B1A2E] via-[#0F223D] to-[#07111E] p-8 flex flex-col justify-between items-center text-center overflow-hidden">
            {/* Background architectural geometry */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F37021_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#F37021]/15 rounded-full blur-2xl pointer-events-none"></div>

            {/* Top brand insignia */}
            <div className="relative z-10 flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111E]/80 border border-slate-700/80 text-[#F37021] text-[11px] font-bold uppercase tracking-wider">
              <KasaFeliceIcon className="w-4 h-4 text-[#F37021]" />
              <span>Identità Ufficiale</span>
            </div>

            {/* Center Monogram & Founder Details */}
            <div className="relative z-10 my-auto py-6 flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-[#07111E] border-2 border-[#F37021]/40 flex items-center justify-center shadow-xl shadow-orange-950/20 mb-5 relative group">
                <KasaFeliceIcon className="w-12 h-12 text-[#F37021]" />
                <div className="absolute -bottom-2 px-2 py-0.5 rounded bg-[#F37021] text-white text-[9px] font-extrabold uppercase tracking-wider">
                  KasaFelice
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white font-brand-title tracking-tight mb-1">
                Felice Marco
              </h3>
              <p className="text-xs font-semibold text-[#F37021] uppercase tracking-wider mb-3">
                Agente Immobiliare & Mediatore Marittimo
              </p>
              
              <div className="max-w-xs text-xs text-slate-300 leading-relaxed bg-[#07111E]/60 border border-slate-800 rounded-xl p-3">
                "Le persone prima degli immobili."
                <div className="text-[10px] text-slate-400 mt-1">
                  Rapporto diretto, trasparenza e costante presenza.
                </div>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="relative z-10 w-full pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F37021]" />
                Referente Unico
              </span>
              <span className="font-semibold text-slate-200">
                KasaFelice
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
