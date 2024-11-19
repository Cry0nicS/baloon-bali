// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    colorMode: {
        classSuffix: "",
        fallback: "dark",
        preference: "system"
    },
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
    // i18n module configuration
    i18n: {
        locales: ["id", "en"],
        defaultLocale: "en",
        vueI18n: "./i18n.config.ts",
        detectBrowserLanguage: false,
        // Disable custom route with page components.
        customRoutes: "config",
        pages: {}
    },
    // Image module configuration
    image: {
        format: ["webp"],
        provider: "ipx",
        quality: 80
    },
    // Modules
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/eslint",
        "@nuxt/image",
        "@nuxtjs/i18n",
        "@nuxt/icon",
        "@nuxtjs/color-mode",
        "shadcn-nuxt"
    ],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./app/components/ui"
    },
    typescript: {
        strict: true,
        typeCheck: true
    }
});
