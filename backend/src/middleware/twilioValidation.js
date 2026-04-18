/**
 * Middleware de validation des webhooks Twilio
 * Valide la signature X-Twilio-Signature pour prevenir le spoofing
 */

import twilio from 'twilio';

const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const WEBHOOK_BASE_URL = process.env.WEBHOOK_BASE_URL;

export function validateTwilioSignature(req, res, next) {
  if (process.env.NODE_ENV === 'development' && process.env.SKIP_TWILIO_VALIDATION === 'true') {
    return next();
  }

  if (!TWILIO_AUTH_TOKEN) {
    if (process.env.NODE_ENV === 'production') {
      return res.status(500).send('Server configuration error');
    }
    return next();
  }

  const twilioSignature = req.headers['x-twilio-signature'];
  if (!twilioSignature) {
    return res.status(403).send('Forbidden: Missing signature');
  }

  let url;
  if (WEBHOOK_BASE_URL) {
    url = `${WEBHOOK_BASE_URL}${req.originalUrl}`;
  } else {
    const protocol = req.headers['x-forwarded-proto'] || req.protocol;
    const host = req.headers['host'];
    url = `${protocol}://${host}${req.originalUrl}`;
  }

  const isValid = twilio.validateRequest(
    TWILIO_AUTH_TOKEN,
    twilioSignature,
    url,
    req.body || {}
  );

  if (!isValid) {
    console.error('[TWILIO] Invalid signature');
    return res.status(403).send('Forbidden: Invalid signature');
  }

  next();
}
