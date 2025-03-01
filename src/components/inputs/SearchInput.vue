<script setup>

const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String
  },
});
</script>

<template>
  <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      :title="placeholder"
      class="bg-white dark:bg-gray-200 h-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
