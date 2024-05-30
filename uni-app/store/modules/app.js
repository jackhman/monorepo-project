export default {
  namespaced: true,
  state: {
    loading: true
  },
  mutations: {
    MUT_Loading(state, flag) {
      state.loading = flag
    }
  },
  actions: {}
}
