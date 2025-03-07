import AxiosWrapper from "@/api/AxiosWrapper.js";
import {
    FIELDS_API_URL,
    getLeadsByFilterApiUrl,
    SOURCES_API_URL,
    STATUS_API_URL,
    USER_API_URl
} from "@/api/apiConfig.js";


export default class LeadApi extends AxiosWrapper{
    static getFields() {
        return this.get(FIELDS_API_URL);
    }

    static getLeads(idFrom, idTo, sorted = "") {
        const url = getLeadsByFilterApiUrl(idFrom, idTo);
        return this.get(url + sorted);
    }

    static getStatus() {
        return this.get(STATUS_API_URL);
    }

    static getSources() {
        return this.get(SOURCES_API_URL);
    }

    static getUsers() {
        return this.get(USER_API_URl);
    }
}
