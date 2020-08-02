<template>
  <div>
    <Hero2 title="Blog" />

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row d-flex">
          <div v-for="(blog, index) in blogPosts" :key="index" class="col-md-4 d-flex">
            <div class="blog-entry justify-content-end">
              <router-link
                :to="'/blog/' + blog.slug"
                class="block-20"
                :style="'background-image: url('+blog.attributes.thumbnail+');'"
              />
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
                  <router-link
                    :to="'/blog/' + blog.slug"
                  >
                    {{ blog.attributes.title }}
                  </router-link>
                </h3>
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
    blogPosts () {
      return this.$store.state.blogPosts
    }
  }
}
</script>

<style>
.block-20 {
    background-color: #adb5bd;
}
.blog-entry {
    display: block;
    width: 100%;
}
</style>
