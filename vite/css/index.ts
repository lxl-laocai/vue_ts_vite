import { CSSOptions } from "vite";
import Tailwindcss from "tailwindcss";
import PostcssPresetEnv from "postcss-preset-env";

export default function createViteCss(): CSSOptions {
  return {
    devSourcemap: true, // css sourcemap
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/css/variables.module.scss";`,
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [
        Tailwindcss,
        PostcssPresetEnv,
        // warning: "@charset" must be the first rule in the file
        {
          postcssPlugin: "internal:charset-removal",
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === "charset") {
                atRule.remove();
              }
            }
          }
        }
      ]
    }
  };
}
