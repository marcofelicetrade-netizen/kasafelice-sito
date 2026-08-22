import React from 'react';
import { METHOD_PILLARS } from '../data/content';
import { HeartHandshake, Award, Compass, Shield, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  HeartHandshake,
  Award,
  Compass,
  Shield
};

export const MethodPillars: React.FC = () => {
  return (
    <section className="py-16 bg-[#07111E] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#F37021] tracking-widest uppercase">
            IL METODO KASAFELICE
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-brand-title">
            Competenza, trasparenza, fiducia.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHOD_PILLARS.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || CheckCircle;
            return (
              <div
                key={pillar.title}
                id={`method-pillar-${idx}`}
                className="p-6 rounded-2xl bg-[#0B1A2E] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F37021]/15 text-[#F37021] flex items-center justify-center mb-5 group-hover:bg-[#F37021] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wide">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
