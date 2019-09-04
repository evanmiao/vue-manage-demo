<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>企业工作台</el-breadcrumb-item>
      <el-breadcrumb-item>采购报价看板管理</el-breadcrumb-item>
      <el-breadcrumb-item>发布物料</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <el-tabs type="border-card">
      <el-tab-pane label="发布物料">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="应用类" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="批量添加">批量添加</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "PageMain",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
}
</style>