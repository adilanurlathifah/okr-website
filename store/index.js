export const state = () => ({
    user: null
});

export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    logout(state) {
        state.user = null;
        state.token = null;
    }
};