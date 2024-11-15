// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Enable TypeScript
    typescript: {
        strict: true,
        typeCheck: true
    },
    // Modules
    modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxt/image"],
    eslint: {
        config: {
            standalone: false // <--- Required for Antfu's ESLint config
        }
    },
    // Image module configuration
    image: {
        provider: "ipx",
        quality: 80,
        format: ["webp", "jpg", "png"]
    },
    compatibilityDate: "2024-04-03",
    // Development tools
    devtools: {enabled: true}
});
