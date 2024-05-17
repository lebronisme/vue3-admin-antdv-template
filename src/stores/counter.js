import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {//counter属于module标识
  const count = ref(0) //数据state

  const doubleCount = computed(() => count.value * 2)//类似于getters
  function increment () {//修改数据的方法action
    count.value++
  }

  return { count, doubleCount, increment }//以对象的形式返回
})
 