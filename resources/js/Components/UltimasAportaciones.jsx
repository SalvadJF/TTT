export default function UltimasAportaciones({articulos}) {
    <div className="flex flex-col items-center justify-center p-10">
        <div className="text-left w-full">
            <h1 className=" mb-5 text-4xl font-koulen text-white">Ultimas Aportaciones</h1>
        </div>

        <div className="flex flex-wrap gap-5 justify-center ">
            {articulos.map((articulo) => (
                <a key={articulo.id} href={route('articulos.show', { articulo: articulo.id })} className="max-w-sm bg-cover bg-center bg-no-repeat bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-1" style={{ backgroundImage: `url('${asset(articulo.imagen_url)}')` }}>
                    <div className="p-5 bg-opacity-50">
                        {/* Titulo del Articulo */}
                        <h5 className="font-koulen mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{articulo.nombre}</h5>
                        {/* Autor del Articulo */}
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{articulo.user.name}</h5>
                    </div>
                </a>
            ))}
        </div>

        <div className="flex justify-center p-5 gap-10">
            <a href={route('articulos.index')} className="text-center font-koulen w-40 py-2.5 px-5 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Ver Galeria
            </a>
            <a href={route('articulos.create')} className="text-center font-koulen w-40 py-2.5 px-5 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Sube los tuyos
            </a>
        </div>
    </div>
}
