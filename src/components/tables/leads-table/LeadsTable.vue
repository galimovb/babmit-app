<script setup>
import {onMounted, ref} from "vue";
import {useLeadsStore} from "@/stores/leads.js";
import {storeToRefs} from "pinia";
import {formatFieldValue} from "@/js/table.js";
import {MoveDown, MoveUp} from "lucide-vue-next";
import Loader from "@/components/shared/Loader.vue";
import TableRow from "@/components/ui/table/TableRow.vue";
import TableCell from "@/components/ui/table/TableCell.vue";
import TableBody from "@/components/ui/table/TableBody.vue";
import TableHeader from "@/components/ui/table/TableHeader.vue";

const leadStore = useLeadsStore();
const {  leadsLoading, fieldsLoading } = storeToRefs(leadStore);
const BX = leadStore.BX;

const SEMANTIC_ID = {
  P : "В работе",
  F : "Провален",
  S : "Успешно",
};

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

  BX.leads.sort((a, b) => {
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
  leadStore.getLeads();
  leadStore.getFields();
  leadStore.getStatuses();
  leadStore.getSources();
});
</script>

<template>
  <div
      class="mx-auto relative max-h-[800px] overflow-y-auto dark:border-gray-600 rounded-md scrollbar-thin"
  >
    <Loader
        v-if="fieldsLoading || leadsLoading"
    />
    <Table
        v-else
        class="w-full  bg-blue-400"
    >
      <TableHeader
          class="bg-blue-400 dark:bg-blue-500 sticky top-0 z-10 shadow-md text-white text-base"
      >
        <TableRow>
          <TableCell
              v-for="(field, key) in BX.leadFields"
              :key="key"
              class="py-2 px-2 border-b text-left cursor-pointer text-white hover:text-gray-300 dark:hover:text-gray-200"
              @mouseover="isHoveredColumn = key"
              @mouseleave="isHoveredColumn = null"
              @click="sortTable(key, field.type)"
          >
            <div
                class="flex gap-1 items-center min-w-[170px]"
            >
              <span>
                {{ field.title }}
              </span>
              <div
                  v-if="sortKey === key || isHoveredColumn === key"
                  class=""
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
          </TableCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow
            v-for="lead in BX.leads"
            :key="lead.ID"
            class="h-14 border-b text-black bg-blue-50 hover:bg-blue-200"
        >
          <TableCell
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ lead.ID }}
            </div>
          </TableCell>

          <TableCell
              :title="lead.TITLE"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ lead.TITLE }}
            </div>
          </TableCell>

          <TableCell
              :title="lead.TITLE"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ lead.CREATED_BY_ID }}
            </div>
          </TableCell>

          <TableCell
              :title="lead.TITLE"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ formatFieldValue(lead.DATE_CREATE) }}
            </div>
          </TableCell>

          <TableCell
              :title="lead.SOURCE_ID"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ BX.leadSources[lead.SOURCE_ID].NAME }}
            </div>
          </TableCell>

          <TableCell
              :title="BX.leadStatuses[lead.STATUS_ID].NAME"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ BX.leadStatuses[lead.STATUS_ID].NAME }}
            </div>
          </TableCell>
          <TableCell
              :title="lead.STATUS_SEMANTIC_ID"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ SEMANTIC_ID[lead.STATUS_SEMANTIC_ID] }}
            </div>
          </TableCell>

          <TableCell
              :title="lead.ASSIGNED_BY_ID"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ lead.ASSIGNED_BY_ID }}
            </div>
          </TableCell>

          <TableCell
              :title="lead.DATE_CLOSED"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ formatFieldValue(lead.DATE_CLOSED) }}
            </div>
          </TableCell>

          <TableCell
              :title="lead.OPPORTUNITY"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ lead.OPPORTUNITY }}
            </div>
          </TableCell>

          <TableCell
              :title="lead.CURRENCY_ID"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ lead.CURRENCY_ID }}
            </div>
          </TableCell>

          <TableCell
              :title="lead.UTM_SOURCE"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ lead.UTM_SOURCE }}
            </div>
          </TableCell>

          <TableCell
              :title="lead.SOURCE_DESCRIPTION"
              class="py-1 px-2"
          >
            <div
                class="max-w-[150px] truncate"
            >
              {{ lead.SOURCE_DESCRIPTION }}
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
