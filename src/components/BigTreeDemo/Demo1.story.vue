<!--
 * @Author: longmo
 * @Date: 2025-05-17 14:57:22
 * @LastEditTime: 2025-05-17 15:15:03
 * @FilePath: src/components/BigTreeDemo/Demo1.story.vue
 * @Description:
 -->
<script lang="ts" setup>
interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const getKey = (prefix: string, id: number) => {
  return `${prefix}-${id}`
}

/**
 * 生成树形结构数据
 *
 * 此函数通过递归方式创建具有层级结构的树形数据每个节点都有一个唯一的key，
 * 并且可以根据需求生成不同深度和广度的树结构用于测试或初始化数据
 *
 * @param maxDeep 树的最大深度
 * @param maxChildren 每个节点的最大子节点数
 * @param minNodesNumber 每层的最小节点数量
 * @param deep 当前处理的深度，默认为1
 * @param key 当前节点的键值，默认为'node'
 * @returns {Tree[]} 生成的树形结构数组
 */
const createData = (
    maxDeep: number,
    maxChildren: number,
    minNodesNumber: number,
    deep = 1,
    key = 'node'
): Tree[] => {
  // 初始化节点ID计数器
  let id = 0
  // 根据minNodesNumber生成数组，并对每个元素进行映射处理以生成树节点
  return Array.from({ length: minNodesNumber })
      .fill(deep)
      .map(() => {
        // 计算当前节点的子节点数量如果达到最大深度，则无子节点
        const childrenNumber =
            deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
        const nodeKey = getKey(key, ++id)
        return {
          id: nodeKey,
          label: nodeKey,
          children: childrenNumber
              ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
              : undefined,
        }
      })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
const data = createData(4, 30, 40)
</script>

<template>
  <Story title="大数据量树组件">
    <el-tree-v2
        style="max-width: 600px"
        :data="data"
        :props="props"
        :height="208"
    />
  </Story>
</template>

<style scoped>

</style>
