<template>
  <footer>
    <f-header></f-header>
    <f-footer></f-footer>
    <copy-right></copy-right>
  </footer>
</template>

<script>
import FHeader from "./FHeader";
import FFooter from "./FFooter";
import CopyRight from "./CopyRight";

export default {
  name: "Footer",
  components: {
    FHeader,
    FFooter,
    CopyRight
  }
};
</script>

<style scoped>
footer {
  margin-bottom: 49px;
  background: #fff;
}
</style>
