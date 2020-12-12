<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'blue'
      }

    },
    computed: {
      //计算属性根据当前活跃 url，与自己的 path 对比，动态决定显示的 icon
      isActive() {
        return this.$route.path.indexOf(this.path) != -1;
      },

      //计算属性结合 props 动态设置 active 的颜色
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 2px;
    vertical-align: middle;
  }

</style>
