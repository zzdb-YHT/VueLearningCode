<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="#ff5722">
      <img slot="item-icon-active" src="~assets/img/tabBar/home-active.png">  <!-- 使用别名，避免 ..嵌套出错  src 引用要加 ~ ，import 使用直接用-->
      <img slot="item-icon" src="~assets/img/tabBar/home.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="#ff5722">
      <img slot="item-icon-active" src="~assets/img/tabBar/category-active.png">
      <img slot="item-icon" src="~assets/img/tabBar/category.png">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon-active" src="~assets/img/tabBar/profile-active.png">
      <img slot="item-icon" src="~assets/img/tabBar/profile.png">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

  import TabBar from "./tabBar/TabBar";
  import TabBarItem from "./tabBar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
