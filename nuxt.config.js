
import blogs from './content/blogs.json'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Davao IT Solutions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Davao IT Solutions' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800&display=swap' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@4.1.0/animate.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/assets/owl.carousel.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/assets/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/magnific-popup@1.1.0/dist/magnific-popup.css' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/jquery-migrate@3.3.1/dist/jquery-migrate.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/owl.carousel.min.js' },
      { src: '@/assets/js/main.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},

  /**
   * Generate config
   */
  generate: {
    routes: [].concat(blogs.map(blog => `/blog/${blog.slug}`))
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      // Add this to your build config
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      })
    }
  }

}
