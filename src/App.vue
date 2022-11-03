<script lang="ts" setup>
import { useUserStore } from "@/store";

const userStore = useUserStore();
console.log(userStore.userInfoGetter.username);
let arr: any = [1, 2, 3, 4, 5, 6, 7];
console.log(arr, "*-*-*-");
</script>

<template>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">{{ arr }}</el-button>
  <img draggable="false" src="./assets/images/02.jpg" alt="">
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <router-link to="/hello">
    hello
  </router-link>
  <router-view></router-view>
</template>
<style scoped lang="scss">
img {
  width: 100px;
}
</style>
