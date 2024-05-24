import { useState } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const SimuladorCompra = () => {
    const [precioVenta, setPrecioVenta] = useState(0);
    const [articuloId, setArticuloId] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const handleSimularCompra = async () => {
        try {
            // Envía una solicitud al servidor para simular la compra
            const response = await axios.post(route('simularCompra'), {
                precio_venta: precioVenta,
                articulo_id: articuloId,
            });

            // Si la compra se realiza con éxito, muestra un mensaje
            setMensaje(response.data.message);
        } catch (error) {
            // Maneja cualquier error que ocurra durante la simulación de compra
            console.error('Error al simular compra:', error);
            setMensaje('Error al simular compra');
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-md mx-auto">
                <h1 className="font-bold text-2xl mb-4">Simulador de Compra</h1>
                <div className="mb-4">
                    <label htmlFor="precioVenta" className="block font-medium mb-1">Precio de Venta:</label>
                    <input
                        type="number"
                        id="precioVenta"
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        value={precioVenta}
                        onChange={(e) => setPrecioVenta(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="articuloId" className="block font-medium mb-1">ID del Artículo:</label>
                    <input
                        type="text"
                        id="articuloId"
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        value={articuloId}
                        onChange={(e) => setArticuloId(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleSimularCompra}
                >
                    Simular Compra
                </button>
                {mensaje && <p className="mt-4">{mensaje}</p>}
            </div>
        </AuthenticatedLayout>
    );
};

export default SimuladorCompra;
