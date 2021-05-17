<template>
  <div id="home">
    <nav-search>
      <img slot="icon" src="../../assets/images/nav/menu.svg" alt="">
      <img slot="search_icon" src="../../assets/images/nav/nav_serch.svg" alt="">
      <input slot="search" type="text" id="search" value="GTX3660">
      <a slot="login" @click.prevent="$router.push('/login')">登录</a>
    </nav-search>
    <banner></banner>
    <giant></giant>
    <Main></Main>
    <card></card>
    <Footer></Footer>
  </div>
</template>

<script>
import NavSearch from "../../components/index/nav/NavSearch";
import Banner from "../../components/index/banner/Banner";
import Giant from "../../components/index/banner/Giant";
import Main from "../../components/index/main/Main";
import Card from "../../components/index/main/Card";
import Footer from "../../components/index/footer/Footer";

export default {
  name: "category",
  components: {
    Card,
    NavSearch,
    Banner,
    Giant,
    Main,
    Footer
  },
};
</script>

<style scoped>
@import "./../../assets/css/base.css";
#home {
  overflow: hidden;
}
::-webkit-scrollbar{
  display: none;
}
</style>
