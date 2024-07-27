// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    modules: ["nuxt-class-inject"],
    classInject: {
        storageKey: "nuxt-class-inject",
        globalName: "__NUXT_CLASS_INJECT__",
        fallback: ["theme-light"],
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
