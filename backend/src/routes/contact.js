/**
 * Route Contact — Issouf.ai
 * Formulaire de contact (envoi email via Resend)
 */

import { Router } from 'express';
import { Resend } from 'resend';

const router = Router();

const projectLabels = {
  receptionniste: 'Agent Receptionniste (tel/WA/chat)',
  email: 'Agent Email (tri/reponses/relances)',
  commercial: 'Agent Commercial (qualification/nurturing)',
  multi: 'Multi-agents',
  optim: 'Optimisation couts IA',
  autre: 'Autre',
};

router.post('/contact', async (req, res) => {
  try {
    const { name, email, project, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const projectLabel = projectLabels[project] || project || 'Non precise';

    // Email pour Issouf
    await resend.emails.send({
      from: 'Issouf.ai <noreply@nexus-ai-saas.com>',
      to: 'contact@nexus-ai-saas.com',
      replyTo: email,
      subject: `[issouf.ai] Nouvelle demande de ${name}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Type de projet :</strong> ${projectLabel}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Email de confirmation pour le prospect
    await resend.emails.send({
      from: 'Issouf Toure <noreply@nexus-ai-saas.com>',
      to: email,
      replyTo: 'contact@nexus-ai-saas.com',
      subject: 'Bien recu ! Je reviens vers vous sous 24h',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <p>Bonjour ${name},</p>
          <p>Merci pour votre message. J'ai bien recu votre demande concernant : <strong>${projectLabel}</strong>.</p>
          <p>Je reviens vers vous sous <strong>24 heures</strong> avec un premier retour et, si pertinent, une proposition adaptee a votre besoin.</p>
          <p>En attendant, vous pouvez tester mon IA en direct en appelant le <a href="tel:+33939245651" style="color: #2563eb; text-decoration: none; font-weight: 600;">+33 9 39 24 56 51</a> — l'assistant repond 24/7.</p>
          <br />
          <p>A tres vite,</p>
          <p><strong>Issouf Toure</strong><br/>
          Expert IA Conversationnelle<br/>
          <a href="mailto:contact@nexus-ai-saas.com" style="color: #2563eb; text-decoration: none;">contact@nexus-ai-saas.com</a></p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('[CONTACT] Error:', err.message);
    res.status(500).json({ error: "Erreur d'envoi" });
  }
});

export default router;
