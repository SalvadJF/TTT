import { useState } from 'react';
import axios from 'axios';

const SimuladorCompra = ({ articuloId, articuloPrecio, monedero, onClose }) => {
    const [mensaje, setMensaje] = useState('');

    const handleSimularCompra = async () => {
        try {
            const response = await axios.post(route('simularCompra'), {
                precio_venta: articuloPrecio,
                articulo_id: articuloId,
            });

            setMensaje(response.data.message);
            if (response.data.success) {
                window.open(route('facturas.show', { factura: response.data.factura.id }), '_blank');
                onClose();
            }
        } catch (error) {
            console.error('Error al simular compra:', error);
            setMensaje('Error al simular compra');
        }
    };

    const handleCompraPaypal = async () => {
        try {
            const response = await axios.post(route('simularCompraPaypal'), {
                precio_venta: articuloPrecio,
                articulo_id: articuloId,
            });

            if (response.data.success) {
                window.open(response.data.redirect_url, '_blank'); // Abre PayPal en una nueva ventana
            }
        } catch (error) {
            console.error('Error al realizar compra con PayPal:', error);
            setMensaje('Error al realizar compra con PayPal');
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
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                onClick={handleSimularCompra}
            >
                Comprar con Monedero
            </button>
            <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
                onClick={handleCompraPaypal}
            >
                Comprar con PayPal
            </button>
            <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={onClose}
            >
                Cerrar
            </button>
            {mensaje && <p className="mt-4 text-red-500">{mensaje}</p>}
        </div>
    );
};

export default SimuladorCompra;
