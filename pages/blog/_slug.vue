<template>
  <div>
    <Hero2 :title="title" />
    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            {{ blogPost.html }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData ({ params, payload }) {
    if (payload) { return { blogPost: payload } } else {
      return {
        blogPost: await require(`~/content/blog/${params.slug}.md`)
      }
    }
  }
}
</script>

<style></style>
