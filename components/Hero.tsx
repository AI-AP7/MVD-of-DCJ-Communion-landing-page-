
import React from 'react';
import { EVENT_DATA, SPEAKERS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-10 pb-16 min-h-screen">
      {/* Jurisdiction Header */}
      <div className="mb-8 z-20">
        <h3 className="text-white text-[10px] md:text-sm tracking-[0.4em] font-medium uppercase opacity-90">
          DISTRICT OF COLUMBIA
        </h3>
        <h3 className="text-white text-[10px] md:text-sm tracking-[0.4em] font-medium uppercase opacity-90 mt-1">
          ECCLESIASTICAL JURISDICTION
        </h3>
      </div>

      {/* Main Imagery: The Two Leaders as shown in the flyer */}
      <div className="relative w-full max-w-4xl flex justify-center items-end mb-[-40px] md:mb-[-80px] z-10">
        <div className="flex items-end justify-center -space-x-12 md:-space-x-20">
          {/* Bishop */}
          <div className="relative w-[180px] md:w-[320px] z-10">
            <img 
              src={SPEAKERS[0].imageUrl} 
              alt={SPEAKERS[0].name}
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] mask-bottom"
              style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
            />
          </div>
          {/* Mother */}
          <div className="relative w-[150px] md:w-[280px] z-0 opacity-90 mb-4 md:mb-10">
            <img 
              src={SPEAKERS[1].imageUrl} 
              alt={SPEAKERS[1].name}
              className="w-full h-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
              style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
            />
          </div>
        </div>
      </div>

      {/* Text Content matching the flyer structure */}
      <div className="relative z-20 w-full max-w-5xl px-4">
        <h2 className="font-script text-6xl md:text-9xl gold-text mb-[-15px] md:mb-[-30px] drop-shadow-lg">
          Service of
        </h2>
        <h1 className="text-4xl md:text-8xl font-[900] text-amber-100/90 leading-none tracking-tighter uppercase drop-shadow-2xl italic">
          <span className="block">COMMUNION, ANOINTING</span>
          <span className="block mt-2">AND CONSECRATION</span>
        </h1>

        {/* Date Badge */}
        <div className="mt-8 mb-6">
          <span className="bg-[#fce0a2] text-[#1a0f08] font-black py-2 px-8 rounded-xl inline-block text-sm md:text-xl uppercase tracking-tight shadow-xl">
            {EVENT_DATA.date}
          </span>
        </div>

        {/* Location Info */}
        <div className="space-y-1 text-white font-bold tracking-tight">
          <h4 className="text-lg md:text-2xl uppercase">{EVENT_DATA.location}</h4>
          <p className="text-sm md:text-lg opacity-90">{EVENT_DATA.address}</p>
          <p className="text-sm md:text-lg opacity-90 mt-2">{EVENT_DATA.host}</p>
        </div>

        {/* Lead Names footer in Hero */}
        <div className="mt-10 italic text-white/80 text-xs md:text-base space-y-1 tracking-wider uppercase font-medium">
          <p>BISHOP WILLIAM E. MCMILLAN, JR. PRELATE</p>
          <p>MOTHER MILDRED LINZY, SUPERVISOR, DEPTARTMENT OF WOMEN</p>
          <p className="text-amber-500 font-bold mt-4 tracking-[0.5em] opacity-80">{EVENT_DATA.hashtag}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
