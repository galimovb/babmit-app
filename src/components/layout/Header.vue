<script setup>
import SearchInput from "../inputs/SearchInput.vue";
import Button from "../buttons/Button.vue";
import {usePhotosStore} from "../../stores/photo.js";
import {storeToRefs} from "pinia";
import {SwitchRoot, SwitchThumb} from "radix-vue";
import {Moon} from 'lucide-vue-next';
import {useThemeStore} from "../../stores/theme.js";

const photosStore = usePhotosStore();
const themeStore = useThemeStore();

const {searchQuery, loading} = storeToRefs(photosStore);

const photosSearch = () => {
  photosStore.getPhotosByAlbumId();
};
</script>

<template>
  <header
      class="h-20 py-5"
  >
    <div
        class="flex  items-center justify-center"
    >
      <div
          class="flex gap-3 items-center mx-3 sm:mx-12"
      >
        <SearchInput
            v-model="searchQuery"
            placeholder="Введите Id через пробел"
            :size="400"
            :disabled="loading"
            class="w-[220px] sm:w-[300px] md:w-[400px]"
        />
        <Button
            :disabled="loading"
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
  </header>
</template>

<style scoped>

</style>
