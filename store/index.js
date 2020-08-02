export const state = () => ({
  blogPosts: [],
  servicePosts: []
})

export const mutations = {
  setBlogPosts (state, list) {
    state.blogPosts = list
  },
  setServicePosts (state, list) {
    state.servicePosts = list
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const blogs = await require.context('~/content/blog/', false, /\.md$/)
    const blogPosts = blogs.keys().map((key) => {
      const res = blogs(key)
      res.slug = key.slice(2, -3)
      return res
    })
    await commit('setBlogPosts', blogPosts)

    const services = await require.context('~/content/services/', false, /\.md$/)
    const servicePosts = services.keys().map((key) => {
      const res = services(key)
      res.slug = key.slice(2, -3)
      return res
    })
    await commit('setServicePosts', servicePosts)
  }
}
