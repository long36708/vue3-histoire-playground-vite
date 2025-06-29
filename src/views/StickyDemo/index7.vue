<!--
 * @Author: longmo
 * @Date: 2025-06-28 21:14:01
 * @LastEditTime: 2025-06-28 21:49:42
 * @FilePath: src/views/StickyDemo/index7.vue
 * @Description: 搭配 IntersectionObserver 提高性能
 -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const dateList = ref([
  {
    date: "2025-06-28",
    list: [
      { time: 1, content: "我是 内容1" },
      { time: 2, content: "我是 内容2" },
      { time: 3, content: "我是 内容3" }
    ]
  },
  {
    date: "2025-06-27",
    list: [
      { time: 1, content: "我是 内容1" },
      { time: 2, content: "我是 内容2" },
      { time: 3, content: "我是 内容3" }
    ]
  },
  {
    date: "2025-06-26",
    list: [
      { time: 1, content: "我是 内容1" },
      { time: 2, content: "我是 内容2" },
      { time: 3, content: "我是 内容3" }
    ]
  }
]);

const observer = ref(null);
const activeDate = ref(null);

onMounted(() => {
  // 初始化时默认第一个日期是 active
  if (dateList.value.length > 0) {
    activeDate.value = dateList.value[0].date;
  }

  observer.value = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleEntry = entry;
          }
        });

        if (mostVisibleEntry) {
          activeDate.value = mostVisibleEntry.target.dataset.date;
        }
      },
      {
        root: document.querySelector(".date-list-wrapper"),
        threshold: [0, 0.1, 0.5, 0.9, 1],
        rootMargin: "-24px 0px 0px 0px"
      }
  );

  // 监听所有日期区块
  document.querySelectorAll(".date-section").forEach((section) => {
    observer.value.observe(section);
  });
});

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<template>
  <div class="date-list-wrapper">
    <div
        v-for="dateItem in dateList"
        :key="dateItem.date"
        class="date-section"
        :data-date="dateItem.date"
    >
      <div
          class="date-title"
          :class="{ 'sticky-active': activeDate === dateItem.date }"
      >
        {{ dateItem.date }}
      </div>
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
  overflow: auto;
  scroll-behavior: smooth;
  position: relative;
}

.date-section {
  width: 100%;
  background: yellow;
  position: relative;
}

.date-title {
  width: 100%;
  height: 24px;
  background: red;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: all 0.2s ease;
}

.date-title:not(.sticky-active) {
  opacity: 0.7;
}

.chat-item {
  display: flex;
  height: 60px;
}
</style>
