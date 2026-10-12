/// <reference types="vite/client" />

// Vite 的 client.d.ts 只声明了 css/图片等静态资源，
// 不再声明 *.vue 模块，所以这里补上，否则 vue-tsc 会报 TS7016。
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}
