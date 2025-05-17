<!--
 * @Author: longmo
 * @Date: 2025-05-17 12:39:41
 * @LastEditTime: 2025-05-17 12:40:05
 * @FilePath: src/components/GridLayout.story.vue
 * @Description:
 -->
<script setup>

</script>
<template>
  <Story
      title="GridLayout Cars"
      :layout="{ type: 'grid', width: 200 }"
  >
    <Variant title="default">
      🚗
    </Variant>
    <Variant title="Fast">
      🏎️
    </Variant>
    <Variant title="Slow">
      🚜
    </Variant>
  </Story>
</template>


<style scoped>

</style>
