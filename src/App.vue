<script setup>
import Sidebar from "@/components/ui/sidebar/Sidebar.vue";
import SidebarProvider from "@/components/ui/sidebar/SidebarProvider.vue";
</script>

<template>
  <div class="bg-white dark:bg-gray-700 min-h-full">
<!--    <SidebarProvider>
      <Sidebar/>
      <router-view/>
    </SidebarProvider>-->
    <router-view/>
  </div>
</template>

<style scoped>

</style>
