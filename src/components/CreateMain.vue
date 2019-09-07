<template>
  <div class="container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>企业工作台</el-breadcrumb-item>
      <el-breadcrumb-item>采购报价看板管理</el-breadcrumb-item>
      <el-breadcrumb-item>发布物料</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- Tab 切换 -->
    <el-tabs type="border-card">
      <el-tab-pane label="发布物料">
        <!-- 表单 -->
        <el-form :model="form" :rules="rules" ref="form" label-width="100px">
          <!-- 加背景色的盒子 -->
          <div class="form-part">
            <!-- 应用类 input -->
            <el-form-item label="应用类" prop="use">
              <el-col :span="10">
                <el-input v-model="form.use"></el-input>
              </el-col>
            </el-form-item>
            <!-- 物料类-->
            <el-form-item label="物料类" prop="class" :inline="true">
              <!-- disabled 选择框 -->
              <el-select v-model="form.class0" disabled></el-select>
              <!-- 三级联动下拉选择框 -->
              <el-select v-model="form.class1" placeholder="请选择大类" @change="changeClass1">
                <el-option v-for="item in form.classList" :key="item.id" :value="item.value"></el-option>
              </el-select>
              <el-select v-model="form.class2" placeholder="请选择子类" @change="changeClass2">
                <el-option v-for="item in form.classList2" :key="item.id" :value="item.value"></el-option>
              </el-select>
              <el-select v-model="form.class3" placeholder="请选择小类">
                <el-option v-for="item in form.classList3" :key="item.id" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <!-- 物料名称 input -->
            <el-form-item label="物料名称" prop="name">
              <el-col :span="10">
                <el-input v-model="form.name"></el-input>
              </el-col>
            </el-form-item>
            <!-- 截止日期 -->
            <el-form-item prop="date" label="截止日期" required>
              <el-col :span="10">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
            </el-form-item>
          </div>
          <!-- 加背景色的盒子 -->
          <div class="form-part">
            <!-- 结算方式 -->
            <el-form-item label="结算方式" prop="resource">
              <!-- 单选按钮组 -->
              <el-radio-group v-model="form.resource" @change="changeRadio">
                <el-col class="radio-item">
                  <el-radio label="现金电汇"></el-radio>
                </el-col>
                <el-col class="radio-item">
                  <el-radio label="承兑汇票"></el-radio>
                </el-col>
                <el-col class="radio-item">
                  <el-radio label="预付定金"></el-radio>
                  <!-- 定金百分比 -->
                  <el-input size="mini" class="mini-width" type="number"></el-input>
                  <span class="radio-text">%；剩余货款</span>
                  <!-- 还款日期 -->
                  <el-date-picker type="date" class="mini-width" size="mini"></el-date-picker>
                  <span class="radio-text">支付</span>
                </el-col>
                <el-col class="radio-item">
                  <el-radio label="账期"></el-radio>
                  <!-- 分期天数 -->
                  <el-date-picker type="date" class="mini-width" size="mini"></el-date-picker>
                  <span class="radio-text">天</span>
                  <!-- 付款方式 -->
                  <el-select size="mini" placeholder="请选择付款方式" v-model="form.pay"></el-select>
                </el-col>
              </el-radio-group>
            </el-form-item>
          </div>
          <!-- 发布按钮 -->
          <el-button type="primary" @click="submitForm('form')">发布</el-button>
        </el-form>
      </el-tab-pane>
      <!-- Tab 切换 第二页 -->
      <el-tab-pane label="批量添加">批量添加</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateMain",
  data() {
    return {
      form: {
        use: "",
        name: "",
        classList: null,
        classList2: null,
        classList3: null,
        class0: "原材料",
        class1: "",
        class2: "",
        class3: "",
        date: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        pay: ""
      },
      rules: {
        use: [
          { required: true, message: "请输入应用类", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入物料名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        class: [
          { required: false, message: "请选择物料类", trigger: "change" }
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择结算方式", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 弹框
          this.$confirm("确定发布该物料？", "提示", {
            type: "info"
          })
            .then(() => {
              // 发布物料
              this.createItem();
              this.$message({
                type: "success",
                message: "发布成功!"
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消发布"
              });
            });
        } else {
          this.$message({
            type: "error",
            message: "请补全表单项"
          });
          return false;
        }
      });
    },
    // 发布物料
    createItem() {
      // 创建一个对象 把表单的值赋给它
      var newObj = {
        use: this.form.use,
        name: this.form.name,
        status: "已上架"
      };
      // 获取三级联动的值并赋给新对象 从最小一级往上找
      if (this.form.class3) {
        newObj.class = this.form.class3;
      } else if (this.form.class2) {
        newObj.class = this.form.class2;
      } else if (this.form.class1) {
        newObj.class = this.form.class1;
      } else {
        newObj.class = this.form.class0;
      }
      // 将新对象添加到 localStorge
      if (localStorage.tableData) {
        var tableData = JSON.parse(localStorage.tableData);
        tableData.unshift(newObj);
        localStorage.tableData = JSON.stringify(tableData);
      } else {
        that = this;
        // 如果 localStorge 中没有则请求本地数据 并添加到 localStorge
        axios.get("static/tableData.json").then(function(response) {
          if (response.status == 200) {
            var tableData = JSON.stringify(response.data.unshift(newObj));
            localStorage.setItem("tableData", tableData);
          }
        });
      }
      this.$router.push({ path: "/manage" });
    },
    // 一级选择框 change 事件
    changeClass1(e) {
      // 清空下级选择框 value 值
      this.form.class2 = "";
      this.form.class3 = "";
      // 遍历数据
      for (var index in this.form.classList) {
        // 找出当前选项
        if (e === this.form.classList[index].value) {
          // 当前选项数据的 children 绑定子选择框
          this.form.classList2 = this.form.classList[index].children;
        }
      }
    },
    // 二级选择框 change 事件
    changeClass2(e) {
      this.form.class3 = "";
      for (var index in this.form.classList2) {
        if (e === this.form.classList2[index].value) {
          this.form.classList3 = this.form.classList2[index].children;
        }
      }
    },
    // 单选按钮组 change 事件
    changeRadio(e) {
      console.log(e);
    }
  },
  mounted: function() {
    var that = this;
    // 请求本地 JSON 数据
    axios.get("static/data.json").then(function(response) {
      if (response.status == 200) {
        // 绑定到一级选择框
        that.form.classList = response.data;
      }
    });
    // 如果有路由传参 则将参数绑定到表单
    if (this.$route.params.edit) {
      this.form.use = this.$route.params.edit.use;
      this.form.name = this.$route.params.edit.name;
      this.form.class3 = this.$route.params.edit.class;
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
  .form-part {
    padding: 30px 0 20px;
    margin-bottom: 20px;
    background: #f3f3f3;
  }
  .radio-item {
    margin-top: 12px;
  }
  .mini-width {
    width: 60px;
  }
  .radio-text {
    font-size: 14px;
    margin: 5px;
  }
}
</style>