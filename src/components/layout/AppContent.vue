<script setup>
import SidebarTrigger from "@/components/ui/sidebar/SidebarTrigger.vue";
import Header from "@/components/search-blocks/SearchAlbumBlock.vue";
</script>

<template>
  <main
    class="w-full"
  >
<!--    <SidebarTrigger/>-->
    <div
        class="m-3"
    >
      <slot/>
    </div>
  </main>
</template>

<style scoped>

</style>
