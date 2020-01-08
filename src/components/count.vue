<template>
    <span>{{count}}</span>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "myCount",
        computed: mapState(['count'])
    }
</script>

<style scoped>

</style>