
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

      {/* Main Imagery: COGIC Seal */}
      <div className="relative w-full max-w-lg mb-[-2rem] z-10">
        <div className="flex justify-center">
          <div className="w-72 md:w-[28rem] h-72 md:h-[28rem] flex items-center justify-center">
            <img
              src="/official-seal.png"
              alt="Official Seal"
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(252,224,162,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* Text Content matching the flyer structure */}
      <div className="relative z-20 w-full max-w-5xl px-4">
        <h2 className="font-script text-8xl md:text-[14rem] gold-text mb-[-15px] md:mb-[-40px] drop-shadow-2xl">
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
          <p>BISHOP WILLIAM E. MCMILLAN, JR. - PRELATE</p>
          <p>MOTHER MILDRED LINZY - SUPERVISOR OF WOMEN</p>
          <p className="text-amber-500 font-bold mt-4 tracking-[0.5em] opacity-80">{EVENT_DATA.hashtag}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
