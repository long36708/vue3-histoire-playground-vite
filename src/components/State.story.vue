<!--
 * @Author: longmo
 * @Date: 2025-05-17 12:41:54
 * @LastEditTime: 2025-05-17 13:32:25
 * @FilePath: src/components/State.story.vue
 * @Description:
 -->
<script  setup>
import { reactive, ref } from 'vue'
import MyButton from './MyButton.vue'

const state = reactive({
  disabled: false,
  content: 'Hello world',
})

const message = ref('Meow!')
</script>

<template>
  <Story title="Button">
    <Variant>
<!--      <MyButton :disabled="true">-->
<!--&lt;!&ndash;        {{ state.content }}&ndash;&gt;-->
<!--      </MyButton>-->

      <el-button>按钮</el-button>
      <input v-model.number="message">
    </Variant>
  </Story>
</template>
