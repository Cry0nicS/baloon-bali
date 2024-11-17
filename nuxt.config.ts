// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-17",
    // Development tools
    devtools: {enabled: true},
    // Enable TypeScript
    eslint: {
        config: {
            standalone: false // <--- Required for Antfu ESLint config
        }
    },
    future: {
        compatibilityVersion: 4
    },
    // Image module configuration
    image: {
        format: ["webp", "jpg", "png"],
        provider: "ipx",
        quality: 80
    },
    // Modules
    modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxt/image"],
    typescript: {
        strict: true,
        typeCheck: true
    }
});
