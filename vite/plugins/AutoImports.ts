import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/dist/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
export default function createAutoImport() {
  return AutoImport({
    // 自动导入相关函数
    imports: ["vue", "vue-router", "pinia"],
    resolvers: [
      // 自动导入element组件
      ElementPlusResolver(),
      // 自动导入图标组件
      IconsResolver({
        prefix: "Icon"
      })
    ]
  })
}
