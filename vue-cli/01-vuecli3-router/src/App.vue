<template>
<!--

  一.vue-router 路由跳转

  router-link 方式 (部分属性未生效)
  router-link 是 vue-router 的内置组件，默认会被渲染为 a 标签
  1.可通过设置 tag 属性设置渲染为 button 或 li 等 (vue-cli3 本例中暂未生效)
  2.页面的 url 的改变，默认是采用 push 方式，浏览器可以返回，通过设置 replace 属性可以设置页面不可返回(vue-cli3 本例中暂未生效)
  3.router-link 在点击时，会默认添加 router-link-exact-active 的 class ，可自行设置该样式

  js 代码 方式 (推荐)
  使用 click 监听，在方法中使用 this.$router.push() 或 this.$router.replace()

  二.vue-router 动态路由

  效果，url 路径后面 动态添加上 userId，并能够在相应组件中拿到该 userId

  路由配置路径 形如： /user/：userId  userId 为参数名
  router-link bind 绑定 拼接的内容
  组件内通过 $route.params.userId 拿到拼接内容， userId 为参数名，与路由配置路径一致

  三. 路由懒加载
  为避免 vue 打包时将所有业务代码打包至1个js中，导致 js 过大，用户第1次加载缓慢等情况，
  可在路由配置文件中，通过配置懒加载，在打包时，即可即可对相应业务代码进行分包处理，用户在需要某个页面再去请求对应的 js 文件，而不是一次性都请求下来

-->
<!--  默认 router-link -->
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link v-bind:to="'/user/' + userId">User</router-link>
  </div>

<!-- router-link 属性 未生效  -->
<!--  <div id="app">-->
<!--    <router-link to="/home" tag="button" replace>Home</router-link> |-->
<!--    <router-link to="/about" tag="button" replace>About</router-link>-->
<!--  </div>-->

<!--  代码实现路由跳转 -->
<!--  <div id="app">-->
<!--    <button @click="toHome">Home</button>-->
<!--    <button @click="toAbout">About</button>-->
<!--  </div>-->
<!--  -->
  <router-view></router-view>

</template>

<script>
  export default {
    name: "App",
    data() {
      return  {
        userId: "zhangsan"
      }
    },
    methods: {
      toHome() {
        this.$router.push("/home");
        // this.$router.replace("/home")
      },
      toAbout() {
        this.$router.push("/about");
        // this.$router.replace("/about");
      }
    }
  }
</script>

<style>
  /*默认样式*/
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

   /*本点击后的样式，可手动修改其样式*/
  .router-link-exact-active {
    color: red;
  }
</style>
