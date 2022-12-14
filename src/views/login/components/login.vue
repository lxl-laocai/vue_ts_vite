<script lang="tsx">
import { defineComponent, ref, reactive } from "vue";
import { FormInstance, FormRules, IFormData } from "./bean";

export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>();
    const formData: IFormData = reactive({
      username: "",
      password: "",
      remember: false
    });
    const rules = reactive<FormRules>({
      username: [
        { required: true, message: "请输入用户名/手机号", trigger: "blur", transform: (value) => value.trim() },
        // { pattern: /^[a-zA-Z0-9]${5,10}/, message: "用户名必须是5-10个字母数字", trigger: "blur" }
      ],
      password: [
        { required: true, trigger: "blur", message: "请输入密码" },
        // { pattern: /^[a-zA-Z0-9]${3,}/, message: "密码必须最少3个字母数字", trigger: "blur" }
      ]
    });
    const image = computed(() => new URL("@/assets/icons/login.svg", import.meta.url).href);
    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        console.log(valid, fields);
        if (!valid) {
          console.log(formData);
        }
      });
    };
    return () => (
      <div class="bg-[#fff] py-4 px-10 rounded-lg flex">
        <div class="w-96">&nbsp;</div>
        <div class="flex flex-col justify-center items-center">
          <el-image class="w-14 rounded-full" src={image.value} fit="fill" lazy={true} alt="logo" placeholder="Mr. Liu" />
          <h1 class="text-2xl font-bold text-center text-slate-900 py-4 text-[#00a8ff]">Vue TS Vite</h1>
          <el-form ref={formRef} model={formData} rules={rules} label-width="50px" status-icon={true} hide-required-asterisk={true} size="large">
            <el-form-item label="账号" prop="username">
              <el-input v-model={formData.username} name="username" type="text" placeholder="用户名/手机号" prefix-icon="UserFilled" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model={formData.password} name="password" type="password" placeholder="密码" show-password={true} prefix-icon="Lock" />
            </el-form-item>
            <el-form-item prop="remember" class="remember">
              <el-checkbox v-model={formData.remember} label="记住密码" />
            </el-form-item>
            <el-form-item>
              <el-button size="large" type="primary" class="w-full bg-[#00a8ff]" onClick={(_) => submitForm(formRef.value)}>
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    );
  }
});
</script>
<style lang="scss" scoped>
.remember {
  margin-top: -10px;
}

:deep(.el-checkbox) {
  height: 30px;
}
</style>
