<template>
    <button @click="addCount">+{{count}}</button>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "myAdd",
        computed: mapState(['count']),
        methods:{
            addCount(){
                this.$store.dispatch({
                    type: 'incrementAsync',
                })
            }
        }
    }
</script>

<style scoped>

</style>