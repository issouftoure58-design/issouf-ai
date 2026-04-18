/**
 * Issouf.ai — Backend voix
 * Serveur Express + WebSocket pour la demo IA telephone
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import twilioRoutes from './routes/twilio.js';
import { handleMediaStream, getRealtimeStats, closeAllSessions } from './services/realtimeVoiceHandler.js';

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/twilio', twilioRoutes);

// Root — info page
app.get('/', (req, res) => {
  res.json({
    service: 'Issouf.ai — Voice AI Backend',
    status: 'running',
    phone: '+33 9 39 24 56 51',
    site: 'https://issouf.ai',
    uptime: Math.round(process.uptime()),
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'issouf-ai-voice',
    uptime: Math.round(process.uptime()),
    activeSessions: getRealtimeStats().activeSessions,
  });
});

// Stats
app.get('/api/stats', (req, res) => {
  res.json(getRealtimeStats());
});

// HTTP server
const server = createServer(app);

// WebSocket server pour Twilio Media Streams
const wss = new WebSocketServer({ server, path: '/media-stream' });

wss.on('connection', (ws) => {
  console.log('[WS] New Twilio Media Stream connection');
  handleMediaStream(ws);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('[SERVER] SIGTERM received, closing...');
  closeAllSessions();
  server.close(() => process.exit(0));
});

process.on('SIGINT', () => {
  console.log('[SERVER] SIGINT received, closing...');
  closeAllSessions();
  server.close(() => process.exit(0));
});

// Start
server.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════╗
║  Issouf.ai Voice Backend                 ║
║  Port: ${PORT}                              ║
║  WebSocket: /media-stream                 ║
║  Health: /health                          ║
╚═══════════════════════════════════════════╝
  `);

  if (!process.env.OPENAI_API_KEY) {
    console.warn('[WARN] OPENAI_API_KEY not set — voice calls will fail');
  }
  if (!process.env.TWILIO_AUTH_TOKEN) {
    console.warn('[WARN] TWILIO_AUTH_TOKEN not set — webhook validation disabled');
  }
});
