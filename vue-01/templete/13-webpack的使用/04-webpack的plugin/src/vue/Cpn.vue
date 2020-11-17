
<!-- 这里用于写模板 -->
<template>
  <div>
    <h2>{{message}}</h2>
    <Ccpn></Ccpn>
  </div>
</template>

<script>
  // 这里用于写 js 和导出

  // // 从 Ccpn.vcue 中引入 Ccpn, 注册并使用 Ccpn 组件
  import Ccpn from "./Ccpn.vue"

  export default {
    name: "Cpn",
    data() {
      return {
        message: "Hello World"
      }
    },
    components: {
      Ccpn
    }
  }
</script>

<!-- 这里用于写样式 -->
<style scoped>
  h2 {
    color: red;
  }
</style>