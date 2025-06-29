<!--
 * @Author: longmo
 * @Date: 2025-06-28 19:26:17
 * @LastEditTime: 2025-06-28 19:26:46
 * @FilePath: src/views/StickyDemo/index4.vue
 * @Description:
 -->
<script setup>

</script>

<template>
<div class="container">
  <div class="content">
    <h2>向下滚动 ↓↓↓</h2>
    <p>观察红色粘性块的行为变化</p>
  </div>

  <!-- 粘性元素的父容器 -->
  <div class="container">
    <div class="content">
      <p>父容器内的内容（上方空间）</p>
    </div>

    <!-- 粘性元素 -->
    <div class="sticky-box">我是粘性元素 (top: 20px)</div>

    <div class="content">
      <p>继续滚动我会先固定，然后突然消失（脱离阶段）</p>
    </div>
  </div>

  <div class="content">
    <h2>父容器外部的区域</h2>
    <p>当父容器完全滚出视口时，粘性元素会解除固定状态</p>
  </div>
  <div class="content">
    <h2>父容器外部的区域</h2>
    <p>当父容器完全滚出视口时，粘性元素会解除固定状态</p>
  </div>
  <div class="content">
    <h2>父容器外部的区域</h2>
    <p>当父容器完全滚出视口时，粘性元素会解除固定状态</p>
  </div>
  <div class="content">
    <h2>父容器外部的区域</h2>
    <p>当父容器完全滚出视口时，粘性元素会解除固定状态</p>
  </div>
</div>
</template>

<style scoped>
.container {
  margin: 0;
  font-family: Arial;
}

/* 父容器 - 限制粘性元素的作用范围 */
.container {
  height: 800px; /* 明确高度 */
  background: #f0f0f0;
  margin-bottom: 50px; /* 增加间隔 */
  border: 2px dashed #999; /* 可视化父容器边界 */
}

/* 粘性元素 */
.sticky-box {
  position: sticky;
  top: 20px; /* 触发阈值 */
  height: 60px;
  background: #ff6b6b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* 普通内容块 */
.content {
  height: 200px;
  padding: 20px;
}
</style>
