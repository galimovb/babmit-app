<script setup>
import Header from "./components/layout/Header.vue";
import PhotosTable from "./components/tables/photo-table/PhotosTable.vue";
import Content from "./components/layout/Content.vue";
import {useThemeStore} from "./stores/theme.js";
import {storeToRefs} from "pinia";

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);
</script>

<template>
  <div class="bg-white dark:bg-gray-700 min-h-full">
    <Header/>
    <Content/>
  </div>
</template>

<style scoped>

</style>
