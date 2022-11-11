<template>
  <el-menu
    active-text-color="#ffd04b"
    :background-color="variables.AsideMenuDark"
    default-active="2"
    text-color="#fff"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>

        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script name="MenuList" lang="ts" setup>
import variables from "@/assets/css/export.module.scss"

console.log(variables);
</script>

<style scoped>

</style>
