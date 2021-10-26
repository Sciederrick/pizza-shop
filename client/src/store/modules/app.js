export default {
    namespaced: true,
    state: {
        toggles: {
            signUp: false,
            signIn: false,
            forgotPassword: false,
            checkout: false,
            customerOrder: false,
        }
    },
    mutations: {
        toggle(state, target) {
            state.toggles[target] = !state.toggles[target];
        }
    }
}