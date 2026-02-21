import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-2">
              Daniel
            </h3>
            <p className="text-sm text-[#1a1a1a]/60">
              Full-stack developer
            </p>
          </motion.div>

          {/* Center: Quick links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {['Work', 'Skills', 'Process', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.nav>

          {/* Right: Love note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-[#1a1a1a]/60"
          >
            <span>Hecho con</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>y café</span>
          </motion.div>
        </div>

        {/* Bottom: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-black/5 text-center"
        >
          <p className="text-sm text-[#1a1a1a]/40">
            © {new Date().getFullYear()} Daniel. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
