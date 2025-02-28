import axios from "axios";

const axiosSettings = {
    baseURL: "https://jsonplaceholder.typicode.com",
};

export default class AxiosWrapper {
    static get(url, config = {}) {
        return axios.get(url, { ...axiosSettings, ...config });
    }
}
