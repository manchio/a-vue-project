<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  height: 49px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  background: #f5f5f5;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .8);
}
</style>
