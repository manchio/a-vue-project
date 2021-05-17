<template>
  <div id="profile-option">
    <slot></slot>
  </div>
</template>

<script>
import ProfileOptionItem from "./ProfileOptionItem";

export default {
  name: "ProfileOption",
  components: {
    ProfileOptionItem
  }
};
</script>

<style scoped>
#profile-option {
  margin-bottom: 25px;
  background: #fff;
  padding: 1.2em .8em;
  margin-top: -15px;
  border-radius: 12px;
  display: flex;
}
</style>
