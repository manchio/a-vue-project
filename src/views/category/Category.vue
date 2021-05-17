<template>
  <div class="category">
    <nav-search>
      <i class="el-icon-d-arrow-left" slot="icon" @click="$router.push('/home')"></i>
      <img slot="search_icon" src="../../assets/images/nav/nav_serch.svg" alt="">
      <input type="text" value="扫地机器人 智能" slot="search">
      <i class="el-icon-sunny" slot="login" @click="open"></i>
    </nav-search>
    <main>
      <aside-nav></aside-nav>
      <main-content></main-content>
    </main>
  </div>
</template>

<script>
import NavSearch from "../../components/index/nav/NavSearch";
import AsideNav from "../../components/category/AsideNav";
import MainContent from "../../components/category/MainContent";

export default {
  name: "category",
  components: {
    NavSearch,
    AsideNav,
    MainContent
  },
  data() {
    return {
      iconClasses: [
        "el-icon-sunny", "el-icon-cloudy", "el-icon-partly-cloudy", "el-icon-cloudy-and-sunny", "el-icon-moon", "el-icon-light-rain", "el-icon-lightning", "el-icon-heavy-rain"
      ],
      messages: [
        "生活再平凡，也是限量版", "我们的征途是星辰大海", "宇宙山河浪漫，生活点滴温暖", "等分来，不如追风去", "愿你有诗有梦，有坦荡远方", "做世界的水手，奔赴所有的港口", "逆风的方向，更适合飞翔", "唯有热爱，能抵漫长岁月", "万事都要全力以赴，包括开心",
        "愿你眼里有光，心里有爱", "不念过往，不惧将来"
      ]
    };
  },
  methods: {
    open() {
      const randIcon = Math.floor((Math.random() * this.iconClasses.length));
      const randMessage = Math.floor((Math.random() * this.messages.length));
      this.$message({
        type: "success",
        showClose: true,
        message: this.messages[randMessage],
        iconClass: this.iconClasses[randIcon] + " el-message__icon",
      });
    }
  }
};
</script>
<style scoped>
#nav-search i {
  color: #fff;
}

main {
  display: flex;
  margin-top: 42px;
}

.category > form {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
</style>
