<template>
  <section class="ftco-intro">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-md-7">
          <div class="row no-gutters d-flex align-items-stretch">
            <div v-for="(service, index) in services" :key="index" class="col-md-4 d-flex align-self-stretch" data-aos="fade-up" :data-aos-delay="index * 300">
              <div class="services-1 color-2">
                <nuxt-link :to="`/services/${service.slug}`" class="line" />
                <div class="icon">
                  <span :class="service.attributes.css_icon" />
                </div>
                <div class="media-body">
                  <h3 class="heading mb-3">
                    {{ service.attributes.title }}
                  </h3>
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
  computed: {
    services () {
      return this.$store.getters.displayOnHero
    }
  }
}
</script>
<style>

</style>
