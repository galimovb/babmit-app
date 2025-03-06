<script setup>
import {onMounted, ref} from "vue";
import {useLeadsStore} from "@/stores/leads.js";
import {storeToRefs} from "pinia";
import {formatFieldValue, rowBgColorClass} from "@/js/table.js";
import {MoveDown, MoveUp} from "lucide-vue-next";
import Loader from "@/components/shared/Loader.vue";
import TableHead from "@/components/ui/table/TableHead.vue";
import TableRow from "@/components/ui/table/TableRow.vue";
import TableCell from "@/components/ui/table/TableCell.vue";
import TableBody from "@/components/ui/table/TableBody.vue";
import TableHeader from "@/components/ui/table/TableHeader.vue";

const leadStore = useLeadsStore();
const {fields, leads, leadsLoading, fieldsLoading} = storeToRefs(leadStore);

const sortKey = ref("ID");
const sortOrder = ref("asc");
const isHoveredColumn = ref();

const sortTable = (key, type) => {
  if (key === sortKey.value) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortOrder.value = "asc";
  }

  leads.value.sort((a, b) => {
    let valA = a[sortKey.value];
    let valB = b[sortKey.value];

    if (type === "datetime") {
      valA = new Date(valA).getTime() || 0;
      valB = new Date(valB).getTime() || 0;
    } else if (type === "integer" || type === "float" || type === "user") {
      valA = parseFloat(valA) || 0;
      valB = parseFloat(valB) || 0;
    }

    if (valA < valB) return sortOrder.value === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder.value === "asc" ? 1 : -1;
    return 0;
  });
};

onMounted(() => {
  leadStore.getFields();
  leadStore.getLeads();
});
</script>

<template>
  <div
      class="mx-auto relative max-h-[580px] overflow-y-auto dark:border-gray-600 rounded-md"
  >
    <Loader
        v-if="fieldsLoading && leadsLoading"
    />
    <Table
        v-else
        class="w-full bg-white"
    >
      <TableHeader
          class="bg-blue-400 dark:bg-blue-500 sticky top-0 z-10 shadow-md text-white text-base"
      >
        <TableRow>
          <TableHead
              v-for="(field, key) in fields"
              :key="key"
              class="py-2 px-2 border-b text-left cursor-pointer hover:bg-blue-600 text-white"
              @mouseover="isHoveredColumn = field.name"
              @mouseleave="isHoveredColumn = null"
              @click="sortTable(field.name, field.type)"
          >
            <div
                class="flex gap-1 items-center"
            >
              <span>
                {{ field.name }}
              </span>
              <div
                  v-if="sortKey === field.name || isHoveredColumn === field.name"
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
            v-for="(lead, key) in leads"
            :key="lead.ID"
            :class="rowBgColorClass(key)"
            class="h-14 border-b text-black"
        >
          <TableCell
              v-for="(field, key) in fields"
              :key="key"
              :title="lead[field.name]"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ formatFieldValue(lead[field.name], field.type) }}
            </div>
          </TableCell>
        </TableRow>

      </TableBody>
    </Table>
  </div>
</template>
