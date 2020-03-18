import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import user from './modules/user'
import moduleA from './modules/moduleA'
let store =new Vuex.Store({
    modules:{
        moduleA
    }
})
export default store