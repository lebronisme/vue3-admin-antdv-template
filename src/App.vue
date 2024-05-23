<template>
  <HomeView>
    <template v-slot:scope="scope">
      <button @click='console.log(name)'>{{ name }}</button>
      <button @click='console.log(scope.data.count)'>传入的数据</button>
    </template>
  </HomeView>
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

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'//国际化
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
const name = 'home'
// import { StepBackwardOutlined } from '@ant-design/icons-vue'
</script>

<style scoped>
</style>
