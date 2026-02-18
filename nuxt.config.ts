// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],

  i18n: {
    defaultLocale: 'ro',
    locales: [
      {
        code: 'ro',
        name: 'Română',
        language: 'ro-RO',
      },
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
    ],
  },

  ssr: true,

  routeRules: {
    // Pre-render public guide pages
    '/guide/**': { prerender: true },
    '/en/guide/**': { prerender: true },
    // SSR for protected sections (middleware needs to run server-side)
    '/api/**': { ssr: true },
    '/en/api/**': { ssr: true },
    '/architecture/**': { ssr: true },
    '/en/architecture/**': { ssr: true },
  },

  compatibilityDate: '2024-07-06',
});
