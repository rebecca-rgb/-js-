<template>

  <div>
    show
    {{subjectList}}
  </div>

</template>

<script>

  export default {
    computed: {
     
      subjectList(){
        return this.$store.state.moduleA.subjectList
      }
    },
}

</script>

<style scoped>

</style>