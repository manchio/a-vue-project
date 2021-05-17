<template>
  <div id="aside-nav">
    <ul>
      <li v-for="(v,i) in category" v-text="v" @click="currentIndex = i" :class="{active:i === currentIndex}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AsideNav",
  data() {
    return {
      category: [
        "热门推荐", "手机数码", "电脑办公", "家用电器", "计生情趣", "美妆护肤", "个护清洁", "汽车生活", "VS超市", "男装", "男鞋", "女装", "女鞋", "母婴套装",
        "图书音像", "户外运动", "内衣配饰", "食品生鲜", "酒水饮料", "家具家装", "家居厨具", "箱包手袋", "钟表珠宝", "玩具乐器", "医药保健", "宠物生活", "礼品鲜花",
        "农资绿植", "生活旅行", "奢侈品", "VS国际", "艺术邮币", "二手商品", "特产馆", "VS金融", "国际名牌", "拍卖", "房产", "工业品"
      ],
      currentIndex: 0
    };
  }
};
</script>

<style scoped>
#aside-nav {
  flex: 1;
  height: 89vh;
  position: fixed;
  left: 0;
  top: 42px;
  right: 0;
  width: 80px;
  background: #f3f3f3;
  overflow: scroll;
  overflow-style: none;
  scrollbar-with: none;
  /*box-sizing: border-box;*/
}

::-webkit-scrollbar {
  display: none;
}

#aside-nav ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#aside-nav ul li {
  transition: .6s;
  width: 100%;
  padding: 16px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
}

.active {
  background: #fff;
  color: #7ea96e;
}

</style>
