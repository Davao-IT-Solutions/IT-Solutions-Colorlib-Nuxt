<template>
  <section class="ftco-section ftco-no-pb testimony-section" :style="'background-image:url('+bg_image+');'">
    <div class="overlay-1" />
    <div class="container-fluid">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 text-center heading-section heading-section-white ">
          <h2 class="mb-4">
            Our insights &amp; creative ideas
          </h2>
        </div>
      </div>
      <div class="row ">
        <div class="col-md-12 testimonial">
          <carousel
            class="carousel-testimony ftco-owl"
            :auto-height="true"
            :loop="true"
            :items="3"
            :margin="30"
            :nav="false"
            :dots="false"
            :autoplay="true"
            :center="true"
            :stage-padding="0"
          >
            <div class="item">
              <div class="testimony-wrap d-flex align-items-stretch" :style="'background-image:url('+testi1+');'">
                <div class="overlay" />
                <div class="text">
                  <div class="line" />
                  <p class="mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                  </p>
                  <p class="name">
                    Donna Scott
                  </p>
                  <span class="position">Marketing Manager</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="testimony-wrap d-flex align-items-stretch" :style="'background-image:url('+testi2+');'">
                <div class="overlay" />
                <div class="text">
                  <div class="line" />
                  <p class="mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                  </p>
                  <p class="name">
                    Roger Scott
                  </p>
                  <span class="position">Interface Designer</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="testimony-wrap d-flex align-items-stretch" :style="'background-image:url('+testi3+');'">
                <div class="overlay" />
                <div class="text">
                  <div class="line" />
                  <p class="mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                  </p>
                  <p class="name">
                    Roger Scott
                  </p>
                  <span class="position">UI Designer</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="testimony-wrap d-flex align-items-stretch" :style="'background-image:url('+testi4+');'">
                <div class="overlay" />
                <div class="text">
                  <div class="line" />
                  <p class="mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                  </p>
                  <p class="name">
                    Roger Scott
                  </p>
                  <span class="position">Web Developer</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="testimony-wrap d-flex align-items-stretch" :style="'background-image:url('+testi5+');'">
                <div class="overlay" />
                <div class="text">
                  <div class="line" />
                  <p class="mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                  </p>
                  <p class="name">
                    Roger Scott
                  </p>
                  <span class="position">System Analyst</span>
                </div>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  components: { carousel },
  data () {
    return {
      bg_image: require('~/assets/images/bg_1.jpg'),
      testi1: require('~/assets/images/testimony-1.jpg'),
      testi2: require('~/assets/images/testimony-2.jpg'),
      testi3: require('~/assets/images/testimony-3.jpg'),
      testi4: require('~/assets/images/testimony-4.jpg'),
      testi5: require('~/assets/images/testimony-5.jpg')
    }
  }
}
</script>

<style>

</style>
