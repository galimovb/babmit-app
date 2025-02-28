import AxiosWrapper from "./AxiosWrapper";

export default class PhotosApi extends AxiosWrapper {
    static getPhotos(albumIds = [], page , limit) {
        const albumFilter = albumIds.length
            ? albumIds.map(id => `albumId=${id}`).join("&")
            : "";
        const url = `/photos?${albumFilter}&_page=${page}&_limit=${limit}`;
        return this.get(url);
    }
}
