<template>
  <form action="">
    <div id="nav-search" :class="{ bgc: bg }">
      <div class="icon" @click="drawer = true">
        <slot name="icon"></slot>
      </div>
      <div class="search">
        <label for="search">
          <slot name="search_icon"></slot>
        </label>
        <slot name="search"></slot>
      </div>
      <div class="login">
        <slot name="login"></slot>
      </div>
      <div slot="drawer">
        <el-drawer
          title="商品分类"
          :visible.sync="drawer"
          :direction="direction"
          :size="'60%'">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>首页商品</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">衣服</template>
                    <el-menu-item index="1-1">长袖</el-menu-item>
                    <el-menu-item index="1-2">卫衣</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="鞋">
                    <el-menu-item index="1-3">运动鞋</el-menu-item>
                    <el-menu-item index="1-3">休闲鞋</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">更多分类</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">帽子</el-menu-item>
                    <el-menu-item index="2-2">二手车</el-menu-item>
                    <el-menu-item index="2-2">大衣</el-menu-item>
                    <el-menu-item index="2-2">办公</el-menu-item>
                    <el-menu-item index="2-2">鞋子</el-menu-item>
                    <el-menu-item index="2-2">长袖</el-menu-item>
                    <el-menu-item index="2-2">运动</el-menu-item>
                    <el-menu-item index="2-2">毛衣</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="3">
                  <i class="el-icon-document"></i>
                  <span slot="title">我的订单</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">个人消息</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-drawer>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "NavSearch",
  props: {
    bg: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {
        });
    }
  },
  data() {
    return {
      drawer: false,
      direction: "ltr",
      size: "600"
    };
  }
};
</script>

<style scoped>
.bgc {
  background: #fff !important;
}

#nav-search {
  display: flex;
  height: 26px;
  padding: 8px 0;
  background: #8bc17d;
}

#nav-search > * {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#nav-search .icon {
  flex: 1.5;
}

#nav-search .search {
  flex: 7;
  width: 100%;
  position: relative;
}

#nav-search .search label {
  position: absolute;
  left: 12px;
  top: 5px;
}

#nav-search .search label img {
  height: 15px;
  border-right: 1px solid #ccc;
  padding-right: 12px;
}

#nav-search .search input {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding-left: 55px;
  color: #888;
  /*border: 1px solid ;*/
  border: none;
  outline: none;
}

#nav-search .login {
  flex: 1.5;
}

#nav-search .login a {
  color: #f5f5f5;
}
</style>
