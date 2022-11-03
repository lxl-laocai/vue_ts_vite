import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw, Router } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/App.vue")
  },
  {
    path: "/hello",
    component: () => import("@/components/hello.vue")
  }
];
const router: Router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
