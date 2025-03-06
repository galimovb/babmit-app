<script setup>
import SidebarTrigger from "@/components/ui/sidebar/SidebarTrigger.vue";
</script>

<template>
  <main
      class="w-full relative"
  >
    <SidebarTrigger
        class="absolute"
    />
    <div
        class="m-3"
    >
      <slot/>
    </div>
  </main>
</template>

<style scoped>

</style>
