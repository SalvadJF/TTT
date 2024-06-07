import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function CrearEtiquetaModal({ onClose }) {
    const { data, setData, errors, post } = useForm({
        nombre: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("etiquetas.store"), {
            onSuccess: () => {
                onClose();
                // Puedes añadir aquí alguna lógica adicional luego de crear la categoría
            },
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Crear Nueva Etiqueta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            id="nombre"
                            type="text"
                            className="mt-1 p-2 border rounded-md w-full"
                            value={data.nombre}
                            onChange={(e) => setData("nombre", e.target.value)}
                        />
                        {errors.nombre && (
                            <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 mr-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                            Crear
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
