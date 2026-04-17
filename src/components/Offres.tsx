"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedSection";

const offres = [
  {
    title: "Assistant IA",
    subtitle: "Telephone, WhatsApp, Chat",
    description: "L'IA decroche, repond, qualifie et prend les RDV. Prompt sur-mesure, function calling reel.",
    plans: [
      { name: "Essentiel", price: "3 000", features: ["1 canal au choix", "Prompt custom metier", "Branding client"] },
      { name: "Pro", price: "5 000 - 7 000", features: ["2 canaux", "Dashboard light", "Stats + historique"] },
      { name: "Premium", price: "8 000 - 12 000", features: ["3 canaux", "Dashboard complet", "Outils metier", "Maintenance 3 mois"] },
    ],
    gradient: "from-blue-500 to-violet-500",
  },
  {
    title: "Site web sur-mesure",
    subtitle: "Vitrine, e-commerce, dashboard",
    description: "Sites performants, modernes, SEO. Comme celui que vous regardez en ce moment.",
    plans: [
      { name: "Landing page", price: "2 000 - 3 500", features: ["Design premium", "SEO optimise", "Responsive", "Animations fluides"] },
      { name: "Site vitrine + IA", price: "3 500 - 5 000", features: ["Multi-pages", "Dashboard client", "Chat IA integre"] },
      { name: "E-commerce + IA", price: "6 000 - 10 000", features: ["Stripe complet", "Chatbot SAV", "Gestion stock"] },
    ],
    gradient: "from-violet-500 to-cyan-500",
  },
  {
    title: "Optimisation couts IA",
    subtitle: "Mission courte, ROI immediat",
    description: "Reduction 70-80% de votre facture OpenAI / Claude / GPT en 3-5 jours.",
    plans: [
      { name: "Audit + Optimisation", price: "2 500 - 5 000", features: ["Analyse complete", "Cache + token management", "Cascade de modeles", "Resultats mesurables"] },
    ],
    gradient: "from-cyan-500 to-emerald-500",
  },
];

export function Offres() {
  return (
    <section id="offres" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent uppercase tracking-[0.2em] font-semibold mb-4">Tarifs</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Des offres claires. Sans surprise.
          </h2>
          <p className="mt-5 text-gray-500 max-w-lg mx-auto text-lg">
            Forfait ou regie (600-800&euro;/jour). Maintenance optionnelle apres livraison.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-5">
          {offres.map((o, idx) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group glass-strong rounded-2xl p-6 hover:shadow-xl hover:shadow-violet-100/30 transition-all duration-500"
            >
              <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${o.gradient} text-white text-[11px] font-semibold uppercase tracking-wider mb-3`}>
                {o.subtitle}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{o.title}</h3>
              <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">{o.description}</p>

              <div className="mt-6 space-y-3">
                {o.plans.map((p) => (
                  <div key={p.name} className="glass rounded-xl p-4 hover:bg-white/70 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[13px] font-semibold text-gray-900">{p.name}</p>
                      <span className={`text-[12px] font-bold bg-gradient-to-r ${o.gradient} bg-clip-text text-transparent`}>{p.price}&euro;</span>
                    </div>
                    <div className="space-y-1">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[12px] text-gray-500">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-6 block text-center text-[13px] font-medium px-4 py-3 rounded-xl bg-gradient-to-r ${o.gradient} text-white hover:shadow-lg hover:shadow-violet-200/30 transition-all duration-300`}
              >
                Demander un devis
              </a>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-14">
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { title: "Proprietaire de tout", desc: "Code, comptes, donnees — tout est a vous." },
              { title: "Zero marge cachee", desc: "Vous payez votre infra directement." },
              { title: "Demo avant devis", desc: "Appelez l'IA pour juger avant engagement." },
            ].map((e) => (
              <div key={e.title} className="glass rounded-xl px-5 py-4">
                <p className="text-[13px] font-medium text-gray-900">{e.title}</p>
                <p className="text-[12px] text-gray-500 mt-1">{e.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
