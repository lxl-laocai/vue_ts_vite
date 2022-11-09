import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw, Router } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main.vue")
  },
  {
    path: "/login",
    name:"login",
    component: () => import("@/views/login")
  }
];
const router: Router = createRouter({
  routes,
  history: createWebHistory()
});
router.beforeEach((to, from) => {
  // console.log(to,from);
  return true;
});
export default router;
