import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "normalize.css";
import "element-plus/dist/index.css";
import "font-awesome/css/font-awesome.min.css"
import "./assets/css/common.css";

createApp(App).use(store).use(router).mount("#app");
