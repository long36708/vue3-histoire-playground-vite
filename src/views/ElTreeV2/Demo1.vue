<!--
 * @Author: longmo
 * @Date: 2025-05-19 14:41:27
 * @LastEditTime: 2025-05-20 11:20:49
 * @FilePath: src/views/ElTreeV2/Demo1.vue
 * @Description:
 -->
<script setup>
import {ref, shallowRef} from "vue";
import {mockTreeData} from "../../utils/mockTreeData.js";

const treeRef =ref()
const data= shallowRef([]);

const props = {
  value: 'id',
  label: 'name',
  children: 'children',
}

function handleMock(){
  data.value = mockTreeData();
}
const idleSetCheckedKeys = (treeRef, keys) => {
  let index = 0;
  const updateBatch = (deadline) => {
    while (index < keys.length && deadline.timeRemaining() > 0) {
      treeRef.value.setChecked(keys[index], true);
      index++;
    }
    if (index < keys.length) {
      requestIdleCallback(updateBatch);
    }
  };
  requestIdleCallback(updateBatch);
};
function expandNodeKeys() {
  // treeRef.value?.expandNode(['0-0', '0-1', '0-2'], true);
  const keys = [];
  for (let i = 0; i < 10; i++) {
    // keys.push('' + i);
    for (let j = 0; j < 10000; j++) {
      keys.push('' + i + '-' + j);
    }
  }
  // treeRef.value?.expandNode(keys, true);
  treeRef.value?.setExpandedKeys('0')
  // idleSetCheckedKeys(treeRef,keys)
}
</script>

<template>
  <h2>ElTreeV2</h2>
  <el-button @click="handleMock">生成数据</el-button>
  <el-button @click="expandNodeKeys">展开树节点</el-button>
  <el-tree-v2
      ref="treeRef"
      style="max-width: 600px"
      show-checkbox
      :data="data"
      :props="props"
      :height="308"
  />
</template>

<style scoped>

</style>
