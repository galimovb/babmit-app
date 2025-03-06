export const colors =
    [
        'bg-red-50',
        'bg-yellow-50 dark:bg-yellow-100',
        'bg-green-50 dark:bg-green-100',
        'bg-blue-50 dark:bg-blue-100',
        'bg-purple-50 dark:bg-purple-100'
    ];



export const tableHeaderItems = [
    {key: 'id', label: 'Ид'},
    {key: 'albumId', label: 'Альбом'},
    {key: 'title', label: 'Название'},
    {key: 'url', label: 'Ссылка'},
    {key: 'thumbnailUrl', label: 'Миниатюра'},
];

export const rowBgColorClass = (index) => {
    return colors[index % colors.length];
};

export const formatFieldValue = (value, type) => {
        if (!value) return ''

        if (value && type === "datetime") {
            const date = new Date(value);

            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();

            return `${day}-${month}-${year}`;
        }
        return value;
    }
;

