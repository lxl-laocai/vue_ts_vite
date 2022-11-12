<template>
  <el-menu mode="vertical"
           :background-color="variables.AsideMenuDark"
           active-text-color="#409eff"
           text-color="#bfcbd9"
           unique-opened
           :collapse="isCollapse"
  >
    <SubMenu v-for="(item,index) in menuList" :items="item" :key="index"/>
  </el-menu>

</template>

<script name="MenuList" lang="ts" setup>
import SubMenu from "./SubMenu.vue";
import variables from "@/assets/css/export.module.scss";
import menuList from "@/model/menu.json"
const isCollapse = ref(false);
console.log(menuList);
</script>

<style scoped>

</style>
