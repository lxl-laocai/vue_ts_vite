import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getStorage } from "@/utils";

// 关闭加载微调器
NProgress.configure({ showSpinner: false });
const whiteList = ["/login"];

router.beforeEach((to, from) => {
  return true;
  NProgress.start();
  if (getStorage("token")) {
    if (to.path === "/login") {
      NProgress.done();
      return { path: "/" };
    } else {
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      return true;
    } else {
      NProgress.done();
      return `/login?redirect=${to.fullPath}`; // 否则全部重定向到登录页
    }
  }
});

router.afterEach((guard) => {
  console.log(guard.meta.title);
  NProgress.done();
});
