/**
 * @type {import("@cspell/cspell-types").FileSettings}
 */
const config = {
    version: "0.2",
    files: ["**/*.{html,js,json,jsx,md,scss,ts,tsx,vue}", "/.*.{ts,tsx,js,jsx,vue}"],
    ignorePaths: [
        "package-lock.json.delete",
        "app/components/ui/**",
        "assets/",
        "nuxt.config.ts",
        "package.json",
        "public/**",
        "tailwind.config.ts"
    ],
    language: "en,id",
    import: ["@cspell/dict-id-id/cspell-ext.json"],
    cache: {
        useCache: true,
        cacheLocation: "node_modules/.cache/cspell"
    },
    dictionaries: [
        "custom",
        "fonts",
        "html",
        "lorem-ipsum",
        "node",
        "software-terms",
        "typescript"
    ],
    dictionaryDefinitions: [
        {
            name: "custom",
            path: "custom.dic",
            addWords: true
        }
    ],
    languageSettings: [
        {
            languageId: "typescript,javascript,vue",
            locale: "*",
            ignoreRegExpList: ["/import .*/"]
        }
    ]
};

export default config;
