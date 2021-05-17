<template>
  <div id="commodities">
    <div @click="open1" class="commodity-item" v-for="commodity in commodities">
      <img :src="commodity.url" alt="">
      <div class="commodity-content">
        <p>{{ commodity.text }}
          <i class="el-icon-sugar">新品</i>
        </p>
        <div class="price-group">
          <span>¥ {{ commodity.price }}</span>
          <el-button type="text" icon="el-icon-search" style="float:right;padding: 3px 0;" size="mini">
            看相似
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBodyCommodity",
  data() {
    return {
      commodities: [
        {
          url: require("../../../assets/images/commodities/commodity01.png"),
          text: "创颜 【2件装】无痕乳胶美背运动内衣女聚拢文胸 无钢圈背心式胸罩 侧收副",
          price: 79.9
        },
        {
          url: require("../../../assets/images/commodities/commodity02.png"),
          text: "宿舍房间墙纸自粘墙壁贴画贴纸班级教室文化墙装饰励志墙贴办公室6688 13感谢现在奋斗的你【主图款】 特大",
          price: 41
        },
        {
          url: require("../../../assets/images/commodities/commodity03.png"),
          text: "卡帝乐鳄鱼(CARTELO)休闲裤男 商务纯色西裤男修身男士休闲裤子男 1F122101298 蓝色 31/XL",
          price: 128
        },
        {
          url: require("../../../assets/images/commodities/commodity04.png"),
          text: "浣彩网红质感小包包女包2020秋冬新款潮时尚感百搭单肩斜挎马鞍包. 白色",
          price: 119
        },
        {
          url: require("../../../assets/images/commodities/commodity05.png"),
          text: "晋戈莉2021夏季新款雪纺衬衫女时尚休闲气质减龄小衫短袖仙气荷叶袖条纹雪纺衬衫女洋气百搭上衣女 1189黑色条纹荷叶袖 L",
          price: 89
        },
        {
          url: require("../../../assets/images/commodities/commodity06.png"),
          text: "自动大雨伞s长柄抗风德国大号双人三人女超大号双层防风男士晴雨3646 120CM酒红单层2人",
          price: 128
        },
        {
          url: require("../../../assets/images/commodities/commodity07.png"),
          text: "珂朵尔 睡裙女2021夏季新款时尚公主风可爱卡通印花无袖背心裙中长款休闲清新大码家居服睡衣女3602 36022# L",
          price: 118
        },
        {
          url: require("../../../assets/images/commodities/commodity08.png"),
          text: "卡西欧(CASIO)男表 王一博代言小钢炮G-SHOCK潮流运动男士手表防水双显石英电子表 GM-110-1APR(王一博同款)",
          price: 1490
        },
        {
          url: require("../../../assets/images/commodities/commodity09.png"),
          text: "【顺丰物流配送】钻石克拉风幕机贯流0.9 1.2 1.8米空气幕自然风超市商场风帘机品质之选保用五年 【2021新款】0.9米 自然风按键款",
          price: 208
        },
        {
          url: require("../../../assets/images/commodities/commodity10.png"),
          text: "浣彩百搭ins包包女秋冬2020流行新款潮时尚斜挎包网红单肩小方包 黑色",
          price: 115
        },
        {
          url: require("../../../assets/images/commodities/commodity11.png"),
          text: "汐颜 修身显瘦中长款短袖蕾丝连衣裙女2021夏季新款女装气质减龄A字裙H-366-8071 蓝色 XL",
          price: 148
        },
        {
          url: require("../../../assets/images/commodities/commodity12.png"),
          text: "珂朵尔 睡衣女2021夏季新款韩版时尚女士休闲卡通印花短袖长裤两件套家居服可外穿73564 图片色 160(M)",
          price: 118
        },
        {
          url: require("../../../assets/images/commodities/commodity13.png"),
          text: "儿童雨衣女小学生男童雨披套装防水全身幼儿园宝宝上学衣加厚小孩ljm 粉独角兽【加厚耐穿 带大书包位】送收纳袋 加长防水 M",
          price: 72.6
        },
        {
          url: require("../../../assets/images/commodities/commodity14.png"),
          text: "Suns Martin品牌桑蚕丝裙子女新款圆领宽松显瘦印花春秋贵夫人气质阔太太真丝连衣裙女装 宝蓝 M （90-120）",
          price: 2068
        }
      ]
    };
  },
  methods: {
    open1() {
      this.$notify({
        title: "警告",
        message: "暂时没有该商品",
        type: "warning",
        position: "top-left",
        duration: 2000
      });
    }
  }
};
</script>

<style scoped>
#commodities {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

#commodities .commodity-item {
  flex: 1 40%;
  box-shadow: 0 0 15px rgba(0, 0, 0, .2);
  margin-bottom: 7px;
  border-radius: 12px 12px 5px 5px;
}

#commodities .commodity-item p {
  font-size: 10px;
  line-height: 1.6em;
  height: 100px;
}

#commodities .commodity-item:nth-child(2n-1) {
  margin-right: 7px;
}

#commodities .commodity-item img {
  width: 100%;
  display: block;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

#commodities .commodity-item span {
  color: #8bc17d;
  font-size: 14px;
}

.commodity-content {
  padding: 8px 8px 15px;
}

.commodity-content i {
  display: flex;
  width: 50px;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0;
  font-size: 10px;
  background: #F56C6C;
  padding: 4px 5px;
  color: #fff;
  border-radius: 4px;
}
</style>
