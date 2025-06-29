<!--
 * @Author: longmo
 * @Date: 2025-06-28 13:40:05
 * @LastEditTime: 2025-06-28 19:12:59
 * @FilePath: src/views/StickyDemo/index2.vue
 * @Description:
 -->
<script setup>

import {ref} from "vue";

const dateList = ref([
  {
    date: "2025-06-28",
    list: [
      {
        time: 1,
        content: "我是 内容1"
      },
      {
        time: 2,
        content: "我是 内容2"
      },
      {
        time: 3,
        content: "我是 内容3"
      }
    ]
  },
  {
    date: "2025-06-27",
    list: [
      {
        time: 1,
        content: "我是 内容1"
      },
      {
        time: 2,
        content: "我是 内容2"
      },
      {
        time: 3,
        content: "我是 内容3"
      }
    ]
  },
  {
    date: "2025-06-26",
    list: [
      {
        time: 1,
        content: "我是 内容1"
      },
      {
        time: 2,
        content: "我是 内容2"
      },
      {
        time: 3,
        content: "我是 内容3"
      }
    ]
  }
])
</script>

<template>
  <div class="date-list-wrapper">
    <div class="date-item" v-for="(dateItem ) in dateList" :key="dateItem.date">
      <div class="date-title">{{ dateItem.date }}</div>
      <div v-for="chat in dateItem.list" :key="chat.time" class="chat-item">
        <div class="time">{{ chat.time }}</div>
        <div class="content">{{ chat.content }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.date-list-wrapper {
  width: 300px;
  height: 300px;
  background: pink;
  position: relative;
  overflow: scroll;
}

.date-item {
  width: 100%;
  background: yellow;
  //border: 1px solid blue;
}

.date-title {
  width: 100%;
  height: 24px;
  position: sticky;
  top: 0; /* 触发粘性的阈值 */
  background: red; /* 添加背景色防止内容透出 */
  z-index: 1; /* 确保标题在内容之上 */
}

.chat-item {
  display: flex;
  height: 60px;
}
</style>
