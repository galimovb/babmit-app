<script setup>
import {usePhotosStore} from "@/stores/photo.js";
import {storeToRefs} from "pinia";
import {SwitchRoot, SwitchThumb} from "radix-vue";
import {Moon} from 'lucide-vue-next';
import {useThemeStore} from "@/stores/theme.js";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import Switch from "@/components/buttons/Switch.vue";

const photosStore = usePhotosStore();

const {searchQuery, loading} = storeToRefs(photosStore);

const photosSearch = () => {
  photosStore.getPhotosByAlbumId();
};
</script>

<template>
  <div
      class="h-20 py-5"
  >
    <div
        class="flex items-center justify-center"
    >
      <div
          class="flex gap-3 items-center mx-3 sm:mx-12"
      >
        <Input
            v-model="searchQuery"
            :disabled="loading"
            type="text"
            placeholder="Введите Id через пробел"
            class="w-[220px] sm:w-[300px] md:w-[400px] text-black bg-white dark:bg-gray-500 dark:border-b dark:border-gray-800 dark:text-gray-400  dark:outline-none h-10 focus:ring-2 focus:border-none"
        />

        <Button
            :disabled="loading"
            class="bg-blue-500 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600 text-white"
            @click="photosSearch"
        >
          Найти
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
