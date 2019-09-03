<template>
  <div>
    <side-bar></side-bar>
    <page-header></page-header>
  </div>
</template>

<script>
import SideBar from "./Aside";
import PageHeader from "./Header";

export default {
  name: "HomeHeader",
  components: {
    SideBar,
    PageHeader
  } 
};
</script>

<style>
</style>