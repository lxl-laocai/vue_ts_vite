<template>
  <div class="w-full h-full overflow-hidden bg-[#fff]">
    <div class="errPage-container">
      <el-button class="pan-back-btn" @click="back">
        返回
      </el-button>
      <el-row>
        <el-col :span="12">
          <h1 class="text-jumbo text-ginormous">
            401错误!
          </h1>
          <h2>您没有访问权限！</h2>
          <h6>对不起，您没有访问权限，请不要进行非法操作！您可以返回主页面</h6>
          <router-link to="/">
              回首页
          </router-link>
        </el-col>
        <el-col :span="12">
          <img :src="image" width="313" height="428" alt="Girl has dropped her ice cream." />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script name="NotPermission" lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import type { ComputedRef } from "vue";

const route = useRoute();
const router = useRouter();
const image: ComputedRef = computed(() => new URL("@/assets/images/error/401.gif", import.meta.url).href);
const back = () => {
  if (route.query.redirect) {
    router.push({ path: "/" });
  } else {
    router.go(-1);
  }
};

</script>

<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;

  .pan-back-btn {
    background: #008489;
    color: #fff;
    border: none !important;
  }

  .pan-gif {
    margin: 0 auto;
    display: block;
  }

  .pan-img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }

  a {
    color: #008489;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
