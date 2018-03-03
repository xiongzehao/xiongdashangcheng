<template>
  <div class="admin">

    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <m-aside></m-aside>
        </el-aside>
        <el-main>
         
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";
export default {
  components: {
    AppHeader: Header,
    MAside: Aside
  }
};
</script>

<style scoped lang="less">
.admin {
  height: 100%;
}
.el-header {
  line-height: 60px;
}
.el-container {
  height: 100%;
  .el-aside {
    text-align: center;
    // line-height: 200px;
    height: 100%;
    background-color: #fff;
  }

  .el-main {
    background-color: #fff;
  }
}
</style>