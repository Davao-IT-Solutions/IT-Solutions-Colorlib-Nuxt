<template>
  <nav
    id="ftco-navbar"
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    :class="{ 'scrolled awake' : awake }"
  >
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">
        <img id="nav-logo-dark" :src="logoH2" class="d-xl-block d-lg-block d-md-none d-xs-none">
        <img id="nav-logo-light" :src="logoH1" class="d-xl-none d-lg-none d-md-block d-xs-block">
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="oi oi-menu" /> Menu
      </button>

      <div id="ftco-nav" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link">
              About
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/services" class="nav-link">
              Services
            </nuxt-link>
          </li>
          <!--
          <li class="nav-item">
            <nuxt-link to="/products" class="nav-link">
              Products
            </nuxt-link>
          </li>
          -->
          <li class="nav-item">
            <a href="https://blog.davao.me/" target="_blank" class="nav-link">
              Blog
            </a>
          </li>
          <li class="nav-item">
            <nuxt-link to="/contact" class="nav-link">
              Contact us
            </nuxt-link>
          </li>
          <!--
          <li class="nav-item cta">
            <nuxt-link to="/free-consultation" class="nav-link">
              Free Consultation
            </nuxt-link>
          </li>
          -->
        </ul>
      </div>
    </div>
  </nav>
  <!-- END nav -->
</template>

<script>
export default {
  data () {
    return {
      awake: false,
      bgImg: require('~/assets/images/bg_1.jpg'),
      logoH1: require('~/assets/images/logo_h.png'),
      logoH2: require('~/assets/images/logo_h2.png')
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      const top = window.pageYOffset || document.documentElement.scrollTop
      if (top > 160) {
        this.awake = true
      }
      if (top < 80) {
        this.awake = false
      }
    }
  }
}
</script>
<style>
.ftco-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
    color: blue;
}
.ftco-navbar-light .navbar-nav > .nav-item.cta > .nav-link:hover {
    color: yellow;
}
.ftco-navbar-light .navbar-nav > .nav-item > .nav-link.nuxt-link-exact-active {
    color: blue;
}
.ftco-navbar-light .navbar-nav > .nav-item.cta > .nav-link.nuxt-link-exact-active {
    color: yellow;
}
.navbar-brand {
  width: 250px;
}
nav.navbar {
  min-height: 75px;
}
#nav-logo-dark {
  width: 100%;
}
#nav-logo-light {
  width: 100%;
}
@media (max-width: 989px) {
  .ftco-navbar-light .navbar-nav > .nav-item > .nav-link.nuxt-link-exact-active {
    color: yellow;
  }
}
@media (max-width: 425px) {
  #nav-logo-dark {
    display:none;
  }
  #nav-logo-light {
    display:block;
  }
  .ftco-navbar-light.scrolled.awake #nav-logo-light {
    display:none;
  }
  .ftco-navbar-light.scrolled.awake #nav-logo-dark {
    display:block;
    margin-left: 1rem;
  }
}
@media (max-width: 320px) {
  .navbar-brand {
    width: 200px;
  }
}
</style>
