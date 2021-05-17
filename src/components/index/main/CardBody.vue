<template>
  <div id="card-body">
    <card-body-commodity>

    </card-body-commodity>
  </div>
</template>

<script>
import CardBodyCommodity from "./CardBodyCommodity";
export default {
  name: "CardBody",
  components:{
    CardBodyCommodity
  }
};
</script>

<style scoped>
#card-body{
  height: 100%;
}

</style>
