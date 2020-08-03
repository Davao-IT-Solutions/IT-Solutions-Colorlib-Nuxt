<template>
  <footer class="ftco-footer ftco-footer-2 ftco-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <p>
              <img :src="logoH" style="width:100%">
            </p>
            <p>We are team of talented designers making websites with Bootstrap, VueJs, NuxtJs, Laravel and CodeIgniter.</p>
            <ul class="ftco-footer-social list-unstyled mt-2">
              <li>
                <a target="_blank" :href="facebook_url"><span class="fa fa-facebook" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4 ml-md-5">
            <h2 class="ftco-heading-2">
              Explore
            </h2>
            <ul class="list-unstyled">
              <li>
                <nuxt-link to="/about" class="py-2 d-block">
                  About Us
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/what-we-do" class="py-2 d-block">
                  What We Do
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact" class="py-2 d-block">
                  Contact Us
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">
              More
            </h2>
            <ul class="list-unstyled">
              <li>
                <nuxt-link to="/join-us" class="py-2 d-block">
                  Free Web Templates
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blog" class="py-2 d-block">
                  Blog
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/privacy-policy" class="py-2 d-block">
                  Privacy &amp; Policy
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/terms-and-conditions" class="py-2 d-block">
                  Terms &amp; Conditions
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">
              Have a Questions?
            </h2>
            <div class="block-23 mb-3">
              <ul>
                <li><span class="icon fa fa-map marker" /><span class="text">{{ address }}</span></li>
                <li><a :href="`tel://${phone_number}`"><span class="icon fa fa-phone" /><span class="text">{{ phone_number }}</span></a></li>
                <li><a :href="`mailto:${email}`"><span class="icon fa fa-paper-plane pr-4" /><span class="text">{{ email }}</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; {{ current_year }} All rights reserved &middot; This template is made with <i class="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </p>
          <p>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
              <img class="mr-5" :src="require(`~/assets/images/netlify-logo-dark.png`)" width="100px">
            </a>
            <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
              <img class="mr-5" :src="require(`~/assets/images/nuxtjs-typo-white.svg`)" width="100px">
            </a>
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
              <img class="mr-5" :src="require(`~/assets/images/vuejs.png`)" width="100px">
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img :src="require(`~/assets/images/github_logo.png`)" width="100px">
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import contacts from '../content/contacts.json'
export default {
  data () {
    return {
      logoH: require('~/assets/images/logo_h.png'),
      email: contacts.email,
      phone_number: contacts.phone,
      address: contacts.address,
      map_url: contacts.map_url,
      facebook_url: contacts.facebook_url,
      current_year: new Date().getFullYear()
    }
  }
}
</script>
<style>

</style>
