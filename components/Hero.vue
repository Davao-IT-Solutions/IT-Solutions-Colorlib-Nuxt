<template>
  <div id="hero1" class="hero-wrap js-fullheight" :style="'background-image: url(' + bgImg +');'">
    <div class="overlay" />
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-center">
        <div class="col-md-8 mt-5 pt-md-5">
          <div class="row">
            <div class="col-md-7">
              <p class="mb-4 pl-md-5 line">
                We are team of talented designers making websites with Bootstrap, VueJs, NuxtJs, Laravel and CodeIgniter.
              </p>
            </div>
          </div>
          <h1 class="mb-4">
            Better <span class="website">WEBSITE</span> <br>For Your Business
          </h1>
        </div>
      </div>
    </div>
  </div>
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
#hero1 {
  height: 100vh;
  display: block;
}
#hero1 .overlay {
  height: 100vh;
  display: block;
}
#hero1 .website {
  color: #f39f23;
  text-shadow: 2px 2px 2px #000;
}
#hero1 .slider-text .line {
  margin-top: 110px;
}
@media (max-width: 989px) {
  #hero1 .slider-text .line {
    margin-top: 0px;
  }
}
</style>
