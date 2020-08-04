<template>
  <section class="hero-wrap hero-wrap-2" :style="'background-image: url(' + bgImg +');'" data-stellar-background-ratio="0.5">
    <div class="overlay" />
    <div class="container">
      <div class="row no-gutters slider-text align-items-end justify-content-center">
        <div class="col-md-9 pb-5 text-center">
          <h1 class="mb-3 bread">
            {{ title }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'About Us'
    },
    background: {
      type: String,
      default: 'bg_3.jpg'
    }
  },
  data () {
    return {
      bgImg: require(`~/assets/images/${this.background}`)
    }
  }
}
</script>
<style>
.hero-wrap.hero-wrap-2 {
    height: 400px;
    background-size: cover;
    background-position-y: center;
    position: relative;
}
.hero-wrap.hero-wrap-2 .overlay {
    height: 400px;
}
.hero-wrap.hero-wrap-2 .slider-text {
    height: 400px;
}
</style>
