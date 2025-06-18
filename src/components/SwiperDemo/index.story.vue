<!--
 * @Author: longmo
 * @Date: 2025-06-18 21:13:39
 * @LastEditTime: 2025-06-18 22:09:18
 * @FilePath: src/components/SwiperDemo/index.story.vue
 * @Description:
 -->
<script setup>
import SwiperDemo from './SwiperDemo.vue'
import HashNavigation from "./hash-navigation.vue";
import ThumbsGalleryLoop from "./thumbs-gallery-loop.vue";
</script>

<template>
  <Story
      title="SwiperDemo/SwiperDemo"
      :layout="{ type: 'single', iframe: true }"
  >
    <Variant title="default">
      <SwiperDemo/>
    </Variant>
    <Variant title="hash-navigation">
      <HashNavigation/>
    </Variant>
    <Variant title="thumbs-gallery-loop">
      <ThumbsGalleryLoop/>
    </Variant>
  </Story>
</template>

<style scoped>

</style>
