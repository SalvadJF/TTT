import defaultTheme from 'tailwindcss/defaultTheme';
const flowbite = require("flowbite-react/tailwind");
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './node_modules/flowbite/**/*.js',
        flowbite.content(),
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                koulen: ['Koulen', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
            },
        },
    },

    plugins: [
        forms,
        require('flowbite/plugin'),
        flowbite.plugin(),
    ],
};
