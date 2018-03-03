<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="margin: 20px 0" class="list">
      <el-button plain icon="el-icon-plus">新增</el-button>
      <el-button plain icon="el-icon-check">全选</el-button>
      <el-button plain icon="el-icon-delete" @click="delData">删除</el-button>

      <el-input placeholder="请输入内容" v-model="searchInput" class="search-btn" @blur="searchGetData">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>

    <!-- 表格 -->
    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%;height:500px;" @selection-change="handleSelectionChange">
      <!-- 多选框 -->
      <el-table-column type="selection" width="55">
      </el-table-column>

      <el-table-column label="标题">
        <template slot-scope="scope">
          <router-link :to="scope.row.title">{{ scope.row.title }}</router-link>
        </template>
      </el-table-column>

      <el-table-column prop="categoryname" label="所属类别" width="120">
      </el-table-column>

      <el-table-column prop="stock_quantity" label="库存" show-overflow-tooltip width="120">
      </el-table-column>

      <el-table-column prop="market_price" label="市场价" show-overflow-tooltip width="120">
      </el-table-column>

      <el-table-column prop="sell_price" label="销售价" show-overflow-tooltip width="120">
      </el-table-column>

      <el-table-column label="属性" show-overflow-tooltip width="120">
        <template slot-scope="scope">周晓康傻逼</template>
      </el-table-column>

      <el-table-column label="修改" show-overflow-tooltip width="50">
        <template slot-scope="scope">
          <router-link :to="scope.row.title">
            修改
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCont">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
      tableData3: [],
      multipleSelection: [],
      currentPage4: 1,
      totalCont: 0,
      pageSize: 10
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getData() {
      let api = `${this.$api.gsList}?pageIndex=${this.currentPage4}&pageSize=${
        this.pageSize
      }&searchvalue=${this.searchInput}`;
      this.$axios.get(api).then(res => {
        if (res.data.status == 0) {
          this.tableData3 = res.data.message;
          this.totalCont = res.data.totalcount;
        }
      });
    },
    searchGetData() {
      this.getData();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.getData();
    },
    delData() {
      let ids = this.multipleSelection.map(v => v.id);
      this.$axios.get(this.$api.gsDel + ids).then(res => {
        if (res.data.status == 0) {
          this.$alert("删除成功", "温馨提示", {
            callback: () => {
              this.getData();
            }
          });
        }
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped lang="less">
.list {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  .el-button {
    height: 30px;
    width: 60px;
    padding: 0;
    color: #000;
    font-weight: 400;
  }
  .search-btn {
    width: 200px;
    float: right;
    margin-bottom: 10px;
  }
}
</style>