<template>
  <div id="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header @back="goBack" content="登录"/>
      </div>
      <form action="" class="login-from">
        <register-phone></register-phone>
        <register-verify></register-verify>
        <register-button>
          <button slot="button">登录</button>
        </register-button>
      </form>
      <el-footer>
        <div class="register">
          <a href="">账号密码登录</a>
          <router-link to="/register" tag="a">手机快速注册</router-link>
        </div>
      </el-footer>
      <other-login></other-login>
    </el-card>

  </div>

</template>
<script>
import OtherLogin from "../../components/login/OtherLogin";
import RegisterPhone from "../../components/register/RegisterPhone";
import RegisterVerify from "../../components/register/RegisterVerify";
import RegisterButton from "../../components/register/RegisterButton";
export default {
  data() {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const checkUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
        username: ""
      },
      rules: {
        pass: [
          {validator: validatePass, trigger: "blur", required: true}
        ],
        checkPass: [
          {validator: validatePass2, trigger: "blur", required: true}
        ],

        username: [
          {validator: checkUsername, trigger: "blur", required: true}
        ]
      }
    };
  },
  methods: {
    goBack() {
      this.$router.push("/home");
    },
    submitForm(formName) {
      this.$confirm("此操作将提交, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
        this.$message({
          type: "success",
          message: "提交成功!"
        });
      }).catch(() => {
        this.$message({
          type: "info",
          message: "已取消"
        });
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  components:{
    OtherLogin,
    RegisterPhone,
    RegisterVerify,
    RegisterButton
  }
};
</script>

<style>
#login {
  overflow: hidden;
}
.login-from {
  width: 86vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
}

body {
  background: #fff;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.el-card {
  margin: 0 !important;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.el-card__body {
  padding: 20px 0;
}

.el-form-item__label {
  font-size: 14px;
}

.el-page-header__content {
  font-size: 18px;
}

.el-input__inner {
  height: 36px;
}

.box-card {
  width: 100vw;
  margin: 0 auto;
}

.register {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 13px;
  margin-top: 20px;
  justify-content: space-between;
}

.register a {
  padding: 0 3px;
  color: #555;
}

.el-card__body {
  /*height: 80vh*/
  height: auto;
}
</style>
