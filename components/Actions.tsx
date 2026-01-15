
import React from 'react';
// @ts-ignore
import programPdf from './ellements/Program PDF Version.pdf';

const Actions: React.FC = () => {
  const actions = [
    { label: "Watch Live Stream", href: "#", external: true },
    { label: "View Event Program", href: programPdf, external: true },
    { label: "Online Giving", href: "#", external: true },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-inner text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 tracking-tight italic font-serif">
            Connect & Participate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actions.map((action, idx) => (
              <a
                key={idx}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black py-6 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center uppercase tracking-widest text-sm md:text-base border-b-4 border-amber-700 active:border-b-0 active:translate-y-0 no-underline cursor-pointer"
              >
                {action.label}
              </a>
            ))}
          </div>

          <p className="mt-12 text-amber-100/40 text-[10px] tracking-[0.4em] uppercase">
            Presence • Participation • Partnership
          </p>
        </div>
      </div>
    </section>
  );
};

export default Actions;
