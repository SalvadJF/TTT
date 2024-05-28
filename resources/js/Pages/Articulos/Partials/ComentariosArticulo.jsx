import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function ComentariosArticulo({ comentarios, articulo, user }) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const { delete: handleDelete } = useForm();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [comentarioToDelete, setComentarioToDelete] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    };

    const handleDeleteClick = (comentario) => {
        setComentarioToDelete(comentario);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        handleDelete(route("comentarios.destroy", comentarioToDelete.id));
        setShowDeleteModal(false);
    };

    return (
        <div>
            {/* Renderizar comentarios */}
            <div className="w-full mb-4">
                <div className="p-2 mb-4 border border-gray-100 rounded-lg bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150 w-full">
                    {comentarios.length === 0 ? (
                        <div className="text-center text-white font-lato">
                            <p>
                                Este artículo no tiene comentarios, ¡sé el
                                primero en comentar!
                            </p>
                        </div>
                    ) : (
                        comentarios.map((comentario, index) => (
                            <ol
                                key={index}
                                className="mt-3 divide-y divide-gray-200 dark:divide-gray-700"
                            >
                                <li className="flex items-start">
                                    <img
                                        className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                                        src={user.avatar}
                                        alt={`Usuario ${user.name}`}
                                    />
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <div className="text-white font-lato">
                                            <span className="font-medium text-white font-koulen">
                                                {user.name}
                                            </span>{" "}
                                            comentó a{" "}
                                            <span className="font-lato text-yellow-300">
                                                {articulo.nombre}
                                            </span>{" "}
                                            en{" "}
                                            <span className="font-medium text-blue-500">
                                                {formatDate(comentario.created_at)}
                                            </span>
                                        </div>
                                        <div className="text-sm font-lato text-blue-200">
                                            {comentario.contenido}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteClick(comentario)}
                                        className="inline-flex items-center px-3 py-2 ml-4 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-red-700 text-neutro-4 hover:bg-red-800 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        <img src="/img/iconos/trash.svg" alt="Icono Borrar" className="w-4 h-4" />
                                    </button>
                                </li>
                            </ol>
                        ))
                    )}
                </div>
            </div>

            {/* Formulario para agregar comentario */}
            <div className="w-full">
                <form
                    id="comentarioForm"
                    className="max-w-full mx-auto"
                    method="POST"
                    action={route("comentarios.store")}
                >
                    {/* CSRF Token */}
                    <input type="hidden" name="_token" value={csrfToken} />

                    {/* Tipo y ID del objeto comentable */}
                    <input type="hidden" name="comentable_type" value="App\Models\Articulo" />
                    <input type="hidden" name="comentable_id" value={articulo.id} />

                    {/* Contenido del comentario */}
                    <label htmlFor="contenido" className="block mb-2 text-sm font-lato text-white">
                        ¡Comenta!
                    </label>
                    <textarea
                        id="contenido"
                        name="contenido"
                        rows="1"
                        className="block p-2.5 w-full text-sm text-white bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150"
                        placeholder="Deja tu comentario"
                    ></textarea>

                    {/* Botón de enviar comentario */}
                    <button
                        type="submit"
                        className="text-center font-koulen w-60 py-2.5 px-5 mt-5 text-l font-medium text-white focus:outline-none bg-red-800 rounded-lg border border-black hover:bg-red-900 focus:z-10 focus:ring-4 focus:ring-gray-100 no-underline"
                    >
                        Enviar Comentario
                    </button>
                </form>
            </div>

            {/* Modal de confirmación de borrado */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold mb-4">¿Estás seguro de que quieres borrar este comentario?</p>
                        <div className="flex justify-center">
                            <button className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => handleConfirmDelete()}>Borrar</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400" onClick={() => setShowDeleteModal(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
