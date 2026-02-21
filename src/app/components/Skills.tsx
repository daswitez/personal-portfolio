import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const coreStack = [
  'Next.js (App Router)',
  'TypeScript',
  'NestJS',
  'Supabase/Postgres',
  'AWS + Vercel',
  'GitHub Actions',
];

const strengths = [
  'Arquitectura escalable y mantenible',
  'APIs RESTful performantes',
  'Optimización de performance',
  'Testing y calidad de código',
  'Comunicación clara con stakeholders',
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('.skill-item');
    
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { 
          opacity: 0, 
          x: index % 2 === 0 ? -50 : 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 70%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500 blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-violet-500 blur-[120px]" />
      </div>

      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
            Stack & Expertise
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto">
            Tecnologías modernas combinadas con principios sólidos de ingeniería
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Core Stack */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-3xl font-semibold text-[#1a1a1a] mb-2">
                Core
              </h3>
              <p className="text-[#1a1a1a]/60">
                Tecnologías que uso día a día
              </p>
            </motion.div>

            <div className="space-y-4">
              {coreStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="skill-item group"
                >
                  <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm border border-black/5 rounded-2xl hover:bg-white hover:border-blue-500/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform" />
                    <span className="text-lg text-[#1a1a1a] font-medium">
                      {tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-3xl font-semibold text-[#1a1a1a] mb-2">
                Strengths
              </h3>
              <p className="text-[#1a1a1a]/60">
                Cómo pienso y trabajo
              </p>
            </motion.div>

            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="skill-item group"
                >
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/5 to-violet-500/5 border border-blue-500/10 rounded-2xl hover:from-blue-500/10 hover:to-violet-500/10 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300">
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-lg text-[#1a1a1a] font-medium">
                      {strength}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24"
        >
          <div className="p-10 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-black/5 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-semibold text-[#1a1a1a] mb-8 text-center">
              Enfocado en{' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                crecimiento sostenible
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Fundamentos sólidos que permiten escalar sin reescribir.',
                'Velocidad de desarrollo sin comprometer mantenibilidad.',
                'Calidad verificable: tests, CI/CD, code reviews rigurosos.',
                'UX y performance que convierten y retienen usuarios.',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                  <p className="text-[#1a1a1a]/70 leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}