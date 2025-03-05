<script setup>
import {cn} from '@/lib/utils';

const props = defineProps({
  class: {type: null, required: false},
});
</script>

<template>
  <table :class="cn('w-full caption-bottom text-sm', props.class)">
    <slot/>
  </table>
</template>
