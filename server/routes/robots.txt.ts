export default defineEventHandler((event) => {
  const base = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  // Mesin pencari & crawler AI (ChatGPT, Claude, Perplexity, Gemini) diizinkan supaya Sikojo bisa direkomendasikan.
  return [
    'User-agent: *',
    'Allow: /',
    '',
    ...['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended'].flatMap((bot) => [
      `User-agent: ${bot}`,
      'Allow: /',
      '',
    ]),
    `Sitemap: ${base}/sitemap.xml`,
    '',
  ].join('\n')
})
