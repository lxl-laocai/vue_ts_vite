<script lang="tsx">
import { defineComponent, ref } from "vue";
import type { FormInstance } from "element-plus";

export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>();
    const formData = reactive<{ username: string, password: number }>({
      username: "",
      password: 0
    });
    onMounted(() => {
      console.log(formRef);
    });

    const rules = reactive({

      username: [{
        type: "string",
        required: true,
        trigger: "blur",
        message: "请输入用户名/手机号",
        transform: (value) => value.trim()
      }],
      password: [{ type: "number", required: true, trigger: "blur", message: "请输入密码" }]
    });
    const image = computed(() => new URL("@/assets/icons/login.svg", import.meta.url).href);
    return () => (
      <div class="bg-[#fff] py-4 px-10 rounded-lg flex">
        <div class="w-96">&nbsp;</div>
        <div class="flex flex-col justify-center items-center">
          <el-image class="w-14 rounded-full" src={image.value} fit="fill" lazy={true} alt="logo"
                    placeholder="Mr. Liu" />
          <h1 class="text-2xl font-bold text-center text-slate-900 py-4 color">Vue TS Vite</h1>
          <el-form ref={formRef} rules={rules} label-width="50px" status-icon={true} hide-required-asterisk={true}
                   size="large">
            <el-form-item label="账号" prop="username" required={true}>
              <el-input v-model:value={formData.username} name="username" type="text" placeholder="用户名/手机号"
                        prefix-icon="user" />
            </el-form-item>
            <el-form-item label="密码" prop="password" required={true}>
              <el-input v-model:value={formData.password} name="password" type="password" placeholder="密码"
                        clearable={true}
                        show-password={true} prefix-icon="" />
            </el-form-item>
            <el-form-item>
              <el-button size="large">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    );
  }
});
</script>
<style lang="scss" scoped>
.color {
  color: $globalColor;
}
</style>
