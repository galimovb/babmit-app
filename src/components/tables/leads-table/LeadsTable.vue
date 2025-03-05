<script setup>
import {computed, onMounted, ref} from "vue";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useLeadsStore} from "@/stores/leads.js";
import {storeToRefs} from "pinia";
import {formatFieldValue, rowBgColorClass} from "@/js/table.js";
import Loader from "@/components/shared/Loader.vue";
import {MoveDown, MoveUp} from "lucide-vue-next";

const leadStore = useLeadsStore();
const {fields, leads, leadsLoading, fieldsLoading} = storeToRefs(leadStore);

const sortKey = ref("ID");
const sortOrder = ref("asc");

const sortedLeads = computed(() => {
  return [...leads.value].sort((a, b) => {
    const field = fields.value.find(f => f.name === sortKey.value);
    const type = field.type;

    let valA = a[sortKey.value];
    let valB = b[sortKey.value];

    if (type === "datetime") {
      valA = new Date(valA).getTime() || 0;
      valB = new Date(valB).getTime() || 0;
    }
    if (valA < valB) return sortOrder.value === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder.value === "asc" ? 1 : -1;
    return 0;
  });
});

const sortTable = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortOrder.value = "asc";
  }
};

onMounted(() => {
  leadStore.getFields();
  leadStore.getLeads();
});
</script>

<template>
  <div>
    <Loader
        v-if="fieldsLoading && leadsLoading"
    />
    <div
        v-else
        class="relative max-h-[600px] overflow-y-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg"
    >
      <Table>
        <TableHeader
            class="bg-blue-400 dark:bg-blue-500 sticky top-0 z-10 shadow-md text-white text-base"
        >
          <TableRow>
            <TableHead
                v-for="(field, key) in fields"
                :key="key"
                class="py-2 px-2 border-b text-left cursor-pointer text-white"
                @click="sortTable(field.name)"
            >
              <div
                  class="flex gap-1 items-center"
              >
              <span>
                {{ field.name }}
              </span>
                <div
                    v-if="sortKey === field.name"
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
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow
              v-for="(lead, key) in sortedLeads"
              :key="lead.ID"
              :class="rowBgColorClass(key)"
          >
            <TableCell
                v-for="(field, key) in fields"
                :key="key"
                :title="lead[field.name]"
                class="font-medium"
            >
              {{ formatFieldValue(lead[field.name], field.type) }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
