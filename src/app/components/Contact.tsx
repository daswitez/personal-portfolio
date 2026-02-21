"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const auroraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!auroraRef.current) return;

    // Animate aurora background
    gsap.to(auroraRef.current, {
      backgroundPosition: '100% 100%',
      duration: 15,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('¡Mensaje enviado! Te responderé pronto.', {
      description: 'Gracias por contactarme',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Animated aurora background */}
      <div
        ref={auroraRef}
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #60a5fa, #a78bfa, #06b6d4)',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
            Trabajemos juntos
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte a hacerlo realidad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#1a1a1a]/70 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1a1a1a]/70 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#1a1a1a]/70 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Contame sobre tu proyecto..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-[#1a1a1a] text-white rounded-2xl font-medium shadow-lg hover:bg-black transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar
                    <Send className="w-4 h-4" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            {/* Glass card */}
            <div className="p-8 bg-white/60 backdrop-blur-xl border border-black/5 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">
                Otras formas de contacto
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <motion.a
                  href="mailto:danielmercadosubirana@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/5 to-violet-500/5 border border-blue-500/10 rounded-2xl hover:from-blue-500/10 hover:to-violet-500/10 hover:border-blue-500/20 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-[#1a1a1a]/60 mb-1">Email</div>
                    <div className="font-medium text-[#1a1a1a]">
                      danielmercadosubirana@gmail.com
                    </div>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/5 to-violet-500/5 border border-blue-500/10 rounded-2xl hover:from-blue-500/10 hover:to-violet-500/10 hover:border-blue-500/20 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-[#1a1a1a]/60 mb-1">LinkedIn</div>
                    <div className="font-medium text-[#1a1a1a]">
                      /in/daniel
                    </div>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/5 to-violet-500/5 border border-blue-500/10 rounded-2xl hover:from-blue-500/10 hover:to-violet-500/10 hover:border-blue-500/20 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-[#1a1a1a]/60 mb-1">GitHub</div>
                    <div className="font-medium text-[#1a1a1a]">
                      @daswitez
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#1a1a1a]/70">
                Disponible para proyectos
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}