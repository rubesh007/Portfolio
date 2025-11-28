import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Background = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background transition-colors duration-500">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-foreground rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 60 + '%', // Only in top 60%
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Retro Sun / Moon */}
      <div className={`absolute left-1/2 -translate-x-1/2 bottom-[20%] w-[300px] h-[300px] rounded-full blur-[2px] transition-all duration-1000 ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-secondary via-accent to-primary opacity-80 shadow-[0_0_50px_rgba(255,0,128,0.5)]' 
          : 'bg-gradient-to-t from-yellow-400 via-orange-300 to-yellow-100 opacity-90 shadow-[0_0_50px_rgba(255,200,0,0.5)]'
      }`}></div>

      {/* Grid Floor */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] overflow-hidden perspective-[500px]">
        <div className={`absolute inset-0 w-full h-[200%] origin-bottom animate-grid ${
          theme === 'dark'
            ? 'bg-[linear-gradient(transparent_0%,rgba(0,242,234,0.3)_2%,transparent_5%),linear-gradient(90deg,transparent_0%,rgba(0,242,234,0.3)_2%,transparent_5%)] bg-[size:40px_40px]'
            : 'bg-[linear-gradient(transparent_0%,rgba(0,0,0,0.1)_2%,transparent_5%),linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.1)_2%,transparent_5%)] bg-[size:40px_40px]'
        }`}></div>
        
        {/* Horizon Glow */}
        <div className={`absolute top-0 left-0 w-full h-20 bg-gradient-to-b ${
          theme === 'dark' ? 'from-background to-transparent' : 'from-background to-transparent'
        }`}></div>
      </div>

      {/* City Skyline (CSS Art) */}
      <div className="absolute bottom-[15%] left-0 w-full h-[150px] flex items-end justify-center opacity-80">
         {/* Simple blocks representing buildings */}
         <div className={`w-[5%] h-[60%] mx-1 ${theme === 'dark' ? 'bg-[#0a0a15]' : 'bg-gray-300'}`}></div>
         <div className={`w-[8%] h-[80%] mx-1 ${theme === 'dark' ? 'bg-[#0f0f20]' : 'bg-gray-400'}`}></div>
         <div className={`w-[6%] h-[50%] mx-1 ${theme === 'dark' ? 'bg-[#0a0a15]' : 'bg-gray-300'}`}></div>
         <div className={`w-[10%] h-[90%] mx-1 ${theme === 'dark' ? 'bg-[#141425]' : 'bg-gray-500'}`}></div>
         <div className={`w-[7%] h-[70%] mx-1 ${theme === 'dark' ? 'bg-[#0f0f20]' : 'bg-gray-400'}`}></div>
         <div className={`w-[5%] h-[40%] mx-1 ${theme === 'dark' ? 'bg-[#0a0a15]' : 'bg-gray-300'}`}></div>
         <div className={`w-[12%] h-[85%] mx-1 ${theme === 'dark' ? 'bg-[#141425]' : 'bg-gray-500'}`}></div>
         <div className={`w-[6%] h-[60%] mx-1 ${theme === 'dark' ? 'bg-[#0f0f20]' : 'bg-gray-400'}`}></div>
      </div>
      
      {/* Overlay Gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-80 pointer-events-none"></div>
    </div>
  );
};

export default Background;
