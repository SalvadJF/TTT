import { useState } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

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
                Comprar
            </button>
            <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={onClose}
            >
                Cerrar
            </button>
            <PayPalScriptProvider options={{ "client-id": "AXxUfKk1G3Jr3SIJMlGeLoa_bm3pBUq7Y2aBpA-bs-5UufBU2kpLFwpihiMkEX8AuSEZjpHnraYn61dH" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: articuloPrecio
                                }
                            }]
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            axios.post(route('paypal.success'), { orderID: data.orderID })
                                .then(response => {
                                    if (response.data.success) {
                                        setMensaje('Pago realizado con éxito.');
                                        window.open(route('facturas.show', { factura: response.data.factura.id }), '_blank');
                                        onClose();
                                    } else {
                                        setMensaje('Error en el pago.');
                                    }
                                })
                                .catch(error => {
                                    console.error('Error en el pago:', error);
                                    setMensaje('Error en el pago.');
                                });
                        });
                    }}
                />
            </PayPalScriptProvider>
            {mensaje && <p className="mt-4">{mensaje}</p>}
        </div>
    );
};

export default SimuladorCompra;
