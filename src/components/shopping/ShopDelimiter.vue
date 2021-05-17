<template>
  <div class="delimiter">
    <span class="delimiter-sm after"></span>
    <slot name="text">
      <p>可能你还想要</p>
    </slot>
    <span class="delimiter-sm before"></span>
  </div>
</template>

<script>
export default {
  name: "ShopDelimiter"
};
</script>

<style scoped>

.delimiter {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 .8em;
}

.delimiter .delimiter-sm {
  flex: 1;
  background-color: rgba(170, 170, 170, .6);
  height: 1px;
  position: relative;
}

.delimiter p {
  margin: 0 20px;
  color: #8c939d;
  font-size: 12px;
}

.delimiter .delimiter-sm:after {
  content: "";
  height: 4px;
  position: absolute;
  width: 4px;
  border-radius: 50%;
  background-color: rgba(170, 170, 170, .6);
  top: 50%;
  transform: translateY(-50%);
}

.delimiter .after:after {
  right: 0;
}
</style>
