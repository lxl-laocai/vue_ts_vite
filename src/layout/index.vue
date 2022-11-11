<template>
  <el-container>
    <AsideBar class="aside-container"></AsideBar>
    <el-container>
      <NavBar></NavBar>
      <MainPage></MainPage>
    </el-container>
  </el-container>
</template>

<script name="layout" lang="ts" setup>
import { AsideBar, NavBar, MainPage } from "./components";
</script>

<style scoped lang="scss">
.aside-container{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: $globalAsideWidth;
  height: 100%;
  transition: width .3s;
  z-index: 999;
  overflow: hidden;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  background-color:$globalAsideMenuDark;
}
</style>
