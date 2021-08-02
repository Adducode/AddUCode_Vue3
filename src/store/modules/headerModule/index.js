import Vue from 'vue';
import Vuex from 'vuex';

import { state } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default {
    namespaced: true,
    state: () => state,
    getters,
    mutations,
    actions,
};
