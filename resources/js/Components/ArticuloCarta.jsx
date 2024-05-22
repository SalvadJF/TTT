export default function ArticuloCarta ({ articulo }) {
    return (
            <a href={`/articulos/${articulo.id}`} className="max-w-sm bg-cover bg-center bg-no-repeat bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-1" style={{backgroundImage: `url('${articulo.imagen}')`}}>
            <div className="p-5 bg-opacity-50">
                <h5 className="font-koulen mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{articulo.nombre}</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{articulo.user.name}</h5>
            </div>
        </a>
    );
};
