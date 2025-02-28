import { ref, watch, computed, onMounted } from "vue";
import { defineStore } from "pinia";
import PhotosApi from "../api/photoApi.js";

export const usePhotosStore = defineStore("photos", () => {
    const photos = ref([]);
    const loading = ref(false);
    const currentPage = ref(1);
    const hasMorePhotos = ref(true);
    const searchQuery = ref(localStorage.getItem("searchQuery") || "");

    const searchAlbumIds = computed(() =>
        searchQuery.value
            .split(" ")
            .map(id => id.trim())
            .filter(Boolean)
    );

    const getPhotos = async () => {
        if (!hasMorePhotos.value || loading.value) return;

        loading.value = true;
        try {
            const response = await PhotosApi.getPhotos(searchAlbumIds.value, currentPage.value);
            const newPhotos = response.data || [];

            if (newPhotos.length) {
                photos.value = [...photos.value, ...newPhotos];
            } else {
                hasMorePhotos.value = false;
            }
        } catch (error) {
            console.error("Error loading photos:", error);
        } finally {
            loading.value = false;
        }
    };

    const getPhotosByAlbumId = () => {
        localStorage.setItem("searchQuery", searchQuery.value.trim());

        photos.value = [];
        currentPage.value = 1;
        hasMorePhotos.value = true;

        return getPhotos();
    };

    const getMorePhotos = () => {
        if (!loading.value) {
            currentPage.value++;
            getPhotos();
        }
    };

    return { photos, loading, searchQuery, getPhotos, getPhotosByAlbumId, getMorePhotos };
});
