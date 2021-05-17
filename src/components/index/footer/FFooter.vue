<template>
  <div id="f-footer">
    <ul>
      <li>
        <i class="el-icon-mobile-phone"></i>
        <span>客户端</span>
      </li>
      <li>
        <i class="el-icon-bangzhu"></i>
        <span>国际版</span>
      </li>
      <li>
        <i class="el-icon-monitor"></i>
        <span>电脑版</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FFooter"
};
</script>

<style scoped>
#f-footer {
  padding: 20px 0;
}
#f-footer > ul {
  display: flex;
}
#f-footer > ul > li {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#f-footer > ul > li i {
  font-size: 26px;
  padding: 8px;
  display: block;
  border-radius: 50%;
  border: 1px solid #ccc;
  color: #888;
}

#f-footer > ul > li span {
  color: #888;
}

</style>
