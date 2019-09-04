<template>
  <el-container>
    <side-bar></side-bar>
    <el-container>
      <el-header height="100px">
        <page-header></page-header>
      </el-header>
      <el-main>
        <page-main></page-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from "./Aside";
import PageHeader from "./Header";
import PageMain from "./Main";

export default {
  name: "HomeHeader",
  components: {
    SideBar,
    PageHeader,
    PageMain
  }
};
</script>

<style>
</style>