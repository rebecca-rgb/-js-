<template>
  <div class="mine">
    <slot v-if="list.subjectList.length"></slot>
   <ul>
      <li class="item" v-for="(item, i) in list.subjectList" :key="i">
        <button class="btn" @click="remove(item)">从题库移除</button>
        <h4>{{i+1}}.[{{item.type|fmtSubjectType}}] {{item.title}}</h4>
        <div style="color:#888;font-size:14px">{{item.author}}{{item.createDate}}</div>
        <fieldset style="padding:0 10px;" v-if="checkSubjectType(item.type)">
          <legend>选项</legend>
          <div v-for="(choice, j) in item.choice" :key="j">
            {{j|fmtOrder2ABC}} {{choice.answer}}
          </div>
        </fieldset>
        <div v-if="checkSubjectType(item.type)">答案:{{item.answer}}</div>
        <div>解析:{{item.desc}}</div>
      </li>
    </ul> 
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let {
  mapState,
  mapMutations,
  mapActions,
  mapGetters
} = createNamespacedHelpers("moduleA");
export default {
  props:['list'],
  created() {
    
  },
  methods: {
    remove(item) {
      item.payload = "";
      this.removeCart2Subject(item);
      if (!item.exist) this.$Message.success("移除成功");
    },
    ...mapMutations([ "removeCart2Subject"])
  },
};
</script>

<style scoped lang='scss'>
.main {
  .item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    position: relative;
    .btn {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .room {
    width: 30px;
    position: fixed;
    padding: 10px;
    top: 50%;
    right: 20px;
    color: #fff;
    background: rgb(5, 136, 138);
    transform: translateY(-50%);
  }
}
</style>