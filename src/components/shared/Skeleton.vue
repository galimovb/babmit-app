<script setup>
defineProps({
  columns: {
    type: Number,
    required: true,
  }
  ,
  rows: {
    type: Number,
    default: 10,
  }
});
</script>

<template>
  <tr
      v-for="row in rows"
      :key="row"
      class="w-full bg-gray-100"
  >
    <td
        v-for="col in columns"
        :key="col"
        class="py-1 pl-[4px] pr-3"
    >
      <div
          class="h-14 bg-gray-300 animate-pulse rounded w-full"
      >
      </div>
    </td>
  </tr>
</template>

<style scoped>

</style>
