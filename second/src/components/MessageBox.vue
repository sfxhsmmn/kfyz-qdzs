<template>
  <div class="board">
    <h2>💬 留言板</h2>
    <div class="input-row">
      <textarea v-model="inputText" placeholder="请输入你的留言..."></textarea>
      <button @click="sendMsg">提交留言</button>
    </div>

    <div class="msg-list">
      <div class="msg-item" v-for="item in msgList" :key="item.id">
        <p>📝 用户留言：{{ item.content }}</p>
        <p>🤖 AI回复：{{ item.aiReply }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 输入框绑定内容
const inputText = ref('')
// 留言列表，每条自带id，解决v-for key警告
const msgList = ref([])

// 模拟AI回复函数
const sendMsg = () => {
  if (!inputText.value.trim()) return

  // 构造留言对象
  const newMsg = {
    id: Date.now(), // 使用时间戳作为唯一id
    content: inputText.value,
    aiReply: '收到你的留言，这是AI模拟回复'
  }
  msgList.value.push(newMsg)
  // 清空输入框
  inputText.value = ''
}
</script>

<style scoped>
.board {
  background: #ffffff;
  border-radius: 22px;
  padding: 24px;
  box-shadow: 0 6px 16px #e9d8fd;
  margin-bottom: 24px;
}

.board h2 {
  color: #7b61ff;
  margin-bottom: 16px;
}

.input-row {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

textarea {
  flex: 1;
  padding: 12px;
  border: 2px solid #dcd3ff;
  border-radius: 14px;
  min-height: 85px;
  outline: none;
  font-size: 15px;
  resize: none;
  background: #faf8ff;
  color: #2c3e50;
}

textarea:focus {
  border-color: #7b61ff;
}

button {
  padding: 12px 22px;
  border: none;
  border-radius: 14px;
  background: #7b61ff;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
}

button:hover {
  background: #5f43e6;
}

.msg-item {
  background: #f7f2ff;
  padding: 14px;
  border-radius: 14px;
  margin-bottom: 10px;
  border: 1px solid #e9d8fd;
}

.msg-item p {
  margin: 6px 0;
  color: #2c3e50;
  font-size: 15px;
  line-height: 1.6;
}
</style>