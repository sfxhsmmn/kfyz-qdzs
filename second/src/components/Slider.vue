<template>
  <div class="slider-wrap">
    <div class="slider">
      <div class="slide-list" :style="{transform: `translateX(-${currentIndex * 100}%)`}">
        <div class="slide-item" v-for="url in imgList" :key="url">
          <img :src="url" alt="轮播图"/>
        </div>
      </div>
    </div>
    <div class="dot-group">
      <span class="dot" :class="{active: i === currentIndex}" v-for="(_,i) in imgList" :key="i"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const imgList = ref<string[]>([
  '/images/p1.jpg',
  '/images/p2.jpg',
  '/images/p3.jpg'
])
const currentIndex = ref(0)
let timer: number | null = null

const autoPlay = () => {
  timer = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % imgList.value.length
  }, 3000)
}

onMounted(() => {
  autoPlay()
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.slider-wrap{
  background:#fff;
  border-radius:22px;
  padding:20px;
  box-shadow:0 6px 16px #e9d8fd;
  margin-bottom:24px;
}
.slider{
  width:100%;
  overflow:hidden;
  border-radius:18px;
}
.slide-list{
  display:flex;
  transition:transform 0.5s ease;
}
.slide-item{
  flex-shrink:0;
  width:100%;
}
.slide-item img{
  width:100%;
  height: auto;
  max-height: 420px;
  object-fit: contain;
  background-color: #f8f8f8;
}
.dot-group{
  display:flex;
  justify-content:center;
  gap:10px;
  margin-top:14px;
}
.dot{
  width:12px;
  height:12px;
  border-radius:50%;
  background: #ddd;
}
.dot.active{
  background: #7b61ff;
}
</style>