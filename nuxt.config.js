import getRoutes from "./utils/getRoutes";

const URL = process.env.NODE_ENV === 'production' ? 'https://chrishah.github.io/monogeniac' : 'http://localhost:3000/monogeniac';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  router: {
    base: '/monogeniac'
  },
  // https://github.com/nuxt/content/issues/376
  hooks: {
    "vue-renderer:spa:templateParams": function(params) {
      params.HEAD = params.HEAD.replace('<base href="/monogeniac/">', '');
    },    
    build: {
      done(builder) {
      }
    },
  },

  generate: {
    fallback: true,
    routes: ["/"], // give the first url to start crawling
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (chunk) => {
      if (chunk) {
        return `${chunk} - Monogeniac`
      }
      return 'Monogeniac'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Monogeniac' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@monogeniac' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Monogeniac' },
      //{ hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'b.tree Beekeeping' }
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: `/favicon.ico` }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/content.css", "@/assets/css/custom.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/markdown',
    '@/plugins/init',
    '@/plugins/i18n.client',
    '@/plugins/vue-scrollactive',
    '@/plugins/menu.client',
    {src: '~/plugins/vue-leaflet', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // Doc: https://github.com/nuxt-community/color-mode-module
    "@nuxtjs/color-mode",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // https://i18n.nuxtjs.org/
    "nuxt-i18n",
    // https://http.nuxtjs.org/
    "@nuxt/http",
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap'
  ],

  // https://i18n.nuxtjs.org/
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
    defaultLocale: "en",
    parsePages: true,
    lazy: true,
    seo: true,
    langDir: "i18n/",
    baseUrl: URL,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
    markdown: {
      remarkPlugins: ["remark-emoji"],
      prism: {
        theme: 'prism-themes/themes/prism-cb.css'
      }
    },
  },

  // Doc: https://github.com/nuxt-community/color-mode-module
  colorMode: {
    preference: "system",
  },

  sitemap: {
    hostname: URL,
    path: 'sitemap.xml',
    routes() {
      return getRoutes();
    },
    i18n: true,
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true
  },

};
