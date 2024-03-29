// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', 'nuxt3-leaflet'],
  build: {
    transpile: ['gsap'],
  },
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})


