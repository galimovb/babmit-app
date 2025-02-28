import { defineStore } from 'pinia';
import {ref} from "vue";

export const useThemeStore = defineStore('theme', () => {
    const theme = ref('light');
    const toggleTheme = () => {
        console.log('Вызвал функцию')
        theme.value = theme.value === 'light' ? 'dark' : 'light';

        if (theme.value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return { theme, toggleTheme };
});
