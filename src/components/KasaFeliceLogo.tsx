import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'compact' | 'light';
  showSlogan?: boolean;
}

export const KasaFeliceIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Chimney */}
      <rect x="25" y="16" width="9" height="20" fill="#FFFFFF" rx="0.5" />
      <rect x="23" y="14" width="13" height="3" fill="#FFFFFF" rx="0.5" />
      
      {/* Roof Main White Triangle */}
      <path
        d="M50 8L94 58H78L50 26L22 58H6L50 8Z"
        fill="#FFFFFF"
      />
      
      {/* Orange K-pillar under roof */}
      <path
        d="M37 28H44V58H37V28Z"
        fill="#F37021"
      />
      
      {/* 4-Pane Window */}
      <g transform="translate(60, 36)">
        <rect x="0" y="0" width="7" height="7" fill="#0B1A2E" />
        <rect x="9" y="0" width="7" height="7" fill="#0B1A2E" />
        <rect x="0" y="9" width="7" height="7" fill="#0B1A2E" />
        <rect x="9" y="9" width="7" height="7" fill="#0B1A2E" />
      </g>
    </svg>
  );
};

export const KasaFeliceLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  showSlogan = true
}) => {
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <KasaFeliceIcon />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-10 h-8 flex-shrink-0">
          <svg
            viewBox="0 0 100 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <rect x="25" y="16" width="9" height="20" fill="#FFFFFF" rx="0.5" />
            <rect x="23" y="14" width="13" height="3" fill="#FFFFFF" rx="0.5" />
            <path d="M50 8L94 58H78L50 26L22 58H6L50 8Z" fill="#FFFFFF" />
            <path d="M37 28H44V58H37V28Z" fill="#F37021" />
            <g transform="translate(60, 36)">
              <rect x="0" y="0" width="7" height="7" fill="#07111E" />
              <rect x="9" y="0" width="7" height="7" fill="#07111E" />
              <rect x="0" y="9" width="7" height="7" fill="#07111E" />
              <rect x="9" y="9" width="7" height="7" fill="#07111E" />
            </g>
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-extrabold tracking-tight leading-none text-white flex items-baseline font-brand-title">
            <span className="text-[#F37021]">K</span>
            <span>ASAFELICE</span>
          </div>
          <span className="text-[9px] font-semibold tracking-[0.25em] text-slate-300 uppercase leading-none mt-1">
            REAL ESTATE
          </span>
        </div>
      </div>
    );
  }

  // Full original brand logo
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* SVG House Icon */}
      <div className="w-full max-w-[200px] h-auto flex items-center justify-center">
        <svg
          viewBox="0 0 160 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Chimney */}
          <rect x="42" y="19" width="12" height="24" fill="#FFFFFF" />
          <rect x="39" y="16" width="18" height="4" fill="#FFFFFF" />
          
          {/* White Main Roof Structure */}
          <path
            d="M80 8L150 72H124L80 32L36 72H10L80 8Z"
            fill="#FFFFFF"
          />
          
          {/* Orange Central/Left K Vertical Post */}
          <path
            d="M60 38H69V72H60V38Z"
            fill="#F37021"
          />
          
          {/* 4-Pane Window on the right */}
          <g transform="translate(96, 46)">
            <rect x="0" y="0" width="9" height="9" fill="#07111E" />
            <rect x="12" y="0" width="9" height="9" fill="#07111E" />
            <rect x="0" y="12" width="9" height="9" fill="#07111E" />
            <rect x="12" y="12" width="9" height="9" fill="#07111E" />
          </g>
        </svg>
      </div>

      {/* Text KASAFELICE */}
      <div className="text-3xl sm:text-4xl font-extrabold tracking-wider leading-none text-white mt-1 flex items-baseline font-brand-title">
        <span className="text-[#F37021]">K</span>
        <span>ASAFELICE</span>
      </div>

      {/* Thin line with REAL ESTATE */}
      <div className="w-full flex items-center justify-center gap-3 my-1.5 px-2">
        <div className="h-[1.5px] bg-white/80 flex-1 max-w-[40px]"></div>
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.3em] text-white uppercase whitespace-nowrap">
          REAL ESTATE
        </span>
        <div className="h-[1.5px] bg-white/80 flex-1 max-w-[40px]"></div>
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
