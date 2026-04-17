"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./AnimatedSection";

const sites = [
  {
    id: "landing",
    label: "Landing page",
    price: "2 000 - 3 500€",
    description: "Page unique, design premium, animations fluides, SEO optimise, conversion maximale.",
    features: ["Animations scroll", "Responsive mobile", "SEO < 1s", "Formulaire contact"],
    preview: (
      <div className="h-full bg-gradient-to-br from-white to-blue-50/30 p-4 text-[8px] sm:text-[10px] space-y-3 overflow-hidden">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <div className="font-bold text-gray-800 text-[10px] sm:text-[12px]">MonBrand</div>
          <div className="flex gap-3 text-gray-400">
            <span>Services</span><span>A propos</span><span>Contact</span>
          </div>
        </div>
        {/* Hero */}
        <div className="text-center py-6 space-y-2">
          <div className="text-[14px] sm:text-[18px] font-bold text-gray-900">Transformez votre business</div>
          <div className="text-gray-400 text-[8px] sm:text-[10px] max-w-[80%] mx-auto">Une solution sur-mesure pour accelerer votre croissance digitale</div>
          <div className="flex justify-center gap-2 pt-2">
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-[7px] sm:text-[8px]">Commencer</div>
            <div className="px-3 py-1 rounded-full border border-gray-200 text-gray-500 text-[7px] sm:text-[8px]">En savoir plus</div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 px-4">
          {[{ v: "500+", l: "Clients" }, { v: "98%", l: "Satisfaction" }, { v: "24/7", l: "Support" }].map((s) => (
            <div key={s.l} className="text-center py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-white/80">
              <div className="font-bold text-gray-900 text-[10px] sm:text-[12px]">{s.v}</div>
              <div className="text-gray-400 text-[7px]">{s.l}</div>
            </div>
          ))}
        </div>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-2 px-2">
          {["Conseil", "Design", "Dev"].map((c) => (
            <div key={c} className="rounded-lg border border-white/80 bg-white/50 backdrop-blur-sm p-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-200 to-violet-200 mb-1" />
              <div className="font-medium text-gray-700 text-[8px]">{c}</div>
              <div className="text-gray-300 text-[6px] mt-0.5">Service premium sur-mesure</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "vitrine-ia",
    label: "Site vitrine + Chat IA",
    price: "3 500 - 5 000€",
    description: "Site multi-pages avec widget chat IA integre. Le visiteur pose ses questions, l'IA repond et qualifie.",
    features: ["Multi-pages", "Chat IA integre", "Qualification leads", "Dashboard stats"],
    preview: (
      <div className="h-full bg-gradient-to-br from-white to-violet-50/30 p-4 text-[8px] sm:text-[10px] space-y-2 overflow-hidden">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <div className="font-bold text-gray-800 text-[10px] sm:text-[12px]">CabinetSante</div>
          <div className="flex gap-3 text-gray-400">
            <span>Accueil</span><span>Equipe</span><span>RDV</span><span>Contact</span>
          </div>
        </div>
        {/* Content */}
        <div className="flex gap-3 pt-2">
          <div className="flex-1 space-y-2">
            <div className="text-[12px] sm:text-[14px] font-bold text-gray-900">Cabinet Medical<br/>Dr. Martin & Associes</div>
            <div className="text-gray-400 text-[7px] sm:text-[8px]">Medecine generale, dermatologie, pediatrie. Prenez RDV en ligne ou par telephone.</div>
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white text-[7px] sm:text-[8px] w-fit">Prendre RDV</div>
            {/* Info cards */}
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <div className="rounded bg-white/60 backdrop-blur-sm border border-white/80 p-1.5">
                <div className="text-[7px] text-gray-400">Horaires</div>
                <div className="text-[7px] font-medium text-gray-700">Lun-Ven 8h-19h</div>
              </div>
              <div className="rounded bg-white/60 backdrop-blur-sm border border-white/80 p-1.5">
                <div className="text-[7px] text-gray-400">Telephone</div>
                <div className="text-[7px] font-medium text-gray-700">01 23 45 67 89</div>
              </div>
            </div>
          </div>
          {/* Chat widget */}
          <div className="w-[120px] sm:w-[140px] rounded-xl border border-white/80 bg-white/70 backdrop-blur-md shadow-lg flex flex-col overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-violet-500 text-white text-[7px] px-2 py-1.5 font-medium">Assistant IA</div>
            <div className="flex-1 p-2 space-y-1.5 bg-white/40">
              <div className="bg-blue-50/80 text-blue-800 text-[6px] px-1.5 py-1 rounded-lg rounded-tl-sm">Bonjour ! Comment puis-je vous aider ?</div>
              <div className="bg-white/80 text-gray-600 text-[6px] px-1.5 py-1 rounded-lg rounded-tr-sm ml-auto w-fit">Je cherche un dermato</div>
              <div className="bg-blue-50/80 text-blue-800 text-[6px] px-1.5 py-1 rounded-lg rounded-tl-sm">Dr. Leroy est disponible jeudi a 15h. Je vous reserve ?</div>
            </div>
            <div className="border-t border-white/60 px-2 py-1 bg-white/30">
              <div className="rounded bg-white/60 text-gray-400 text-[6px] px-1.5 py-0.5">Votre message...</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ecommerce",
    label: "E-commerce + IA SAV",
    price: "6 000 - 10 000€",
    description: "Boutique en ligne complete avec paiement Stripe, gestion stock, et chatbot SAV WhatsApp/chat integre.",
    features: ["Stripe CB/Apple Pay", "Gestion stock", "Chatbot SAV", "Suivi commandes"],
    preview: (
      <div className="h-full bg-gradient-to-br from-white to-cyan-50/30 p-4 text-[8px] sm:text-[10px] space-y-2 overflow-hidden">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <div className="font-bold text-gray-800 text-[10px] sm:text-[12px]">ShopName</div>
          <div className="flex items-center gap-3 text-gray-400">
            <span>Nouveautes</span><span>Collections</span>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-[7px] bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-full w-3 h-3 flex items-center justify-center">3</span>
            </div>
          </div>
        </div>
        {/* Products grid */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {[
            { name: "Serum Visage", price: "45€", color: "bg-amber-50/80" },
            { name: "Creme Jour", price: "38€", color: "bg-rose-50/80" },
            { name: "Huile Bio", price: "29€", color: "bg-green-50/80" },
          ].map((p) => (
            <div key={p.name} className="rounded-xl border border-white/80 overflow-hidden bg-white/50 backdrop-blur-sm">
              <div className={`${p.color} h-16 sm:h-20 flex items-center justify-center`}>
                <div className="w-8 h-10 rounded-lg bg-white/60 shadow-sm" />
              </div>
              <div className="p-1.5">
                <div className="text-[7px] sm:text-[8px] font-medium text-gray-800">{p.name}</div>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-[8px] font-bold text-gray-900">{p.price}</span>
                  <div className="px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-600 to-violet-600 text-white text-[6px]">Ajouter</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom bar */}
        <div className="flex items-center justify-between rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 px-3 py-2">
          <div>
            <div className="text-[7px] text-gray-400">Panier (3 articles)</div>
            <div className="text-[10px] font-bold text-gray-900">112€</div>
          </div>
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-[8px] font-medium">Commander</div>
        </div>
        {/* SAV badge */}
        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-50/60 backdrop-blur-sm border border-emerald-100/60 px-2 py-1.5">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
          </div>
          <div className="text-[7px] text-green-700">SAV WhatsApp : l&apos;IA repond a vos clients 24/7</div>
        </div>
      </div>
    ),
  },
  {
    id: "dashboard",
    label: "Dashboard client IA",
    price: "Inclus offre Pro/Premium",
    description: "Interface de pilotage pour vos clients : historique appels, stats, transcripts, prompt modifiable, horaires.",
    features: ["Stats temps reel", "Historique appels", "Transcripts", "Prompt editable"],
    preview: (
      <div className="h-full bg-gradient-to-br from-gray-50 to-violet-50/30 p-3 text-[8px] sm:text-[10px] space-y-2 overflow-hidden">
        {/* Sidebar + content */}
        <div className="flex gap-2 h-full">
          {/* Mini sidebar */}
          <div className="w-10 sm:w-12 bg-white/70 backdrop-blur-sm rounded-lg border border-white/80 p-1.5 space-y-2 flex-shrink-0">
            <div className="w-full aspect-square rounded bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-violet-500" />
            </div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-full aspect-square rounded ${i === 1 ? 'bg-blue-50/80 border border-blue-200/60' : 'bg-white/50'} flex items-center justify-center`}>
                <div className={`w-2.5 h-2.5 rounded-sm ${i === 1 ? 'bg-gradient-to-br from-blue-400 to-violet-400' : 'bg-gray-300'}`} />
              </div>
            ))}
          </div>
          {/* Main */}
          <div className="flex-1 space-y-2">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-1.5">
              {[{ v: "127", l: "Appels", t: "+18%" }, { v: "94%", l: "Resolution", t: "+3%" }, { v: "2:12", l: "Duree moy.", t: "-12%" }].map((s) => (
                <div key={s.l} className="bg-white/70 backdrop-blur-sm rounded-lg border border-white/80 p-1.5">
                  <div className="text-[6px] text-gray-400">{s.l}</div>
                  <div className="text-[10px] font-bold text-gray-900">{s.v}</div>
                  <div className="text-[6px] text-emerald-500">{s.t}</div>
                </div>
              ))}
            </div>
            {/* Mini chart placeholder */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-white/80 p-2">
              <div className="text-[7px] text-gray-500 mb-1">Appels cette semaine</div>
              <div className="flex items-end gap-[3px] h-8">
                {[40, 65, 45, 80, 60, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-400 to-violet-400 opacity-80" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex justify-between mt-1 text-[5px] text-gray-300">
                <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
              </div>
            </div>
            {/* Mini table */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-white/80 p-1.5">
              <div className="text-[7px] text-gray-500 mb-1">Derniers appels</div>
              {[
                { n: "Marie D.", s: "RDV pris", c: "text-emerald-600 bg-emerald-50/80" },
                { n: "J. Lambert", s: "Transfere", c: "text-amber-600 bg-amber-50/80" },
                { n: "Sophie M.", s: "Qualifie", c: "text-blue-600 bg-blue-50/80" },
              ].map((r) => (
                <div key={r.n} className="flex items-center justify-between py-0.5">
                  <span className="text-[7px] text-gray-700">{r.n}</span>
                  <span className={`text-[6px] px-1 py-0.5 rounded-full ${r.c}`}>{r.s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function Catalogue() {
  const [active, setActive] = useState(0);
  const current = sites[active];

  return (
    <section id="catalogue" className="py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent uppercase tracking-[0.2em] font-semibold mb-4">Catalogue</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Un apercu de ce que vous obtenez.
          </h2>
          <p className="mt-5 text-gray-500 max-w-lg mx-auto text-lg">
            Chaque site est code sur-mesure. Voici les types de projets que je livre.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {sites.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  active === i
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-violet-200/30"
                    : "glass text-gray-500 hover:text-gray-700"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Preview + Info */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Browser mockup */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl glass-strong overflow-hidden shadow-xl shadow-violet-100/20"
                >
                  {/* Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/40 bg-white/30">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-3 py-0.5 rounded-full glass text-[10px] text-gray-400 font-mono">
                        www.votresite.fr
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="h-[320px] sm:h-[380px] overflow-hidden">
                    {current.preview}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-violet-200/30">
                    <span className="text-[12px] font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">{current.price}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight mt-3">
                    {current.label}
                  </h3>
                  <p className="mt-3 text-[14px] text-gray-500 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    {current.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-violet-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[13px] text-gray-600">{f}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 text-white text-[13px] font-medium hover:shadow-lg hover:shadow-violet-200/40 transition-all animate-shimmer"
                  >
                    Je veux ce site
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
