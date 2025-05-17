<!--
 * @Author: longmo
 * @Date: 2025-05-17 12:38:12
 * @LastEditTime: 2025-05-17 12:39:13
 * @FilePath: src/components/Layout.story.vue
 * @Description:
 -->
<template>
  <Story
      title="Single layout iframe"
      :layout="{ type: 'single', iframe: true }"
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
