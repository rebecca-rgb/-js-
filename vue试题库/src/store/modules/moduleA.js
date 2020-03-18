import '@/mock'
export default {
    namespaced: true,
    state: {
        firstName: 'simba',
        LastName: 'wang',
        age: 18,
        subjectList: [],
        subjectCartList:[]
    },
    mutations: {
        changeFirstName(state, payload) {
            state.firstName = payload
        },
        getSubjectList(state, payload) {
            state.subjectList = payload
        },
        addSubject2Cart(state, payload){
            if(state.subjectCartList.some(r=>r.id===payload.id)) payload.exist=false
            else{
                state.subjectCartList.push(payload)
                payload.exist=true
            }
        },
        removeCart2Subject(state, payload){
            state.subjectCartList=state.subjectCartList.filter(r=>r.id!==payload.id)
            payload.exist=false
        },
    },
    getters: {
        //类似computed
        cartDanxuanList(state){
            let obj={}
            obj.title='单选题'
            obj.subjectList=state.subjectCartList.filter(r=>r.type===0)
            return obj
        },
        cartDuoxuanList(state){
            let obj={}
            obj.title='多选题'
            obj.subjectList= state.subjectCartList.filter(r=>r.type===1)
            return obj
        },
        cartPanduanList(state){
            let obj={}
            obj.title='判断题'
            obj.subjectList= state.subjectCartList.filter(r=>r.type===2)
            return obj
        },
        cartJiandaList(state){
            let obj={}
            obj.title='简答题'
            obj.subjectList= state.subjectCartList.filter(r=>r.type===3)
            return obj
        },
        fullName(state) {
            return state.firstName + state.LastName
        },
        subjectCartNum(state){
            return state.subjectCartList.length
        }
    },
    actions: {
        // async getSubject(context) {
        //     // let res = await fetch('/subjectList').then(res=>res.json())
        //     let res = await this.$get('/subject.json')
        //     context.commit('getSubjectList', res)
        // },
        changeName(context, val) {
            context.state.firstName = val
        }
    }
}