import { useState } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";

const CambiarImagenModal = ({ noticiaId }) => {
    const { errors } = usePage().props;
    const [imagen, setImagen] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSubmitImagen = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("imagen", imagen);

        axios.post(`/noticias/${noticiaId}/cambiarImagen`, formData)
            .then((response) => {
                setImagen(null);
                setSuccessMessage(response.data.message);
                setErrorMessage("");
            })
            .catch((error) => {
                setSuccessMessage("");
                if (error.response) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("Ha ocurrido un error al procesar la solicitud.");
                }
            });
    };


    return (
        <div>
            <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-green-400 disabled:opacity-50 disabled:pointer-events-none"
            >
                 <img src="/img/iconos/anadir-imagen.svg" alt="Icono cambiar imagen" className="w-4 h-4" style={{ minWidth: "12px", minHeight: "12px" }}/>
            </button>
            {modalOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    <div className="relative bg-white rounded-lg w-full max-w-md p-8">
                        <h3 className="font-koulen text-lg text-gray-900 mb-4 text-center">Cambiar Imagen de Noticia</h3>
                        {errorMessage && (
                            <p className="text-red-500 mb-4">{errorMessage}</p>
                        )}
                        {successMessage && (
                            <p className="text-green-500 mb-4">{successMessage}</p>
                        )}
                        <form onSubmit={handleSubmitImagen} className="mb-6">
                            <div className="mb-6">
                                <label htmlFor="imagen" className="block text-lg font-koulen text-gray-700">Nueva Imagen</label>
                                <input type="file" name="imagen" id="imagen" onChange={(e) => setImagen(e.target.files[0])} />
                                {errors.imagen && <p className="text-red-500 mt-1">{errors.imagen}</p>}
                            </div>
                            <button type="submit" className="font-koulen inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-900 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
                                Cambiar Imagen
                            </button>
                        </form>
                        <div className="mt-5 sm:mt-6">
                            <button
                                onClick={handleCloseModal}
                                className="font-koulen inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                            >
                                Salir
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CambiarImagenModal;
