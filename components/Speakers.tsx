
import React from 'react';
import { SPEAKERS } from '../constants';

const Speakers: React.FC = () => {
  // We'll map the speakers but use the specific descriptions requested by the user
  const leaders = [
    {
      ...SPEAKERS[0],
      label: "Prelate"
    },
    {
      ...SPEAKERS[1],
      label: "Supervisor"
    }
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="h-px w-24 bg-amber-500/50 mx-auto mb-6" />
        <h2 className="text-4xl md:text-6xl font-serif text-amber-100 mb-4 italic">Esteemed leadership</h2>
        <p className="text-amber-500/60 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">Guided by Divine Vision</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {leaders.map((leader, index) => (
          <div key={index} className="group relative">
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/5] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              style={{
                backgroundImage: "url('/program-2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <img
                src={leader.imageUrl}
                alt={leader.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 object-top scale-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-black uppercase tracking-[0.2em] mb-3">
                  {leader.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight group-hover:text-amber-200 transition-colors">
                  {leader.name}
                </h3>
                <div className="h-1 w-0 group-hover:w-24 bg-amber-500 mx-auto mt-4 transition-all duration-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
