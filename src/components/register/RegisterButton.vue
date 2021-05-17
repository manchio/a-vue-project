<template>
  <section class="login-form-submit">
    <slot name="button"></slot>
  </section>
</template>

<script>
export default {
  name: "RegisterButton"
};
</script>

<style scoped>
.login-form-submit button {
  width: 90vw;
  padding: 15px 0;
  border-radius: 52px;
  border: none;
  outline: none;
  background: linear-gradient(to right, #8bc17d, #cadec6);
  display: block;
  color: #333;
  font-size: 14px;
}

</style>
