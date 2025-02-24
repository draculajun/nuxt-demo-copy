// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: 'apiSecret',
        // Keys within public are also exposed client-side
        public: {
            baseURL: process.env.NUXT_DIGITALMALL_API,
        }
    },

    // 引入全局样式
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "~/assets/css/base.scss" as *;`
                }
            }
        },
    },

    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],

})
