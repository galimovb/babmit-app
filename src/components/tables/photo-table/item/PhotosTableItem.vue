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
      class="h-14 border-b"
  >
    <td
        class="py-1 px-2"
    >
      {{ photoItem.id }}
    </td>
    <td
        class="py-1 px-2"
    >
      {{ photoItem.albumId }}
    </td>
    <td
        :title="photoItem.title"
        class="py-1 px-2"
    >
      {{ truncateText(photoItem.title) }}
    </td>
    <td
        :title="photoItem.title"
        class="py-1 px-2"
    >
      {{ truncateText(photoItem.url) }}
    </td>
    <td
        :title="photoItem.title"
        class="py-1 px-2"
    >
      {{ truncateText(photoItem.thumbnailUrl) }}
    </td>
  </tr>
</template>

<style scoped>

</style>
