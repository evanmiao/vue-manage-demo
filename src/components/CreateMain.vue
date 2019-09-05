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
        <el-form :model="form" :rules="rules" ref="form" label-width="100px">
          <div class="form-part">
            <el-form-item label="应用类" prop="use">
              <el-col :span="10">
                <el-input v-model="form.use"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="物料类" prop="class" :inline="true">
              <el-select v-model="form.class0" disabled></el-select>
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
            <el-form-item label="物料名称" prop="name">
              <el-col :span="10">
                <el-input v-model="form.name"></el-input>
              </el-col>
            </el-form-item>
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
          <div class="form-part">
            <el-form-item label="结算方式" prop="resource">
              <el-radio-group v-model="form.resource" @change="changeRadio">
                <el-col class="radio-item">
                  <el-radio label="现金电汇"></el-radio>
                </el-col>
                <el-col class="radio-item">
                  <el-radio label="承兑汇票"></el-radio>
                </el-col>
                <el-col class="radio-item">
                  <el-radio label="预付定金"></el-radio>
                  <el-input size="mini" class="mini-width" type="number"></el-input>
                  <span class="radio-text">%；剩余货款</span>
                  <el-date-picker type="date" class="mini-width" size="mini"></el-date-picker>
                  <span class="radio-text">支付</span>
                </el-col>
                <el-col class="radio-item">
                  <el-radio label="账期"></el-radio>
                  <el-date-picker type="date" class="mini-width" size="mini"></el-date-picker>
                  <span class="radio-text">天</span>
                  <el-select size="mini" placeholder="请选择付款方式" v-model="form.pay"></el-select>
                </el-col>
              </el-radio-group>
            </el-form-item>
          </div>
          <el-button type="primary" @click="submitForm('form')">发布</el-button>
        </el-form>
      </el-tab-pane>
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
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        class: [{ required: true, message: "请选择物料类", trigger: "change" }],
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
    },
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
    changeRadio(e) {
      console.log(e)
    }
  },
  mounted: function() {
    var that = this;
    axios.get("static/data.json").then(function(response) {
      if (response.status == 200) {
        that.form.classList = response.data;
      }
    });
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