<template>
    <button @click="reduceOne">-</button>
</template>

<script>
    import store from '../../index'

    export default {
        name: "myReduce",
        methods:{
            reduceOne(){
                store.commit('decrement')
            }
        }
    }
</script>

<style scoped>

</style>