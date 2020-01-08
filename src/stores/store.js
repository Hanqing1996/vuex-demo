// 导出store对象
import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)

import user from "./user";
import products from "./product";

export default new Vuex.Store({
    modules:{
        a:user,
        b:products
    }
})
















