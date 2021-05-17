<template>
  <div id="f-header">
    <ul>
      <li>
        <router-link to="/login">登录</router-link>
      </li>
      <li><a href="" @click.prevent="$router.push('/register')">注册</a></li>
      <li><a href="">客户服务</a></li>
      <li><a href="#nav-search">返回顶部</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FHeader"
};
</script>

<style scoped>
#f-header > ul {
  display: flex;
  padding: 18px 0;
  border-bottom: 1px solid #ccc;
}
#f-header > ul > li {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
#f-header > ul > li:not(:last-child) {
  border-right: 1px solid #ccc;
}

#f-header > ul > li a {
  color: #333;
}
</style>
