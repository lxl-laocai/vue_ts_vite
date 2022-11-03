import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import viteCompression from "vite-plugin-compression";
import { PreRenderedAsset } from "rollup";
// https://vitejs.dev/config/

export default defineConfig({
  base: "./", // 公共基础路径
  server: {
    host: "0.0.0.0",
    port: 3000,
    hmr: true,
    open: true,
    https: false
  },
  build: {
    // outDir:"./",
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
        name:"build",
        entryFileNames: "js/[name]-[hash]-[format].js",
        chunkFileNames: "js/[name]-[hash]-[format].js",
        assetFileNames(chunkInfo: PreRenderedAsset): string {
          let suffix = chunkInfo.name.split(".").pop().toLowerCase();
          if (["jpg","png","gif","jpeg","webp"].includes(suffix)){
            return "img/[name]-[hash].[ext]";
          }
            return "[ext]/[name]-[hash].[ext]";
        }
      }
    }
  },
  css:{
    devSourcemap:true // css sourcemap
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
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
    ]
  }
});
