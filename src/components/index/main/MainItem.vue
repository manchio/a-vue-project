<template>
  <div id="main-item">
    <slot name="main-icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: "MainItem"
};
</script>

<style scoped>
#main-item {
  flex: 1 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 11px;
}
#main-item img {
  height: 30px;
}
</style>
