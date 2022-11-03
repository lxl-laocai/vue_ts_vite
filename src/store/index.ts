import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import useUserStore from "./user";

const pinia = createPinia();
pinia.use(piniaPluginPersist);

export { useUserStore };
export default pinia;
