export default function ComentariosArticulo  ({ comentarios, articulo, user })  {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    return (
        <div>
            {/* Renderizar comentarios */}
            <div className="w-full mb-4">
                    <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150 w-full">
                        {comentarios.length === 0 ? (
                            <div className="text-center text-gray-600 dark:text-gray-400">
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
                                                    {comentario.created_at}
                                                </span>
                                            </div>
                                            <div className="text-sm font-lato text-blue-200">
                                                {comentario.contenido}
                                            </div>
                                        </div>
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
                        className="block p-2.5 w-full text-sm text-gray-900 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150"
                        placeholder="Deja tu comentario"
                    ></textarea>

                    {/* Botón de enviar comentario */}
                    <button
                        type="submit"
                        className="mt-5 p-5 text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Enviar Comentario
                    </button>
                </form>
            </div>
        </div>
    );
};
