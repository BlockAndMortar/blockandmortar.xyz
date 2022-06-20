import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  content: {},
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/dayjs',
  ],
  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    defaultTimeZone: 'America/Chicago',
    plugins: [
      'utc',
      'timezone',
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
  },
})
