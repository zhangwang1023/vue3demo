<template>
  <div>
    <div>{{ count }}</div>
    <button @click="add">点击+1</button>
    <div v-for="(item, index) in arr.strs" :key="index">
      {{ item }}
      <button @click="remove(index)">删除</button>
    </div>
    <input type="text" v-model="arr2.str">
    <button @click="addList">添加</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    let { count, add } = addCount()
    let { arr, remove } = removeN()
    let { arr2,addList} = addN(arr)
    return {
      count,
      add,
      arr,
      remove,
      arr2,
      addList
    }
  },
})
function addCount() {
  //ref监听简单数据类型 对象或数组用reactive
  let count = ref<number>(1)
  const add = (): void => {
    count.value++
  }
  return { count, add }
}
function removeN() {
  let arr = reactive({
    strs: ['aaa', 'bbb', 'ccc'],
  })
  const remove = (index: number): void => {
    arr.strs.splice(index, 1)
  }
  return { arr, remove }
}
function addN(arr:any){
  let arr2 = reactive({
    str:''
  })
  const addList = ():void=>{
    arr.strs.push(arr2.str)
    arr2.str = ''
  }
  return {arr2,addList}
}
</script>

<style></style>
