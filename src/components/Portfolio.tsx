"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedSection";

const projects = [
  {
    label: "IA Telephone",
    title: "Assistant vocal en production",
    description:
      "L'IA decroche, parle naturellement, verifie les dispos, prend le RDV, transfere a un humain si besoin. Anti-echo, anti-barge-in, gestion des tokens.",
    stack: ["OpenAI Realtime API", "Twilio Voice", "WebSocket", "Node.js"],
    metrics: [
      { label: "Disponibilite", value: "24/7" },
      { label: "Latence", value: "<2s" },
      { label: "Canaux", value: "3" },
    ],
    cta: { label: "Appelez pour tester", href: "tel:+33974995631" },
    gradient: "from-blue-500 to-violet-500",
    labelGradient: "from-blue-600 to-violet-600",
  },
  {
    label: "Optimisation IA",
    title: "Cout par interaction : 0.10$ → 0.01$",
    description:
      "Cache semantique, token management, cascade Haiku/Sonnet, prompt compression, anti-boucle. Reduction de 90% mesuree sur facture.",
    stack: ["Claude API", "OpenAI API", "Token Management", "Caching"],
    metrics: [
      { label: "Reduction", value: "-90%" },
      { label: "Avant", value: "0.10$" },
      { label: "Apres", value: "0.01$" },
    ],
    gradient: "from-emerald-500 to-cyan-500",
    labelGradient: "from-emerald-500 to-cyan-500",
  },
  {
    label: "Plateforme complete",
    title: "Multi-tenant, 7 types de business",
    description:
      "74 routes API, 87 migrations, 50 tables RLS, Stripe (abonnements, webhooks, portail), IA multi-canal. Score performance 9.0/10.",
    stack: ["React", "Node.js", "Supabase", "Stripe", "Twilio"],
    metrics: [
      { label: "Routes API", value: "74" },
      { label: "Migrations", value: "87" },
      { label: "Performance", value: "9/10" },
    ],
    gradient: "from-violet-500 to-fuchsia-500",
    labelGradient: "from-violet-600 to-fuchsia-600",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent uppercase tracking-[0.2em] font-semibold mb-4">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            En production. Pas en maquette.
          </h2>
          <p className="mt-5 text-gray-500 max-w-lg mx-auto text-lg">
            Chaque projet tourne avec de vrais utilisateurs, aujourd&apos;hui.
          </p>
        </FadeIn>

        <div className="space-y-5">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group glass-strong rounded-2xl hover:shadow-xl hover:shadow-violet-100/20 transition-all duration-500 overflow-hidden"
            >
              {/* Top bar */}
              <div className={`h-[3px] bg-gradient-to-r ${p.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <p className={`text-[12px] font-semibold uppercase tracking-[0.15em] bg-gradient-to-r ${p.labelGradient} bg-clip-text text-transparent`}>{p.label}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1.5 tracking-tight">{p.title}</h3>
                    <p className="mt-3 text-[14px] text-gray-500 leading-relaxed max-w-xl">{p.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.stack.map((s) => (
                        <span key={s} className="text-[11px] px-2.5 py-1 rounded-full glass text-gray-500">
                          {s}
                        </span>
                      ))}
                    </div>

                    {p.cta && (
                      <a
                        href={p.cta.href}
                        className={`inline-flex items-center gap-2 mt-5 text-[13px] font-medium bg-gradient-to-r ${p.labelGradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity group/link`}
                      >
                        {p.cta.label}
                        <svg className="w-4 h-4 text-violet-500 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="flex lg:flex-col gap-6 lg:gap-4">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="text-center lg:text-right">
                        <p className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">{m.value}</p>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Missions */}
        <FadeIn delay={0.2} className="mt-20">
          <h3 className="text-lg font-semibold text-gray-900 text-center mb-8">Exemples de missions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { need: "IA telephone pour une clinique", time: "2-3 sem.", price: "3-6k€" },
              { need: "Chatbot WhatsApp pour qualifier des leads", time: "2-3 sem.", price: "3-5k€" },
              { need: "Facture OpenAI qui explose", time: "3-5 jours", price: "2.5-5k€" },
              { need: "Site vitrine premium + chat IA", time: "3-4 sem.", price: "4-7k€" },
              { need: "Landing page avec animations", time: "1-2 sem.", price: "2-3.5k€" },
              { need: "IA tel + WA + chat, tout connecte", time: "4-6 sem.", price: "8-12k€" },
            ].map((m) => (
              <div key={m.need} className="glass rounded-xl px-4 py-3.5 hover:shadow-md transition-all cursor-default">
                <p className="text-[13px] text-gray-900 font-medium">&quot;{m.need}&quot;</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-[12px] text-gray-400">{m.time}</span>
                  <span className="w-px h-3 bg-gray-200" />
                  <span className="text-[12px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-medium">{m.price}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
