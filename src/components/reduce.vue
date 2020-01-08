<template>
    <button @click="reduceOne">-{{count}}</button>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "myReduce",
        computed: mapState([
            'count'
        ]),
        methods:{
            reduceOne(){
                this.$store.commit('decrement')
            }
        }
    }
</script>

<style scoped>

</style>