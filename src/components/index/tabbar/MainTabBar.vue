<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="icon" src="../../../assets/images/tabbar/home.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="icon" src="../../../assets/images/tabbar/category.svg" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/store">
      <img slot="icon" src="../../../assets/images/tabbar/shopping.svg" alt="">
      <div slot="text">购物袋</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="icon" src="../../../assets/images/tabbar/profile.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar
  }
};
</script>

<style scoped>

</style>
