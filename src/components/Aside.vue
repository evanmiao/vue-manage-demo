<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#2c2c2c"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <div class="logo">

      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-data-line"></i>
          <span slot="title">采购价格看板管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">发布物料</el-menu-item>
          <el-menu-item index="1-2">物料管理</el-menu-item>
          <el-menu-item index="1-3">报价看板</el-menu-item>
          <el-menu-item index="1-4">购物车</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span slot="title">商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">发布物料</el-menu-item>
          <el-menu-item index="1-2">物料管理</el-menu-item>
          <el-menu-item index="1-3">报价看板</el-menu-item>
          <el-menu-item index="1-4">购物车</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">发布物料</el-menu-item>
          <el-menu-item index="1-2">物料管理</el-menu-item>
          <el-menu-item index="1-3">报价看板</el-menu-item>
          <el-menu-item index="1-4">购物车</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-star-off"></i>
          <span slot="title">收藏管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">发布物料</el-menu-item>
          <el-menu-item index="1-2">物料管理</el-menu-item>
          <el-menu-item index="1-3">报价看板</el-menu-item>
          <el-menu-item index="1-4">购物车</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span slot="title">企业信息</span>
        </template>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span slot="title">注册开户</span>
        </template>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span slot="title">支付管理</span>
        </template>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span slot="title">交易豆管理</span>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {}
};
</script>

<style scoped>
.el-menu-vertical-demo {
  min-height: 400px;
  float: left;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.logo {
  height: 40px;
  padding: 50px 0;
}

.el-radio-button {
  float: left;
}
</style>
