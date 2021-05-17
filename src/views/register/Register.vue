<template>
  <div id="register">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header @back="goBack" content="VShop登录注册" title="登录"/>
      </div>
      <form action="" class="register-form">
        <register-phone></register-phone>
        <register-button>
          <button slot="button" @click.prevent="btnClick">下一步</button>
        </register-button>
      </form>
      <register-dialog :vis="true"></register-dialog>
    </el-card>
  </div>
</template>
<script>
import RegisterDialog from "../../components/register/RegisterDialog";
import RegisterPhone from "../../components/register/RegisterPhone";
import RegisterButton from "../../components/register/RegisterButton";
export default {
  data() {
    return {
      numberValidateForm: {
        age: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goBack() {
      this.$router.push("/login")
    },
    btnClick(){

    }
  },
  components:{
    RegisterDialog,
    RegisterPhone,
    RegisterButton
  },

  beforeRouteEnter(to,from,next) {
    next()
  }
};
</script>

<style>
#register {
  overflow: hidden;
}
#register .register-form{
  padding-bottom: 58vh;
}
.register-form {
  width: 86vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
}
.el-form-item__label {
  font-size: 13px;
  width: 50px;
}
.el-input__inner {
  width: 80%;
}
#register form button {
  margin-top: 50px;
}
#register .el-card {
  margin: 0 auto;
}
</style>
