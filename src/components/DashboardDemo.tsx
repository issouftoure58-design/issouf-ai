"use client";

import { motion } from "framer-motion";
import { FadeIn, ScaleIn } from "./AnimatedSection";

const mockCalls = [
  { time: "14:32", caller: "Marie Dupont", duration: "3:24", status: "RDV pris", channel: "TEL" },
  { time: "14:15", caller: "+33 6 12 34 56 78", duration: "1:47", status: "Qualifie", channel: "WA" },
  { time: "13:58", caller: "Dr. Lambert", duration: "4:12", status: "Transfere", channel: "TEL" },
  { time: "13:41", caller: "Sophie Martin", duration: "2:08", status: "RDV pris", channel: "CHAT" },
  { time: "12:22", caller: "+33 7 89 01 23 45", duration: "1:33", status: "Info donnee", channel: "TEL" },
];

const statusStyle: Record<string, string> = {
  "RDV pris": "text-emerald-600 bg-emerald-50",
  "Qualifie": "text-blue-600 bg-blue-50",
  "Transfere": "text-amber-600 bg-amber-50",
  "Info donnee": "text-gray-500 bg-gray-100",
};

const channelStyle: Record<string, string> = {
  TEL: "text-blue-600",
  WA: "text-emerald-600",
  CHAT: "text-violet-600",
};

export function DashboardDemo() {
  return (
    <section id="demo" className="py-28 sm:py-36 relative">
      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[13px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-[0.2em] font-semibold mb-4">Dashboard</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Pilotez votre IA depuis un dashboard.
          </h2>
          <p className="mt-5 text-gray-500 max-w-lg mx-auto text-lg">
            Chaque appel, chaque message, chaque RDV pris — tout est visible.
            Vous gardez le controle total sur votre assistant.
          </p>
        </FadeIn>

        <ScaleIn>
          <div className="glass-strong rounded-2xl overflow-hidden shadow-xl shadow-violet-100/20">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/40">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-lg glass text-[11px] text-gray-400 font-mono">
                  dashboard.issouf.ai
                </div>
              </div>
              <div className="w-[52px]" />
            </div>

            <div className="p-5 sm:p-7">
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Appels aujourd'hui", value: "47", trend: "+12%", up: true },
                  { label: "RDV pris par l'IA", value: "18", trend: "+23%", up: true },
                  { label: "Taux de resolution", value: "89%", trend: "+5%", up: true },
                  { label: "Duree moyenne", value: "2:34", trend: "-15%", up: false },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="glass rounded-xl p-4"
                  >
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">{s.label}</p>
                    <div className="flex items-end gap-2 mt-1.5">
                      <p className="text-2xl font-bold text-gray-900 tracking-tight">{s.value}</p>
                      <span className={`text-[11px] font-medium mb-0.5 ${s.up ? "text-emerald-500" : "text-blue-500"}`}>
                        {s.trend}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid lg:grid-cols-5 gap-4">
                {/* Table */}
                <div className="lg:col-span-3 glass rounded-xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/40">
                    <h3 className="text-[13px] font-medium text-gray-700">Conversations recentes</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="text-[11px] text-gray-400 uppercase tracking-wider border-b border-white/30">
                          <th className="text-left px-4 py-2.5 font-medium">Heure</th>
                          <th className="text-left px-4 py-2.5 font-medium">Contact</th>
                          <th className="text-left px-4 py-2.5 font-medium">Canal</th>
                          <th className="text-left px-4 py-2.5 font-medium">Duree</th>
                          <th className="text-left px-4 py-2.5 font-medium">Resultat</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockCalls.map((c, i) => (
                          <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                            className="border-b border-white/20 hover:bg-white/30 transition-colors cursor-pointer"
                          >
                            <td className="px-4 py-3 text-gray-400 font-mono text-xs">{c.time}</td>
                            <td className="px-4 py-3 text-gray-900 font-medium">{c.caller}</td>
                            <td className="px-4 py-3">
                              <span className={`text-[11px] font-semibold ${channelStyle[c.channel]}`}>{c.channel}</span>
                            </td>
                            <td className="px-4 py-3 text-gray-400 font-mono text-xs">{c.duration}</td>
                            <td className="px-4 py-3">
                              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusStyle[c.status]}`}>
                                {c.status}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Transcript */}
                <div className="lg:col-span-2 glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[13px] font-medium text-gray-700">Transcript live</h3>
                    <span className="text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">RDV pris</span>
                  </div>
                  <div className="space-y-3 text-[13px]">
                    {[
                      { role: "ia", text: "Bonjour, cabinet du Dr. Martin, comment puis-je vous aider ?" },
                      { role: "user", text: "Je voudrais prendre rendez-vous pour une consultation." },
                      { role: "ia", text: "Bien sur. J'ai un creneau jeudi 24 a 10h30 ou vendredi 25 a 14h. Lequel preferez-vous ?" },
                      { role: "user", text: "Jeudi 10h30, c'est parfait." },
                      { role: "ia", text: "C'est note ! RDV jeudi 24 avril a 10h30. Confirmation par SMS envoyee. Bonne journee !" },
                    ].map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 + i * 0.12 }}
                        className={`flex gap-2 ${m.role === "ia" ? "" : "justify-end"}`}
                      >
                        <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[13px] ${
                          m.role === "ia"
                            ? "bg-gradient-to-br from-blue-50 to-violet-50 text-blue-900 rounded-tl-sm"
                            : "bg-white/60 text-gray-700 rounded-tr-sm shadow-sm"
                        }`}>
                          {m.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
