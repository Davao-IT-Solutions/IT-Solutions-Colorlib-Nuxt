<template>
  <div class="hero-wrap js-fullheight" :style="'background-image: url(' + bgImg +');'" data-stellar-background-ratio="0.5">
    <div class="overlay" />
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
        <div class="col-md-8 mt-5 pt-md-5" data-scrollax=" properties: { translateY: '70%' }">
          <div class="row">
            <div class="col-md-7">
              <p class="mb-4 pl-md-5 line" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                A small river named Duden flows by their place and supplies
              </p>
            </div>
          </div>
          <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
            Experienced for <br>Every Kinds of ITSolution
          </h1>
          <p><a href="#" class="btn btn-primary px-4 py-3">Read more</a></p>
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
.hero-wrap .overlay {
  height: 800px;
  display: block;
}
</style>
