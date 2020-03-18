<template>
  <div class="main">
    <button @click="toExcelDom">转为excel文档</button>
    <div>
      <div v-if="!subjectCartList.length">请添加题目</div>
      <div v-else>
        <Fenlei v-for="(item, index) in list" :key="index" :list="item">
          <h1>{{index|fmtNum2En}}、{{item.title}}</h1>
        </Fenlei>
      </div>
      <router-link class="room" tag="div" to="/">返回添加({{subjectCartNum}})</router-link>
    </div>
  </div>
</template>

<script>
import Fenlei from "@/components/Fenlei";
import "@/mock";
import { createNamespacedHelpers } from "vuex";
import { export_json_to_excel } from "@/utils/Export2Excel";
let {
  mapState,
  mapMutations,
  mapActions,
  mapGetters
} = createNamespacedHelpers("moduleA");
export default {
  components: {
    Fenlei
  },
  computed: {
    list() {
      let data = [];
      [
        this.cartDanxuanList,
        this.cartDuoxuanList,
        this.cartPanduanList,
        this.cartJiandaList
      ].forEach(item => {
        if (item.subjectList.length) data.push(item);
      });
      return data;
    },
    ...mapState(["subjectList", "subjectCartList"]),
    ...mapGetters([
      "subjectCartNum",
      "cartDanxuanList",
      "cartDuoxuanList",
      "cartPanduanList",
      "cartJiandaList"
    ])
  },
  methods: {
    remove(item) {
      item.payload = "";
      this.removeCart2Subject(item);
      if (!item.exist) this.$Message.success("移除成功");
    },
    ...mapMutations(["getSubjectList", "removeCart2Subject"]),
    fmtOptions(item) {
      return item.map(r => r.choice).join("|");
    },
    toExcelDom() {
      let data = [];
      this.list.forEach(r => {
        r.subjectList.forEach(item => {
          data.push([
            r.title,
            item.title,
            this.fmtOptions(item.choice),
            item.answer,
            item.desc
          ]);
        });
      });
      export_json_to_excel({
        header: ["题型", "标题", "选项", "答案", "解析"], //表头 必填
        data, //具体数据 必填
        filename: "题库" + new Date().toLocaleDateString() //非必填
      });
    }
  }
};
</script>

<style scoped lang='scss'>
.main {
  border: 1px solid red;
  width: 800px;
  margin: 100px auto;
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