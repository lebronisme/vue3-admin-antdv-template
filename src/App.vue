<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'//国际化
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
// import { StepBackwardOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <HomeView></HomeView>
  <div>
    <a-button type="primary" v-checkPermission="['admin']" danger style="margin-right: 10px;">
      <StepBackwardOutlined></StepBackwardOutlined>admin 删除
      <StepForwardOutlined></StepForwardOutlined>
    </a-button>
    <a-button type="primary" v-checkPermission="['user']" danger>
      <StepBackwardOutlined></StepBackwardOutlined>user增加
      <StepForwardOutlined></StepForwardOutlined>
    </a-button>
  </div>
</template>

<style scoped>
</style>
