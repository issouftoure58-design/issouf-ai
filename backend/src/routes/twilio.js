/**
 * Routes Twilio — Issouf.ai
 * Webhooks pour les appels entrants + WebSocket Media Streams + transfert whisper
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

  const connect = twiml.connect();
  const stream = connect.stream({
    url: `${WEBHOOK_BASE_URL.replace('https://', 'wss://').replace('http://', 'ws://')}/media-stream`,
  });

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
 * POST /api/twilio/voice/whisper — Whisper pour Issouf avant de connecter le prospect
 *
 * Quand Issouf decroche, il entend :
 * "Appel d'un prospect. Raison : [raison]. Appuyez 1 pour prendre l'appel."
 * S'il appuie 1 -> connecte au prospect
 * S'il ne fait rien -> timeout -> transfer-result avec no-answer
 */
router.post('/voice/whisper', (req, res) => {
  const raison = req.query.raison || 'non precisee';
  console.log(`[TWILIO] Whisper for Issouf: raison="${raison}"`);

  const twiml = new VoiceResponse();

  const gather = twiml.gather({
    numDigits: 1,
    timeout: 8,
    action: `${WEBHOOK_BASE_URL}/api/twilio/voice/whisper-result`,
    method: 'POST',
  });

  gather.say({ language: 'fr-FR', voice: 'Google.fr-FR-Wavenet-A' },
    `Appel d'un prospect sur issouf point A I. Raison : ${raison}. Appuyez 1 pour prendre l'appel.`
  );

  // Si pas de touche -> raccrocher (le prospect sera redirige vers transfer-result)
  twiml.say({ language: 'fr-FR', voice: 'Google.fr-FR-Wavenet-A' },
    'Pas de reponse, l\'appel va etre redirige.'
  );
  twiml.hangup();

  res.type('text/xml');
  res.send(twiml.toString());
});

/**
 * POST /api/twilio/voice/whisper-result — Resultat du whisper (Issouf a appuye une touche)
 */
router.post('/voice/whisper-result', (req, res) => {
  const { Digits } = req.body;
  console.log(`[TWILIO] Whisper result: digits=${Digits}`);

  const twiml = new VoiceResponse();

  if (Digits === '1') {
    // Issouf accepte — ne rien faire, le Dial connecte automatiquement
    // Un TwiML vide avec juste <Response/> suffit pour continuer le Dial
  } else {
    // Autre touche -> raccrocher ce leg (Issouf refuse)
    twiml.hangup();
  }

  res.type('text/xml');
  res.send(twiml.toString());
});

/**
 * POST /api/twilio/voice/transfer-result — Resultat du transfert (Dial action)
 * Appele quand le Dial se termine (Issouf a raccroche, ou n'a pas decroche)
 */
router.post('/voice/transfer-result', (req, res) => {
  const { DialCallStatus, CallSid } = req.body;
  console.log(`[TWILIO] Transfer result: sid=${CallSid} status=${DialCallStatus}`);

  const twiml = new VoiceResponse();

  if (DialCallStatus === 'completed') {
    // Appel termine normalement — Issouf et le prospect ont parle
    twiml.say({ language: 'fr-FR', voice: 'Google.fr-FR-Wavenet-A' },
      'Merci pour votre appel. A bientot !');
  } else {
    // Issouf n'a pas decroche ou a refuse
    twiml.say({ language: 'fr-FR', voice: 'Google.fr-FR-Wavenet-A' },
      'Issouf n\'est pas disponible pour le moment. Vous pouvez laisser un message apres le bip, ou le contacter par email a contact at issouf point A I.');
    twiml.record({
      maxLength: 120,
      playBeep: true,
      transcribe: true,
      transcribeCallback: `${WEBHOOK_BASE_URL}/api/twilio/voice/voicemail`,
      action: `${WEBHOOK_BASE_URL}/api/twilio/voice/voicemail-done`,
      method: 'POST',
    });
  }

  res.type('text/xml');
  res.send(twiml.toString());
});

/**
 * POST /api/twilio/voice/voicemail — Transcription du message vocal recue
 */
router.post('/voice/voicemail', (req, res) => {
  const { TranscriptionText, RecordingUrl, From } = req.body;
  console.log(`[TWILIO] Voicemail from ${From}: "${TranscriptionText}"`);
  console.log(`[TWILIO] Recording: ${RecordingUrl}`);
  // TODO: envoyer par email/SMS a Issouf
  res.sendStatus(200);
});

/**
 * POST /api/twilio/voice/voicemail-done — Fin de l'enregistrement vocal
 */
router.post('/voice/voicemail-done', (req, res) => {
  const twiml = new VoiceResponse();
  twiml.say({ language: 'fr-FR', voice: 'Google.fr-FR-Wavenet-A' },
    'Merci, votre message a bien ete enregistre. Issouf vous recontactera rapidement. A bientot !');
  twiml.hangup();
  res.type('text/xml');
  res.send(twiml.toString());
});

export default router;
