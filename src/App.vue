<script setup>
import SidebarProvider from "@/components/ui/sidebar/SidebarProvider.vue";
import AppSidebar from "@/components/layout/AppSidebar.vue";
</script>

<template>
  <div class="bg-white dark:bg-gray-700 min-h-full max-w-full">
    <SidebarProvider>
      <AppSidebar/>
      <RouterView/>
    </SidebarProvider>
  </div>
</template>

<style scoped>

</style>
