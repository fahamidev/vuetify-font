import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s - rnad_panel',
        title: 'rnad_panel',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            // { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@latest/dist/font-face.css'}
        ],
    },

    loading: '~/components/LoadingBar.vue',
    loadingIndicator: {
        name: 'three-bounce',
        color: '#3B8070',
        background: 'white',
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['vazir-font/dist/font-face.css'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: [
        {
            path: '~/components/',
            ignore: ['**/home/*.js'],
        },
        {
            path: '~/components/home',
            prefix: 'home',
            extensions: ['vue', 'ts'],
            pattern: `**/*.{vue,ts}`,
        },
    ],

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        // https://composition-api.nuxtjs.org/
        '@nuxtjs/composition-api',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        // https://i18n.nuxtjs.org/
        'nuxt-i18n',
    ],

    // nuxt-i18n module configuration https://i18n.nuxtjs.org/options-reference
    i18n: {
        locales: [
            { name: 'Farsi', code: 'fa', iso: 'fa-FA', file: 'fa.ts' },
            {
                name: 'English',
                code: 'en',
                iso: 'en-US',
                file: 'en.ts',
            },
        ],
        strategy: 'prefix_and_default',
        langDir: 'locales/',
        defaultLocale: 'fa',
        baseUrl: '/',
        lazy: true,
        vueI18n: {
            fallbackLocale: 'fa',
        },
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        retry: { retries: 2 },
    },
    /* proxy: {
        '/api/v1/': 'http://panel.zoodpazfood.com',
    }, */

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        optionsPath: './vuetify.options.ts',
        treeShake: true,
        defaultAssets: false,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    // Router custom configurations
    router: {
        extendRoutes(routes: any, resolve: any) {
            routes.push(
                {
                    name: 'index',
                    path: '/',
                    component: resolve(__dirname, 'components/home/index.vue'),
                },
                {
                    name: 'inspire',
                    path: '/inspire',
                    component: resolve(__dirname, 'components/inspire.vue'),
                }
            )
        },
    },
}

export default config
