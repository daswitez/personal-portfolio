import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Target, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const impacts = [
  {
    icon: Zap,
    title: 'Velocidad de entrega',
    subtitle: 'excepcional.',
    description: 'Sprints ágiles con entregas tempranas y frecuentes para validar rápido.',
  },
  {
    icon: Target,
    title: 'Código escalable',
    subtitle: 'y mantenible.',
    description: 'Arquitectura pensada para crecer, documentación clara, handoff sin fricción.',
  },
  {
    icon: Sparkles,
    title: 'Performance y UX',
    subtitle: 'de primer nivel.',
    description: 'Optimización constante, testing riguroso, experiencias que enamoran.',
  },
];

export function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate cards on scroll with more dynamic effects
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          rotateX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 65%',
            scrub: 1.2,
          },
        }
      );

      // Icon rotation on scroll
      const icon = card.querySelector('.impact-icon');
      if (icon) {
        gsap.to(icon, {
          rotation: 360,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 2,
          },
        });
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-500 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1a1a1a] mb-4">
            Resultados que{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              impulsan tu negocio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto">
            Cada proyecto es una oportunidad para superar expectativas
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glass card */}
                <div className="relative h-full p-6 md:p-8 bg-white/60 backdrop-blur-xl border border-black/5 rounded-3xl shadow-lg hover:shadow-2xl hover:border-blue-500/20 transition-all duration-500">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-violet-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="impact-icon relative mb-6 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl"
                  >
                    <Icon className="w-7 h-7 text-blue-600" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-1">
                      {impact.title}
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
                      {impact.subtitle}
                    </p>
                    <p className="text-sm md:text-base text-[#1a1a1a]/60 leading-relaxed">
                      {impact.description}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Toolbelt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[#1a1a1a]/50 text-sm font-mono uppercase tracking-wider mb-3">
            Toolbelt
          </p>
          <p className="text-[#1a1a1a]/70 text-lg">
            Tests · CI/CD · Observabilidad · Documentación
          </p>
        </motion.div>
      </div>
    </section>
  );
}