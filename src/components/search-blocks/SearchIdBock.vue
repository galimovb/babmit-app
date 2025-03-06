<script setup>
import Input from "@/components/ui/input/Input.vue";
import {storeToRefs} from "pinia";
import {useLeadsStore} from "@/stores/leads.js";
import {ListFilter} from 'lucide-vue-next';

const leadsStore = useLeadsStore();

const {idFrom, idTo, leadsLoading} = storeToRefs(leadsStore);
</script>

<template>
  <div
      class="py-2"
  >
    <div
        class="flex items-center justify-between"
    >
      <h1
          class="font-bold py-3 text-2xl"
      >
        Отчет по лидам
      </h1>
      <div
          class="flex gap-3 items-center mx-3"
      >
        <div
            class="flex items-center"
        >
          <div>
            Фильтр
          </div>
          <ListFilter
              class="h-4"
          />
        </div>
        <div
            class="flex gap-2"
        >
          <Input
              v-model="idFrom"
              :disabled="leadsLoading"
              type="number"
              placeholder="Id от"
              :min="idFrom"
              :max="idTo"
              class="text-black bg-white dark:bg-gray-500 dark:border-b dark:border-gray-800 dark:text-gray-400  dark:outline-none h-10 focus:ring-2 focus:border-none"
          />
          <Input
              v-model="idTo"
              :disabled="leadsLoading"
              type="number"
              placeholder="Id до"
              class="text-black bg-white dark:bg-gray-500 dark:border-b dark:border-gray-800 dark:text-gray-400  dark:outline-none h-10 focus:ring-2 focus:border-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
