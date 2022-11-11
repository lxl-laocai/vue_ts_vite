<template>
  <div>
    <SideLogo />
    <el-aside>
      <el-scrollbar>
        <MenuList></MenuList>
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script name="AsideBar" lang="ts" setup>
import SideLogo from "./SideLogo.vue";
import MenuList from "./MenuList.vue";
</script>

<style scoped lang="scss">

</style>
