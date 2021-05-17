<template>
  <div id="shop-preview">
    <ul class="shops">
      <li v-for="v in categories">
        <img :src="v.url" alt="">
        <div class="p10px">
          <div class="title">
            <span v-if="v.isBtn1">VS超市</span>
            <p v-text="v.describe"></p>
          </div>
          <div class="price" v-text="v.price"></div>
          <div class="discuss">
            <span v-if="v.isBtn2">自营</span>
            <p>{{ v.discuss }}+条评论 <i v-if="v.favorable" v-text="v.favorable + '%好评率'"></i></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShopPreview",
  data() {
    return {
      categories: [
        {
          describe: "完美芦荟胶40g",
          price: 29.90,
          discuss: "324万",
          isBtn1: true,
          isBtn2: true,
          favorable: 0
        },
        {
          describe: "福尔摩斯探案全集正版全10",
          price: 25,
          discuss: "2.1万",
          isBtn1: false,
          isBtn2: false,
          favorable: 99
        },
        {
          describe: "影响孩子一生的世界名著",
          price: 25.8,
          discuss: "7000",
          isBtn1: false,
          isBtn2: false,
          favorable: 99
        },
        {
          describe: "德国专注力养成大画本6册",
          price: 29.8,
          discuss: "2.3万",
          isBtn1: false,
          isBtn2: false,
          favorable: 99
        },
        {
          describe: "奇妙的科学全套10册宝宝故",
          price: 24.8,
          discuss: "9000",
          isBtn1: false,
          isBtn2: false,
          favorable: 99
        },
        {
          describe: "小学生黄冈作文全套10册",
          price: 23.8,
          discuss: "7.0万",
          isBtn1: false,
          isBtn2: false,
          favorable: 99
        },
        {
          describe: "彼得兔的故事绘本全集8册",
          price: 16.8,
          discuss: "2.5万",
          isBtn1: false,
          isBtn2: false,
          favorable: 98
        },
        {
          describe: "宝路 成犬狗粮 7.5kg牛肉味",
          price: 108.9,
          discuss: "77万",
          isBtn1: false,
          isBtn2: true,
          favorable: 99
        },
        {
          describe: "君乐宝(JUNLEBA",
          price: 108.9,
          discuss: "24万",
          isBtn1: true,
          isBtn2: true,
          favorable: 99
        },
        {
          describe: "世纪开元 大6寸相册 春风物",
          price: 23.9,
          discuss: "2.9",
          isBtn1: false,
          isBtn2: true,
          favorable: 98
        },
        {
          describe: "2021男装夹克 立领夹克衫",
          price: 35.8,
          discuss: "1.9万",
          isBtn1: false,
          isBtn2: false,
          favorable: 92
        },
        {
          describe: "蝴蝶印象 铁艺花架免组装",
          price: 77,
          discuss: "1.0万",
          isBtn1: false,
          isBtn2: false,
          favorable: 96
        },
        {
          describe: "金团(jintuan)乌金石茶盘大",
          price: 88,
          discuss: "9000",
          isBtn1: false,
          isBtn2: false,
          favorable: 98
        },
        {
          describe: "克欧克厨房多功能切菜器婴",
          price: 19.9,
          discuss: "2.9万",
          isBtn1: false,
          isBtn2: false,
          favorable: 98
        },
        {
          describe: "琪妍2018新款太阳镜女圆脸",
          price: 39,
          discuss: "2.5万",
          isBtn1: false,
          isBtn2: false,
          favorable: 98
        },
        {
          describe: "浪莎男士内裤男三角裤竹纤",
          price: 39.9,
          discuss: "1.3万",
          isBtn1: false,
          isBtn2: false,
          favorable: 98
        }
      ].map(function (item, i) {
        item.url = require(`../../assets/images/shopping/imgs/shop${(i + 1) >= 10 ? (i + 1) : "0" + (i + 1)}.png`);
        return item;
      })
    };
  }
};
</script>

<style scoped>
#shop-preview {
  background: #fff;
  margin-top: 1em;
  margin-bottom: 49px;
  padding: .8em;
}

#shop-preview .shops {
  display: flex;
  flex-wrap: wrap;
}

#shop-preview .shops li {
  flex: 1 40%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, .08);
  margin-bottom: 10px;
}

#shop-preview .shops li .p10px {
  padding: 5px;
}

#shop-preview .shops li:nth-child(2n-1) {
  margin-right: 10px;
}

#shop-preview .shops li img {
  width: 100%;
  border-radius: 5px 5px 0 0;
  object-fit: contain;
}

#shop-preview .shops li .title {
  display: flex;
}

#shop-preview .shops li span {
  margin-right: 6px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 3px;
  border-radius: 4px;
  background: #a0c196;
  color: #fff;
}

#shop-preview .shops li .title p {
  font-weight: 600;
  font-size: 12px;
}

#shop-preview .shops li .price:before {
  content: "￥";
  font-size: 15px;
}

#shop-preview .shops li .price {
  font-size: 18px;
  margin: 8px 0;
  color: #e3533b;
  font-weight: 600;
}

#shop-preview .shops li .discuss {
  display: flex;
  letter-spacing: -1px;
}

#shop-preview .shops li .discuss p {
  font-size: 13px;
  color: #888;
}
</style>
