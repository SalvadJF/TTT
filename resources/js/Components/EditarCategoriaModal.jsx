import React from "react";
import { useForm } from "@inertiajs/react";

export default function EditarCategoriaModal({ categoria, onClose }) {
    const { data, setData, errors, put } = useForm({
        nombre: categoria.nombre,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("categorias.update", categoria.id), {
            onSuccess: () => {
                // Manejar éxito, redireccionar o mostrar un mensaje
                onClose(); // Cerrar modal después de guardar
            },
        });
    };

    const handleNombreChange = (e) => {
        setData({ ...data, nombre: e.target.value });
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg">
                <p className="text-lg font-semibold mb-4">Editar Categoría</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={data.nombre}
                            onChange={handleNombreChange}
                            className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                        {errors.nombre && (
                            <p className="text-sm text-red-500 mt-1">{errors.nombre}</p>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Guardar
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
