import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import leadApi from "@/api/leadApi.js";

export const useLeadsStore = defineStore("leads", () => {
    const needFields = {
        ID: "ID",
        TITLE: "Название лида",
        CREATED_BY_ID: "Кем создан",
        DATE_CREATE: "Дата создания",
        SOURCE_ID: "Источник",
        STATUS_ID: "Стадия",
        STATUS_SEMANTIC_ID: "Состояние статуса",
        ASSIGNED_BY_ID: "Ответственный",
        DATE_CLOSED: "Дата завершения",
        OPPORTUNITY: "Сумма",
        CURRENCY_ID: "Валюта",
        UTM_SOURCE: "Рекламная система",
        SOURCE_DESCRIPTION: "Дополнительно об источнике"
    };


    const fieldsLoading = ref(false);
    const leadsLoading = ref(false);

    const idFrom = ref(544158);
    const idTo = ref(544294);

    const prevIdFrom = ref(idFrom.value); // Храним предыдущее значение
    const prevIdTo = ref(idTo.value);

    //все данные битрикса
    const BX = reactive({
        leadStatuses: {},
        leadFields: {},
        leadSources: {},
        leads: [],

    });

    const getFields = async () => {
        fieldsLoading.value = true;

        try {
            const response = await leadApi.getFields();
            const respFields = response.data.result;

            BX.leadFields = Object.keys(needFields).reduce((acc, fieldKey) => {
                const fieldData = respFields[fieldKey];
                if (fieldData) {
                    acc[fieldKey] = {
                        title: fieldData.title,
                        type: fieldData.type,
                    };
                }
                return acc;
            }, {});
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
            BX.leads = response.data.result;
        } catch (err) {
            console.warn(err);
        } finally {
            leadsLoading.value = false;
        }
    };

    const getStatuses = async () => {
        try {
            const response = await leadApi.getStatus();
            const respData = response.data.result;

            respData.forEach((el) => {
                BX.leadStatuses[el.STATUS_ID] = el;
            });
        } catch (err) {
            console.warn(err);
        }
    };
    const getSources = async () => {
        try {
            const response = await leadApi.getSources();
            const respData = response.data.result;

            respData.forEach((el) => {
                BX.leadSources[el.STATUS_ID] = el;
            });
        } catch (err) {
            console.warn(err);
        }
    };


    const getLeadsByFilter = () => {
        if (idFrom.value !== prevIdFrom.value || idTo.value !== prevIdTo.value) {  // Проверяем, изменились ли idFrom или idTo
            getLeads();
            prevIdFrom.value = idFrom.value;
            prevIdTo.value = idTo.value;
        }
    };


    return {
        leadsLoading, fieldsLoading,
        idFrom, idTo, needFields, BX,
        getFields, getLeads, getLeadsByFilter, getStatuses, getSources
    };
});
