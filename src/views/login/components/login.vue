<script lang="tsx">
import { defineComponent } from "vue";
import PublicForm from "@/components"
export default defineComponent({
  setup() {
    const formData = reactive<{ username: string, password: number }>({
      username: "",
      password: 0
    });
    const rules = reactive({
      pass: [{ validator: validatePass, trigger: "blur" }],
      checkPass: [{ validator: validatePass2, trigger: "blur" }],
      age: [{ validator: checkAge, trigger: "blur" }]
    });
    return () => (
      <div class="bg-[#fff] py-4 px-10 rounded-md">
        <h1 class="text-2xl font-semibold text-center text-slate-900 py-4">登录</h1>
        <el-form ref="formRef" rules={rules} label-width="50px" status-icon>
          <el-form-item label="账号" prop="username">
            <el-input v-model:value={formData.username} />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model:value={formData.password} />
          </el-form-item>
          <el-button>登录</el-button>
        </el-form>
      </div>
    );
  }
});
</script>
