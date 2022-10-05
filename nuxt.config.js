console.log(process.env.COMPOSE_PROJECT_NAME)
console.log(`NODE_ENV=${process.env.NODE_ENV}`)
console.log(`SENTRY_ENVIRONMENT=${process.env.SENTRY_ENVIRONMENT}`)
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `nuxt-sentry-docker-sample ${process.env.NODE_ENV}`,
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
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sentry',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',

  },

  sentry: {
    // dsn: 'http://1b8d6995b0264d1ea83a526104869987@localhost:9000/2', // Enter your project's DSN here
    dsn: 'https://16c7f37458614b21b7eef6e74fe24324@o1330068.ingest.sentry.io/6592398',
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
      // environment: 'local'
    },
    serverConfig: {
      environment: 'local'
    }
    // tracing: {
    //   tracesSampleRate: 1.0,
    //   vueOptions: {
    //     tracing: true
    //   },
    //   browserOptions: {
    //     tracingOrigins: ['*']
    //   }
    // }
  },

  proxy: {
    // '/api/': {
    //   target: 'http://localhost:9000',
    //   // pathRewrite: {
    //   //   '^/api': '/'
    //   // }
    //   config: {
    //     tunnel: "/tunnel"
    //   }
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient }) {
      // クライアントのバンドルの webpack 設定のみを拡張する
      if (isClient) {
        config.devtool = 'source-map'
      }
      console.log(`[Build]NODE_ENV=${process.env.NODE_ENV}`)
    }
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org'
  },

  privateRuntimeConfig: {
    secretKey: process.env.SECRET_KEY || 'YYYYY'
  },

  env: {
    NODE_ENV: "local2",
  }
}
