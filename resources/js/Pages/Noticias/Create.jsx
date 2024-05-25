import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { BreadcrumbArticulos } from "@/Components/BreadCrumb";

const CreateNoticia = ({ auth, etiquetas }) => {
    const { data, setData, errors, post } = useForm({
        titulo: "",
        resumen: "", // Nuevo campo: Resumen
        contenido: "",
        tipo: "", // Nuevo campo: Tipo
        imagen: null,
        categorias: [],
        etiquetas: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("noticias.store"), {
            onSuccess: () => {
                // Manejar éxito, redireccionar o mostrar un mensaje
            },
        });
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
                <BreadcrumbArticulos />
            </div>
            <div className="max-w-sm mx-auto">
                <h1 className="font-koulen text-3xl text-white mb-5 pt-5 pb-5">
                    Crear Noticia
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
                            htmlFor="resumen"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Resumen:
                        </label>
                        <textarea
                            id="resumen"
                            rows="2"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.resumen}
                            onChange={(e) => setData("resumen", e.target.value)}
                        ></textarea>
                        {errors.resumen && (
                            <span className="error text-red-500">
                                {errors.resumen}
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
                            htmlFor="tipo"
                            className="font-koulen block mb-2 text-sm font-medium text-white"
                        >
                            Tipo:
                        </label>
                        <select
                            id="tipo"
                            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.tipo}
                            onChange={(e) => setData("tipo", e.target.value)}
                        >
                            <option value="">Selecciona un tipo</option>
                            <option value="Noticia">Noticia</option>
                            <option value="Entrevista">Entrevista</option>
                            <option value="Informacion">Información</option>
                        </select>
                        {errors.tipo && (
                            <span className="error text-red-500">
                                {errors.tipo}
                            </span>
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
                                        onChange={handleEtiquetaChange}
                                    />
                                    <label
                                        htmlFor={`etiqueta-${etiqueta.id}`}
                                        className="ml-2 text-sm text-white"
                                    >
                                        {etiqueta.nombre}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors.etiquetas && (
                            <p className="text-red-500">{errors.etiquetas}</p>
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
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            onChange={(e) =>
                                setData("imagen", e.target.files[0])
                            }
                        />
                        {errors.imagen && (
                            <span className="error text-red-500">
                                {errors.imagen}
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

export default CreateNoticia;
