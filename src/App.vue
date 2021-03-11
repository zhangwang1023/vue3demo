<template>
  <div>
    <div>{{count}}</div>
    <button @click="add">点击+1</button>
    <div v-for="(item,index) in arr.strs" :key="index">
      {{item}}
      <button @click="remove(index)">删除</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive } from 'vue';

export default defineComponent({
  name: 'App',
  setup(){
    let {count,add} = addN()
    let {arr,remove} = removeN()
    
    return{
      count,
      arr,
      add,
      remove
    }
  }
})
function addN(){
  //ref监听简单数据类型 对象或数组用reactive
    let count = ref<number>(1)
    const add = ():void=>{
      count.value++
    }
    return {count,add}
}
function removeN(){
  let arr = reactive({
      strs:['aaa','bbb','ccc']
    })
    const remove = (index:number):void=>{
      arr.strs.splice(index,1)
    }
    return{arr,remove}
}
</script>

<style>

</style>
