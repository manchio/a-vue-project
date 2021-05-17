<template>
  <div id="register-dialog">
    <!--    <el-button type="text" @click="">点击打开 Dialog</el-button>-->
    <el-dialog
      title="注册协议及隐私政策"
      :visible.sync="dialogVisible"
      width="92%"
      :before-close="handleClose"
      :vis="vis">
      <div class="scroll">
        <p>在您注册成为VShop用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，</p>
        <p class="line">请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：</p>
        <p class="scheme">《VShop用户注册协议》</p>
        <p class="scheme">《VShop隐私政策》</p>
        <p class="scheme">《订单共享与安全》</p>
        <p>如您对以上协议内容有任何疑问，您可随时与VShop客服联系。</p>
        <p class="line">
          【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意京东可以依据以上的隐私政策内容来处理您的个人信息。
        </p>
      </div>
      <div class="approve">点击同意即表示您已阅读并同意《VShop用户注册协议》与《VShop隐私政策》 并将您的订单信息共享给为完成此订单所必须的第三方合作方。关于 《订单共享与安全》</div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">不 同 意</el-button>
    <el-button type="primary" @click="dialogVisible = false">同 意</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    vis: false
  },
  data() {
    return {
      dialogVisible: this.vis
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {
        });
    },
    cancel() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
#register-dialog .el-dialog__body p {
  line-height: 1.8em;
  font-size: 14px;
}

#register-dialog .el-dialog__body .line {
  text-decoration: underline;
}

#register-dialog .scheme {
  margin-left: 20px;
}

.scroll {
  height: 200px;
  overflow: scroll;
}

.approve {
  margin-top: 8px;
  padding: 8px 0;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
}

/*.el-dialog__body*/
</style>
