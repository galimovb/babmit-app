<script setup>
import {onMounted, ref} from 'vue';
import {usePhotosStore} from '../../../stores/photo.js';
import {storeToRefs} from 'pinia';
import PhotosTableItem from "./item/PhotosTableItem.vue";
import Skeleton from "../../shared/Skeleton.vue";
import {MoveUp, MoveDown} from 'lucide-vue-next';
import {colors, tableHeaderItems} from "../../../js/table.js";

const photosStore = usePhotosStore();
const {photos, loading} = storeToRefs(photosStore);

const tableRef = ref(null);
const sortKey = ref('id');
const sortOrder = ref('asc');

const rowBgColorClass = (index) => {
  return colors[index % colors.length];
};

const handleTableScroll = () => {
  if (!tableRef.value || loading.value) return;

  const {scrollTop, scrollHeight, clientHeight} = tableRef.value;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    photosStore.getMorePhotos();
  }
};

const sortTable = (key) => {
  if (key === sortKey.value) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'asc';
  }

  photos.value.sort((a, b) => {
    if (a[key] < b[key]) return sortOrder.value === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return sortOrder.value === 'asc' ? 1 : -1;
    return 0;
  });
};

onMounted(() => {
  photosStore.getPhotos();
});
</script>

<template>
  <div
      class="mx-auto relative w-[300px] sm:w-[450px] md:w-[600px] max-h-[600px] overflow-y-auto bg-white dark:bg-gray-800
         border border-gray-200 dark:border-gray-600 rounded-md
         shadow-lg dark:shadow-[0px_4px_10px_rgba(255,255,255,0.1)]"
      ref="tableRef"
      @scroll="handleTableScroll"
  >

    <table
        class="w-full bg-white"
    >
      <thead
          class="bg-blue-400 dark:bg-blue-500 sticky top-0 z-10 shadow-md text-white text-base"
      >
      <tr>
        <th
            v-for="headerItem in tableHeaderItems"
            :key="headerItem.key"
            class="relative py-2 px-2 border-b text-left cursor-pointer"
            @click="sortTable(headerItem.key)"
        >
          <div
              class="flex gap-1 items-center"
          >
              <span>
                {{ headerItem.label }}
              </span>
            <div
                v-if="sortKey === headerItem.key"
            >
              <MoveUp
                  v-if="sortOrder === 'asc'"
                  size="16"
              />
              <MoveDown
                  v-else
                  size="16"
              />
            </div>
          </div>
        </th>
      </tr>
      </thead>

      <tbody>
      <PhotosTableItem
          v-for="(photo, index) in photos"
          :key="photo.id"
          :photo-item="photo"
          :class="rowBgColorClass(index)"
      />
      <Skeleton
          v-if="loading"
          :columns="tableHeaderItems.length"
      />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
