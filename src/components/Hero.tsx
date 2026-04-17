"use client";

import { motion } from "framer-motion";
import { Waveform } from "./Waveform";
import { AnimatedCounter } from "./AnimatedCounter";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass text-[13px] text-gray-500 mb-10"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          IA en production — Demo live
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-gray-900"
        >
          L&apos;IA qui{" "}
          <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent animate-gradient-text">
            decroche le telephone
          </span>
          <br />
          a votre place.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          Telephone, WhatsApp, chat — votre assistant IA repond, qualifie,
          prend les rendez-vous et transfere a un humain si besoin. 24/7.
        </motion.p>

        {/* Waveform card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 max-w-md mx-auto"
        >
          <div className="glass-strong rounded-2xl p-6 shadow-xl shadow-violet-100/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-200/50">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[13px] font-semibold text-gray-900">Assistant IA</p>
                <p className="text-[11px] text-emerald-500 font-medium">En ligne — conversation en cours</p>
              </div>
              <div className="ml-auto">
                <span className="text-[11px] text-gray-400 font-mono">02:34</span>
              </div>
            </div>
            <Waveform />
            <p className="mt-4 text-[13px] text-gray-500 italic">
              &quot;Bien sur, j&apos;ai un creneau disponible jeudi a 10h30. Je vous reserve ?&quot;
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+33974995631"
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 text-white font-semibold text-base hover:shadow-xl hover:shadow-violet-200/40 transition-all duration-300 animate-glow animate-shimmer"
          >
            <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appelez l&apos;IA maintenant
          </a>
          <a
            href="#process"
            className="px-8 py-4 rounded-full glass text-gray-600 hover:text-gray-900 font-medium text-base transition-all duration-300 hover:shadow-md"
          >
            Comment ca marche
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-4 text-gray-400 text-sm"
        >
          <a href="tel:+33974995631" className="hover:text-gray-600 transition-colors font-mono tracking-wide">
            +33 9 74 99 56 31
          </a>
          {" "}— Gratuit. L&apos;IA repond en direct.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-16 glass-strong rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: "24", suffix: "/7", label: "Disponible" },
            { prefix: "<", value: "2", suffix: "s", label: "Temps de reponse" },
            { value: "3", suffix: "", label: "Canaux integres" },
            { prefix: "-", value: "80", suffix: "%", label: "Couts API" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight">
                <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
              </p>
              <p className="text-xs text-gray-400 mt-1.5 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
