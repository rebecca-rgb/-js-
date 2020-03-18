import axios from '@/utils/axios'
import Vue from 'vue'
import { BASE_URL } from '@/config'
import {SUBJECT_TYPE} from '@/config/enum'
Vue.mixin({
    methods: {
       async $get(url,params){
           let {data} = await axios.get(BASE_URL+url,{params})
            return data
        },
        $post(url,data){
            return axios(url,data)
        },
        getTimeBet(time){
            let timeStamp = +new Date - +new Date(time)
            console.log(timeStamp)
        },
        checkSubjectType(type){
            return type===SUBJECT_TYPE.DANXUAN||type===SUBJECT_TYPE.DUOXUAN
        }
    },
    filters:{
        fmtSubjectType(val){
            return ['单选题', '多选题', '判断题', '简答题'][val]
        },
        fmtOrder2ABC(val) {
            return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[val]
        },
        fmtNum2En(val){
            return '一二三四五六七八九十'[val]
        }
    },
    data() {
        return {
            SUBJECT_TYPE
        }
    },
})