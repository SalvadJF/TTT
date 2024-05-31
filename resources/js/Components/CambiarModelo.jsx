import { useState } from "react";
import { usePage } from "@inertiajs/react";

const CambiarModeloModal = ({ articuloId }) => {
    const { errors, flash } = usePage().props;
    const [modelo, setModelo] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("modelo", modelo);

        axios
            .post(`/articulos/${articuloId}/cambiarModelo`, formData)
            .then(() => {
                // Manejar éxito, redireccionar o mostrar un mensaje
            })
            .catch((error) => {
                // Manejar errores
            });

        setModalOpen(false);
    };

    return (
        <div>
            <button
                onClick={() => setModalOpen(true)}
                className="font-koulen text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Cambiar Modelo
            </button>
            {modalOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="font-medium text-lg text-gray-900 mb-4">
                                            Cambiar Modelo
                                        </h3>
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <label
                                                    htmlFor="modelo"
                                                    className="font-koulen block mb-2 text-sm font-medium text-gray-700"
                                                >
                                                    Selecciona un nuevo modelo:
                                                </label>
                                                <input
                                                    type="file"
                                                    id="modelo"
                                                    onChange={(e) =>
                                                        setModelo(
                                                            e.target.files[0]
                                                        )
                                                    }
                                                />
                                                {errors.modelo && (
                                                    <span className="error text-red-500">
                                                        {errors.modelo}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="mt-5 sm:mt-6">
                                                <button
                                                    type="submit"
                                                    className="font-koulen inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-900 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                                                >
                                                    Guardar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CambiarModeloModal;
