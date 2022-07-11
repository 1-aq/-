<template>
  <div class="app">
    <div class="home">
      <h2>欢迎登录</h2>
      <el-form ref="form" :model="LoginModel">
        <el-form-item>
          <el-input
            placeholder="请输入用户名"
            suffix-icon="el-icon-user-solid"
            v-model.trim="LoginModel.username"
          ></el-input>
        </el-form-item>

        <el-form-item>
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
          /></div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="add">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { CapLogin, LoginList } from "@/api/loginList.js";
export default {
  name: "login",
  data() {
    return {
      ImgList: '',
      LoginModel: {
        username: "duck",
        code: "",
        password: "admin888",
        token:''
      },
    };
  },
  // 计算属性
  computed: {},
  // 载入后生命周期函数
  mounted() {},
  // 监听属性
  watch: {},
  // 使用data属性里面的方法
  methods: {
    async add() {
      const res = await CapLogin(this.LoginModel);
      this.ImgList=res.data.data.captchaImg
      this.token=res.data.data.token
      console.log(res);
    },
  },
  // 创建后
  created() {
    // this.CapLogin()
  }
}
</script>
<style lang="scss">
.app {
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
.t{
  display: flex;
  align-items: center;
}
</style>
