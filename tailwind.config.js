/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    extend: {
        backgroundColor:{
            'app' : 'red'
        },
        gridTemplateColumns: {
            'table': '10% 15% 25% 25% 25%',
        },
    },
    plugins: [],
}
