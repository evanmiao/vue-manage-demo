<template>
  <el-container>
    <side-bar></side-bar>
    <el-container>
      <el-header height="100px">
        <page-header></page-header>
      </el-header>
      <el-main>
        <create-main></create-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from "../components/Aside";
import PageHeader from "../components/Header";
import CreateMain from "../components/CreateMain";

export default {
  name: "Create",
  components: {
    SideBar,
    PageHeader,
    CreateMain
  }
};
</script>

<style>
</style>