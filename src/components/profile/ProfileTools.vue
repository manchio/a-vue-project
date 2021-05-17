<template>
  <div id="profile-tools">
    <h2>工具与服务</h2>
    <div class="tools">
      <profile-tools-item>
        <img src="../../assets/images/profile/svgs/客服.svg" alt="" slot="icon">
        <p slot="text">我的客服</p>
      </profile-tools-item>
      <profile-tools-item>
        <img src="../../assets/images/profile/svgs/商铺.svg" alt="" slot="icon">
        <p slot="text">我的商铺</p>
      </profile-tools-item>
      <profile-tools-item>
        <img src="../../assets/images/profile/svgs/喜欢.svg" alt="" slot="icon">
        <p slot="text">我的喜欢</p>
      </profile-tools-item>
      <profile-tools-item>
        <img src="../../assets/images/profile/svgs/拍卖.svg" alt="" slot="icon">
        <p slot="text">拍卖</p>
      </profile-tools-item>
      <profile-tools-item>
        <img src="../../assets/images/profile/svgs/游戏.svg" alt="" slot="icon">
        <p slot="text">游戏大厅</p>
      </profile-tools-item>
      <profile-tools-item>
        <img src="../../assets/images/profile/svgs/秒杀.svg" alt="" slot="icon">
        <p slot="text">限时秒杀</p>
      </profile-tools-item>
      <profile-tools-item>
        <img src="../../assets/images/profile/svgs/积分.svg" alt="" slot="icon">
        <p slot="text">我的积分</p>
      </profile-tools-item>
      <profile-tools-item>
        <img src="../../assets/images/profile/svgs/足迹.svg" alt="" slot="icon">
        <p slot="text">我的足迹</p>
      </profile-tools-item>
    </div>
  </div>
</template>

<script>
import ProfileToolsItem from "./ProfileToolsItem";
export default {
  name: "ProfileTools",
  components:{
    ProfileToolsItem
  }
};
</script>

<style scoped>
#profile-tools{
  margin-bottom: 20px;
  background: #fff;
  padding: .8em;
  margin-top: -15px;
  border-radius: 12px;
}
#profile-tools h2 {
  font-size: 15px;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 10px;
}
#profile-tools .tools {
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
}
</style>
