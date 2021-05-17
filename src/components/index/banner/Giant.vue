<template>
  <div id="giant">
    <img src="../../../assets/images/banner/giant1.png" alt="">
    <img src="../../../assets/images/banner/giant2.png" alt="">
    <img src="../../../assets/images/banner/giant3.png" alt="">
  </div>
</template>

<script>
export default {
  name: "Giant"
};
</script>

<style scoped>
#giant {
  display: flex;
  height: 100px;
  justify-content: center;
  margin: 8px 0;
}

#giant img {
  width: 125px;
}
</style>
