export default function Boton ({ ruta, texto }) {
    return (
        <div className="flex justify-center p-5 gap-10">
            <a
                href={ruta}
                className="text-center font-koulen w-80 py-2.5 px-5 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                {texto}
            </a>
        </div>
    );
};

