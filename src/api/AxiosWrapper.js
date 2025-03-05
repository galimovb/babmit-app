import axios from "axios";

export default class AxiosWrapper {
    static get(url, config = {}) {
        return axios.get(url, config);
    }

}
