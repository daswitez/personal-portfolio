import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Zap, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Code2,
    title: 'Arquitectura de nivel enterprise',
    description: 'Multi-tenancy con aislamiento de datos, row-level security y escalabilidad horizontal desde el diseño inicial.',
  },
  {
    icon: Zap,
    title: 'Performance optimizada al límite',
    description: 'Sub-second page loads, queries optimizadas con índices estratégicos, cache inteligente en múltiples capas.',
  },
  {
    icon: BarChart3,
    title: 'Observabilidad completa',
    description: 'Monitoreo en tiempo real, logs estructurados, alertas proactivas y dashboards para toma de decisiones basada en datos.',
  },
];

export function ProjectSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    // Pin the image while content scrolls
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: imageRef.current,
      pinSpacing: false,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden"
    >
      {/* Background gradient with animation */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div ref={containerRef} className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            style={{ opacity }}
            className="space-y-12"
          >
            {/* Header */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-full">
                  <p className="text-sm font-mono uppercase tracking-wider text-blue-600">
                    ⭐ Proyecto destacado
                  </p>
                </div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6"
              >
                SaaS Platform
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#1a1a1a]/60 leading-relaxed"
              >
                Plataforma SaaS empresarial diseñada para equipos distribuidos. El desafío: crear una solución que escalara sin perder simplicidad, con seguridad enterprise y UX consumer-grade.
              </motion.p>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#1a1a1a]/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-transparent rounded-3xl border border-blue-500/10 shadow-lg backdrop-blur-sm"
            >
              <p className="text-sm font-mono uppercase tracking-wider text-blue-600 mb-6">
                📊 Resultados medibles
              </p>
              <div className="grid grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">
                    50ms
                  </div>
                  <div className="text-xs md:text-sm text-[#1a1a1a]/60">
                    Avg. response
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    99.9%
                  </div>
                  <div className="text-xs md:text-sm text-[#1a1a1a]/60">
                    Uptime
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    10k+
                  </div>
                  <div className="text-xs md:text-sm text-[#1a1a1a]/60">
                    Users
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual Preview (pinned) */}
          <motion.div
            ref={imageRef}
            style={{ y }}
            className="relative lg:sticky lg:top-32"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glass card mockup */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
                {/* Mock UI elements */}
                <div className="p-8">
                  {/* Header bar */}
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>

                  {/* Content blocks */}
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg w-3/4" />
                    <div className="h-4 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-lg w-1/2" />
                    <div className="h-32 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl mt-6 border border-blue-500/20" />
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      <div className="h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20" />
                      <div className="h-16 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-xl border border-violet-500/20" />
                      <div className="h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20" />
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl -z-10" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-violet-500/30 rounded-2xl backdrop-blur-xl border border-white/40 shadow-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl backdrop-blur-xl border border-white/40 shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}