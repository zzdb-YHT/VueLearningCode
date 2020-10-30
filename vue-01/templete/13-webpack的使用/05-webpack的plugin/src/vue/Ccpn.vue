<template>
  <div>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "Ccpn",
    methods: {
      btnClick() {
        console.log("子组件Ccpn发生了点击!");
      }
    }
  }
</script>

<style scoped>

</style>