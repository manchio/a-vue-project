<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from "./components/index/tabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "./assets/css/base.css";

body {
  background: #f5f5f5;
}

.el-card__body {
  /*height: auto !important;*/
}
</style>
