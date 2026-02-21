"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';

export function LiquidOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbRef.current) return;

    // Simplified floating animation with GSAP
    gsap.to(orbRef.current, {
      y: -20,
      duration: 4,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Subtle mouse move parallax (reduced intensity)
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !orbRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5);
      const yPercent = (clientY / innerHeight - 0.5);
      
      gsap.to(orbRef.current, {
        x: xPercent * 15,
        y: yPercent * 15,
        duration: 1.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <motion.div
        ref={orbRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative"
      >
        {/* Main orb */}
        <div className="w-[500px] h-[500px] rounded-full relative">
          {/* Glass layer with blur */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-violet-400/20 to-cyan-400/20 backdrop-blur-3xl border border-white/20 shadow-2xl">
            {/* Inner glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-300/30 via-violet-300/30 to-cyan-300/30 blur-2xl" />
          </div>
          
          {/* Highlights */}
          <div className="absolute top-16 left-16 w-32 h-32 rounded-full bg-white/40 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-blue-300/40 blur-2xl" />
          
          {/* Noise texture overlay */}
          <div 
            className="absolute inset-0 rounded-full opacity-[0.02] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}