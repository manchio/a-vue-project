<template>
  <div class="login-form-item">
    <label for="phone">+86</label>
    <input type="text" id="phone" placeholder="请输入手机号"/>
  </div>
</template>

<script>
export default {
  name: "RegisterPhone"
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

.login-form-item label:first-child {
  border-right: 1px solid #e3e3e3;
  padding-right: 20px;
  left: 10%;
}

.login-form-item label {
  font-size: 13px;
  position: absolute;
}
</style>
