<!--
 * @Author: longmo
 * @Date: 2025-06-28 11:43:34
 * @LastEditTime: 2025-06-28 11:45:33
 * @FilePath: src/views/StickyDemo/index.vue
 * @Description:
 -->
<script setup>

</script>

<template>
  <div class="container">
    <div class="item">
      <p class="title">A</p>
      <div class="content">Andrew W.K.</div>
      <div class="content">Apparat</div>
      <div class="content">Arcade Fire</div>
      <div class="item">
        <p class="title">B</p>
        <div class="content">Back</div>
        <div class="content">Banana</div>
        <div class="content">Boy</div>
      </div>
      <div class="item">
        <p class="title">C</p>
        <div class="content">Chromeo</div>
        <div class="content">Common</div>
        <div class="content">Converge</div>
        <div class="content">Crystal Castles</div>
        <div class="content">Cursive</div>
      </div>
      <div class="item">
        <p class="title">E</p>
        <div class="content">Explosions In The Sky</div>
      </div>
      <p class="title">Z</p>
      <div class="content">Zara</div>
      <div class="content">Zap</div>
      <div class="content">Zip</div>
      <div class="content">Zone</div>
      <div class="content">Zoom</div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  height: 300px;
  width: 500px;
  overflow-y: scroll;
  position: relative;
}

.item {
  font: bold 20px/45px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

.title {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: #fff;
  font: bold 18px/21px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

.content {
  border-top: 1px solid #ccc;
  font-size: 16px;
  padding-left: 15px;
}
</style>
