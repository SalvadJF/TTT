import { useState } from 'react';
import axios from 'axios';
import { BotonTipoRuta } from './Botones';

const ProfileHeader = ({ user }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const formattedDate = user.fecha_nacimiento
        ? new Date(user.fecha_nacimiento).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
        : 'Sin información';

    const handleRecargarMonedero = (amount) => {
        setSelectedAmount(amount);
        setModalOpen(true);
    };

    const handleRecargaConfirmada = async () => {
        setLoading(true);
        setErrorMessage('');
        try {
            const response = await axios.post('/recargar-monedero', { monto: selectedAmount });
            if (response.data.success) {
                window.location.href = response.data.redirect_url;
            } else {
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            setErrorMessage('Error al procesar la recarga');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center gap-4 m-20 p-10 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg">
        <div className="relative group inline-block">
                <a href="/profile/editar" className="font-medium text-white inline-flex items-center bg-red-800 p-2 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-150">
                    <img src="/img/iconos/ajustes.svg" alt="Icono Editar" className="w-4 h-4" />
                </a>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                    Editar tus datos
                </span>
            </div>
            <img className="text-white w-20 h-20 rounded-full" src={user.avatar} alt="imagen del usuario" />

            <div className="font-medium text-white">
                <div className="font-koulen text-2xl">{user.name}</div>
                <div className="font-koulen flex items-center gap-4 mb-2 mt-2 relative group">
                    <button className="text-decoration-underline bg-red-800 hover:bg-red-900 rounded-lg p-2 transform transition-transform duration-300 group-hover:scale-110" onClick={() => setModalOpen(true)}>Monedero {user.monedero}</button>
                </div>
                <div className="font-koulen flex items-center gap-4 mb-2">
                    <img src="/img/iconos/torta-cumpleanos.svg" alt="Icono Cumpleaños" className="w-4 h-4" />
                    Fecha de Nacimiento: {formattedDate}
                </div>
                <div className="flex items-center gap-4 mb-2 font-koulen border-b border-white">
                    <img src="/img/iconos/libro-marcador.svg" alt="Icono Descripción" className="w-4 h-4" />
                    Descripcion
                </div>
                <div className="font-lato text-sm text-gray-100">
                    <p>{user.descripcion ? user.descripcion : 'Sin información'}</p>
                </div>
                <div>
                </div>

                {modalOpen && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="bg-gray-900 p-8 rounded-lg">
                            <h2 className="text-2xl font-koulen mb-4 text-center">Recarga de Monedero</h2>
                            <div className="font-koulen flex items-center gap-4 mb-2 mt-2">
                                <button onClick={() => setSelectedAmount(10)} className='rounded-lg bg-green-500 p-2 hover:bg-green-700'>
                                <img
                                    src="/img/iconos/paypal.svg"
                                    alt="Icono paypal"
                                    className="w-4 h-4 mr-2 inline-block"
                                />
                                Recargar 10€
                                </button>
                                <button onClick={() => setSelectedAmount(20)} className='rounded-lg bg-yellow-500 p-2 hover:bg-yellow-700'>
                                <img
                                    src="/img/iconos/paypal.svg"
                                    alt="Icono paypal"
                                    className="w-4 h-4 mr-2 inline-block"
                                />
                                Recargar 20€
                                </button>
                                <button onClick={() => setSelectedAmount(50)} className='rounded-lg bg-blue-500 p-2 hover:bg-blue-700'>
                                <img
                                    src="/img/iconos/paypal.svg"
                                    alt="Icono paypal"
                                    className="w-4 h-4 mr-2 inline-block"
                                />
                                Recargar 50€
                                </button>
                            </div>
                            <p className='font-lato text-center'>¿Deseas recargar {selectedAmount}€ en tu monedero?</p>
                            <div className="flex justify-end mt-6">
                                <button className="rounded-lg font-koulen mr-4 bg-slate-500 p-2 hover:bg-slate-700" onClick={() => setModalOpen(false)}>Cancelar</button>
                                <button className="rounded-lg font-koulen mr-4 bg-red-800 p-2 hover:bg-red-900" disabled={loading} onClick={handleRecargaConfirmada}>
                                    {loading ? 'Cargando...' : 'Confirmar'}
                                </button>
                            </div>
                            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileHeader;
