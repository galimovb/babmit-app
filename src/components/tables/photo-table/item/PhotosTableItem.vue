<script setup>

import {truncateText} from "@/js/table.js";

const props = defineProps({
  photoItem: {
    type: Object,
    required: true,
  },
});

const keys = ['id', 'albumId', 'title', 'url', 'thumbnailUrl'];
</script>

<template>
  <tr class="h-14 border-b">
    <td
        v-for="key in keys"
        :key="key"
        :title="(photoItem[key])"
        class="py-1 px-2"
    >
      {{ truncateText(photoItem[key]) }}
    </td>
  </tr>
</template>


<style scoped>
</style>
