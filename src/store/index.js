import Vue from 'vue'
import Vuex from 'vuex'
import city from './city/city'
import user from './user/user'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },

    modules: {
      city,
      user
    },


})
