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
      viewBox="0 0 120 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KasaFelice"
    >
      {/* Comignolo */}
      <rect x="26" y="17" width="11" height="25" fill="#FFFFFF" />
      <rect x="23.5" y="14" width="16" height="4" rx="1" fill="#FFFFFF" />

      {/* Grande struttura/tetto bianco */}
      <path
        d="M6 65L59 8L115 65H94L59 29L25 65H6Z"
        fill="#FFFFFF"
      />

      {/* Montante arancione caratteristico */}
      <path
        d="M43 34H52V65H43V34Z"
        fill="#F37021"
      />

      {/* Curva interna della K/casa */}
      <path
        d="M52 44C60 34 68 30 77 31C82 31.5 87 34 91 38
           C81 36.5 72 39.5 64 47L52 59V44Z"
        fill="#FFFFFF"
      />

      {/* Finestra */}
      <g transform="translate(76, 43)">
        <rect x="0" y="0" width="7" height="7" fill="#07111E" />
        <rect x="9" y="0" width="7" height="7" fill="#07111E" />
        <rect x="0" y="9" width="7" height="7" fill="#07111E" />
        <rect x="9" y="9" width="7" height="7" fill="#07111E" />
      </g>
    </svg>
  );
};


/* =========================================================
   LOGO KASAFELICE
   ========================================================= */

export const KasaFeliceLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  showSlogan = true
}) => {

  /* SOLO ICONA */

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <KasaFeliceIcon />
      </div>
    );
  }


  /* =========================================================
     LOGO HEADER / NAVBAR
     ========================================================= */

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-2 select-none ${className}`}
      >

        {/* Simbolo più grande */}
        <div className="w-[58px] h-[46px] sm:w-[64px] sm:h-[50px] flex-shrink-0">
          <KasaFeliceIcon />
        </div>


        {/* BLOCCO TESTUALE */}
        <div className="flex flex-col">

          {/* KASAFELICE */}
          <div
            className="
              flex
              items-baseline
              leading-none
              whitespace-nowrap
              font-brand-title
              text-[22px]
              sm:text-[24px]
              font-extrabold
              tracking-[-0.035em]
              text-white
            "
          >
            <span className="text-[#F37021]">K</span>
            <span>ASAFELICE</span>
          </div>


          {/* REAL ESTATE • NAUTICA */}
          <div
            className="
              mt-[6px]
              w-full
              flex
              items-center
              justify-between
              whitespace-nowrap
              text-[7px]
              sm:text-[8px]
              font-medium
              tracking-[0.18em]
              text-slate-300
              uppercase
              leading-none
            "
          >
            <span>REAL ESTATE</span>

            <span className="text-[#F37021] px-[2px]">
              •
            </span>

            <span>NAUTICA</span>
          </div>

        </div>
      </div>
    );
  }


  /* =========================================================
     LOGO COMPLETO
     ========================================================= */

  return (
    <div
      className={`flex flex-col items-center select-none ${className}`}
    >

      {/* Simbolo */}
      <div className="w-full max-w-[210px] h-auto flex items-center justify-center">
        <KasaFeliceIcon />
      </div>


      {/* KASAFELICE */}
      <div
        className="
          text-3xl
          sm:text-4xl
          font-extrabold
          tracking-wider
          leading-none
          text-white
          mt-1
          flex
          items-baseline
          font-brand-title
        "
      >
        <span className="text-[#F37021]">K</span>
        <span>ASAFELICE</span>
      </div>


      {/* REAL ESTATE • NAUTICA */}
      <div className="w-full flex items-center justify-center gap-3 my-1.5 px-2">

        <div className="h-[1px] bg-white/70 flex-1 max-w-[25px]" />

        <span
          className="
            text-[9px]
            sm:text-[10px]
            font-medium
            tracking-[0.18em]
            text-slate-300
            uppercase
            whitespace-nowrap
          "
        >
          REAL ESTATE
          <span className="text-[#F37021] mx-2">•</span>
          NAUTICA
        </span>

        <div className="h-[1px] bg-white/70 flex-1 max-w-[25px]" />

      </div>


      {/* Slogan */}
      {showSlogan && (
        <span
          className="
            text-[10px]
            sm:text-[11px]
            font-semibold
            tracking-[0.22em]
            text-[#F37021]
            uppercase
            text-center
            mt-0.5
          "
        >
          LE PERSONE PRIMA DEGLI IMMOBILI
        </span>
      )}

    </div>
  );
};
