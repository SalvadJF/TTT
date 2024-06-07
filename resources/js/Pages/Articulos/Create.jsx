import { useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { BreadcrumbArticulosFunciones } from "@/Components/BreadCrumb";

const CreateArticulo = ({ auth, categorias, etiquetas }) => {
    const { flash } = usePage().props; // Obtener flash messages desde props
    const { data, setData, errors, post } = useForm({
        nombre: "",
        descripcion: "",
        tipo: "",
        licencia: "",
        imagen: null,
        modelo: null,
        categorias: [],
        etiquetas: [],
        precio: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("articulos.store"), {
            onSuccess: () => {
                // Manejar éxito, redireccionar o mostrar un mensaje
            },
        });
    };

    const handleCategoriaChange = (e) => {
        const value = parseInt(e.target.value);
        setData("categorias",
            data.categorias.includes(value)
                ? data.categorias.filter((id) => id !== value)
                : [...data.categorias, value]
        );
    };

    const handleEtiquetaChange = (e) => {
        const value = parseInt(e.target.value);
        setData("etiquetas",
            data.etiquetas.includes(value)
                ? data.etiquetas.filter((id) => id !== value)
                : [...data.etiquetas, value]
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Artículos
                </h2>
            }
        >
            <div className="ml-20 pt-40">
                <BreadcrumbArticulosFunciones lugar="Crear Articulo" />
            </div>
            <div className="max-w-lg mx-auto mb-20">
                <h1 className="font-koulen text-3xl text-white mb-5 pt-5 pb-2">
                    Crear Artículo
                </h1>
                {flash.success && (
                    <div className="mb-4 text-green-500">
                        {flash.success}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-4">
                    <div>
                        <label
                            htmlFor="nombre"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            autoComplete="name"
                            aria-label="Nombre"
                            aria-describedby="nombre-error"
                            aria-invalid={errors.nombre ? 'true' : 'false'}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.nombre}
                            onChange={(e) => setData("nombre", e.target.value)}
                        />
                        {errors.nombre && (
                            <span className="error text-red-500">
                                {errors.nombre}
                            </span>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="descripcion"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Descripción:
                        </label>
                        <textarea
                            id="descripcion"
                            rows="4"
                            aria-label="Descripción"
                            aria-describedby="descripcion-error"
                            aria-invalid={errors.descripcion ? 'true' : 'false'}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.descripcion}
                            onChange={(e) => setData("descripcion", e.target.value)}
                        >
                        </textarea>

                        {errors.descripcion && (
                            <span className="error text-red-500">
                                {errors.descripcion}
                            </span>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="tipo"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Tipo:
                        </label>
                        <select
                            id="tipo"
                            aria-label="Tipo"
                            aria-describedby="tipo-error"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.tipo}
                            onChange={(e) => setData("tipo", e.target.value)}
                        >

                            <option value="">Seleccione tipo</option>
                            <option value="Modelo_3d">Modelo 3D</option>
                            <option value="Textura">Textura</option>
                        </select>
                        {errors.tipo && (
                            <span className="error text-red-500">
                                {errors.tipo}
                            </span>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="licencia"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Licencia:
                        </label>
                        <select
                            id="licencia"
                            aria-label="Licencia"
                            aria-describedby="licencia-error"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.licencia}
                            onChange={(e) => setData("licencia", e.target.value)}
                        >

                            <option value="CC0">CC0</option>
                            <option value="CC-BY">CC-BY</option>
                            <option value="CC-BY-SA">CC-BY-SA</option>
                            <option value="CC-BY-ND">CC-BY-ND</option>
                            <option value="CC-BY-NC">CC-BY-NC</option>
                            <option value="CC-BY-NC-SA">CC-BY-NC-SA</option>
                            <option value="CC-BY-NC-ND">CC-BY-NC-ND</option>
                        </select>
                        {errors.licencia && (
                            <span className="error text-red-500">
                                {errors.licencia}
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="categorias" className="font-koulen block mb-2 text-sm font-medium text-white">
                            Selecciona Categorías
                        </label>
                        <div className={errors.categorias ? 'border-red-500' : ''}>
                            {categorias.map((categoria) => (
                                <div key={categoria.id}>
                                    <input
                                        type="checkbox"
                                        id={`categoria-${categoria.id}`}
                                        value={categoria.id}
                                        onChange={handleCategoriaChange}
                                    />
                                    <label htmlFor={`categoria-${categoria.id}`} className="ml-2 text-sm text-white">
                                        {categoria.nombre}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors.categorias && <p className="text-red-500">{errors.categorias}</p>}
                    </div>
                    <div>
                        <label htmlFor="etiquetas" className="font-koulen block mb-2 text-sm font-medium text-white">
                            Selecciona Etiquetas
                        </label>
                        <div className={errors.etiquetas ? 'border-red-500' : ''}>
                            {etiquetas.map((etiqueta) => (
                                <div key={etiqueta.id}>
                                    <input
                                        type="checkbox"
                                        id={`etiqueta-${etiqueta.id}`}
                                        value={etiqueta.id}
                                        onChange={handleEtiquetaChange}
                                    />
                                    <label htmlFor={`etiqueta-${etiqueta.id}`} className="ml-2 text-sm text-white">
                                        {etiqueta.nombre}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors.etiquetas && <p className="text-red-500">{errors.etiquetas}</p>}
                    </div>
                    <div>
                        <label
                            htmlFor="precio"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Precio:
                        </label>
                        <input
                            id="precio"
                            type="number"
                            aria-label="Precio"
                            aria-describedby="precio-error"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.precio}
                            onChange={(e) => setData("precio", e.target.value)}
                        />

                        {errors.precio && (
                            <span className="error text-red-500">
                                {errors.precio}
                            </span>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="imagen"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Imagen:
                        </label>
                        <input
                            id="imagen"
                            type="file"
                            aria-label="Imagen"
                            aria-describedby="imagen-error"
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            onChange={(e) => setData("imagen", e.target.files[0])}
                        />

                        {errors.imagen && (
                            <span className="error text-red-500">
                                {errors.imagen}
                            </span>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="modelo"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Modelo:
                        </label>
                        <input
                            id="modelo"
                            type="file"
                            aria-label="Modelo"
                            aria-describedby="modelo-error"
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            onChange={(e) => setData("modelo", e.target.files[0])}
                        />

                        {errors.modelo && (
                            <span className="error text-red-500">
                                {errors.modelo}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center justify-center p-4 space-x-4">
                        <button
                            type="submit"
                            className="font-koulen text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateArticulo;
