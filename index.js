import Vue from 'vue'
import App from './app.vue'

// 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

new Vue(App).$mount('#app')

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

store.commit('increment') // get
console.log(store.state.count) // set