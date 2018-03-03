<template>
  <div class="header">

    <span>你好，{{uname}}</span>

    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">

        <el-dropdown-item command="a">修改密码</el-dropdown-item>

        <el-dropdown-item command="b" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: localStorage.getItem("uname")
    };
  },
  methods: {
    logout() {
      this.$axios.get(this.$api.logout).then(res => {
        if (res.data.status == 0) {
          this.$alert("退出成功", "温馨提示", {
            callback: () => this.$router.push({ name: "login" })
          });
        }
      });
    },
    handleCommand(command) {
      if (command == "b") {
        this.logout();
      }
    }
  }
};
</script>

<style scoped lang="less">
.header {
  text-align: right;
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>