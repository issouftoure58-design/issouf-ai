"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./AnimatedSection";

const faqs = [
  {
    q: "L'IA peut vraiment prendre des RDV par telephone ?",
    a: "Oui, en production. Appelez le +33 9 39 24 56 51, l'IA vous repond, verifie les disponibilites et prend le rendez-vous. Pas une maquette — ca tourne maintenant.",
  },
  {
    q: "Quelle difference avec ChatGPT ou Voiceflow ?",
    a: "Je livre une IA sur-mesure : prompt custom a votre metier, function calling reel (l'IA execute des actions dans votre systeme), hebergement a votre nom, pas de dependance a un SaaS tiers.",
  },
  {
    q: "Qui paie les couts d'infra (Twilio, OpenAI) ?",
    a: "Vous. Tout est a votre nom : comptes Twilio, OpenAI, serveur. Je configure tout mais la facture est directe, pas de marge cachee. Comptez ~100-300€/mois selon le volume.",
  },
  {
    q: "C'est quoi le ROI de l'optimisation IA ?",
    a: "Si vous depensez 500€/mois en API, l'optimisation vous fait economiser 350-400€/mois. La mission se rembourse en 1-2 mois.",
  },
  {
    q: "Combien de temps pour deployer l'IA ?",
    a: "2-3 semaines pour un canal, 4-6 semaines pour les 3 canaux (telephone + WhatsApp + chat). Apres le call decouverte de 15 min, je vous livre un assistant operationnel.",
  },
  {
    q: "Code custom ou no-code ?",
    a: "Code custom. Node.js, OpenAI Realtime API, Twilio, WebSocket. Vous etes proprietaire du code, heberge chez vous. Pas de lock-in, pas de plateforme tierce.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 sm:py-36">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <p className="text-[13px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-[0.2em] font-semibold mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Questions frequentes
          </h2>
        </FadeIn>

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="rounded-xl glass-strong hover:shadow-md hover:shadow-violet-100/10 transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left group"
                >
                  <span className="text-[14px] font-medium text-gray-700 group-hover:text-gray-900 transition-colors pr-4">
                    {f.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIdx === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-violet-400 flex-shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-4">
                        <p className="text-[13px] text-gray-500 leading-relaxed">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
