
const URL = process.env.NODE_ENV === 'production' ? 'https://chrishah.github.io/monogeniac' : 'http://localhost:3000/monogeniac';

export default {
  target: 'static',
  router: {
    base: '/monogeniac/'
  },
  build: {
  },
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
  css: [
    '@/assets/css/content.css',
    '@/assets/css/custom.scss'
  ],
  loading: { color: '#48bb78' },
  plugins: [
    '@/plugins/markdown',
    '@/plugins/init',
    '@/plugins/i18n.client',
    '@/plugins/vue-scrollactive',
    '@/plugins/menu.client',
    {src: '~/plugins/vue-leaflet', ssr: false },
  ],
  components: true,
  generate: {
    fallback: true,
    routes: ['/'] // give the first url to start crawling
  },
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
  ],
  modules: [
    'nuxt-i18n',
    '@nuxt/content',
    //'nuxt-leaflet'
  ],
  colorMode: {
    preference: 'system'
  },
  content: {
    liveEdit: false,
    markdown: {
    remarkPlugins: [
      'remark-emoji', 
    ],
      prism: {
        theme: 'prism-themes/themes/prism-cb.css'
      }
    }
  },
  i18n: {
    locales: [
    /*{
      code: 'de',
      iso: 'de-DE',
      file: 'de-DE.js',
      name: 'Deutsch'
    },*/
    {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en',
    parsePages: true,
    lazy: true,
    seo: true,
    baseUrl: URL,
    langDir: 'i18n/'
  },
  hooks: {
    "vue-renderer:ssr:templateParams": function (params) {
      params.HEAD = params.HEAD.replace('<base href="/monogeniac/">', "");
    }
  }
}
