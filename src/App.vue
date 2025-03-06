<script setup>
import SidebarProvider from "@/components/ui/sidebar/SidebarProvider.vue";
import AppSidebar from "@/components/layout/AppSidebar.vue";
</script>

<template>
  <div class="bg-white dark:bg-gray-700 min-h-full max-w-full">
    <SidebarProvider>
      <AppSidebar/>
      <router-view
          class="flex-1 min-w-0"
      />
    </SidebarProvider>
    >
  </div>
</template>

<style scoped>

</style>
