import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import add from './src/components/add'
import reduce from './src/components/reduce'
import count from './src/components/count'

Vue.component('v-add',add)
Vue.component('v-reduce',reduce)
Vue.component('v-count',count)

new Vue({
    el: "#app",
})

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})

// 导出store对象
export default store

