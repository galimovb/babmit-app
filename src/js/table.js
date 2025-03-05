export const colors =
    [
        'bg-red-50 hover:bg-red-100 dark:bg-red-100 dark:hover:bg-red-200',
        'bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-100 dark:hover:bg-yellow-200',
        'bg-green-50 hover:bg-green-100 dark:bg-green-100 dark:hover:bg-green-200',
        'bg-blue-50 hover:bg-blue-100 dark:bg-blue-100 dark:hover:bg-blue-200',
        'bg-purple-50 hover:bg-purple-100 dark:bg-purple-100 dark:hover:bg-purple-200'
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
        if (!value) return '-'

        if (value && type === "datetime") {
            const date = new Date(value);

            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();

            return `${day}-${month}-${year}`;

        } else if (value.length > 20) {
            return truncateText(value)
        }
        return value;
    }
;
export const truncateText = (text, length = 20) => {
    return text.length > length ? `${text.slice(0, length)}...` : text;
};

