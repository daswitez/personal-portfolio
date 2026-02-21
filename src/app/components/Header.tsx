import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 backdrop-blur-2xl bg-white/90 border-b border-black/5 shadow-lg shadow-black/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-semibold tracking-tight text-[#1a1a1a] hover:text-blue-600 transition-colors relative group"
        >
          Daniel
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 w-0 group-hover:w-full transition-all duration-300"
          />
        </motion.button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Work', 'Skills', 'Process', 'About', 'Contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              whileHover={{ y: -2 }}
              className="text-sm text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors relative group"
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 w-0 group-hover:w-full transition-all duration-300"
              />
            </motion.button>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection('contact')}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full text-sm font-semibold hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30 relative overflow-hidden group"
        >
          <span className="relative z-10">Hablemos</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600"
            initial={{ x: '100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </motion.header>
  );
}