export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'okr-website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/v-calendar.js', ssr: false },
    { src: '~/plugins/vue-tailwind.client.js'},
    { src: '~/plugins/vue-sweetalert2.js'},
    { src: "@/services/get-access-token", mode: "client" },
    { src: '~/plugins/axios'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Montserrat: '200..800'
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    'vue-sweetalert2/nuxt'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/admin/login', method: 'post', propertyName: 'data.token' },
          logout: { url: '/api/auth/admin/logout', method: 'get' },
          user: { url: '/api/user', method: 'get', propertyName: 'data' }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/admin'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://192.168.18.50:8000',
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
          name: 'admin',
          path: '/',
          component: resolve(__dirname, 'pages/admin/index.vue'),
        });
    },
    // middleware: ['auth'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
