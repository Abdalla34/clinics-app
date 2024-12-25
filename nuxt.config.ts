export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/style.css"],
  modules: ["@vee-validate/nuxt"],
});
