<template>
  <div id="main">
    <main-item v-for="(v,i) in categories" :key="i">
      <img slot="main-icon" :src="v.icon" alt="">
      <div slot="text" v-text="v.text"></div>
    </main-item>
  </div>
</template>

<script>
import MainItem from "./MainItem";

export default {
  name: "Main",
  components: {
    MainItem
  },
  data() {
    return {
      categories: [
        {
          icon: require("../../../assets/images/main/cap.svg"),
          text: "帽子"
        },
        {
          icon: require("../../../assets/images/main/car.svg"),
          text: "二手车"
        }, {
          icon: require("../../../assets/images/main/cloak.svg"),
          text: "大衣"
        }, {
          icon: require("../../../assets/images/main/office.svg"),
          text: "办公"
        }, {
          icon: require("../../../assets/images/main/shoe.svg"),
          text: "鞋子"
        }, {
          icon: require("../../../assets/images/main/sleeve.svg"),
          text: "长袖"
        }, {
          icon: require("../../../assets/images/main/sport.svg"),
          text: "运动"
        }, {
          icon: require("../../../assets/images/main/sweater.svg"),
          text: "毛衣"
        }
      ]
    };
  }
};
</script>

<style scoped>
#main {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  background: #fff;
  padding: .8em;
  border-radius: 16px;
}
</style>
