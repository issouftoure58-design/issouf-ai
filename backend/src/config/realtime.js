/**
 * Configuration OpenAI Realtime API pour Issouf.ai
 * Simplifie — pas de multi-tenant, config unique
 */

export const REALTIME_CONFIG = {
  model: 'gpt-4o-realtime-preview',
  voice: 'coral',
  input_audio_format: 'g711_ulaw',
  output_audio_format: 'g711_ulaw',
  input_audio_transcription: {
    model: 'whisper-1',
  },
  turn_detection: {
    type: 'server_vad',
    threshold: 0.7,
    prefix_padding_ms: 350,
    silence_duration_ms: 800,
  },
  temperature: 0.6,
  max_response_output_tokens: 500,
};
