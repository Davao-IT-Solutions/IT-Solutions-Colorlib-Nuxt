<template>
  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 heading-section text-center ">
          <h2>Read our latest blog</h2>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-4 d-flex ">
          <div class="blog-entry justify-content-end">
            <a href="blog-single.html" class="block-20" :style="'background-image:url('+image1+');'" />
            <div class="text mt-3 float-right d-block">
              <div class="d-flex align-items-center pt-2 mb-4 topp">
                <div class="one">
                  <span class="day">29</span>
                </div>
                <div class="two pl-1">
                  <span class="yr">2020</span>
                  <span class="mos">June</span>
                </div>
              </div>
              <h3 class="heading">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex ">
          <div class="blog-entry justify-content-end">
            <a href="blog-single.html" class="block-20" :style="'background-image:url('+image2+');'" />
            <div class="text mt-3 float-right d-block">
              <div class="d-flex align-items-center pt-2 mb-4 topp">
                <div class="one">
                  <span class="day">29</span>
                </div>
                <div class="two pl-1">
                  <span class="yr">2020</span>
                  <span class="mos">June</span>
                </div>
              </div>
              <h3 class="heading">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex ">
          <div class="blog-entry">
            <a href="blog-single.html" class="block-20" :style="'background-image:url('+image3+');'" />
            <div class="text mt-3 float-right d-block">
              <div class="d-flex align-items-center pt-2 mb-4 topp">
                <div class="one">
                  <span class="day">29</span>
                </div>
                <div class="two pl-1">
                  <span class="yr">2020</span>
                  <span class="mos">June</span>
                </div>
              </div>
              <h3 class="heading">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
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
      image1: require('~/assets/images/image_1.jpg'),
      image2: require('~/assets/images/image_2.jpg'),
      image3: require('~/assets/images/image_3.jpg')
    }
  }
}
</script>

<style>

</style>
