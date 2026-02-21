"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Estrategia',
    description: 'Análisis profundo del negocio, usuarios y objetivos. Definimos KPIs y éxito medible desde el día uno.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Diseño de Solución',
    description: 'Arquitectura técnica documentada, stack justificado, estimaciones realistas y roadmap claro con hitos.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Desarrollo Iterativo',
    description: 'Sprints cortos con entregas continuas, feedback integrado rápidamente, transparencia total en el progreso.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy & Soporte',
    description: 'Despliegue sin sorpresas, documentación completa, transferencia de conocimiento y soporte post-launch.',
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    // Animate the connecting line
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: 'top' },
      {
        scaleY: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1.5,
        },
      }
    );

    // Animate each step with rotation
    const steps = sectionRef.current.querySelectorAll('.process-step');
    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        {
          opacity: 0,
          x: -80,
          rotateY: -20,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            end: 'top 65%',
            scrub: 1.5,
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
            Proceso probado
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto">
            Metodología ágil adaptada a cada proyecto, con transparencia y comunicación constante
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - behind icons */}
          <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/20 to-violet-500/20 origin-top hidden md:block -z-10">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-b from-blue-500 to-violet-500 origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="process-step relative flex items-start gap-4 md:gap-6 lg:gap-8"
                >
                  {/* Icon circle - with higher z-index */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center border-2 border-blue-500/20 shadow-lg z-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl" />
                    <Icon className="w-7 h-7 text-blue-600 relative z-10" />
                    
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center text-xs font-mono font-semibold z-20">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-[#1a1a1a]/60 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-full">
            <p className="text-sm font-mono text-[#1a1a1a]/70">
              Orden + método = resultados predecibles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}