<script setup>
import Content from "../layout/AppContent.vue";
import LeadsTable from "@/components/tables/leads-table/LeadsTable.vue";
import SearchIdBock from "@/components/search-blocks/SearchIdBock.vue";
import PhotosTable from "@/components/tables/photo-table/PhotosTable.vue";
</script>

<template>
  <Content>
    <SearchIdBock/>
    <LeadsTable/>
  </Content>
</template>

<style scoped>

</style>
