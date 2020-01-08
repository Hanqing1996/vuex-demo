<template>
    <button @click="addCount">+{{count}}</button>
</template>

<script>
    import {mapState,mapActions } from "vuex";

    export default {
        name: "myAdd",
        computed: mapState(['count']),
        methods: {
            ...mapActions({
                addCount: 'incrementAsync' // 将 `this.addCount()` 映射为 `this.$store.dispatch('incrementAsync')`
            })
        }
    }
</script>

<style scoped>

</style>