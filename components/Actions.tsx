
import React from 'react';

const Actions: React.FC = () => {
  const actions = [
    { label: "Watch Live Stream" },
    { label: "View Event Program" },
    { label: "Online Giving" },
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
              <button
                key={idx}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black py-6 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center uppercase tracking-widest text-sm md:text-base border-b-4 border-amber-700 active:border-b-0 active:translate-y-0"
              >
                {action.label}
              </button>
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
