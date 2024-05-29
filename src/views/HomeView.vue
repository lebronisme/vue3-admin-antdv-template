<template>
  <div><button @click="toAdd" style="cursor:pointer">{{ count }}</button>
    <input @keyup.enter="toAdd" v-model="value" />
    <p>{{ doubleCount }}</p>
  </div>
  <slot name='scope' :data="counterStore"></slot><br />
  <button @click="test" style="cursor:pointer">测试</button>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, reactive, computed } from 'vue'
import { storeToRefs } from 'pinia'
const testValue = ref({
  destination: 'DC',
  monday: {
    location: 'National Mall',
    budget: 200,
    host: null
  },
  doubleCount: {
    location: 'doubleCount',
    budget: 200,
  }
})
const counterStore = useCounterStore()
let { count, doubleCount } = storeToRefs(counterStore)//保持响应式更新
const toAdd = () => {
  // counterStore.increment()
  count.value++
  // console.log(count.value, 'counterStore.count')
  // console.log(count.value, 'counterStore.count')
  // console.log(counterStore.doubleCount, 'counterStore.doubleCount')
}
const test = () => {
  // console.log(testValue.value)
  // 链判断运算符?. 允许开发人员读取深度嵌套在对象链中的属性值，而不必验证每个引用。当引用为空时，表达式停止计算并返回 undefined。
  console.log(testValue.value?.monday?.location)//正常
  console.log(testValue.value?.tuesday?.location)//undefined
  console.log(testValue.value?.doubleCount)
  // console.log(testValue.value?.tuesday.value?.location.value)
  // console.log(testValue.value?.monday.value?.location.value)
}
</script>

<style scoped>
</style>
