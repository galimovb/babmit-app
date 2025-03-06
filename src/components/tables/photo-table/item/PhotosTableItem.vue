<script setup>
const props = defineProps({
  photoItem: {
    type: Object,
    required: true,
  },
});

const keys = ['id', 'albumId', 'title', 'url', 'thumbnailUrl'];
</script>

<template>
  <tr class="h-14 border-b text-black ">
    <td
        v-for="key in keys"
        :key="key"
        :title="(photoItem[key])"
        class="py-1 px-2"
    >
      <div
          class="max-w-[150px] truncate"
      >
        {{ photoItem[key] }}
      </div>
    </td>
  </tr>
</template>


<style scoped>
</style>
