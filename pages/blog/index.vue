<template>
  <div>
    <Hero2 title="Blog" />

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-4 d-flex" v-for="(blog, index) in blogList" :key="index" >
            <div class="blog-entry justify-content-end">
              <router-link
                :to="'/blog/' + blog.link"
                class="block-20"
                :style="'background-image: url('+blog.attributes.thumbnail+');'"
              ></router-link>
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
                  :to="'/blog/' + blog.link"
                  >{{ blog.attributes.title }}</router-link>
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
import blogs from "~/content/blogs.json";

export default {
  async asyncData({ app }) {
    async function awaitImport(blog) {
      const contentMD = await import(`~/content/blog/${blog.slug}.md`);
      return {
        attributes: contentMD.attributes,
        link: blog.slug,
      };
    }

    const blogList = await Promise.all(
      blogs.map((blog) => awaitImport(blog))
    ).then((res) => {
      return {
        blogList: res,
      };
    });

    return blogList;
  },
};
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
