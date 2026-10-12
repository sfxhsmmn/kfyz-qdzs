<template>
  <div class="login-box">
    <h2>✨ 欢迎来到我的小站 ✨</h2>
    <div class="input-item">
      <label>👤 账号</label>
      <input v-model="username" type="text" placeholder="请输入账号"/>
    </div>
    <div class="input-item">
      <label>🔒 密码</label>
      <input v-model="password" type="password" placeholder="请输入密码"/>
    </div>
    <button class="login-btn" @click="handleLogin">登录🎉</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['loginSuccess'])

const username = ref('')
const password = ref('')

const handleLogin = () => {
  if (username.value === 'zkd' && password.value === '88888888') {
    emit('loginSuccess')
  } else {
    alert('❌账号或密码错误，再试试！')
  }
}
</script>

<style scoped>
.login-box {
  width:420px;
  margin:100px auto;
  padding:36px;
  background:#ffffff;
  border-radius: 24px;
  box-shadow: 0 8px 20px #ffc8dd;
}
.login-box h2{
  text-align:center;
  color:#ff7aaa;
  margin-bottom:30px;
}
.input-item{
  margin-bottom:22px;
}
.input-item label{
  display:block;
  margin-bottom:8px;
  color:#555;
  font-weight:bold;
}
input{
  width:100%;
  box-sizing:border-box;
  padding:13px 16px;
  border:2px solid #ffd6e8;
  border-radius:14px;
  font-size:16px;
  outline:none;
}
.login-btn{
  width:100%;
  padding:14px;
  border:none;
  border-radius:14px;
  background-color:#ff85a2;
  color:white;
  font-size:18px;
  font-weight:bold;
  cursor:pointer;
  transition:0.2s;
}
.login-btn:hover{
  background:#ff6b8b;
  transform: scale(1.02);
}
</style>