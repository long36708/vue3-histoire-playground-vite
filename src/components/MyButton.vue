<!--
 * @Author: longmo
 * @Date: 2025-05-17 12:42:08
 * @LastEditTime: 2025-05-17 13:30:13
 * @FilePath: src/components/MyButton.vue
 * @Description:
 -->
<script setup>
import {useAttrs, } from "vue";

const attrs= useAttrs()


</script>

<template>
<el-button v-bind="attrs">
<!-- <slot name="default"></slot>-->
</el-button>
</template>

<style scoped>

</style>
