import { ServerOptions } from "vite";

export default function createViteServer(): ServerOptions {
  return {
    host: "0.0.0.0",
    port: 3000,
    hmr: true,
    open: true,
    https: false,
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  };
}
