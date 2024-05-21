export default function UltimasNoticias({noticias}) {
    <div className="flex flex-col items-center justify-center p-10">
        <div className="text-left w-full">
            <h1 className="mb-5 text-4xl font-koulen text-white">Novedades</h1>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
            {noticias.map((noticia) => (
                <div key={noticia.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-1">
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
            ))}
        </div>

        {/* Botón de "Lea más Noticias" */}
        <div className="flex justify-center p-5 gap-10">
            <a href={route('noticias.index')} className="text-center font-koulen w-80 py-2.5 px-5 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Lea mas Noticias
            </a>
        </div>
    </div>
}
