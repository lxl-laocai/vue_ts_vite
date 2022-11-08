import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import 'animate.css';
import "normalize.css";
import "element-plus/dist/index.css";
import "font-awesome/css/font-awesome.min.css"
import "./assets/css/reset.css";

createApp(App).use(store).use(router).mount("#app");
