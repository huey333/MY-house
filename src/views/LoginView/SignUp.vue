<template>
  <HomePageFramework>
    <template #homePage>
      <!--   外壳   -->
      <div class="SignUpBox">
        <!--     标题   -->
        <div class="SignUpTitleBox">
          <img src="@/assets/LoginView/Template1.jpg" alt="水果" />
          <div class="text">
            <span style="font-size: 60px"> SignUp </span>
            <br />
            <span style="font-size: 20px">
              Fruits are nature's jewels, plucked from the sunlit trees and lush vines. They thrive
              in the warmth of tropical breezes and the gentle touch of the temperate sun. Common
              treasures include the luscious mango, the zesty lemon, and the sweet, succulent
              strawberry.
            </span>
          </div>
        </div>

        <!--     表单   -->
        <div class="SignUpFromBox">
          <!--    标题  -->
          <div class="FromTitleBox">
            <span style="font-size: 60px; font-weight: bold">
              Sign
              <span style="color: #e66c00; font-weight: bold"> Up </span>
            </span>

            <span style="margin-top: 10px; font-size: 18px">
              在大多数情况下，水果爱好者和厨师们会将“水果”和“农产品”这两个词交替使用，但它们之间确实存在一些区别。水果……
            </span>
          </div>

          <!--    表单  -->
          <el-form
            class="FromBox"
            label-width="100px"
            ref="formRef"
            :model="formData"
            :rules="rules"
          >
            <el-form-item>
              <el-input
                class="fromInput"
                v-model="formData.username"
                placeholder="用户名 UserName"
                :suffix-icon="Search"
              />
            </el-form-item>

            <el-form-item>
              <el-input
                class="fromInput"
                v-model="formData.email"
                placeholder="邮箱 Email"
                :suffix-icon="Message"
              />
            </el-form-item>

            <el-form-item>
              <div class="fromInput" style="display: flex; flex-direction: column">
                <span style="font-size: 18px">性别:</span>
                <el-radio-group v-model="formData.gender" style="margin-top: 10px">
                  <el-radio label="Sponsor">Sponsor</el-radio>
                  <el-radio label="Venue">Venue</el-radio>
                </el-radio-group>
              </div>
            </el-form-item>

            <el-form-item>
              <el-input
                class="fromInput"
                v-model="formData.phone"
                placeholder="电话 Phone"
                :suffix-icon="Message"
              />
            </el-form-item>

            <el-form-item>
              <el-input
                class="fromInput"
                v-model="formData.address"
                placeholder="地址 Address"
                :suffix-icon="Message"
              />
            </el-form-item>

            <el-form-item>
              <el-input
                class="fromInput"
                v-model="formData.birthday"
                placeholder="生日 Birthday"
                :suffix-icon="Message"
              />
            </el-form-item>

            <el-form-item>
              <el-input
                class="fromInput"
                v-model="formData.password"
                placeholder="密码 Password"
                type="password"
                show-password
              />
            </el-form-item>

            <el-form-item>
              <el-input
                class="fromInput"
                v-model="formData.confirmPassword"
                placeholder="确认密码 Confirm Password"
                type="password"
                show-password
              />
            </el-form-item>

            <!--       提交按钮   -->
            <div class="FromSubmit">
              <button class="cancel-button" @click="cancelForm">取消</button>
              <button class="submit-button" @click="submitForm">提交</button>
            </div>
          </el-form>
        </div>
      </div>
    </template>
  </HomePageFramework>
</template>

<script setup>
import HomePageFramework from '@/components/HomePageFramework/homePageFramework.vue'
import { Search, Message } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const formRef = ref(null)
const formData = ref({
  username: '',
  email: '',
  gender: '',
  phone: '',
  address: '',
  birthday: '',
  password: '',
  confirmPassword: '',
})

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入有效的邮箱地址', trigger: ['blur', 'change'] },
  ],
  gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
  phone: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
  address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
  birthday: [{ required: true, message: '请输入生日', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== formData.value.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
}

// 提交表单的函数
const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success('表单验证成功')
      // 这里可以进行表单提交的逻辑
    } else {
      ElMessage.error('表单验证失败')
    }
  })
}
</script>

<style scoped lang="scss">
@import '@/CSS/LoginView/SignUp.scss';
</style>
