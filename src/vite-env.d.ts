/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_TIMER_OUT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
