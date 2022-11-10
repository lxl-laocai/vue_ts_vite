import { BuildOptions } from "vite";
import path from "path";

export default function createViteBuild(): BuildOptions {
  return {
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
      input: {
        index: path.resolve(__dirname, "index.html"),
        ie: path.resolve(__dirname, "ie.html")
      },
      output: {
        // dir:"build",
        entryFileNames: "js/[name]-[hash]-[format].js",
        chunkFileNames: "js/[name]-[hash]-[format].js",
        assetFileNames(chunkInfo): string {
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
  };
}
