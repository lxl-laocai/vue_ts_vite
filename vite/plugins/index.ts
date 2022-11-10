import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

import Icons from "./Icons";
import AutoImport from "./AutoImports";
import Components from "./Components";
import Compression from "./Compression";

export default function createVitePlugins(viteEnv, isBuild = false):PluginOption[] {
  const plugins: any = [
    vue(), // vue vite 对 vue 支持
    vueJsx(),// vueJsx vite 对 jsx 支持
    VueSetupExtend(),// 定义组件的 name 值
  ];
  plugins.push(Icons());
  plugins.push(AutoImport());
  plugins.push(Components());
  isBuild && plugins.push(Compression(viteEnv));
  return plugins;
}
