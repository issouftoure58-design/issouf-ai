/**
 * Issouf.ai — Backend voix + Landing statique
 * Serveur Express : fichiers statiques (Next.js export) + API + WebSocket
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import twilioRoutes from './routes/twilio.js';
import contactRoute from './routes/contact.js';
import { handleMediaStream, getRealtimeStats, closeAllSessions } from './services/realtimeVoiceHandler.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes (AVANT les fichiers statiques)
app.use('/api/twilio', twilioRoutes);
app.use('/api', contactRoute);

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'issouf-ai',
    uptime: Math.round(process.uptime()),
    activeSessions: getRealtimeStats().activeSessions,
  });
});

// Stats
app.get('/api/stats', (req, res) => {
  res.json(getRealtimeStats());
});

// Fichiers statiques Next.js (out/)
const staticDir = path.resolve(__dirname, '../../out');
app.use(express.static(staticDir));

// SPA fallback — renvoie index.html pour toutes les routes non-API
app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
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
║  Issouf.ai                               ║
║  Port: ${PORT}                              ║
║  Landing: static (out/)                   ║
║  API: /api/*                              ║
║  WebSocket: /media-stream                 ║
╚═══════════════════════════════════════════╝
  `);

  if (!process.env.OPENAI_API_KEY) {
    console.warn('[WARN] OPENAI_API_KEY not set — voice calls will fail');
  }
  if (!process.env.TWILIO_AUTH_TOKEN) {
    console.warn('[WARN] TWILIO_AUTH_TOKEN not set — webhook validation disabled');
  }
});
