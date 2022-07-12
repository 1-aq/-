<template>
  <div class="app">
    <el-container>
      <el-aside width="200px">
        <Asids></Asids>
      </el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main><Main></Main></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Asids from "@/layin/Asids.vue";
import Header from "@/layin/Header.vue";
import Main from "@/layin/Main.vue";

export default {
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 载入后生命周期函数
  mounted() {
  },
  // 监听属性
  watch: {},
  // 使用data属性里面的方法
  methods: {
   
  },
  // 创建后
  created() {},
  components: {
    Asids,
    Header,
    Main,
  },
};
</script>
<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  // height: 100vh;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
