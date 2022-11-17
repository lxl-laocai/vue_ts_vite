import path from "path";
import { defineConfig, loadEnv } from "vite";

import { ViteServer, ViteBuild, ViteCss, VitePlugin } from "./vite";
// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_ENV } = env;
  console.log(VitePlugin(env, command === "build"));
  return {
    base: VITE_APP_ENV === "production" ? "/" : "/", // 设置为根路径
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    server: ViteServer(),
    build: ViteBuild(),
    css: ViteCss(),
    plugins: VitePlugin(env, command === "build")
  };
});
