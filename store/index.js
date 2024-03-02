export const state = () => ({
    authData: null
})

export const mutations = {
  setAuthData(state, authData) {
    state.authData = authData
  }
}

export const actions = {
  async login({ commit }, loginData) {
    try {
      const response = await this.$axios.$post('/api/auth/admin/login', loginData)
      commit('setAuthData', response.data)
    } catch (err) {
      console.error(err)
    }
  }
}