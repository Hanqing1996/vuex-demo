<template>
    <span>{{count}}</span>
</template>

<script>
    import store from '../../index'

    console.log(store);

    export default {
        name: "myCount",
        computed: {
            count () {
                return store.state.count
            }
        }
    }
</script>

<style scoped>

</style>