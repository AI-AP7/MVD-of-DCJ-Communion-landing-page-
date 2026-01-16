
import React from 'react';

const GoldBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#1a0f08]">
      {/* Layer 1: The Capitol Dome Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-100"
          style={{ backgroundImage: `url('/Images/program .png')` }}
        />
        {/* Layer 2: Warm Brown/Gold Vignette and Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f08]/80 via-transparent to-[#0c0a09]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(184,134,11,0.3)_0%,transparent_70%)]" />

        {/* Floating Light Effects to mimic image bokeh */}
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-600/20 blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-700/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default GoldBackground;
