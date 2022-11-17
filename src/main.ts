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

import request from "@/service";
// import dd from "gdt-jsapi"
// dd.ready(() => {
//   dd.authConfig({ticket:"jsApi_23eb50ed749b45e288e06ff5a71b3b56",jsApiList:["previewDoc"]}).then(r=>{
//     console.log(2);
//     console.log(r);
//   }).catch(err => {
//     console.log(3);
//     console.log(err);
//   })
// })
request
  .post<any>({
    url: "/login",
    data: {
      name: "coderwhy",
      password: "123456"
    }
  })
  .then((res) => {
    console.log(1);
    console.log(res.data.accessToken);
  });

const app = createApp(App);
registerIconComponent(app);
app.use(store);
app.use(router);
app.mount("#app");
