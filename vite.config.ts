import path from "path";
import { defineConfig,loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import type { PreRenderedAsset } from "rollup";
import viteCompression from "vite-plugin-compression";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/dist/resolver";
import Icons from "unplugin-icons/dist/vite";
// https://vitejs.dev/config/

// @ts-ignore
export default defineConfig(({ mode, command }) => {
  console.log(process.cwd());
  console.log(mode);
  console.log(command);
  const env = loadEnv(mode,process.cwd())
  return {
    base: "./", // 公共基础路径
    server: {
      host: "0.0.0.0",
      port: 3000,
      hmr: true,
      open: true,
      https: false
    },
    build: {
      outDir: "./build", // 设置打包文件夹名称
      minify: "terser", // 指定混淆器  terser需要安装包
      terserOptions: { // 传递给 Terser 的选项
        compress: { // 打包删除 console debugger
          drop_console: false,
          drop_debugger: true
        }
      },
      manifest: true, // 生成 manifest.json文件 输入源文件和 hash 后文件的映射
      sourcemap: true, // 生成 sourcemap 文件映射 定位错误查看源代码等
      rollupOptions: {
        output: {
          // dir:"build",
          entryFileNames: "js/[name]-[hash]-[format].js",
          chunkFileNames: "js/[name]-[hash]-[format].js",
          assetFileNames(chunkInfo: PreRenderedAsset): string {
            const suffix = chunkInfo.name.split(".").pop().toLowerCase();
            if (["jpg", "png", "gif", "jpeg", "webp"].includes(suffix)) {
              return "img/[name]-[hash].[ext]";
            }
            if (["eot", "ttf", "svg", "woff", "woff2"].includes(suffix)) {
              return "font/[name]-[hash].[ext]";
            }
            return "[ext]/[name]-[hash].[ext]";
          }
        }
      }
    },
    css: {
      devSourcemap: true, // css sourcemap
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/css/common.scss";`
        }
      }
    },
    plugins: [
      vue(), // vue plugin 对 vue 支持
      vueJsx(),// vueJsx plugin 对 jsx 支持
      AutoImport({
        // 自动导入 Vue 相关函数
        imports: ["vue"],
        resolvers: [
          // 自动导入element组件
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon"
          })
        ]
      }),
      Components({
        resolvers: [
          // 自动注册element组件
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"]
          })
        ]
      }),
      Icons({
        autoInstall: true
      }),
      // 开启gzip压缩
      viteCompression({
        deleteOriginFile: false, // 删除源文件
        filter: /\.(js|ts|cjs|mjs|json|css)$/i // 过滤需要 gzip 的文件
      })
    ],
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "src") }
      ],
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    }
  };
});
