//import axios from 'axios'
module.exports = {
  head: {
    title: 'Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Nuxt.js.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  router: {
    //linkActiveClass: 'selected'
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '@/assets/css/loader.css',
    // SCSS file in the project
    //'@/assets/css/main.scss'
  ],
  generate: {
    /*
    routes: function () {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.data.map((post) => {
          return '/post/' + post.id
        })
      })
    }
    */
  }
}
