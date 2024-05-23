<template>
  <div><button @click="toAdd" style="cursor:pointer">{{ count }}</button>
    <p>{{ doubleCount }}</p>
  </div>
  <slot name='scope' :data="counterStore"></slot>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
let { count, doubleCount } = storeToRefs(counterStore)//保持响应式更新
const toAdd = () => {
  // counterStore.increment()
  count.value++
  // console.log(count.value, 'counterStore.count')

  // console.log(count.value, 'counterStore.count')
  // console.log(counterStore.doubleCount, 'counterStore.doubleCount')
}
</script>

<style scoped>
</style>
