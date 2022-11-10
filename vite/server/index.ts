import { ServerOptions } from "vite";

export default function createViteServer():ServerOptions {
  return {
    host: "0.0.0.0",
    port: 80,
    hmr: true,
    open: true,
    https: false,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  };
}
