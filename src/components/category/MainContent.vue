<template>
  <div id="main-content">
    <div class="content-title">
      <h1>热门分类</h1>
      <div class="ranking" @click="open1">
        <img src="../../assets/images/category/svgs/ranking.svg" alt="">
        <span>排行榜</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="content-main">
      <ul>
        <li v-for="v in commodityCategory">
          <img :src="v.url" alt="">
          <span v-text="v.name"></span>
        </li>
        <li></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "MainContent",
  methods: {
    divClick() {
      console.log(this.commodityCategory[0].name);
    },
    open1() {
      this.$message({
        message: "暂无排行",
        showClose: true,
        type: "warning"
      });
    }
  },
  computed: {
    commodityCategory: {
      get() {
        return [
          {name: "空调"},
          {name: "冰箱"},
          {name: "电脑"},
          {name: "手机"},
          {name: "全面屏手机"},
          {name: "游戏手机"},
          {name: "保健品"},
          {name: "口罩"},
          {name: "驱蚊用品"},
          {name: "电磁炉"},
          {name: "电热水壶"},
          {name: "数据线"},
          {name: "图书"},
          {name: "美妆护肤"},
          {name: "除菌液"},
          {name: "休闲零食"},
          {name: "充电宝"},
          {name: "体温计"},
          {name: "投影仪"},
          {name: "游戏机"}
        ].map(item => {
          item.url = require("../../assets/images/category/imgs/" + item.name + ".png");
          return item;
        });
      }
    }
  }
};
</script>

<style scoped>
#main-content {
  flex: 4;
  padding: 12px;
  background: #fff;
  margin-left: 80px;
  margin-bottom: 49px;
}

#main-content .content-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#main-content .content-title h1 {
  font-size: 14px;
}

#main-content .content-title .ranking i {
  display: block;
  transform: translateY(1px);
}

#main-content .content-title .ranking img {
  height: 20px;
  margin-right: 5px;
}

#main-content .content-title .ranking {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}

#main-content .content-main ul {
  display: flex;
  flex-wrap: wrap;
}

#main-content .content-main ul li {
  flex: 1 20%;
  margin-right: 10px;
  display: flex;
  width: 33%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}

#main-content .content-main ul li:nth-child(3n) {
  margin-right: 0;
}

#main-content .content-main ul li span {
  font-size: 12px;
  margin-top: 5px;
}

#main-content .content-main ul li img {
  width: 100%;
  object-fit: contain;
}
</style>
