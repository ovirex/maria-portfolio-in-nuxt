import webpack from 'webpack'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/',
  },

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('/projects', { deep: true }).fetch()

      const options = await $content('menu_options', { deep: true }).fetch()

      const routes = files.map((file) =>
        file.path === '/index' ? '/' : `/works/${file.id}`
      )

      /**
       * Add the Strings stored in the menu_options_list
       * as routes.
       */
      routes.push(
        options[0].menu_options_list.map((option) => {
          return option.title.toLowerCase().split(' ').join('-')
        })
      )

      return routes
    },
    exclude: ['/web-design', '/social-media-design', '/art-direction'],
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mariaescribe | Portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I want to help you reach your goals through fresh, expressive and creative visuals for your online and offline platforms.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:image',
        content: 'https://ovirex.github.io/maria-portfolio/img/LOGO.png',
      },
      {
        property: 'og:image:width',
        content: '400',
      },
      {
        property: 'og:image:height',
        content: '400',
      },
      {
        name: 'robots',
        content: 'all,follow',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css',
      },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/c9471bb15b.js',
        defer: true,
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.css',
    '~/assets/css/style.default.css',
    '~/assets/css/custom.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap.js' },
    { src: '~/plugins/masonry-layout.js', mode: 'client' },
    { src: '~/plugins/images-loaded.js', mode: 'client' },
    { src: '~/plugins/inject-svg-sprite.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /**
     * add external plugins
     */

    vendor: ['jquery', 'bootstrap', 'masonry-layout', 'images-loaded'],
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
  },
}
