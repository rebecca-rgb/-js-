<template>

    <div>
        {{firstName}}--{{LastName}}--{{age}}
        <hr>
        {{fullName}}
        <button @click="changeFirstName('alice')">更新</button>
    </div>

</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState,mapGetters,mapMutations,mapActions} = createNamespacedHelpers('moduleA')
// import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        computed:{
            ...mapState(['firstName','LastName','age']),
            ...mapGetters(['fullName']),
            // firstName(){
            //     return this.$store.state.moduleA.firstName
            // },
            // LastName(){
            //     return this.$store.state.moduleA.LastName
            // },
            // age(){
            //     return this.$store.state.moduleA.age
            // },
            // fullName(){
            //     return this.$store.getters['moduleA/fullName']
            // }
            
        },
        mounted() {
            
        },
        methods: {
            // ...mapActions(['changeName']),
            ...mapMutations(['changeFirstName'])
            // changeFirstName(val){
            //     this.$store.commit('moduleA/changeFirstName',val)
            // }
        },
        
}

</script>

<style scoped>

</style>