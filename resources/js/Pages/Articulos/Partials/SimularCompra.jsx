import { useState } from 'react';
import axios from 'axios';

const SimuladorCompra = ({ articuloId, articuloPrecio, monedero, modelo, onClose }) => {
    const [mensaje, setMensaje] = useState('');

    const handleSimularCompra = async () => {
        try {
            // Envía una solicitud al servidor para simular la compra
            const response = await axios.post(route('simularCompra'), {
                precio_venta: articuloPrecio,
                articulo_id: articuloId,
            });

            // Si la compra se realiza con éxito, muestra un mensaje y descarga el modelo
            setMensaje(response.data.message);
            if (response.data.success) {
                // Descarga el modelo
                window.location.href = `/img/modelos/${modelo}`;
                // Cierra el modal después de la compra
                onClose(); // Aquí se llama a la función para cerrar el modal
            }

        } catch (error) {
            // Maneja cualquier error que ocurra durante la simulación de compra
            console.error('Error al simular compra:', error);
            setMensaje('Error al simular compra');
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="font-bold text-2xl mb-4">Simulador de Compra</h1>
            <div className="mb-4">
                <p className="mb-1">Tu Monedero: {monedero}</p>
                <p className="mb-1">Precio del Artículo: {articuloPrecio}</p>
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                onClick={handleSimularCompra}
            >
                Comprar
            </button>
            <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={onClose} // Esta función se llamará al hacer clic en el botón "Cerrar"
            >
                Cerrar
            </button>
            {mensaje && <p className="mt-4">{mensaje}</p>}
        </div>
    );
};

export default SimuladorCompra;
