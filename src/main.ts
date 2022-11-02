import { createApp } from "vue";

import App from "./App.vue";
import router from "./router"

import "normalize.css";
import "@/assets/css/common.css";

createApp(App).use(router).mount("#app");