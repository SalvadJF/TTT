export default function NoticiaCarta({noticia}) {
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-1">
        {/* Imagen de la Noticia */}
        <a href={route('noticias.show', { noticia: noticia.id })}>
            {noticia.imagen ? (
                <img className="object-cover w-full rounded-t-lg md:h-auto md:w-auto md:rounded-lg" src={asset(noticia.imagen_url)} alt="Imagen de la noticia" />
            ) : (
                <p className="w-full md:w-48 text-center">No hay imagen disponible para esta noticia.</p>
            )}
        </a>
        <div className="p-5">
            {/* Título de la noticia */}
            <h5 className="font-koulen mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{noticia.titulo}</h5>
            <a href={route('noticias.show', { noticia: noticia.id })} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Leer más
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    </div>
};
