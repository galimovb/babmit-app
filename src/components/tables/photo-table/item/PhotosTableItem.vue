<script setup>
const props = defineProps({
  photoItem: {
    type: Object,
    required: true,
  },
});

const truncateText = (text, length = 20) => {
  return text.length > length ? `${text.slice(0, length)}...` : text;
};
</script>

<template>
  <tr
      class="h-14"
  >
    <td
        class="py-1 px-2 border-b"
    >
      {{ photoItem.id }}
    </td>
    <td
        class="py-1 px-2 border-b"
    >
      {{ photoItem.albumId }}
    </td>
    <td
        class="py-1 px-2 border-b"
        :title="photoItem.title"
    >
      {{ truncateText(photoItem.title) }}
    </td>
    <td
        class="py-1 px-2 border-b"
        :title="photoItem.url"
    >
      {{ truncateText(photoItem.url) }}
    </td>
    <td
        class="py-1 px-2 border-b"
        :title="photoItem.thumbnailUrl"
    >
      {{ truncateText(photoItem.thumbnailUrl) }}
    </td>
  </tr>
</template>

<style scoped>

</style>
