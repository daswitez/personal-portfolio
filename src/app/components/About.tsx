import { motion } from 'motion/react';

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1a1a1a] mb-8">
            Sobre mí
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glass card */}
          <div className="relative p-8 md:p-10 lg:p-14 bg-white/60 backdrop-blur-xl border border-black/5 rounded-3xl shadow-2xl">
            <div className="relative z-10">
              <p className="text-lg md:text-xl lg:text-2xl text-[#1a1a1a]/80 leading-relaxed mb-6">
                Soy <span className="font-semibold text-[#1a1a1a]">Daniel</span>, 
                desarrollador full-stack especializado en crear{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-semibold">
                  productos digitales escalables
                </span>{' '}
                que resuelven problemas reales de negocio.
              </p>
              
              <p className="text-lg md:text-xl lg:text-2xl text-[#1a1a1a]/80 leading-relaxed">
                Con años de experiencia trabajando con startups y empresas, combino visión técnica con entendimiento de negocio para entregar soluciones que generan ROI medible.
              </p>
            </div>

            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5 rounded-3xl" />
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-violet-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl backdrop-blur-sm border border-white/40 shadow-xl hidden md:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm border border-white/40 shadow-xl hidden md:block"
          />
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm font-mono uppercase tracking-wider text-[#1a1a1a]/40">
            "El código perfecto no existe, pero el código que genera valor sí"
          </p>
        </motion.div>
      </div>
    </section>
  );
}