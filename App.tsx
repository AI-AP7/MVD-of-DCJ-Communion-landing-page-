
import React from 'react';
import GoldBackground from './components/GoldBackground';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Actions from './components/Actions';

function App() {
  return (
    <GoldBackground>
      <main className="min-h-screen">
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: Speakers & Sessions */}
        <div className="relative">
          {/* Subtle separator glow */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <Speakers />
        </div>
        
        {/* Section 3: Final Buttons */}
        <div className="relative">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
           <Actions />
        </div>

        {/* Footer info */}
        <footer className="py-12 text-center text-amber-100/20 text-[10px] tracking-[0.4em] uppercase">
          &copy; 2025 WDCJ Ecclesiastical Jurisdiction. All Rights Reserved.
        </footer>
      </main>
    </GoldBackground>
  );
}

export default App;
