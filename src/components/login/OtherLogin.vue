<template>
  <div id="order-login">
    <h1>其他登录方式</h1>
    <div class="qq">
      <img src="../../assets/images/login/qq.svg" alt="">
      <span>QQ</span>
    </div>
    <p>未注册的手机号验证后将自动创建VShop账号, 登录即代表您已同意 <a href="">VShop隐私政策</a></p>
  </div>
</template>

<script>
export default {
  name: "OtherLogin"
};
</script>

<style scoped>
#order-login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  height: 24vh;
  padding-bottom: 18vh;
}
#order-login * {
  color: #999;
}
#order-login h1 {
  font-size: 12px;
  font-weight: normal;
  position: relative;
}

#order-login h1:after, #order-login h1:before {
  content: "";
  position: absolute;
  top: 50%;
  height: 1px;
  width: 130px;
  background: #f1f1f1;
}

#order-login h1:after {
  right: -150px;
}

#order-login h1:before {
  left: -150px;
}
.qq{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #888;
}
#order-login p {
  text-align: center;
  font-size: 13px;
  line-height: 1.6em;
}
#order-login p a {
  color: #8bc17d;
}
</style>
