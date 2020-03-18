<template>
  <div class="main">
    <ul>
      <li class="item" v-for="(item, i) in subjectList" :key="i">
        <button class="btn" @click="add(item)">添加到试题库</button>
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
    <router-link class="room" tag="div" to="/cart">试题库({{subjectCartNum}})</router-link>
  </div>
</template>

<script>
import "@/mock";
import { createNamespacedHelpers } from "vuex";
let {
  mapState,
  mapMutations,
  mapActions,
  mapGetters
} = createNamespacedHelpers("moduleA");
export default {
  components: {},
  created() {
    setTimeout(async () => {
      let { subjectList } = await this.$get("/subjectList");
    this.getSubjectList(subjectList);
    }, 2000);
  },
  computed: {
    ...mapState(["subjectList", "subjectCartList"]),
    ...mapGetters(["subjectCartNum"])
  },
  methods: {
    add(item) {
      item.payload = "";
      this.addSubject2Cart(item);
      if(item.exist) this.$Message.success('添加成功');
      else this.$Message.warning('请勿重复添加');
    },
    ...mapMutations(["getSubjectList", "addSubject2Cart"])
  }
};
</script>

<style scoped lang='scss'>
.main {
  border: 1px solid red;
  width: 800px;
  margin: 100px auto;
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