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
      v-for="index in rows"
      :key="index"
      class="animate-pulse w-full"
  >
    <td
        v-for="col in columns"
        :key="col"
        class="py-2 px-4"
    >
      <div
          class="h-14 bg-gray-300 rounded w-full]"
      >
      </div>
    </td>
  </tr>
</template>

<style scoped>
.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    background-color: #e2e8f0;
  }
  50% {
    background-color: #cbd5e0;
  }
  100% {
    background-color: #e2e8f0;
  }
}
</style>
