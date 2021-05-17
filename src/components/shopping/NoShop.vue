<template>
  <div id="no-shop">
    <div class="no-shop-content">
      <img src="../../assets/images/shopping/svgs/shoppingCar.svg" alt="">
      <span class="text">购物车中暂无商品</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoShop"
};
</script>

<style scoped>
#no-shop .no-shop-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3em 0 2em;
}

#no-shop .no-shop-content img {
  height: 121px;
}

#no-shop .no-shop-content .text {
  color: #333;
  margin-top: 15px;
}
</style>
