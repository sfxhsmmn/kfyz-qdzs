<template>
  <div>
    <!-- 没登录：加载Login组件 -->
    <Login v-if="!isLogin" @login-success="handleLoginSuccess"/>

    <!-- 登录成功：加载三个组件 -->
    <div v-else class="home">
      <IntroCard />
      <Slider />
      <MessageBox />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 引入你components文件夹里的4个组件
import Login from './components/Login.vue'
import IntroCard from './components/IntroCard.vue'
import Slider from './components/Slider.vue'
import MessageBox from './components/MessageBox.vue'

const isLogin = ref(false)
// 接收Login组件触发的登录成功事件
const handleLoginSuccess = ()=>{
  isLogin.value = true
}
</script>

<style>
.home{
  max-width:1000px;
  margin:0 auto;
  padding:20px;
}
</style>