"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Maximize2, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Grazia AI Platform',
    tagline: 'Plataforma AI que revoluciona la creación de contenido',
    role: 'Full-stack Lead',
    achievements: [
      'Procesamiento de +1M requests diarias con latencia <100ms',
      'Sistema de AI integrado con OpenAI y Claude para generación',
      'Dashboard analítico que aumentó conversión en 60%',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI'],
    live: 'https://www.grazia.ai/',
    github: '#',
    preview: 'https://www.grazia.ai/',
  },
  {
    name: 'SaaS Platform Enterprise',
    tagline: 'Plataforma B2B que transformó la gestión de equipos',
    role: 'Full-stack Lead',
    achievements: [
      'Incremento del 45% en retención con real-time collaboration',
      'Arquitectura multi-tenant manejando +100K usuarios activos',
      'Reducción del 60% en onboarding con flujos optimizados',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    live: 'https://www.grazia.ai/',
    github: '#',
    preview: 'https://www.grazia.ai/',
  },
  {
    name: 'E-commerce Premium',
    tagline: 'Motor de ventas que escala sin comprometer performance',
    role: 'Backend Architect',
    achievements: [
      'Procesamiento de +50K transacciones diarias sin downtime',
      'Mejora del 70% en velocidad con CDN y cache estratégico',
      'Sistema de pagos con 99.99% de confiabilidad',
    ],
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'AWS'],
    live: 'https://www.grazia.ai/',
    github: '#',
    preview: 'https://www.grazia.ai/',
  },
];

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    if (!sectionRef.current) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Stagger animation on scroll
      gsap.fromTo(
        card,
        { 
          opacity: 0, 
          y: 100,
          scale: 0.95,
          rotateX: 15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1.5,
          },
        }
      );

      // Parallax effect on preview
      const preview = card.querySelector('.project-preview');
      if (preview) {
        gsap.to(preview, {
          y: -20,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }

      // Glow effect animation
      const glow = card.querySelector('.project-glow');
      if (glow) {
        gsap.to(glow, {
          scale: 1.1,
          opacity: 0.8,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div ref={containerRef} className="relative max-w-7xl mx-auto">
        {/* Header with parallax */}
        <motion.div
          style={{ y: titleY }}
          className="mb-12 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-full">
              <p className="text-sm font-mono text-blue-600 uppercase tracking-wider">Portfolio</p>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1a1a1a] mb-4 md:mb-6"
          >
            Proyectos que{' '}
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
              generan impacto
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-[#1a1a1a]/60 max-w-3xl"
          >
            Cada proyecto es una historia de éxito. Desde la concepción hasta el lanzamiento, combinando diseño excepcional con código robusto.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative"
            >
              {/* Glass card */}
              <div className="relative bg-white/70 backdrop-blur-2xl border border-black/5 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-xl" />
                </div>

                <div className="relative grid lg:grid-cols-2 gap-0">
                  {/* Left: Content */}
                  <div className="p-8 md:p-12 order-2 lg:order-1 flex flex-col justify-center">
                    {/* Number badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="inline-block mb-6"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </motion.div>

                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a1a1a] mb-3 leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-base md:text-lg text-[#1a1a1a]/60 mb-4 leading-relaxed">
                        {project.tagline}
                      </p>
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-600 rounded-full text-sm font-semibold border border-blue-500/20">
                        {project.role}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-4 mb-8">
                      {project.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.span 
                            whileHover={{ scale: 1.5 }}
                            className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mt-2"
                          />
                          <span className="text-sm md:text-base text-[#1a1a1a]/70 leading-relaxed group-hover/item:text-[#1a1a1a] transition-colors">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-[#1a1a1a]/70 rounded-xl text-sm font-medium hover:from-blue-50 hover:to-violet-50 hover:text-blue-600 transition-all shadow-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl text-sm font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visitar sitio
                      </motion.a>
                      <motion.button
                        onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-12 h-12 bg-white border-2 border-black/10 text-[#1a1a1a] rounded-full hover:border-blue-500/50 hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
                      >
                        <Maximize2 className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Right: Preview */}
                  <div className="relative order-1 lg:order-2 min-h-[350px] md:min-h-[450px] lg:min-h-[600px] bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="project-preview absolute inset-0 p-6">
                      <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-blue-500/20 transition-shadow duration-700">
                        {/* Glow effect */}
                        <div className="project-glow absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl -z-10 opacity-50" />

                        {/* Browser chrome */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white via-gray-50 to-gray-100 border-b border-black/5 flex items-center px-4 gap-2 z-10 backdrop-blur-sm">
                          <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
                          <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm" />
                          <div className="ml-3 flex-1 h-6 bg-white/80 rounded-md px-3 flex items-center text-xs text-gray-500 border border-black/5">
                            {project.preview}
                          </div>
                        </div>

                        {/* Preview iframe - zoomed out to show full page */}
                        <div className="absolute inset-0 top-10 overflow-hidden bg-white">
                          <motion.div 
                            className="w-full h-full"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            style={{
                              transform: 'scale(0.5)',
                              transformOrigin: 'top left',
                              width: '200%',
                              height: '200%',
                            }}
                          >
                            <iframe
                              src={project.preview}
                              className="w-full h-full border-0"
                              title={`Preview of ${project.name}`}
                              loading="lazy"
                              sandbox="allow-scripts allow-same-origin"
                            />
                          </motion.div>
                          {/* Overlay to prevent interaction */}
                          <div className="absolute inset-0 bg-transparent cursor-pointer" 
                            onClick={() => setSelectedProject(index)}
                          />
                        </div>

                        {/* Gradient overlay on bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <motion.div 
                    className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full screen preview modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl h-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <motion.button
              onClick={() => setSelectedProject(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all shadow-lg"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Browser chrome */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-gray-100 via-white to-white border-b border-black/5 flex items-center px-6 gap-3 z-10">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 h-10 bg-gray-50 rounded-xl px-4 flex items-center text-sm text-gray-600 border border-black/5">
                <span className="truncate">{projects[selectedProject].preview}</span>
              </div>
            </div>

            {/* Full iframe - zoomed to fit */}
            <div className="absolute inset-0 top-14 overflow-auto bg-white">
              <div
                style={{
                  transform: 'scale(0.8)',
                  transformOrigin: 'top center',
                  width: '125%',
                  minHeight: '125%',
                  marginLeft: '-12.5%',
                }}
              >
                <iframe
                  src={projects[selectedProject].preview}
                  className="w-full h-screen border-0"
                  title={`Full preview of ${projects[selectedProject].name}`}
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
