<!--
 * @Author: longmo
 * @Date: 2025-05-19 13:55:56
 * @LastEditTime: 2025-05-22 19:30:56
 * @FilePath: src/views/VirtTreeDemos/Demo1.vue
 * @Description:
 -->
<script setup>
import {ref, shallowRef} from "vue";
import {mockTreeData} from "../../utils/mockTreeData.js";
import { VirtTree } from 'vue-virt-list'
import 'vue-virt-list/lib/assets/tree.css';

const treeRef = ref();
const data = shallowRef([]);

const props = {
  key: 'id',
  title: 'name',
}

function handleMock() {
  data.value = mockTreeData();
}

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
  treeRef.value?.setExpandedKeys(keys);
}
</script>

<template>
  <h2>VirtTree</h2>
  <el-button @click="handleMock">模拟数据</el-button>
  <div class="virt-tree-wrapper">
    <VirtTree
        ref="treeRef"
        :list="data"
        :fieldNames="props"
        :indent="20"
        checkable
        checkOnClickNode
        selectable
        :defaultExpandAll="false"
    >
      <template #empty>
        <div style="padding: 16px">暂无数据</div>
      </template>
    </VirtTree>
  </div>
</template>

<style scoped>
.virt-tree-wrapper{
  height: 600px;
  width: 100%;
  overflow: auto;
}
</style>
