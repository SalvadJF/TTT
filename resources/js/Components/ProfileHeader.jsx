import { useState } from 'react';
import axios from 'axios';

const ProfileHeader = ({ user }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Formatea la fecha de nacimiento
    const formattedDate = user.fecha_nacimiento
        ? new Date(user.fecha_nacimiento).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
        : 'Sin información';

    const handleRecargarMonedero = async (amount) => {
        setSelectedAmount(amount);
        setModalOpen(true);
    };

    const handleRecargaConfirmada = async () => {

    };

    const handlePaypalRedirect = async () => {

    };

    return (
        <div className="flex items-center gap-4 m-20 p-10 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg">
            <img className="text-white w-20 h-20 rounded-full" src={user.avatar} alt="imagen del Administrador" />
            <div className="font-medium text-white">
                <div className="font-koulen text-2xl">{user.name}</div>
                <div className="font-koulen flex items-center gap-4 mb-2 mt-2">
                    <button className="text-decoration-underline bg-red-800 hover:bg-red-900 rounded-lg p-2" onClick={() => setModalOpen(true)}>Monedero {user.monedero}</button>
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

                {/* Modal de confirmación de recarga */}
                {modalOpen && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="bg-gray-900 p-8 rounded-lg">
                            <h2 className="text-2xl font-koulen mb-4 text-center">Recarga de Monedero</h2>
                            <div className="font-koulen flex items-center gap-4 mb-2 mt-2">
                                <button onClick={() => handleRecargarMonedero(10)} className='rounded-lg bg-green-500 p-2 hover:bg-green-700'>Recargar 10€</button>
                                <button onClick={() => handleRecargarMonedero(20)} className='rounded-lg bg-yellow-500 p-2 hover:bg-yellow-700'>Recargar 20€</button>
                                <button onClick={() => handleRecargarMonedero(50)} className='rounded-lg bg-blue-500 p-2 hover:bg-blue-700'>Recargar 50€</button>
                            </div>
                            <p className='font-lato text-center'>¿Deseas recargar {selectedAmount}€ en tu monedero?</p>
                            <div className="flex justify-end mt-6">
                                <button className="rounded-lg font-koulen mr-4 bg-slate-500 p-2 hover:bg-slate-700"  onClick={() => setModalOpen(false)}>Cancelar</button>
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
