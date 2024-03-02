export default function ({ store, redirect, $auth }) {
    if (!$auth.loggedIn) {
      return redirect('/login');
    }
  }

export const actions =  {
  async login({ commit }, loginData) {
    try {
      const response = await this.$axios.$post('/api/auth/admin/login', loginData);
      this.$auth.setToken('local', 'Bearer ' + response.data.token);
      await this.$auth.fetchUser();
      commit('setAuthData', response.data);
    } catch (err) {
      console.error(err);
    }
  }
}