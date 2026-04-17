"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedSection";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      project: (form.elements.namedItem("project") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur d'envoi");
      setSent(true);
    } catch {
      setError("Erreur lors de l'envoi. Reessayez ou contactez-moi par email.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-28 sm:py-36 relative">
      <div className="relative max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <p className="text-[13px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-[0.2em] font-semibold mb-4">Contact</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Parlons de votre projet.
          </h2>
          <p className="mt-5 text-gray-500 max-w-md mx-auto text-lg">
            Decrivez votre besoin, je reviens vers vous sous 24h avec un devis.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10">
          <FadeIn delay={0.1} className="lg:col-span-3">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-strong rounded-2xl p-10 text-center shadow-xl shadow-violet-100/20"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200/30">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Message envoye !</h3>
                <p className="mt-2 text-[14px] text-gray-500">Je reviens vers vous sous 24h.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl shadow-violet-100/10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-medium text-gray-700 mb-1.5">Nom</label>
                    <input id="name" name="name" type="text" required placeholder="Votre nom"
                      className="w-full px-4 py-2.5 rounded-xl glass text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-300/50 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
                    <input id="email" name="email" type="email" required placeholder="vous@exemple.com"
                      className="w-full px-4 py-2.5 rounded-xl glass text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-300/50 transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="project" className="block text-[13px] font-medium text-gray-700 mb-1.5">Type de projet</label>
                  <select id="project" name="project"
                    className="w-full px-4 py-2.5 rounded-xl glass text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-300/50 transition-all">
                    <option value="">Selectionnez...</option>
                    <option value="ia-tel">Assistant IA telephone</option>
                    <option value="ia-wa">Chatbot WhatsApp</option>
                    <option value="ia-chat">Chat IA web</option>
                    <option value="site-landing">Landing page</option>
                    <option value="site-vitrine">Site vitrine</option>
                    <option value="site-ecommerce">E-commerce</option>
                    <option value="optim">Optimisation couts IA</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-gray-700 mb-1.5">Decrivez votre besoin</label>
                  <textarea id="message" name="message" required rows={4} placeholder="Votre projet en quelques lignes..."
                    className="w-full px-4 py-2.5 rounded-xl glass text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-300/50 transition-all resize-none" />
                </div>
                {error && <p className="text-[13px] text-red-500">{error}</p>}
                <button type="submit" disabled={sending}
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 text-white text-[14px] font-medium hover:shadow-lg hover:shadow-violet-200/40 transition-all disabled:opacity-50 animate-shimmer">
                  {sending ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-2 space-y-4">
            <div className="glass-strong rounded-2xl p-5">
              <p className="text-[13px] font-medium text-gray-900 mb-1">Tester l&apos;IA en direct</p>
              <p className="text-[12px] text-gray-500 mb-3">Appelez pour parler avec l&apos;assistant, sans engagement.</p>
              <a href="tel:+33974995631"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white text-[13px] font-medium hover:shadow-lg hover:shadow-violet-200/40 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +33 9 74 99 56 31
              </a>
            </div>

            <a href="mailto:contact@nexus-ai-saas.com" className="block glass-strong rounded-2xl p-5 hover:shadow-md transition-all group">
              <p className="text-[13px] font-medium text-gray-900 group-hover:text-violet-600 transition-colors">Email</p>
              <p className="text-[12px] text-gray-500 mt-0.5">contact@nexus-ai-saas.com</p>
            </a>

            <a href="https://www.malt.fr" target="_blank" rel="noopener noreferrer" className="block glass-strong rounded-2xl p-5 hover:shadow-md transition-all group">
              <p className="text-[13px] font-medium text-gray-900 group-hover:text-violet-600 transition-colors">Malt</p>
              <p className="text-[12px] text-gray-500 mt-0.5">Profil freelance</p>
            </a>

            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="block glass-strong rounded-2xl p-5 hover:shadow-md transition-all group">
              <p className="text-[13px] font-medium text-gray-900 group-hover:text-violet-600 transition-colors">LinkedIn</p>
              <p className="text-[12px] text-gray-500 mt-0.5">Issouf Toure</p>
            </a>

            <div className="pt-2">
              <p className="text-[11px] text-gray-400 uppercase tracking-[0.15em] mb-3">Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Next.js", "Node.js", "TypeScript", "Supabase", "Stripe", "Twilio", "OpenAI", "Claude", "Render"].map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full glass text-gray-500">{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
