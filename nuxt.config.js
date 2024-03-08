export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "okr-website",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/v-calendar.js", ssr: false },
    { src: "~/plugins/vue-tailwind.client.js" },
    { src: "~/plugins/vue-sweetalert2.js" },
    { src: "@/services/get-access-token", mode: "client" },
    { src: "~/plugins/axios.js"},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: true,
      Montserrat: "200..800",
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/tailwindcss",
    "vue-sweetalert2/nuxt",
  ],
  axios: {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    baseURL: process.env.HOST_API,
    progress: false,
    proxy: false,
  },
  proxy: {
    "/api/": process.env.HOST_API || "",
  },
  auth: {
    watchLoggedIn: true,
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/",
      home: "/admin",
    },
    localStorage: {
      prefix: "pw.",
    },
    token: {
      prefix: "_token.",
      global: true,
    },
    strategies: {
      localUser: {
        scheme: "local",
        token: {
          property: "data.token",
          global: true,
          type: "Bearer",
          maxAge: 172800,
        },
        user: {
          property: false,
          
        },
        endpoints: {
          login: {
            url: "/api/auth/admin/login",
            method: "post",
          },
          user: { url: "/api/user", method: "get" },
          logout: { url: "/api/auth/admin/logout", method: "get" },
        },
      },
    },
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "admin",
        path: "/",
        component: resolve(__dirname, "pages/admin/index.vue"),
      });
    },
    // middleware: ['auth'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
