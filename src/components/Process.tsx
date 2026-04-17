"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Vous m'expliquez votre besoin",
    description: "Un call de 15 min suffit. Je comprends votre metier, vos clients, vos horaires.",
    gradient: "from-blue-500 to-violet-500",
  },
  {
    number: "02",
    title: "Je configure votre IA",
    description: "Prompt sur-mesure, branding a vos couleurs, numero dedie, integrations.",
    gradient: "from-violet-500 to-cyan-500",
  },
  {
    number: "03",
    title: "L'IA decroche pour vous",
    description: "Votre assistant est en ligne 24/7. Vous suivez tout depuis votre dashboard.",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent uppercase tracking-[0.2em] font-semibold mb-4">Processus</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            3 etapes. Votre IA est en ligne.
          </h2>
          <p className="mt-5 text-gray-500 max-w-lg mx-auto text-lg">
            Pas de cahier des charges de 50 pages. Un call, une config, c&apos;est en prod.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-blue-300/40 via-violet-300/40 to-cyan-300/40" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative text-center"
            >
              <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-200/30`}>
                <span className="text-lg font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-16">
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent">15 min</p>
                <p className="text-[13px] text-gray-500 mt-1">Call decouverte</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-gradient-to-br from-violet-600 to-cyan-500 bg-clip-text text-transparent">2-3 sem.</p>
                <p className="text-[13px] text-gray-500 mt-1">Configuration + livraison</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">24/7</p>
                <p className="text-[13px] text-gray-500 mt-1">L&apos;IA tourne en continu</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
