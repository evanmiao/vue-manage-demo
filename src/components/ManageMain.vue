<template>
  <div class="container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>企业工作台</el-breadcrumb-item>
      <el-breadcrumb-item>采购报价看板管理</el-breadcrumb-item>
      <el-breadcrumb-item>物料管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 表单 -->
    <el-form :model="form" ref="form" label-width="0" size="mini">
      <!-- 三级联动下拉选择框 -->
      <el-form-item prop="class" :inline="true">
        <el-select v-model="form.class1" placeholder="请选择大类" @change="changeClass1">
          <el-option v-for="item in form.classList" :key="item.id" :value="item.value"></el-option>
        </el-select>
        <el-select v-model="form.class2" placeholder="请选择子类" @change="changeClass2">
          <el-option v-for="item in form.classList2" :key="item.id" :value="item.value"></el-option>
        </el-select>
        <el-select v-model="form.class3" placeholder="请选择小类">
          <el-option v-for="item in form.classList3" :key="item.id" :value="item.value"></el-option>
        </el-select>
        <!-- 状态 上架/下架 -->
        <el-select v-model="form.status" placeholder="请选择状态">
          <el-option :value="'已上架'"></el-option>
          <el-option :value="'已下架'"></el-option>
        </el-select>
        <!-- 选择日期 -->
        <el-date-picker
          v-model="form.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-input v-model="form.use" placeholder="请输入应用类/品牌/牌号/产地"></el-input>
        <!-- 搜索按钮 -->
        <el-button type="primary" @click="search('form')">搜索</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%"
      height="500"
      size="mini"
      border
    >
      <el-table-column prop="use" label="应用类" width="120" align="center"></el-table-column>
      <el-table-column prop="class" label="物料类" width="120" align="center"></el-table-column>
      <el-table-column prop="name" label="物料名称" width="240" align="center"></el-table-column>
      <el-table-column prop="brand" label="品牌" width="120" align="center"></el-table-column>
      <el-table-column prop="model" label="牌号" width="120" align="center"></el-table-column>
      <el-table-column prop="format" label="规格" width="140" align="center"></el-table-column>
      <el-table-column prop="address" label="产地" width="120" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" width="120" align="center"></el-table-column>
      <el-table-column label="操作" width="240" align="center">
        <template slot-scope="scope">
          <el-button @click="delivery(scope.row)" type="text" size="small">上架/下架</el-button>
          <el-button @click="copy(scope.row)" type="text" size="small">复制物料</el-button>
          <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteItem(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50" @current-change="currentChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Manage",
  data() {
    return {
      form: {
        use: "",
        date: "",
        status: "",
        class1: "",
        class2: "",
        class3: "",
        classList: "",
        classList2: "",
        classList3: ""
      },
      pageSize: 10,
      currentPage: 1,
      tableData: []
    };
  },
  methods: {
    // 三级联动选择框的 change 事件
    changeClass1(e) {
      this.form.class2 = "";
      this.form.class3 = "";
      for (var index in this.form.classList) {
        if (e === this.form.classList[index].value) {
          this.form.classList2 = this.form.classList[index].children;
        }
      }
    },
    changeClass2(e) {
      this.form.class3 = "";
      for (var index in this.form.classList2) {
        if (e === this.form.classList2[index].value) {
          this.form.classList3 = this.form.classList2[index].children;
        }
      }
    },
    // 搜索
    search(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 上架/下架
    delivery(e) {
      if (e.status === "已下架") {
        this.$confirm("确定上架该物料？", "提示", { type: "info" })
          .then(() => {
            e.status = "已上架";
            this.$message({
              type: "success",
              message: "上架成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
      } else {
        this.$confirm("确定下架该物料？", "提示", { type: "info" })
          .then(() => {
            e.status = "已下架";
            this.$message({
              type: "success",
              message: "下架成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
      }
    },
    // 复制货物
    copy(e) {
      var newObj = {};
      for (var key in e) {
        // 将每个属性复制到 newObj 对象
        newObj[key] = e[key];
      }
      this.tableData.unshift(newObj);
    },
    // 编辑
    edit(e) {
      this.$router.push({
        path: "/",
        name: "Create",
        params: {
          edit: e
        }
      });
    },
    // 删除按钮事件
    deleteItem(e) {
      // 弹框
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        type: "warning"
      })
        .then(() => {
          // 删除
          for (var index in this.tableData) {
            if (e === this.tableData[index]) this.tableData.splice(index, 1);
          }
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 分页
    currentChange: function(currentPage) {
      this.currentPage = currentPage;
    }
  },
  mounted: function() {
    var that = this;
    axios.get("static/data.json").then(function(response) {
      if (response.status == 200) {
        that.form.classList = response.data;
      }
    });
    // 从 localStorge 中取出数据
    if (localStorage.tableData) {
      this.tableData = JSON.parse(localStorage.tableData);
    } else {
      // 如果 localStorge 中没有则请求本地数据 并添加到 localStorge
      axios.get("static/tableData.json").then(function(response) {
        if (response.status == 200) {
          // localStorge 只能存储字符串数据
          var tableData = JSON.stringify(response.data);
          localStorage.setItem("tableData", tableData);
          // 绑定到模板的 tableData 属性
          that.tableData = JSON.parse(localStorage.tableData);
        }
      });
    }
  },
  // 侦听器
  watch: {
    // 侦听 tableData 的改变 并实时写入 localStorge
    tableData(newTableData) {
      localStorage.tableData = JSON.stringify(newTableData);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 40px;
  .el-breadcrumb {
    margin-top: 10px;
  }
  .el-select,
  .el-input {
    width: 120px;
  }
  .block {
    margin: 10px auto;
    text-align: center;
  }
}
</style>