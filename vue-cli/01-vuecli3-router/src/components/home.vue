<template>
  <h2>这里是首页页面</h2>
  <router-link to="/home/news">新闻</router-link> |
  <router-link to="/home/message">消息</router-link>
  <router-view></router-view>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped>

</style>