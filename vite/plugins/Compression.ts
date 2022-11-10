import viteCompression from "vite-plugin-compression";

export default function createCompression(env) {
  const { VITE_BUILD_COMPRESS } = env;
  const plugin = [];
  if (VITE_BUILD_COMPRESS) {
    const compressList = VITE_BUILD_COMPRESS.split(",");
    if (compressList.includes("gzip")) {
      // http://doc.ruoyi.vip/ruoyi-vue/other/faq.html#使用gzip解压缩静态文件
      plugin.push(
        viteCompression({
          ext: ".gz",
          deleteOriginFile: false, // 删除源文件
          filter: /\.(js|ts|cjs|mjs|json|css)$/i // 过滤需要 gzip 的文件
        })
      );
    }
    if (compressList.includes("brotli")) {
      plugin.push(
        viteCompression({
          ext: ".br",
          algorithm: "brotliCompress",
          deleteOriginFile: false
        })
      );
    }
  }
  return plugin;
}
