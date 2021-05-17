<template>
  <div id="profile-advertising">
    <div class="text">
      <img src="../../assets/images/profile/img/plus.png" alt="">
      <p>免费使用 立领1张运费券</p>
    </div>
    <div class="btn">0元试用 <i class="el-icon-caret-right"></i></div>
  </div>
</template>

<script>
export default {
  name: "ProfileAdvertising"
};
</script>

<style scoped>
#profile-advertising {
  background: url("../../assets/images/profile/img/bg2.png") no-repeat;
  background-size: cover;
  height: 42px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
}

#profile-advertising .text {
  box-sizing: border-box;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
#profile-advertising .text img {
  height: 12px;
  width: 57px;
}
#profile-advertising .text p {
  color: #FFE678;
  font-size: 12px;
  margin-left: 8px;
  padding-left: 8px;
  border-left: 1px solid #e6a23c;
}
#profile-advertising .btn {
  font-size: 11px;
  padding: 1px 6px;
  border-radius: 9px;
  color: #000;
  background-image: linear-gradient(
    -50deg
    ,#ffe36f,#f6d44e);
}
</style>
