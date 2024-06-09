import { useState } from 'react';
import axios from 'axios';
import { ApplicationLogoMedio } from '@/Components/ApplicationLogo';

const SimuladorCompra = ({ articuloId, articuloPrecio, usuario, onClose }) => {
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
        <div className="max-w-md mx-auto text-center">
            <div className="flex justify-center mb-4">
                <ApplicationLogoMedio />
            </div>
            <div className="mb-4">
                <h3 className="mb-1 font-koulen">Precio {articuloPrecio}€</h3>
            </div>
            <h5>Metodos de Pago</h5>
            <div className="mb-2">
                <button
                    type="button"
                    className="font-koulen bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900 mb-2 w-full"
                    onClick={handleSimularCompra}
                >
                    <img
                        src="/img/iconos/comprador-de-billetera.svg"
                        alt="Icono Monedero"
                        className="w-4 h-4 mr-2 inline-block"
                    />
                    Monedero
                    <p className="mb-1">Saldo: {usuario.monedero}€</p>
                </button>
            </div>
            <div className="mb-2">
                <button
                    type="button"
                    className="font-koulen bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-800 mb-2 w-full"
                    onClick={handleCompraPaypal}
                >
                    <img
                        src="/img/iconos/paypal.svg"
                        alt="Icono paypal"
                        className="w-4 h-4 mr-2 inline-block"
                    />
                    PayPal
                </button>
            </div>
            <button
                className="font-koulen bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full mb-2"
                onClick={onClose}
            >
                Cerrar
            </button>
            {mensaje && <p className="mt-4 text-red-500">{mensaje}</p>}
        </div>
    );
};

export default SimuladorCompra;
