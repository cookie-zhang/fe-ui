/*
 * @Author: your name
 * @Date: 2020-08-02 21:35:09
 * @LastEditTime: 2020-09-22 16:58:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe-ui/src/shims-vue.d.ts
 */
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }