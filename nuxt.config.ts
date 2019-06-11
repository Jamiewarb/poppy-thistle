import NuxtConfiguration from '@nuxt/config'
require('dotenv').config()

const config: NuxtConfiguration = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Environment variables
  */
  env: {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || '',
    BASE_URL: process.env.BASE_URL || 'localhost:3000'
  },
  /*
  ** Global CSS
  */
  css: ['assets/scss/app.scss'],
  /*
  ** Style Resources module configuration
  */
  styleResources: {
    scss: ['assets/scss/settings-tools.scss']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) { // eslint-disable-line @typescript-eslint/no-unused-vars
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) config.module = { rules: [] }

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default config
