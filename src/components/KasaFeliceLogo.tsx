import React from 'react';

import kasaFeliceLogo from '../assets/images/kasafelice-logo-terra-mare.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'compact' | 'light';
  showSlogan?: boolean;
}

/* =========================================================
   ICONA KASAFELICE
   Nuovo simbolo definitivo Terra + Mare
   ========================================================= */

export const KasaFeliceIcon: React.FC<{ className?: string }> = ({
  className = 'w-full h-full'
}) => {
  return (
    <img
      src={kasaFeliceLogo}
      alt="KasaFelice - Immobiliare e Nautica"
      className={`object-contain ${className}`}
      draggable={false}
    />
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

  /* =========================================================
     SOLO ICONA
     ========================================================= */

  if (variant === 'icon') {
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
      >
        <KasaFeliceIcon />
      </div>
    );
  }


  /* =========================================================
     HEADER / NAVBAR
     ========================================================= */

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-2.5 select-none ${className}`}
      >

        {/* Nuovo simbolo Terra + Mare */}
        <div
          className="
            w-[72px]
            h-[50px]
            sm:w-[78px]
            sm:h-[54px]
            flex-shrink-0
            flex
            items-center
            justify-center
          "
        >
          <KasaFeliceIcon />
        </div>


        {/* BLOCCO TESTUALE */}
        <div className="flex flex-col items-stretch">

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

      {/* Nuovo simbolo Terra + Mare */}
      <div
        className="
          w-full
          max-w-[300px]
          h-auto
          flex
          items-center
          justify-center
        "
      >
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
          mt-2
          flex
          items-baseline
          font-brand-title
        "
      >
        <span className="text-[#F37021]">K</span>
        <span>ASAFELICE</span>
      </div>


      {/* REAL ESTATE • NAUTICA */}
      <div
        className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          my-1.5
          px-2
        "
      >

        <div
          className="
            h-[1px]
            bg-white/70
            flex-1
            max-w-[25px]
          "
        />

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

          <span className="text-[#F37021] mx-2">
            •
          </span>

          NAUTICA
        </span>

        <div
          className="
            h-[1px]
            bg-white/70
            flex-1
            max-w-[25px]
          "
        />

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
