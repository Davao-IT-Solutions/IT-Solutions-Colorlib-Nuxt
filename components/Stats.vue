<template>
  <section id="section-counter" class="ftco-counter img">
    <div class="container">
      <div class="row no-gutters d-flex">
        <div class="col-md-6 d-flex">
          <div class="img d-flex align-self-stretch" :style="'background-image:url('+image1+');'" />
        </div>
        <div class="col-md-6 p-3 pl-md-5 py-5 bg-primary">
          <div class="row justify-content-start pb-3">
            <div class="col-md-12 heading-section heading-section-white " />
          </div>
          <div class="row">
            <div class="col-md-6 justify-content-center counter-wrap ">
              <div class="block-18 mb-4">
                <div class="text">
                  <strong class="number" data-number="750">0</strong>
                  <span>Project Complete</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 justify-content-center counter-wrap ">
              <div class="block-18 mb-4">
                <div class="text">
                  <strong class="number" data-number="568">0</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 justify-content-center counter-wrap ">
              <div class="block-18 mb-4">
                <div class="text">
                  <strong class="number" data-number="478">0</strong>
                  <span>Business Partners</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 justify-content-center counter-wrap ">
              <div class="block-18 mb-4">
                <div class="text">
                  <strong class="number" data-number="780">0</strong>
                  <span>IT Consultant</span>
                </div>
              </div>
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
      image1: require('~/assets/images/about.jpg')
    }
  }
}
</script>

<style>

</style>
