import { defineStore } from "pinia";
import {ref, watch} from "vue";
import leadApi from "@/api/leadApi.js";

export const useLeadsStore = defineStore("leads", (needFilds) => {
    // Поля, которые нужно отобразить в правильном порядке
    const needFields = [
        { name: "ID" },
        { name: "TITLE" },
        { name: "CREATED_BY_ID" },
        { name: "DATE_CREATE" },
        { name: "SOURCE_ID" },
        { name: "STATUS_ID" },
        { name: "STATUS_SEMANTIC_ID" },
        { name: "ASSIGNED_BY_ID" },
        { name: "DATE_CLOSED" },
        { name: "OPPORTUNITY" },
        { name: "CURRENCY_ID" },
        { name: "UTM_SOURCE" },
        { name: "SOURCE_DESCRIPTION" }
    ];

    const fieldsLoading = ref(false);
    const leadsLoading = ref(false);

    const idFrom = ref(544158);
    const idTo = ref(544294);

    const fields = ref([]);
    const leads = ref([]);

    const getFields = async () => {
        fieldsLoading.value = true;

        try {
            const response = await leadApi.getFields();
            const respFields = response.data.result;

            // Преобразуем поля в удобный формат с type и title
            fields.value = needFields
                .map((field) => {
                    const fieldData = respFields[field.name];
                    if (fieldData) {
                        return {
                            name: field.name,
                            type: fieldData.type,
                            title: fieldData.title
                        };
                    }
                })
            fields.value.forEach(field =>  console.log(field) )
        } catch (err) {
            console.warn(err);
        } finally {
            fieldsLoading.value = false;
        }
    };

    const getLeads = async () => {
        leadsLoading.value = true;

        try {
            const response = await leadApi.getLeads(idFrom.value, idTo.value);
            leads.value = response.data.result;
        } catch (err) {
            console.warn(err);
        } finally {
            leadsLoading.value = false;
        }
    };

    watch([idFrom, idTo], () => {
       getLeads();
    });

    return { fields, leads, leadsLoading, fieldsLoading, idFrom, idTo, needFields, getFields, getLeads };
});
