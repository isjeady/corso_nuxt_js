
const env = require('dotenv').config();
const axios = require('axios');

export default {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css'
  ],
  transition : {
    name: 'fade',
    mode: 'out-in'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/components.js'
  ],
  generate : {
    routes : function(){
      return axios.get('https://nuxt-isjeady-corso.firebaseio.com/posts.json').then(res => {
        const routes = [];
        for(const key in res.data){
          routes.push({
            route: '/posts/' + key,
            payload : {postData : res.data[key]}
          })
        }
        return routes;
      })
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios'
  ],
  router : {
    middleware : 'firstMiddleware'
  },
  /*
  ** Build configuration
   apiKey : "AIzaSyAgmBSrwmq4xj9VI64VkTF-z9EUaYPxRRY",
    firebaseUrlAuth : "https://identitytoolkit.googleapis.com/v1"
  */
  env : env.parsed,
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

