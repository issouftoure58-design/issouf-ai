/**
 * Configuration OpenAI Realtime API pour Issouf.ai
 *
 * OPTIMISATIONS COUTS :
 * - gpt-4o-mini-realtime : ~60% moins cher que gpt-4o-realtime
 *   (input: $0.60/min audio vs $0.06/1M text, output: $2.40/min vs $0.24/1M)
 * - max_response_output_tokens: 150 (2 phrases max = ~50-80 tokens)
 * - silence_duration_ms: 1000 (evite faux declenchements = moins de reponses inutiles)
 * - Pas de transcription Whisper (economise ~$0.006/min)
 * - Silence hangup: 20s (raccroche plus vite)
 */

export const REALTIME_CONFIG = {
  model: 'gpt-4o-mini-realtime-preview',  // 60% moins cher
  voice: 'shimmer',  // Plus naturelle et chaleureuse que coral
  input_audio_format: 'g711_ulaw',
  output_audio_format: 'g711_ulaw',
  input_audio_transcription: null,  // Desactive Whisper — economie ~$0.006/min
  turn_detection: {
    type: 'server_vad',
    threshold: 0.75,            // Plus strict — moins de faux positifs (bruit)
    prefix_padding_ms: 300,
    silence_duration_ms: 1000,  // 1s de silence avant reponse (evite interruptions)
  },
  temperature: 0.6,
  max_response_output_tokens: 4096,  // Audio = ~50 tokens/sec, 2 phrases ~10s = ~500 tokens
};

// Timeouts silence (utilises par realtimeVoiceHandler)
export const SILENCE_RELANCE_MS = 18000;   // 18s -> relance (laisse le temps de reflechir)
export const SILENCE_HANGUP_MS = 35000;    // 35s -> au revoir
