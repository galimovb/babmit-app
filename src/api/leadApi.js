import AxiosWrapper from "@/api/AxiosWrapper.js";
import {FIELDS_API_URL, getLeadsByFilterApiUrl} from "@/api/apiConfig.js";


export default class LeadApi extends AxiosWrapper{
    static getFields() {
        return this.get(FIELDS_API_URL);
    }

    static getLeads(idFrom, idTo, sorted = "") {
        const url = getLeadsByFilterApiUrl(idFrom, idTo);
        return this.get(url + sorted);
    }
}
