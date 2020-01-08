<template>
    <button @click="addOne">+{{count}}</button>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "myAdd",
        computed: mapState({
            // 箭头函数可使代码更简练
            count: state => state.count
        }),
        methods:{
            addOne(){
                this.$store.commit('increment')
            }
        }
    }
</script>

<style scoped>

</style>