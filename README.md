#### some questions
1. [Vuex state is undefined when refresh page?](https://forum.vuejs.org/t/vuex-state-is-undefined-when-refresh-page/42702/2)
2. 

#### 注意
1. store只需在index.js中的new Vue中定义
```
new Vue({
    el: "#app",
    store:store
})
```
在其他组件中这样调用store
```
this.$store.commit('increment')
```
2. store.js必须前面有以下几行
```
import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)
```
3. 