<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-lg-6 heading-section text-center ">
          <h2 class="mb-4">
            More than <span>5+</span> years of experience in <span>Website Development</span>
          </h2>
          <p>We provide a wide range of IT services ranging from small projects in a Small to Medium-sized businesses environment to larger projects that encompasses an entire company in a large corporate environment.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="services-2 text-center">
            <div class="icon">
              <span class="fa fa-globe" />
            </div>
            <div class="text">
              <h3>Website Development</h3>
              <p>Gain impact on how your customers perceive your company, make the first best impression</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <img :src="image1" class="img-fluid" alt="">
        </div>
        <div class="col-md-4">
          <div class="services-2 text-center">
            <div class="icon">
              <span class="fa fa-code" />
            </div>
            <div class="text">
              <h3>Web Application Development</h3>
              <p>We bring your business to new heights of integration. Be accessible anywhere and anyway.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      image1: require('~/assets/images/services.svg')
    }
  }
}
</script>

<style>

</style>
