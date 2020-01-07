<template>
    <button @click="addOne">+</button>
</template>

<script>
    import store from '../../index'

    export default {
        name: "myAdd",
        methods:{
            addOne(){
                store.commit('increment')
            }
        }
    }
</script>

<style scoped>

</style>