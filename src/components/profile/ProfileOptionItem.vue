<template>
  <div class="profile-option-item">
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
  name: "ProfileOptionItem",
  props: {
    isSize: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.profile-option-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.profile-option-item img {
  height: 30px;
}
.size {
  height: 28px !important;
}

.profile-option-item p {
  font-size: 12px;
}

.profile-option-item h2 {
  font-size: 20px;
}
</style>
