<template>
  <h2>这里是首页页面</h2>
  <router-link to="/home/news">新闻</router-link> |
  <router-link to="/home/message">消息</router-link>
  <router-view></router-view>
</template>

<script>

  /**
   * 通过设置组件内数据 path，  keep-alive 使用 activated 方法，在组件激活时，使用 path 设置路由，
   * 结合路由守卫，保存跳转之前的页面，设置 path ，从而完成页面缓存的功能
   */

  export default {
    name: "home",
    data() {
      return {
        path: "/home/news"
      }
    },

    created() {

    },

    destroyed() {

    },

    // 生命周期函数--只在使用 keep-alive后，生效
    // 组件激活时调用
    activated() {
      console.log('激活' + this.path)
      this.$router.push(this.path);
    },

    // 生命周期函数--只在使用 keep-alive后，生效
    // 组件失活时调用
    deactivated() {

    },

    // 路由导航守卫 在离开时调用
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path)
      this.path = this.$route.path;
      next()
    }

  }
</script>

<style scoped>

</style>