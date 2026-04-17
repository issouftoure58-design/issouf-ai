"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedSection";

const agents = [
  {
    title: "Agent Receptionniste",
    subtitle: "Telephone + WhatsApp + Chat",
    description: "L'IA decroche, parle naturellement, qualifie, prend les RDV et transfere. Multi-canal.",
    price: "3 000 - 12 000",
    features: [
      "1 a 3 canaux (tel, WA, chat)",
      "Prompt sur-mesure a votre metier",
      "Prise de RDV automatique",
      "Transfert humain si besoin",
      "Dashboard de suivi inclus (Pro/Premium)",
    ],
    gradient: "from-blue-500 to-violet-500",
    popular: true,
  },
  {
    title: "Agent Email",
    subtitle: "Tri + reponses + relances",
    description: "L'IA lit vos emails, classe, repond intelligemment et relance automatiquement a J+3/J+7.",
    price: "800 - 1 500",
    retainer: "150 - 400€/mois",
    features: [
      "Connexion Gmail / Outlook",
      "Tri automatique (RDV, devis, spam...)",
      "Reponses contextualisees",
      "Relances automatiques",
      "Escalade si urgence detectee",
    ],
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Agent Commercial",
    subtitle: "Qualification + nurturing",
    description: "L'IA qualifie vos leads, envoie des sequences personnalisees et prend RDV dans votre agenda.",
    price: "1 500 - 3 000",
    retainer: "300 - 600€/mois",
    features: [
      "Qualification leads automatique",
      "Sequences email + SMS/WhatsApp",
      "Enrichissement contact (B2B)",
      "Prise de RDV auto (Calendly/GCal)",
      "Scoring et priorisation",
    ],
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

export function Offres() {
  return (
    <section id="offres" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent uppercase tracking-[0.2em] font-semibold mb-4">Agents IA</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Un agent IA pour chaque besoin.
          </h2>
          <p className="mt-5 text-gray-500 max-w-lg mx-auto text-lg">
            Forfait fixe. Vous etes proprietaire de tout : code, comptes, donnees.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-5">
          {agents.map((o, idx) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group glass-strong rounded-2xl p-6 hover:shadow-xl hover:shadow-violet-100/30 transition-all duration-500 relative ${
                o.popular ? "ring-2 ring-violet-300/50" : ""
              }`}
            >
              {o.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-[11px] font-semibold">
                  Le plus demande
                </div>
              )}

              <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${o.gradient} text-white text-[11px] font-semibold uppercase tracking-wider mb-3`}>
                {o.subtitle}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{o.title}</h3>
              <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">{o.description}</p>

              <div className="mt-4 mb-1">
                <span className={`text-2xl font-bold bg-gradient-to-r ${o.gradient} bg-clip-text text-transparent`}>{o.price}&euro;</span>
              </div>
              {o.retainer && (
                <p className="text-[11px] text-gray-400 mb-4">+ maintenance {o.retainer}</p>
              )}
              {!o.retainer && <div className="mb-4" />}

              <div className="space-y-2">
                {o.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[12px] text-gray-500">{f}</span>
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

        <FadeIn delay={0.2} className="mt-10">
          <div className="glass-strong rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Optimisation couts IA</h3>
            <p className="text-[13px] text-gray-500 max-w-lg mx-auto">
              Votre facture OpenAI / Claude explose ? Je reduis vos couts de 70-80% en 3-5 jours.
              Cache semantique, cascade de modeles, token management.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">2 500 - 5 000&euro;</span>
              <a href="#contact" className="text-[13px] font-medium text-violet-600 hover:text-violet-700 transition-colors">
                En savoir plus &rarr;
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-6">
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
