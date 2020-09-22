<!--
 * @Author: your name
 * @Date: 2020-08-02 19:56:52
 * @LastEditTime: 2020-09-22 16:57:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe-ui/src/App.vue
-->
<template>
<router-view />
</template>

<script lang="ts">
import {
    ref,
    provide
} from "vue";
import {
    router
} from "./router";

export default {
    name: "App",
    setup() {
        const width = document.documentElement.clientWidth;
        const menuVisible = ref(width <= 500 ? false : true);
        provide("menuVisible", menuVisible); // set
        router.afterEach(() => {
            if (width <= 500) {
                menuVisible.value = false;
            }
        });
    },
};
</script>
