<template>
  <div class="cc">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
    
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 载入后生命周期函数
  mounted() {},
  // 监听属性
  watch: {},
  // 使用data属性里面的方法
  methods: {

  },
  // 创建后
  created() {
   
  },
};
</script>
<style lang="scss"></style>
