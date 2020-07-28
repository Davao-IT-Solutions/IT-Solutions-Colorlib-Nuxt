<template>
  <section class="ftco-section ftco-no-pt">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 heading-section text-center ">
          <h2 class="mb-4">
            Our Strategic <span>Work</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 ">
          <div class="project">
            <div class="img">
              <img :src="image1" class="img-fluid" alt="Colorlib Template">
            </div>
            <div class="text text-center">
              <span>Web Development</span>
              <h3><a href="project.html">Best Solution for Information Technology</a></h3>
            </div>
            <a :href="image1" class="icon image-popup d-flex justify-content-center align-items-center">
              <span class="fa fa-expand" />
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 ">
          <div class="project">
            <div class="img">
              <img :src="image2" class="img-fluid" alt="Colorlib Template">
            </div>
            <div class="text text-center">
              <span>Web Application</span>
              <h3><a href="project.html">Creative Idea Build Up</a></h3>
            </div>
            <a :href="image2" class="icon image-popup d-flex justify-content-center align-items-center">
              <span class="fa fa-expand" />
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 ">
          <div class="project">
            <div class="img">
              <img :src="image3" class="img-fluid" alt="Colorlib Template">
            </div>
            <div class="text text-center">
              <span>Web Development</span>
              <h3><a href="project.html">Web Design Concept &amp; Web Analysis</a></h3>
            </div>
            <a :href="image3" class="icon image-popup d-flex justify-content-center align-items-center">
              <span class="fa fa-expand" />
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 ">
          <div class="project">
            <div class="img">
              <img :src="image4" class="img-fluid" alt="Colorlib Template">
            </div>
            <div class="text text-center">
              <span>UI/UX Strategy</span>
              <h3><a href="project.html">Strategy for Enduring Customer Relationships</a></h3>
            </div>
            <a :href="image4" class="icon image-popup d-flex justify-content-center align-items-center">
              <span class="fa fa-expand" />
            </a>
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
      image1: require('~/assets/images/work-1.jpg'),
      image2: require('~/assets/images/work-2.jpg'),
      image3: require('~/assets/images/work-3.jpg'),
      image4: require('~/assets/images/work-4.jpg')
    }
  }
}
</script>

<style>

</style>
