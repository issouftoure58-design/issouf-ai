import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const projectLabels: Record<string, string> = {
  "ia-tel": "Assistant IA telephone",
  "ia-wa": "Chatbot WhatsApp",
  "ia-chat": "Chat IA web",
  "site-landing": "Landing page",
  "site-vitrine": "Site vitrine",
  "site-ecommerce": "E-commerce",
  "optim": "Optimisation couts IA",
  "autre": "Autre",
};

export async function POST(req: Request) {
  try {
    const { name, email, project, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const projectLabel = projectLabels[project] || project || "Non precise";

    // 1. Email pour Issouf (notification)
    await resend.emails.send({
      from: "Issouf.ai <noreply@nexus-ai-saas.com>",
      to: "contact@nexus-ai-saas.com",
      replyTo: email,
      subject: `[issouf.ai] Nouvelle demande de ${name}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Type de projet :</strong> ${projectLabel}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // 2. Email de confirmation pour le prospect
    await resend.emails.send({
      from: "Issouf Toure <noreply@nexus-ai-saas.com>",
      to: email,
      replyTo: "contact@nexus-ai-saas.com",
      subject: "Bien recu ! Je reviens vers vous sous 24h",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <p>Bonjour ${name},</p>
          <p>Merci pour votre message. J'ai bien recu votre demande concernant : <strong>${projectLabel}</strong>.</p>
          <p>Je reviens vers vous sous <strong>24 heures</strong> avec un premier retour et, si pertinent, une proposition adaptee a votre besoin.</p>
          <p>En attendant, vous pouvez tester mon IA en direct en appelant le <a href="tel:+33974995631" style="color: #2563eb; text-decoration: none; font-weight: 600;">+33 9 74 99 56 31</a> — l'assistant repond 24/7.</p>
          <br />
          <p>A tres vite,</p>
          <p><strong>Issouf Toure</strong><br/>
          Expert IA Conversationnelle<br/>
          <a href="mailto:contact@nexus-ai-saas.com" style="color: #2563eb; text-decoration: none;">contact@nexus-ai-saas.com</a></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
