import { useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { BreadcrumbNoticias } from "@/Components/BreadCrumb";

const EditarNoticia = () => {
    const {
        auth,
        noticia,
        categorias,
        etiquetas,
        categoriasNoticia,
        etiquetasNoticia,
    } = usePage().props;
    const { data, setData, errors, put } = useForm({
        titulo: noticia.titulo,
        contenido: noticia.contenido,
        categorias: categoriasNoticia.map((categoria) => categoria.id),
        etiquetas: etiquetasNoticia.map((etiqueta) => etiqueta.id),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("noticias.update", noticia.id), {
            onSuccess: () => {
                // Manejar éxito, redireccionar o mostrar un mensaje
            },
        });
    };

    const handleCategoriaChange = (e) => {
        const value = parseInt(e.target.value);
        setData(
            "categorias",
            data.categorias.includes(value)
                ? data.categorias.filter((id) => id !== value)
                : [...data.categorias, value]
        );
    };

    const handleEtiquetaChange = (e) => {
        const value = parseInt(e.target.value);
        setData(
            "etiquetas",
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
                    Noticias
                </h2>
            }
        >
            <div className="ml-20 pt-40">
                <BreadcrumbNoticias />
            </div>
            <div className="max-w-sm mx-auto">
                <h1 className="font-koulen text-3xl text-white mb-5 pt-5 pb-5">
                    Editar Noticia
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="titulo"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Titulo:
                        </label>
                        <input
                            type="text"
                            id="titulo"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.titulo}
                            onChange={(e) => setData("titulo", e.target.value)}
                        />
                        {errors.titulo && (
                            <span className="error text-red-500">
                                {errors.titulo}
                            </span>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="contenido"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Descripción:
                        </label>
                        <textarea
                            id="contenido"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.contenido}
                            onChange={(e) =>
                                setData("contenido", e.target.value)
                            }
                        ></textarea>
                        {errors.contenido && (
                            <span className="error text-red-500">
                                {errors.contenido}
                            </span>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="categorias"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Selecciona Categorías
                        </label>
                        <div
                            className={
                                errors.categorias ? "border-red-500" : ""
                            }
                        >
                            {categorias.map((categoria) => (
                                <div key={categoria.id}>
                                    <input
                                        type="checkbox"
                                        id={`categoria-${categoria.id}`}
                                        value={categoria.id}
                                        checked={data.categorias.includes(
                                            categoria.id
                                        )}
                                        onChange={handleCategoriaChange}
                                    />
                                    <label
                                        htmlFor={`categoria-${categoria.id}`}
                                        className="ml-2 text-sm text-white"
                                    >
                                        {categoria.titulo}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors.categorias && (
                            <p className="text-red-500">{errors.categorias}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="etiquetas"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Selecciona Etiquetas
                        </label>
                        <div
                            className={errors.etiquetas ? "border-red-500" : ""}
                        >
                            {etiquetas.map((etiqueta) => (
                                <div key={etiqueta.id}>
                                    <input
                                        type="checkbox"
                                        id={`etiqueta-${etiqueta.id}`}
                                        value={etiqueta.id}
                                        checked={data.etiquetas.includes(
                                            etiqueta.id
                                        )}
                                        onChange={handleEtiquetaChange}
                                    />
                                    <label
                                        htmlFor={`etiqueta-${etiqueta.id}`}
                                        className="ml-2 text-sm text-white"
                                    >
                                        {etiqueta.titulo}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors.etiquetas && (
                            <p className="text-red-500">{errors.etiquetas}</p>
                        )}
                    </div>
                    {/* Campos para seleccionar categorías y etiquetas */}
                    <div className="flex items-center justify-center p-4 space-x-4">
                        <button
                            type="submit"
                            className="font-koulen text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditarNoticia;
