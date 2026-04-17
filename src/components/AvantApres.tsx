"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedSection";

const comparisons = [
  { avant: "Appels manques le soir et le week-end", apres: "L'IA repond 24/7, meme a 3h du matin" },
  { avant: "Secretaire a 2 500€/mois + charges", apres: "IA a ~150€/mois (Twilio + OpenAI)" },
  { avant: "Clients en attente, raccrochent", apres: "Reponse en moins de 2 secondes" },
  { avant: "Pas de suivi des appels recus", apres: "Historique, transcripts, stats en temps reel" },
  { avant: "RDV pris au telephone avec erreurs", apres: "L'IA verifie les dispos et confirme par SMS" },
  { avant: "Transfert manuel vers le bon service", apres: "L'IA qualifie et transfere automatiquement" },
];

export function AvantApres() {
  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <p className="text-[13px] bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-[0.2em] font-semibold mb-4">Avant / Apres</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Ce qui change avec une IA.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          <div className="hidden sm:flex items-center justify-center px-4 py-2">
            <span className="text-[13px] font-semibold text-red-400 uppercase tracking-wider">Sans IA</span>
          </div>
          <div className="hidden sm:flex items-center justify-center px-4 py-2">
            <span className="text-[13px] font-semibold text-emerald-500 uppercase tracking-wider">Avec votre assistant</span>
          </div>

          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              className="contents"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="rounded-xl bg-red-50/60 backdrop-blur-sm border border-red-100/60 px-5 py-4 flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <p className="text-[13px] text-red-600 font-medium sm:hidden mb-0.5">Sans IA</p>
                  <p className="text-[14px] text-gray-700">{c.avant}</p>
                </div>
              </div>

              <div className="rounded-xl bg-emerald-50/60 backdrop-blur-sm border border-emerald-100/60 px-5 py-4 flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-[13px] text-emerald-600 font-medium sm:hidden mb-0.5">Avec IA</p>
                  <p className="text-[14px] text-gray-700">{c.apres}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
