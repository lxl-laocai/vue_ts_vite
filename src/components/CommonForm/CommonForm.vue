<script lang="tsx">
export default {
  name: "CommonForm",
  setup(props, ctx) {
    const formData = reactive<{ username: string; password: number }>({
      username: "",
      password: 0
    });
    const rules = reactive({});
    return () => (
      <>
        <div class="header"></div>
        <el-form ref="formRef" rules={rules} label-width="50px" status-icon>
          <el-form-item label="账号" prop="username">
            <el-input v-model:value={formData.username} />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model:value={formData.password} />
          </el-form-item>
          <el-button>登录</el-button>
        </el-form>
      </>
    );
  }
};
</script>

<style scoped></style>
