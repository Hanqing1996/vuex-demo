<template>
    <button @click="decrement">-{{count}}</button>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'

    export default {
        name: "myReduce",
        computed: mapState(['count']),
        methods:mapMutations(['decrement'])
    }
</script>

<style scoped>

</style>