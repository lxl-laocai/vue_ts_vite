/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_APP_ENV: string;
  readonly VITE_TIMER_OUT: number;
  readonly VITE_BASE_URL: string;
  readonly VITE_STORAGE: string;
  readonly VITE_IS_EXPIRE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
