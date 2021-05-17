<template>
  <div id="profile-main">
    <div id="profile-info">
      <img src="../../assets/images/profile/img/avatar.jpg" alt="">
      <div class="user-info">
        <p class="nickname">所念皆星河</p>
        <div class="credit">
          <span>VS值</span>
          <span>小白信用99.9</span>
        </div>
      </div>
      <i class="el-icon-setting"></i>
    </div>
    <profile-info-collect></profile-info-collect>
    <profile-advertising></profile-advertising>
  </div>

</template>

<script>
import ProfileInfoCollect from "./ProfileInfoCollect";
import ProfileAdvertising from "./ProfileAdvertising";
import ShopPreview from "../shopping/ShopPreview";

export default {
  name: "ProfileInfo",
  components: {
    ShopPreview,
    ProfileInfoCollect,
    ProfileAdvertising
  }
};
</script>

<style scoped>
#profile-main {
  background: url("../../assets/images/profile/img/bg.png") no-repeat;
  background-size: cover;
  padding: 1em 1.6em 15px;
  /*position: relative;*/
}

#profile-info {
  display: flex;
  align-items: center;
}

#profile-info img {
  width: 51px;
  border-radius: 50%;
}

#profile-info p {
  margin-left: 1em;
  color: white;
  font-size: 16px;
}

#profile-info .user-info .credit {
  margin-top: 6px;
  display: flex;
  align-items: center;
  margin-left: 10px;
}

#profile-info .user-info .credit span {
  color: #fff;
  font-size: 10px;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, .1);
  display: block;
  padding: 2px 6px;
  transform: scale(.9);
}

#profile-info i {
  color: white;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
}
</style>
