<template>
  <h2>这里是用户页面</h2>
<!-- 通过 $route.params. 拿到动态拼接的内容  参数名称与路由配置文件 一致 -->
  <p>{{$route.params.userId}}</p>
</template>

<script>
  export default {
    name: "user"
  }
</script>

<style scoped>

</style>