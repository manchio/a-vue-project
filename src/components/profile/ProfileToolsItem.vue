<template>
  <div class="profile-tools-item">
    <slot name="icon">
      <img src="../../assets/images/profile/svgs/pay.svg" alt="">
    </slot>
    <slot name="text">
      <p>待付款</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "ProfileToolsItem"
};
</script>

<style scoped>
.profile-tools-item {
  flex: 1 23%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
}
.profile-tools-item img {
  height: 30px;
}
.profile-tools-item p {
  font-size: 12px;
  margin-top: 2px;
}
</style>
