<template>
  <section id="section-counter" class="ftco-counter img">
    <div class="container">
      <div class="row no-gutters d-flex">
        <div class="col-md-6 d-flex">
          <div class="img d-flex align-self-stretch" :style="'background-image:url('+image1+');'" />
        </div>
        <div class="col-md-6 p-3 pl-md-5 py-5 bg-primary">
          <div class="row justify-content-start pb-3">
            <div class="col-md-12 heading-section heading-section-white ">
              <h2 class="mb-4">
                Our <span>Records</span>
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 justify-content-center counter-wrap ">
              <div class="block-18 mb-4">
                <div class="text">
                  <strong class="number">{{ projects_completed }}</strong>
                  <span>Projects Completed</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 justify-content-center counter-wrap ">
              <div class="block-18 mb-4">
                <div class="text">
                  <strong class="number">{{ happy_clients }}</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 justify-content-center counter-wrap ">
              <div class="block-18 mb-4">
                <div class="text">
                  <strong class="number">{{ business_partners }}</strong>
                  <span>Business Partners</span>
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
import stats from '../content/statistics.json'

export default {
  data () {
    return {
      image1: require('~/assets/images/about.jpg'),
      projects_completed: stats.projects_completed,
      happy_clients: stats.happy_clients,
      business_partners: stats.business_partners
    }
  }
}
</script>

<style>

</style>
