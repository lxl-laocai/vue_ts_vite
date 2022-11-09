import type { App as AppType } from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "animate.css";
import "normalize.css";
import "element-plus/dist/index.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/css/reset.css";

import { registerIconComponent } from "@/config";

const app: AppType = createApp(App);
registerIconComponent(app);
app.use(store);
app.use(router);
app.config.errorHandler = (err, vm, info) => {
  console.error("[全局异常]", err, vm, info);
};
app.mount("#app");
