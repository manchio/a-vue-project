<template>
  <div class="login-form-item">
    <input type="text" id="verify" placeholder="请输入收到的验证码"/>
    <label for="verify">获取验证码</label>
  </div>
</template>

<script>
export default {
  name: "RegisterVerify"
};
</script>

<style scoped>
.login-form-item {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  width: 100%;
  padding: 10px 0;
}

.login-form-item input {
  position: relative;
  width: 60%;
  border: none;
  height: 26px;
  padding: 5px 8px;
  outline: none;
}

.login-form-item:last-of-type {
  margin: 20px;
}

.login-form-item:last-of-type input {
  transform: translateX(-25%);
}

.login-form-item label:last-child {
  right: 50px;
  padding-left: 20px;
  border-left: 1px solid #e3e3e3;
}

.login-form-submit {
  margin-top: 15px;
}

.login-form-item label {
  font-size: 13px;
  position: absolute;
}

</style>
