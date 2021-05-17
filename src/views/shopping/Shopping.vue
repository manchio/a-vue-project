<template>
  <div id="shopping">
    <main-shopping></main-shopping>
  </div>
</template>

<script>
import MainShopping from "../../components/shopping/MainShopping";

export default {
  name: "category",
  components:{
    MainShopping
  }
};
</script>

<style scoped>
@import "./../../assets/css/base.css";
#shopping {
  /*padding: 0 2vw;*/
}
</style>
