import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ProfileImage } from './ProfileImage';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const auroraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Aurora background animation (slower and more subtle)
    if (auroraRef.current) {
      gsap.to(auroraRef.current, {
        backgroundPosition: '100% 100%',
        duration: 30,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = ['Next.js', 'TypeScript', 'NestJS', 'Postgres/Supabase', 'AWS/Vercel'];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      {/* Aurora background */}
      <div
        ref={auroraRef}
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #60a5fa, #a78bfa, #06b6d4)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen py-16 md:py-20">
          {/* Left: Profile Image */}
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <ProfileImage />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-[#1a1a1a] mb-6 leading-tight">
                Transformo ideas en
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                  productos digitales
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-[#1a1a1a]/70 mb-8 leading-relaxed"
            >
              Desarrollo full-stack especializado en crear experiencias web escalables, rápidas y hermosas que impulsan resultados de negocio.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12"
            >
              {badges.map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-black/5 rounded-full text-sm text-[#1a1a1a]/80 font-medium shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('work')}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium shadow-lg hover:bg-black transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Ver proyectos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/60 backdrop-blur-sm border border-black/10 text-[#1a1a1a] rounded-full font-medium hover:bg-white hover:border-black/20 transition-all shadow-sm hover:shadow-md"
              >
                Contactar
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-6 h-6 text-[#1a1a1a]/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}