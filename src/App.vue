<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';//国际化
import { RouterLink, RouterView } from 'vue-router'
// import { StepBackwardOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div>
    <a-button type="primary" danger>
      <StepBackwardOutlined></StepBackwardOutlined> Button
      <StepForwardOutlined></StepForwardOutlined>
    </a-button>
  </div>
</template>

<style scoped>
</style>
