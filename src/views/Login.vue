<template>
  <div class="login">
    <div class="home">
      <h2>欢迎登录</h2>
      <el-form ref="form" :rules="rules" :model="LoginModel">
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            suffix-icon="el-icon-user-solid"
            v-model.trim="LoginModel.username"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            show-password
            suffix-icon="el-icon-s-goods"
            v-model.trim="LoginModel.password"
          ></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <div class="t">
            <el-input
              placeholder="请输入验证码"
              v-model.trim="LoginModel.code"
            ></el-input>
            <el-image
              :src="ImgList"
              style="
                width: 200px;
                height: 40px;
                border-radius: 5px;
                margin-left: 10px;
                cursor: pointer;
              "
              @click="GetImg()"
            />
          </div>
        </el-form-item>

        <el-form-item>
          <el-button class="dl" type="danger" :loading="loading" @click="add">{{
            loading ? "登录中..." : "立刻登录"
          }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { CapLogin, LoginList } from "@/api/loginList.js";
// import { login } from "@/api/loginList.js";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      loading: false,
      ImgList: "",
      LoginModel: {
        username: "duck",
        code: "",
        password: "admin888",
        token: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "用户密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          {
            min: 5,
            max: 5,
            message: "请输入正确的验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  // 计算属性
  computed: {},
  // 载入后生命周期函数
  mounted() {
    this.GetImg();
  },
  // 监听属性
  watch: {},
  // 使用data属性里面的方法
  methods: {
    // 获取img
    async GetImg() {
      const { captchaImg, token } = await CapLogin(this.LoginModel);
      this.ImgList = captchaImg;
      console.log(token);
      this.LoginModel.token = token;
    },
    // 登录验证
    async add() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.submitForm();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 登录提交
    async submitForm() {
      try {
        var token = await this.LoginList(this.LoginModel);
        if (!token) return;
        this.loading = true;
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions({
      LoginList: "user/LoginList",
    }),
  },
  // 创建后
  created() {
    this.GetImg();
  },
};
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background: url("@/assets/微信图片_20220711203628.jpg") no-repeat;
  padding-top: 100px;
  h2 {
    color: #fff;
    text-align: center;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .home {
    width: 500px;
    height: 300px;
    border: 1px solid red;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
  }
}
.t {
  display: flex;
  align-items: center;
}
.dl {
  width: 100%;
}
</style>
