/**
 * Routes Twilio — Issouf.ai
 * Webhooks pour les appels entrants + WebSocket Media Streams
 */

import { Router } from 'express';
import twilio from 'twilio';
import { validateTwilioSignature } from '../middleware/twilioValidation.js';

const router = Router();
const VoiceResponse = twilio.twiml.VoiceResponse;

const WEBHOOK_BASE_URL = process.env.WEBHOOK_BASE_URL || '';

/**
 * POST /api/twilio/voice — Appel entrant
 * Repond avec TwiML qui ouvre un Media Stream WebSocket
 */
router.post('/voice', validateTwilioSignature, (req, res) => {
  const { From, To, CallSid } = req.body;
  console.log(`[TWILIO] Incoming call: from=${From} to=${To} sid=${CallSid}`);

  const twiml = new VoiceResponse();

  // Ouvrir un Media Stream WebSocket vers notre serveur
  const connect = twiml.connect();
  const stream = connect.stream({
    url: `${WEBHOOK_BASE_URL.replace('https://', 'wss://').replace('http://', 'ws://')}/media-stream`,
  });

  // Passer les metadata dans les parametres custom
  stream.parameter({ name: 'from', value: From || '' });
  stream.parameter({ name: 'to', value: To || '' });
  stream.parameter({ name: 'callSid', value: CallSid || '' });

  res.type('text/xml');
  res.send(twiml.toString());
});

/**
 * POST /api/twilio/voice/status — Callback statut d'appel
 */
router.post('/voice/status', (req, res) => {
  const { CallSid, CallStatus, CallDuration } = req.body;
  console.log(`[TWILIO] Call status: sid=${CallSid} status=${CallStatus} duration=${CallDuration}s`);
  res.sendStatus(200);
});

/**
 * POST /api/twilio/voice/transfer-result — Resultat du transfert (Dial action)
 */
router.post('/voice/transfer-result', (req, res) => {
  const { DialCallStatus, CallSid } = req.body;
  console.log(`[TWILIO] Transfer result: sid=${CallSid} status=${DialCallStatus}`);

  const twiml = new VoiceResponse();

  if (DialCallStatus !== 'completed') {
    // Issouf n'a pas decroche — message vocal
    twiml.say({ language: 'fr-FR', voice: 'Google.fr-FR-Wavenet-A' },
      'Issouf n\'est pas disponible pour le moment. Vous pouvez le contacter par email a contact at issouf point A I. Merci et a bientot !');
  }

  twiml.hangup();
  res.type('text/xml');
  res.send(twiml.toString());
});

export default router;
