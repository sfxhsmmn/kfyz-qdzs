<template>
  <!-- --slide-ratio 由当前图片真实宽高比驱动，让外框宽度始终和图片保持一致 -->
  <div class="slider-wrap" :style="{ '--slide-ratio': String(currentRatio) }">
    <div class="slider">
      <div class="slide-list" :style="{transform: `translateX(-${currentIndex * 100}%)`}">
        <div class="slide-item" v-for="(url, index) in imgList" :key="url">
          <img :src="url" alt="轮播图" @load="handleImgLoad($event, index)"/>
        </div>
      </div>
    </div>
    <!-- 手动切换按钮移到图片下方，避免遮挡图片内容 -->
    <div class="control-bar">
      <button type="button" class="nav-btn prev" aria-label="上一张" @click="prevSlide">‹</button>
      <div class="dot-group">
        <span
          class="dot"
          :class="{active: i === currentIndex}"
          v-for="(_,i) in imgList"
          :key="i"
          @click="goTo(i)"
        ></span>
      </div>
      <button type="button" class="nav-btn next" aria-label="下一张" @click="nextSlide">›</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// 用 BASE_URL 拼接，保证部署到 GitHub Pages 子路径（/kfyz-qdzs/）时图片也能访问
const base = import.meta.env.BASE_URL
const imgList = ref<string[]>([
  `${base}images/p1.jpg`,
  `${base}images/p2.jpg`,
  `${base}images/p3.jpg`
])
const currentIndex = ref(0)

// 记录每张图片的真实宽高比（宽 / 高），图片加载完成前默认按 1:1 占位
const ratios = ref<number[]>(imgList.value.map(() => 1))
const currentRatio = computed(() => ratios.value[currentIndex.value] ?? 1)

// 图片加载完成后读取真实尺寸，用于让轮播外框贴合图片大小
const handleImgLoad = (event: Event, index: number) => {
  const img = event.target as HTMLImageElement
  if (img.naturalWidth && img.naturalHeight) {
    ratios.value[index] = img.naturalWidth / img.naturalHeight
  }
}

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
  /* 轮播展示高度，小屏可通过媒体查询下调 */
  --slide-height: 420px;
  background:#fff;
  border-radius:22px;
  padding:14px;
  box-shadow:0 6px 16px #e9d8fd;
  margin-bottom:24px;
  /* 外框宽度跟随图片比例收缩并居中，避免图片两侧出现大片留白 */
  width:fit-content;
  max-width:100%;
  margin-left:auto;
  margin-right:auto;
  box-sizing:border-box;
}
.slider{
  position:relative;
  height:var(--slide-height);
  /* 宽高比由当前图片真实比例决定，使外框与图片尺寸一致 */
  aspect-ratio: var(--slide-ratio, 1);
  max-width:100%;
  overflow:hidden;
  border-radius:14px;
  transition: aspect-ratio 0.5s ease;
}
.slide-list{
  display:flex;
  height:100%;
  transition:transform 0.5s ease;
}
.slide-item{
  flex-shrink:0;
  width:100%;
  height:100%;
}
.slide-item img{
  display:block;
  width:100%;
  height:100%;
  /* contain 保证图片完整露出、不被裁切；比例与容器一致时正好铺满 */
  object-fit: contain;
  background-color: #f8f8f8;
}
.nav-btn{
  flex-shrink:0;
  width:34px;
  height:34px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
  border-radius:50%;
  background:rgba(123,97,255,0.85);
  color:#fff;
  font-size:22px;
  line-height:1;
  cursor:pointer;
  transition:background 0.2s;
}
.nav-btn:hover{
  background:#5f43e6;
}
.control-bar{
  display:flex;
  align-items:center;
  gap:12px;
  margin-top:12px;
}
.dot-group{
  flex:1;
  display:flex;
  justify-content:center;
  gap:10px;
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
/* 小屏时同步降低轮播高度，避免外框被页面宽度挤压后产生多余留白 */
@media (max-width: 600px){
  .slider-wrap{
    --slide-height: 300px;
    padding:10px;
  }
}
@media (max-width: 420px){
  .slider-wrap{
    --slide-height: 260px;
  }
}
</style>