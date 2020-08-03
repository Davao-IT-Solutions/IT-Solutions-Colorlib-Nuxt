export const state = () => ({
  blogPosts: [],
  servicePosts: []
})

export const mutations = {
  setBlogPosts (state, list) {
    state.blogPosts = list
  },
  setServicePosts (state, list) {
    list.sort((a, b) => {
      let compare = 0
      if (a.attributes.order > b.attributes.order) {
        compare = 1
      } else if (b.attributes.order > a.attributes.order) {
        compare = -1
      }
      return compare
    })
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

export const getters = {
  displayOnHero: (state) => {
    return state.servicePosts.filter(service => service.attributes.display_hero)
  }
}
