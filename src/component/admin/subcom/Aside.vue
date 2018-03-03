<template>
  <div class="aside">
    <el-menu default-active="2" class="el-menu-vertical-demo" unique-opened @open="handleOpen" @close="handleClose" style="height:100%">

      <el-submenu v-for="item in meun" :key="item.title" :index="item.title">

        <template slot="title">
          <i class="el-icon-message"></i>
          <span>{{item.title}}</span>
        </template>

        <el-menu-item v-for="value in item.children" :key="value.title" :index="value.title">
          <i class="el-icon-document"></i>
        <router-link :to="value.path">{{value.title}}</router-link>
        </el-menu-item>

      </el-submenu>

    </el-menu>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      active: "",
      meun: [
        {
          title: "学员问题",
          children: [
            {
              title: "内容管理",
              path: "/a"
            },
            {
              title: "类别管理",
              path: "/b"
            },
            {
              title: "评论管理",
              path: "/c"
            }
          ]
        },
        {
          title: "前端功能",
          children: [
            {
              title: "内容管理",
              path: "/a"
            },
            {
              title: "类别管理",
              path: "/b"
            },
            {
              title: "评论管理",
              path: "/c"
            }
          ]
        },
        {
          title: "重点专区",
          children: [
            {
              title: "内容管理",
              path: "/a"
            },
            {
              title: "类别管理",
              path: "/b"
            },
            {
              title: "评论管理",
              path: "/c"
            }
          ]
        },
        {
          title: "资源下载",
          children: [
            {
              title: "内容管理",
              path: "/a"
            },
            {
              title: "类别管理",
              path: "/b"
            },
            {
              title: "评论管理",
              path: "/c"
            }
          ]
        },
        {
          title: "购物商城",
          children: [
            {
              title: "内容管理",
              path: "/admin/goods/list"
            },
            {
              title: "类别管理",
            path: "/admin/goods/detail"
            },
            {
              title: "评论管理",
             path: "/admin/goods/comment"
            }
          ]
        },
        {
          title: "订单管理",
          children: [
            {
              title: "内容管理",
              path: "/a"
            },
            {
              title: "类别管理",
              path: "/b"
            },
            {
              title: "评论管理",
              path: "/c"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;

  background: #fff;
}
.el-submenu {
  text-align: left;
}
.aside {
  overflow: hidden;
  line-height: 0;
}
</style>