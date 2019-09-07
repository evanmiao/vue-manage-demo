<template>
  <el-container>
    <side-bar></side-bar>
    <el-container>
      <el-header height="100px">
        <page-header></page-header>
      </el-header>
      <el-main>
        <manage-main></manage-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from "../components/Aside";
import PageHeader from "../components/Header";
import ManageMain from "../components/ManageMain";

export default {
  name: "Manage",
  components: {
    SideBar,
    PageHeader,
    ManageMain
  }
};
</script>

<style>
</style>