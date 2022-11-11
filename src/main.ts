import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";

import "animate.css";
import "normalize.css";
import "./assets/css/reset.css";
import "element-plus/dist/index.css";
import "font-awesome/css/font-awesome.min.css";

import { registerIconComponent } from "./utils";

const app = createApp(App);
registerIconComponent(app);
app.use(store);
app.use(router);
app.mount("#app");
