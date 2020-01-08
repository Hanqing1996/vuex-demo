import Vue from 'vue'

// 引入vuex
import Vuex, {mapState} from 'vuex'
Vue.use(Vuex)

// 引入store
import store from "./src/stores/store";

import add from './src/components/add'
import reduce from './src/components/reduce'
import count from './src/components/count'

Vue.component('v-add',add)
Vue.component('v-reduce',reduce)
Vue.component('v-count',count)

new Vue({
    el: "#app",
    store:store,
    computed: {
        ...mapState('a',['name']),
        ...mapState('b',['items']),
    }
})

