<template>
  <div id="main-shopping">
    <nav-basic></nav-basic>
    <no-shop></no-shop>
    <shop-delimiter></shop-delimiter>
    <shop-preview></shop-preview>
  </div>
</template>

<script>
import ShopDelimiter from "./ShopDelimiter";
import ShopPreview from "./ShopPreview";
import NoShop from "./NoShop";
import NavBasic from "../index/nav/NavBasic";

export default {
  name: "MainShopping",
  components: {
    ShopDelimiter,
    ShopPreview,
    NoShop,
    NavBasic
  }
};
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>
