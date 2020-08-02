<template>
  <div>
    <Hero2 title="Our Exclusive Services" />

    <section class="ftco-section services-section">
      <div class="container">
        <div class="row d-flex no-gutters">
          <div v-for="(service, index) in servicesPosts" :key="index" class="col-md-4 d-flex align-self-stretch">
            <div class="media block-6 services d-block">
              <nuxt-link :to="`/services/${service.slug}`" class="line" />
              <div class="icon">
                <span :class="`${service.attributes.css_icon}`" />
              </div>
              <div class="media-body">
                <h3 class="heading mb-3 mt-3">
                  {{ service.attributes.title }}
                </h3>

                <p>{{ service.attributes.summary }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    servicesPosts () {
      return this.$store.state.servicePosts
    }
  }
}
</script>

<style>
.services-section a {
  color:#FFF;
}
.services-section .heading {
  z-index: 999;
}
</style>
