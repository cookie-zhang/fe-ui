<!--
 * @Author: your name
 * @Date: 2020-08-03 12:51:09
 * @LastEditTime: 2020-08-12 10:35:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-ui/src/components/DocDemo.vue
-->
<template>
  <div>
    Doc 默认页面

    <p>测试</p>
    <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
  <p>{{msg}}</p>
  
  </div>
</template>
<script>
import { reactive, computed } from 'vue'
export default {
  data() {
    return {
      msg: 'data-msg'
    }
  },
  setup() {
    const state = reactive({
      count: 0,
      double: computed(()=> state.count*2),
      msg: 'setup-msg'
    })
    function increment(){
      state.count++
    }
    return {
      state,
      msg: state.msg,
      increment
    }
  }
}
</script>