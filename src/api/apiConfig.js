export const  FIELDS_API_URL = 'https://dveri-bambit.bitrix24.ru/rest/80/9uwfqpx80xpzfitu/crm.lead.fields.json';
export const TABLE_API_URL = 'https://jsonplaceholder.typicode.com';

export const LEADS_API_URL = 'https://dveri-bambit.bitrix24.ru/rest/80/owek0rroksj03sg5/crm.lead.list.json';

export const STATUS_API_URL = 'https://dveri-bambit.bitrix24.ru/rest/80/94xsxq9qxbd1vh7f/crm.status.list.json?filter[ENTITY_ID]=STATUS';

export const USER_API_URl = 'https://dveri-bambit.bitrix24.ru/rest/80/yr0vrgpfvlyc2l66/user.get.json';
export const SOURCES_API_URL = 'https://dveri-bambit.bitrix24.ru/rest/80/94xsxq9qxbd1vh7f/crm.status.list.json?filter[ENTITY_ID]=SOURCE';
export const getLeadsByFilterApiUrl = (idFrom, idTo) => {
    const filters = `?filter[%3EID]=${idFrom}&filter[%3CID]=${idTo}`;
    const selects = '&select[0]=STATUS_SEMANTIC_ID&select[1]=SOURCE_DESCRIPTION&select[2]=ASSIGNED_BY_ID&select[3]=CREATED_BY_ID&select[4]=CURRENCY_ID&select[5]=DATE_CLOSED' +
        '&select[6]=DATE_CREATE&select[7]=UTM_SOURCE&select[8]=SOURCE_ID&select[9]=STATUS_ID&select[10]=TITLE&select[11]=OPPORTUNITY&select[12]=ID&order[ID]=ASC';

    return LEADS_API_URL + filters + selects;
};
