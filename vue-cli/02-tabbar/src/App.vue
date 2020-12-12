<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" active-color="#ff5722">
        <img slot="item-icon-active" src="./assets/img/tabBar/home-active.png">
        <img slot="item-icon" src="./assets/img/tabBar/home.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="#ff5722">
        <img slot="item-icon-active" src="./assets/img/tabBar/category-active.png">
        <img slot="item-icon" src="./assets/img/tabBar/category.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon-active" src="./assets/img/tabBar/profile-active.png">
        <img slot="item-icon" src="./assets/img/tabBar/profile.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

  import TabBar from "./components/tabBar/TabBar";
  import TabBarItem from "./components/tabBar/TabBarItem";

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";

</style>
