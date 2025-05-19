<!--
 * @Author: longmo
 * @Date: 2025-05-19 13:40:16
 * @LastEditTime: 2025-05-19 14:36:19
 * @FilePath: src/components/VueVirtTree/Demo1.story.vue
 * @Description:
 -->
<script setup>
import {shallowRef} from "vue";
import {mockTreeData} from "../../utils/mockTreeData.js";
import {VirtTree} from 'vue-virt-list'
import 'vue-virt-list/lib/assets/tree.css';

const data = shallowRef([]);

const props = {
  key: 'id',
  title: 'name',
  children: 'children',
}

function handleMock() {
  data.value = mockTreeData();
}
</script>

<template>
  <Story title="VirtTree/大数据量树组件" :layout="{ type: 'single', iframe: false }">
    <el-button @click="handleMock">模拟数据</el-button>
    <div class="virt-tree-wrapper">
      <VirtTree
          ref="virtTreeRef"
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
  </Story>
</template>

<style scoped>
.virt-tree-wrapper {
  max-height: 300px;
  width: 100%;
  overflow: auto;
}
</style>
