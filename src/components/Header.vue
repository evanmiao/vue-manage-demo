<template>
  <div class="header">
    <div class="user">
      <div class="left">
        <span class="hello">你好！user</span>
        <button class="switch">切换到供应商</button>
      </div>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <div class="exit">
        <i class="el-icon-circle-close"></i>
        <p>退出</p>
      </div>
    </div>
    <div class="header-nav">
      <a href="#">
        <i class="el-icon-menu"></i>
        产品服务
      </a>
      <a href="#">
        <i class="el-icon-s-platform"></i>
        工作台
      </a>
      <a href="#">
        <i class="el-icon-s-home"></i>
        首页
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader"
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #898989;
  .user {
    float: right;
    .left {
      float: left;
      height: 65px;
      padding: 15px 0 0 20px;
      border-left: 1px solid #898989;
      margin-top: 10px;
      .hello {
        color: #409eff;
        display: block;
        text-align: center;
      }
      .switch {
        width: 100px;
        height: 30px;
        border-radius: 3px;
        background: #409eff;
        color: #fff;
        margin-top: 5px;
      }
    }
    .el-avatar {
      float: left;
      width: 80px;
      height: 80px;
      margin: 10px 20px;
    }
    .exit {
      float: left;
      text-align: center;
      padding-top: 25px;
      margin-right: 20px;
      .el-icon-circle-close {
        font-size: 30px;
        color: #409eff;
        margin-bottom: 5px;
      }
    }
  }
  .header-nav {
    float: right;
    line-height: 100px;
    margin-right: 20px;
    a {
      margin: 10px;
      color: #898989;
    }
  }
}
</style>