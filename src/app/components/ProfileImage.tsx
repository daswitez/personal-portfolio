import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';

export function ProfileImage() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!glowRef.current) return;

    // Animated glow rotation
    gsap.to(glowRef.current, {
      rotation: 360,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      className="relative w-72 h-72 md:w-80 md:h-80 mx-auto"
    >
      {/* Rotating gradient glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-full blur-3xl opacity-60"
        style={{
          background: 'conic-gradient(from 0deg, #60a5fa, #a78bfa, #06b6d4, #60a5fa)',
        }}
      />

      {/* Glass ring */}
      <div className="absolute inset-4 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 shadow-2xl" />

      {/* Image container */}
      <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-white/40 shadow-xl">
        {/* Placeholder for profile image */}
        <div className="w-full h-full flex items-center justify-center text-6xl font-semibold text-gray-400 bg-gradient-to-br from-blue-50 to-violet-50">
          D
        </div>
        {/* When adding real image, replace with: */}
        {/* <img src="your-image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
      </div>

      {/* Floating particles */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-violet-400 rounded-full blur-sm opacity-60"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full blur-sm opacity-60"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/4 -left-8 w-6 h-6 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-full blur-sm opacity-60"
      />
    </motion.div>
  );
}
