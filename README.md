#### some questions
1. [Vuex state is undefined when refresh page?](https://forum.vuejs.org/t/vuex-state-is-undefined-when-refresh-page/42702/2)
2. 

#### 注意
1. store 只需在 index.js 中的 new Vue 中定义
```
new Vue({
    el: "#app",
    store:store
})
```
在其他组件中这样调用 store
```
this.$store.commit('increment')
```
2. store.js 必须前面有以下几行
```
import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)
```
3. 
mapState:读数据
mapMutations:同步改数据
Actions:为弥补mapMutations不能执行异步函数而创建
mapActions:异步改数据，只是将Actions与组件的methods方法做一个映射
4. store 的 mutation 只能写同步函数的原因
```
现在想象，我们正在 debug 一个 app 并且观察 devtool 中的 mutation 日志。每一条 mutation 被记录，devtools 都需要捕捉到前一状态和后一状态的快照。然而，在上面的例子中 mutation 中的异步函数中的回调让这不可能完成：因为当 mutation 触发的时候，回调函数还没有被调用，devtools 不知道什么时候回调函数实际上被调用——实质上任何在回调函数中进行的状态的改变都是不可追踪的。
```
按照我的理解,就是devtools不是在回调函数执行后被调用的

