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
  photosStore.getPhotosByAlbumId(searchQuery.value);
};
</script>

<template>
  <header
      class="h-20 bg-primary"
  >
    <div
        class="p-5 flex justify-center items-center"
    >
      <div
          class="flex gap-5 items-center mx-16"
      >
        <SearchInput
            v-model="searchQuery"
            placeholder="Введите Id альбомов через пробел"
            :size="400"
            :disabled="loading"
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
          class="w-[42px] h-[25px] focus-within:outline focus-within:outline-blue-200 flex bg-blue-400 shadow-sm rounded-full relative data-[state=checked]:bg-blue-600 cursor-default"
          @click="themeStore.toggleTheme"
      >
        <SwitchThumb
            class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
        >
          <Moon
              size="20"
          />
        </SwitchThumb>
      </SwitchRoot>
    </div>
  </header>
</template>

<style scoped>

</style>
