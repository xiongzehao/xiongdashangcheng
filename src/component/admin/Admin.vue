<template>
    <div class="admin">

        <el-container>
            <el-aside width="200px">
                <m-aside></m-aside>
            </el-aside>
            <el-container>
                <el-header>
                    <app-header></app-header>
                </el-header>
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
 .el-header, .el-footer {
    line-height: 60px;
  }
 .el-container {
    height: 100%;
    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
      height: 100%;
    }

    .el-main {
      background-color: #e9eef3;
    }
  }
</style>