import { defineComponent } from "vue";
import login from "./components/login.vue";
import register from "./components/register";

export default defineComponent({
  components: { login, register },
  setup() {

    return () => (
      <>
        <div class="w-full h-full center-center">
          <login></login>
        </div>
      </>
    );
  }
});
