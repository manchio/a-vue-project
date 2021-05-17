<template>
  <div id="card">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="countdown">VUE秒杀倒计时：
          <i class="el-icon-timer"></i>
          <span class="countdown-item">
            <b>{{ addPreZero(hours) }}</b>:
            <b>{{ addPreZero(minute) }}</b>:
            <b>{{ addPreZero(second) }}</b>
          </span>
        </span>
        <el-button style="float: right; padding:3px 0" type="text">抢购</el-button>
      </div>
      <card-body></card-body>
    </el-card>
  </div>
</template>

<script>
import CardBody from "./CardBody";
export default {
  name: "Card",
  data() {
    return {
      second: 60,
      minute: 24,
      hours: 1
    };
  },
  components:{
    CardBody
  },
  mounted: function () {
    setInterval(() => {
      this.second--;
      if (this.second <= 0) {
        this.minute--;
        this.second = 60;
      }
      if (this.minute <= 0) {
        this.hours--;
        this.minute = 60;
      }
      if (this.hours <= 0) {
        clearInterval(1);
      }
    }, 1000);
  },
  methods: {
    addPreZero(num) {
      if (num < 10) {
        return ("0" + num).slice(-10);
      }
      return num;
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.countdown {
  font-size: 14px;
}

.box-card {
  /*width: 100vw;*/
  margin: 8px auto 0;
}
#card .countdown-item b {
  transform: translateY(-1px);
  display: inline-block;
  font-weight: normal;
  font-size: 12px;
  background: #8bc17d;
  padding: 2px;
  border-radius: 4px;
  vertical-align: center;
  color: #fff;
}
.el-card__body{
  padding: .8em;
  margin-bottom: 49px;
  height: auto;
}
</style>
