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

    二.vue-router 动态路由 -- 路由传参： 方式1

    效果，url 路径后面 动态添加上 userId，并能够在相应组件中拿到该 userId

    路由配置路径 形如： /user/：userId  userId 为参数名
    router-link bind 绑定 拼接的内容
    组件内通过 $route.params.userId 拿到拼接内容， userId 为参数名，与路由配置路径一致

    三. 路由懒加载
    为避免 vue 打包时将所有业务代码打包至1个js中，导致 js 过大，用户第1次加载缓慢等情况，
    可在路由配置文件中，通过配置懒加载，在打包时，即可即可对相应业务代码进行分包处理，用户在需要某个页面再去请求对应的 js 文件，而不是一次性都请求下来

    四. 路由嵌套
    通过在组件中增加 router-link 和 router-view， 并在 router 中对应的路径下配置 children 数组，配置相应的路径即可

    五. 路由传参
    方式1：动态路由传参，并通过  $route.params.paramName 获取参数
    方式2：跳转参数增加 query 对象，并通过 $route.query.paramName 获取参数

    六. 路由守卫
    在路由 url 进行跳转时，可进行的一些操作，如动态修改页面 title 等，

    七. keep-alive
    keep-alive 可用于保存路由状态，使用后，可通过 activated 和 deactivated 来保存状态，此处需要注意 vue-cli 版本不同，keep-alive 写法不同

  -->
  <!--  默认 router-link -->
  <!--  <div id="nav">-->
  <!--    <router-link to="/home">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link> |-->
  <!--    <router-link v-bind:to="'/user/' + userId">User</router-link>-->
  <!--  </div>-->

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

  <!--  路由传参 方式2 router-link 方式 -->
  <!--    <div id="nav">-->
  <!--      <router-link to="/home">Home</router-link> |-->
  <!--      <router-link to="/about">About</router-link> |-->
  <!--      <router-link v-bind:to="'/user/' + userId">User</router-link> |-->
  <!--      <router-link v-bind:to="{-->
  <!--        path: '/profile',-->
  <!--        query: {-->
  <!--          userName: 'admin',-->
  <!--          password: '123456'-->
  <!--        }-->
  <!--      }">Profile</router-link>-->
  <!--    </div>-->


  <!--  路由传参 方式2 js 代码 方式 -->
  <div id="app">
    <button @click="toHome">Home</button>
    <button @click="toAbout">About</button>
    <button @click="toUser">User</button>
    <button @click="toProfile">Profile</button>
  </div>

<!--  <router-view></router-view>-->

<!-- 将 router-view 可保存路由状态 -->
<!--  <keep-alive>-->
<!--    <router-view></router-view>-->
<!--  </keep-alive>-->

<!--  vue-cli4 中的 keep-alive 写法，include 即为需要缓存的组件，组件名为对应.vue文件中的export中的 name 字段, exclude 排除缓存的组件 -->
  <router-view v-slot="{ Component }">
    <keep-alive include="home">
      <component :is="Component"/>
    </keep-alive>
  </router-view>

</template>

<script>
  export default {
    name: "App",
    data() {
      return {
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
      },
      toUser() {
        this.$router.push("/user/" + this.userId);
      },
      toProfile() {
        this.$router.push({
          path: '/profile',
          query: {
            userName: "admin",
            password: "123456"
          }
        });

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
