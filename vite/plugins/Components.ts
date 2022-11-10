import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/dist/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
export default function createComponents() {
  return Components({
    resolvers: [
      // 自动注册element组件
      ElementPlusResolver(),
      // 自动注册图标组件
      IconsResolver({
        enabledCollections: ["ep"]
      })
    ]
  })
}
