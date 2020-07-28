<template>
  <nav
    id="ftco-navbar"
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
  >
    <div class="container">
      <a class="navbar-brand" href="/">
        <img :src="logoH2" style="width:100%" class="d-xl-block d-lg-block d-md-none d-xs-none">
        <img :src="logoH1" style="width:100%" class="d-xl-none d-lg-none d-md-block d-xs-block">
      </a>
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
            <router-link to="/" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">
              Services
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">
              Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link">
              Blog
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              Contact us
            </router-link>
          </li>
          <li class="nav-item cta">
            <router-link to="/free-consultation" class="nav-link">
              Free Consultation
            </router-link>
          </li>
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
      bgImg: require('~/assets/images/bg_1.jpg'),
      logoH1: require('~/assets/images/logo_h.png'),
      logoH2: require('~/assets/images/logo_h2.png')
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
@media (max-width: 989px) {
  .ftco-navbar-light .navbar-nav > .nav-item > .nav-link.nuxt-link-exact-active {
    color: yellow;
  }
}
</style>
