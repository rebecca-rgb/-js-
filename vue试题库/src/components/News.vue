<template>
  <div>
    
    
  </div>
</template>

<script>
export default {
  async created() {
    let { data } = await this.$get("/data/data.json");
    this.dataList = data;
  },
  data() {
    return {
      dataList: []
    };
  }
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>