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
                <a target="_blank" href="https://www.facebook.com/DavaoInformationTechnologySolutions/"><span class="fa fa-facebook" /></a>
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
                <router-link to="/about" class="py-2 d-block">
                  About
                </router-link>
              </li>
              <li>
                <router-link to="/contact" class="py-2 d-block">
                  Contact
                </router-link>
              </li>
              <li>
                <router-link to="/about" class="py-2 d-block">
                  What We Do
                </router-link>
              </li>
              <li>
                <router-link to="/contact" class="py-2 d-block">
                  Contact Us
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">
              Legal
            </h2>
            <ul class="list-unstyled">
              <li>
                <router-link to="/about" class="py-2 d-block">
                  Join Us
                </router-link>
              </li>
              <li>
                <router-link to="/blog" class="py-2 d-block">
                  Blog
                </router-link>
              </li>
              <li>
                <router-link to="/privacy-policy" class="py-2 d-block">
                  Privacy &amp; Policy
                </router-link>
              </li>
              <li>
                <router-link to="/terms-and-conditions" class="py-2 d-block">
                  Terms &amp; Conditions
                </router-link>
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
                <li><span class="icon fa fa-map marker" /><span class="text">Brgy. Sto. Nino, Davao City, Philippines, 8000</span></li>
                <li><a href="#"><span class="icon fa fa-phone" /><span class="text">+63 946 255-9955</span></a></li>
                <li><a href="#"><span class="icon fa fa-paper-plane pr-4" /><span class="text">info@davao.me</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; 2020 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      logoH: require('~/assets/images/logo_h.png')
    }
  }
}
</script>
<style>

</style>
