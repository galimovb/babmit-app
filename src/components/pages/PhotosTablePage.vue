<script setup>
import Content from "../layout/AppContent.vue";
import PhotosTable from "../tables/photo-table/PhotosTable.vue";
import SearchAlbumBlock from "@/components/search-blocks/SearchAlbumBlock.vue";
</script>

<template>
  <Content>
    <SearchAlbumBlock/>
    <PhotosTable/>
  </Content>
</template>

<style scoped>

</style>
