<template>
  <div class="slider-wrap">
    <div class="slider">
      <div class="slide-list" :style="{transform: `translateX(-${currentIndex * 100}%)`}">
        <div class="slide-item" v-for="url in imgList" :key="url">
          <img :src="url" alt="轮播图"/>
        </div>
      </div>
      <!-- 手动切换按钮 -->
      <button type="button" class="nav-btn prev" aria-label="上一张" @click="prevSlide">‹</button>
      <button type="button" class="nav-btn next" aria-label="下一张" @click="nextSlide">›</button>
    </div>
    <div class="dot-group">
      <span
        class="dot"
        :class="{active: i === currentIndex}"
        v-for="(_,i) in imgList"
        :key="i"
        @click="goTo(i)"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 用 BASE_URL 拼接，保证部署到 GitHub Pages 子路径（/kfyz-qdzs/）时图片也能访问
const base = import.meta.env.BASE_URL
const imgList = ref<string[]>([
  `${base}images/p1.jpg`,
  `${base}images/p2.jpg`,
  `${base}images/p3.jpg`
])
const currentIndex = ref(0)

// 下一张：最后一张时回到第一张
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % imgList.value.length
}

// 上一张：第一张时回到最后一张
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + imgList.value.length) % imgList.value.length
}

// 点击圆点直接跳转到指定图片
const goTo = (index: number) => {
  currentIndex.value = index
}
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
  position:relative;
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
.nav-btn{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:42px;
  height:42px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
  border-radius:50%;
  background:rgba(123,97,255,0.85);
  color:#fff;
  font-size:26px;
  line-height:1;
  cursor:pointer;
  transition:background 0.2s;
}
.nav-btn:hover{
  background:#5f43e6;
}
.nav-btn.prev{
  left:14px;
}
.nav-btn.next{
  right:14px;
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
  cursor:pointer;
  transition:background 0.2s;
}
.dot.active{
  background: #7b61ff;
}
</style>