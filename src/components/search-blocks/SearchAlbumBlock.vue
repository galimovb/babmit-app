<script setup>
import {usePhotosStore} from "@/stores/photo.js";
import {storeToRefs} from "pinia";
import {SwitchRoot, SwitchThumb} from "radix-vue";
import {Moon} from 'lucide-vue-next';
import {useThemeStore} from "@/stores/theme.js";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";

const photosStore = usePhotosStore();
const themeStore = useThemeStore();

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
        class="flex  items-center justify-center"
    >
      <div
          class="flex gap-3 items-center mx-3 sm:mx-12"
      >
        <Input
            v-model="searchQuery"
            :disabled="loading"
            type="text"
            placeholder="Введите Id через пробел"
            class="w-[220px] sm:w-[300px] md:w-[400px] h-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <Button
            :disabled="loading"
            class="bg-blue-500 dark:bg-blue-700 hover:bg-blue-400"
            @click="photosSearch"
        >
          Найти
        </Button>
      </div>
      <SwitchRoot
          id="airplane-mode"
          class="w-[38px] h-[23px] sm:w-[42px] focus-within:outline focus-within:outline-blue-200 flex bg-blue-400 shadow-sm rounded-full relative data-[state=checked]:bg-blue-600 cursor-pointer"
          @click="themeStore.toggleTheme"
      >
        <SwitchThumb
            class="block w-[19px] h-[19px] sm:w-[21px] sm:h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-150 translate-x-0 will-change-transform data-[state=checked]:translate-x-[19px] sm:data-[state=checked]:translate-x-[21px]"
        >
          <Moon class="w-[19px] h-[19px] sm:w-[21px] sm:h-[21px] mx-auto my-auto" />
        </SwitchThumb>
      </SwitchRoot>
    </div>
  </div>
</template>

<style scoped>

</style>
