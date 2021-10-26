export default {
    namespaced: true,
    state: {
        toggles: {
            signUp: false,
            signIn: false,
            checkout: false,
            customerOrder: false,
            moreFoodInfo: false
        }
    },
    mutations: {
        toggle(state, target) {
            state.toggles[target] = !state.toggles[target];
        }
    }
}