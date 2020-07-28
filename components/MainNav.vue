<template>
  <nav
    id="ftco-navbar"
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
  >
    <div class="container">
      <a class="navbar-brand" href="/">
        DAVAO
        <span>IT</span>
        Solutions
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
            <router-link to="/case-study" class="nav-link">
              Case Study
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blogs" class="nav-link">
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
      bgImg: require('~/assets/images/bg_1.jpg')
    }
  }
}
</script>
<style>
.ftco-navbar-light .navbar-nav > .nav-item > .nav-link.nuxt-link-exact-active {
    color: blue;
}
</style>
