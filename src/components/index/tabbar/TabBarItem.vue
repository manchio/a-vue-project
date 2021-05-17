<template>
  <div id="tab-bar-item" @click="jumpTo">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      default: "/home"
    }
  },
  methods: {
    jumpTo() {
      if (this.$router.currentRoute.fullPath !== this.link) {
        this.$router.push(this.link);
      }
    }
  }
};
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 13px;
  transition: .6s;
  cursor: pointer;
}

#tab-bar-item:hover {
  background: #cef5c8;
  border-radius: 15px;
}
</style>
