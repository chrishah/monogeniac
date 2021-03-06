export const state = () => ({
  value: 0,
  max: 0,
  jump: 10,
  more: true
})

export const mutations = {
  next (state) {
    state.value = state.value + state.jump;
    state.more = state.value + state.jump < state.max ? true : false;
  },
  start (state) {
    state.value = 0;
    state.more = state.value < state.max ? true : false;
  },
  previous (state) {
    state.value = state.value == 0 ? 0 : state.value - state.jump;
    state.more = state.value < state.max ? true : false;
  },
  set_limit (state, limit) {
    state.max = limit;
  }
}

export const actions = {
  async fetchSkipLimits ({ commit }) {
    // Avoid re-fetching in production
    if (process.dev === false) {
      return
    }
    const articles = await this.$content(this.$i18n.locale + "/articles").only('title').sortBy('position', 'asc').fetch();
    commit('set_limit', articles.length)
  }
}