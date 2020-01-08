<template>
    <button @click="increment">+{{count}}</button>
</template>

<script>
    import {mapState} from "vuex";
    import {mapMutations} from "vuex";

    export default {
        name: "myAdd",
        computed: mapState(['count']),
        methods:mapMutations(['increment'])
    }
</script>

<style scoped>

</style>