<template>
  <div id="profile-info-collect">
    <div class="profile-info-collect-item"><span>3</span><span>商品收藏</span></div>
    <div class="profile-info-collect-item"><span>7</span><span>店铺收藏</span></div>
    <div class="profile-info-collect-item"><span>2</span><span>我的足迹</span></div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfoCollect"
};
</script>

<style scoped>
#profile-info-collect {
  margin: 8px 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#profile-info-collect .profile-info-collect-item {
  color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#profile-info-collect .profile-info-collect-item span:last-of-type {
  font-size: 12px;
  margin-top: 2px;
}
</style>
