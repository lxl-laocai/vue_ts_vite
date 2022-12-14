import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw, Router } from "vue-router";

const defaultRoutes: RouteRecordRaw[] = [
  {
    path: "",
    redirect: "/index",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        name: "Index",
        path: "/index",
        component: () => import("@/views/index.vue"),
        meta: {
          title: "首页"
        }
      }
    ]
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/login"),
    meta: {
      hidden: true,
      title: "登录"
    }
  },
  {
    name: "NotPermission",
    path: "/401",
    component: () => import("@/views/error/401.vue"),
    meta: {
      hidden: true,
      title: "401"
    }
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error/404.vue"),
    meta: {
      hidden: true,
      title: "404"
    }
  }
];
const router: Router = createRouter({
  routes: defaultRoutes,
  history: createWebHistory(),
  strict:true,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
export default router;
