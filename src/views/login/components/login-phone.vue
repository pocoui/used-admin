<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="code-button">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'

export default defineComponent({
  name: 'loginPhone',
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })

    const loginPhone = () => {
      console.log('手机登录模块还在开发中。。。')
    }

    return {
      phone,
      rules,
      loginPhone
    }
  }
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .code-button {
    margin-left: 5px;
  }
}
</style>
