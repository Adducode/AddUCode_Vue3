import { createStore } from 'vuex'

export default createStore({
    state: {
        isMenuActive: false,
    },
    mutations: {
        setIsMenuActive(state, payload) {
            state.isMenuActive = payload;
        }
    },
    actions: {
        setIsMenuActive({ commit }, payload) {
            commit('setIsMenuActive', payload);
        }
    },
    getters: {
        getIsMenuActive(state){
            return state.isMenuActive;
        }
    },
    modules: {
    }
})
