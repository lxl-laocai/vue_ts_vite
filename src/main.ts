import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "normalize.css";
import "element-plus/dist/index.css";
import "./assets/css/common.css";
import request from "@/service";

request.request({
  params: { name: "lxl" },
  reduceDataFormat: false,
  interceptors: {
    responseInterceptor(config) {
      console.log("api请求");
      return config;
    }
  }
}).then(res => {
  console.log(res);
});
createApp(App).use(store).use(router).mount("#app");
