<!--
 * @Author: longmo
 * @Date: 2025-06-28 18:26:04
 * @LastEditTime: 2025-06-28 19:24:08
 * @FilePath: src/views/StickyDemo/index3.vue
 * @Description: js + scroll 实现粘性定位

 box 的作用是作为一个占位元素，当 .title 变为固定定位（fixed）时，防止页面内容突然跳动的布局问题。

 当元素变为 fixed 定位时，它会从文档流中移除，后面的元素会向上移动填补空间，导致页面内容突然跳动

.box 的作用就是在 .title 脱离文档流时立即占据原来的空间，保持页面布局稳定

.box 的高度和 .title 相同（因为都是 <li> 元素，共享相同样式），所以能完美替代 .title 原本占据的空间
 -->
<script setup>
import {throttle} from "lodash-es";
import {onMounted} from "vue";

onMounted(() => {
  const title = document.querySelector('.title');
  const box = document.querySelector('.box');
  box.style.display = 'none';
  window.addEventListener('scroll', throttle(function () {
    const containerTop = window.scrollY || window.pageYOffset;
    console.log(containerTop);
    if (containerTop >= 44) {
      title.style.position = 'fixed'
      title.style.top = '0'
    } else {
      title.style.position = '';
      title.style.top = '44'
    }
    box.style.display = containerTop >= 44 ? 'block' : 'none';
  }, 100)); // 设置节流时间为 100ms  性能优化
})
</script>

<template>
  <div class="container">
    <div class="nav">
      <span>头部</span>
    </div>
    <div class="content">
      <ul>
        <li class="box"></li>
        <li class="title">内容</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
.container {
  /* 增加页面高度以演示滚动 */
  height: 2000px;
  width: 300px;
}

.nav {
  text-align: center;
}

ul {
  list-style: none;
}

li {
  height: 50px;
  line-height: 50px;
}

.title {
  background-color: red;
  //width: 100%; /* 当改为 fixed 时候，会脱离文档流，即时设置100%，也不是当前容器的宽度了 */
  width: 300px;
}
</style>
