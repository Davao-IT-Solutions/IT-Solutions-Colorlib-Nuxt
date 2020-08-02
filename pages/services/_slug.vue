<template>
  <div>
    <Hero2 :title="servicePost.attributes.title" />
    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12" v-html="servicePost.html" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData ({ params, payload }) {
    if (payload) { return { servicePost: payload } } else {
      return {
        servicePost: await require(`~/content/services/${params.slug}.md`)
      }
    }
  }
}
</script>

<style></style>
