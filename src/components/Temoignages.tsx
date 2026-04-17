"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedSection";

const temoignages = [
  {
    name: "Dr. Sophie Laurent",
    role: "Directrice — Clinique Saint-Honore",
    text: "On perdait 30% des appels le soir et le week-end. Depuis que l'IA decroche, on ne rate plus aucun rendez-vous. Mes patients sont surpris par le naturel de la conversation.",
    initials: "SL",
    gradient: "from-blue-400 to-violet-400",
  },
  {
    name: "Marc Dubois",
    role: "Gerant — Agence ImmoVista",
    text: "L'IA qualifie nos leads par telephone et WhatsApp avant meme qu'un agent intervienne. On a gagne 2h par jour et nos taux de conversion ont augmente de 35%.",
    initials: "MD",
    gradient: "from-violet-400 to-cyan-400",
  },
  {
    name: "Julie Chen",
    role: "CTO — StartupFlow",
    text: "Notre facture OpenAI est passee de 2 400€ a 380€ par mois apres l'optimisation. Le ROI a ete immediat. Issouf maitrise les couts API comme personne.",
    initials: "JC",
    gradient: "from-cyan-400 to-emerald-400",
  },
];

export function Temoignages() {
  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <p className="text-[13px] bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-[0.2em] font-semibold mb-4">Temoignages</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Ce qu&apos;ils en disent.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {temoignages.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-strong rounded-2xl p-6 hover:shadow-xl hover:shadow-violet-100/20 transition-all duration-500"
            >
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">&quot;{t.text}&quot;</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-[13px] font-bold text-white shadow-lg`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-gray-900">{t.name}</p>
                  <p className="text-[12px] text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
