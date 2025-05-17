<!--
 * @Author: longmo
 * @Date: 2025-05-17 15:22:21
 * @LastEditTime: 2025-05-17 16:25:25
 * @FilePath: src/components/BigTreeDemo/Demo2.story.vue
 * @Description:
 -->
<script setup>
import {shallowRef} from "vue";
import {mockTreeData} from "./mockTreeData.js";

const data= shallowRef([]);

const props = {
  value: 'id',
  label: 'name',
  children: 'children',
}

function handleMock(){
  data.value = mockTreeData();
}
</script>

<template>
  <Story title="大数据量树组件2">
    <el-button @click="handleMock">生成数据</el-button>
    <el-tree-v2
        style="max-width: 600px"
        :data="data"
        :props="props"
        :height="508"
    />
  </Story>
</template>

<style scoped>

</style>

<docs lang="md">

# Demo2

## 24w
- 初始化赋值 时间久(24s 加载出，但不可点击；44s 可进行点击)，卡顿甚至崩溃
- 滚动和折叠展开均流畅
- 内存占用 600 - 750 MB

![](./24w内存占用图.png)

</docs>
