<script setup>
import Input from "@/components/ui/input/Input.vue";
import {storeToRefs} from "pinia";
import {useLeadsStore} from "@/stores/leads.js";
import { ListFilter } from 'lucide-vue-next';

const leadsStore = useLeadsStore();

const { idFrom, idTo, leadsLoading } = storeToRefs(leadsStore);
</script>

<template>
  <div
      class="py-2"
  >
    <div
        class="flex  items-center justify-between"
    >
      <h1
          class="font-bold py-3 text-2xl"
      >
        Отчет по лидам
      </h1>
      <div
          class="flex gap-3 items-center mx-3 sm:mx-12"
      >
        <div class="flex items-center">
          <div>
            Фильтр
          </div>
          <ListFilter
            class="h-4"
          />
        </div>
        <Input
            v-model="idFrom"
            :disabled="leadsLoading"
            type="number"
            placeholder="Id от"
            :min="idFrom"
            :max="idTo"
        />
        <Input
            v-model="idTo"
            :disabled="leadsLoading"
            type="number"
            placeholder="Id до"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
