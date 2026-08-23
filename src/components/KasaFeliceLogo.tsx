import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'compact' | 'light';
  showSlogan?: boolean;
}

/* =========================================================
   ICONA KASAFELICE
   ========================================================= */

export const KasaFeliceIcon: React.FC<{ className?: string }> = ({
  className = 'w-full h-full'
}) => {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KasaFelice"
    >
      {/* Comignolo */}
      <rect x="24" y="17" width="11" height="24" fill="#FFFFFF" />
      <rect x="22" y="14" width="15" height="4" fill="#FFFFFF" />

      {/* Tetto / struttura principale */}
      <path
        d="M7 62L58 9L113 62H94L58 28L25 62H7Z"
        fill="#FFFFFF"
      />

      {/* Montante arancione */}
      <rect
        x="43"
        y="34"
        width="8"
        height="28"
        fill="#F37021"
      />

      {/* Elemento interno */}
      <path
        d="M51 43C58 34 66 31 73 31C78 31 82 33 86 37C77 36 69 39 62 46L51 56V43Z"
        fill="#FFFFFF"
      />

      {/* Finestra a quattro riquadri */}
      <g transform="translate(75, 43)">
        <rect x="0" y="0" width="7" height="7" fill="#07111E" />
        <rect x="9" y="0" width="7" height="7" fill="#07111E" />
        <rect x="0" y="9" width="7" height="7" fill="#07111E" />
        <rect x="9" y="9" width="7" height="7" fill="#07111E" />
      </g>
    </svg>
  );
};


/* =========================================================
   LOGO COMPLETO
   ========================================================= */

export const KasaFeliceLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  showSlogan = true
}) => {

  /* ---------------------------------------------------------
     SOLO ICONA
     --------------------------------------------------------- */

  if (variant === 'icon') {
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
      >
        <KasaFeliceIcon />
      </div>
    );
  }


  /* ---------------------------------------------------------
     VERSIONE COMPACT
     UTILIZZATA NELL'HEADER / NAVBAR
     --------------------------------------------------------- */

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-3 select-none ${className}`}
      >

        {/* Icona */}
        <div className="w-12 h-10 flex-shrink-0">
          <KasaFeliceIcon />
        </div>


        {/* KASAFELICE + REAL ESTATE • NAUTICA */}
        <div className="flex flex-col items-stretch">

          {/* Nome */}
          <div className="flex items-baseline leading-none whitespace-nowrap font-brand-title text-xl font-extrabold tracking-tight text-white">
            <span className="text-[#F37021]">K</span>
            <span>ASAFELICE</span>
          </div>

          {/* Settori */}
          <div className="w-full mt-[5px] flex items-center justify-between whitespace-nowrap text-[7px] sm:text-[8px] font-medium tracking-[0.16em] text-slate-300 uppercase leading-none">
            <span>REAL ESTATE</span>

            <span className="text-[#F37021] px-[3px]">•</span>

            <span>NAUTICA</span>
          </div>

        </div>
      </div>
    );
  }


  /* ---------------------------------------------------------
     VERSIONE FULL
     --------------------------------------------------------- */

  return (
    <div
      className={`flex flex-col items-center select-none ${className}`}
    >

      {/* Simbolo */}
      <div className="w-full max-w-[200px] h-auto flex items-center justify-center">
        <KasaFeliceIcon />
      </div>


      {/* KASAFELICE */}
      <div className="text-3xl sm:text-4xl font-extrabold tracking-wider leading-none text-white mt-1 flex items-baseline font-brand-title">
        <span className="text-[#F37021]">K</span>
        <span>ASAFELICE</span>
      </div>


      {/* REAL ESTATE • NAUTICA */}
      <div className="w-full flex items-center justify-center gap-3 my-1.5 px-2">

        <div className="h-[1px] bg-white/70 flex-1 max-w-[30px]" />

        <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.20em] text-slate-300 uppercase whitespace-nowrap">
          REAL ESTATE
          <span className="text-[#F37021] mx-2">•</span>
          NAUTICA
        </span>

        <div className="h-[1px] bg-white/70 flex-1 max-w-[30px]" />

      </div>


      {/* Slogan */}
      {showSlogan && (
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#F37021] uppercase text-center mt-0.5">
          LE PERSONE PRIMA DEGLI IMMOBILI
        </span>
      )}

    </div>
  );
};
