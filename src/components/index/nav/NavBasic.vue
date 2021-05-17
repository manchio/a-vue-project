<template>
  <div id="nav-basic">
    <nav-search :bg="true">
      <i class="el-icon-d-arrow-left" slot="icon" @click="$router.push('/profile')"></i>
      <div slot="search">
        <slot name="text">购物车</slot>
      </div>
      <el-dropdown slot="login" size="medium">
        <span class="el-dropdown-link">
          <i class="el-icon-more-outline"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-s-home"></i>首页</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-menu"></i>分类</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-shopping-cart-full"></i>购物车</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-user"></i>我的VS</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-tickets"></i>浏览记录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </nav-search>
  </div>
</template>

<script>
import NavSearch from "./NavSearch";

export default {
  name: "NavBasic",
  components: {
    NavSearch
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
