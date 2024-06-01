import React, { useState, useMemo } from "react";
import axios from 'axios';
import { useForm } from "@inertiajs/react";

export default function UsuariosTable({ usuarios }) {
    const { delete: handleDelete } = useForm();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showBlockModal, setShowBlockModal] = useState(false);
    const [showUnblockModal, setShowUnblockModal] = useState(false);
    const [usuarioToDelete, setUsuarioToDelete] = useState(null);
    const [usuarioToBlock, setUsuarioToBlock] = useState(null);
    const [usuarioToUnblock, setUsuarioToUnblock] = useState(null);

    const filteredUsuarios = useMemo(() => {
        return usuarios.data.filter(usuario =>
            usuario.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [usuarios.data, searchTerm]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsuarios.slice(indexOfFirstItem, indexOfLastItem);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    };

    const handleShowDeleteModal = (usuario) => {
        setUsuarioToDelete(usuario);
        setShowDeleteModal(true);
    };

    const handleDeleteUser = () => {
        handleDelete(`/usuarios/${usuarioToDelete.id}`, { onSuccess: () => setShowDeleteModal(false) });
    };

    const handleShowBlockModal = (usuario) => {
        setUsuarioToBlock(usuario);
        setShowBlockModal(true);
    };

    const handleBlockUser = async () => {
        try {
            await axios.post(`/usuarios/blockUser/${usuarioToBlock}`);
            setShowBlockModal(false);
            // Actualiza el estado del usuario bloqueado
            usuarioToBlock.blocked = true;
        } catch (error) {
            console.error('Error blocking user:', error);
        }
    };

    const handleShowUnblockModal = (usuario) => {
        setUsuarioToUnblock(usuario);
        setShowUnblockModal(true);
    };

    const handleUnblockUser = async () => {
        try {
            await axios.post(`/usuarios/unBlockUser/${usuarioToUnblock}`);
            setShowUnblockModal(false);
            // Actualiza el estado del usuario desbloqueado
            usuarioToUnblock.blocked = false;
        } catch (error) {
            console.error('Error unblocking user:', error);
        }
    };

    return (
        <div className="m-5 p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
            <input type="text" placeholder="Buscar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="px-4 py-2 border rounded-md mb-4" />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID del Usuario</th>
                            <th scope="col" className="px-6 py-3">Nombre</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Rol</th>
                            <th scope="col" className="px-6 py-3">Estado</th>
                            <th scope="col" className="px-6 py-3">Fecha de Creacion</th>
                            <th scope="col" className="px-6 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((usuario) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={usuario.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{usuario.id}</th>
                                <td className="px-6 py-4">
                                    <a href={`/usuarios/${usuario.id}`} className="text-blue-600">{usuario.name}</a>
                                </td>
                                <td className="px-6 py-4">{usuario.email}</td>
                                <td className="px-6 py-4">
                                    {usuario.admin ? "Administrador" : "Usuario"}
                                </td>
                                <td className="px-6 py-4">
                                    {usuario.blocked ? "Bloqueado" : "Libre"}
                                </td>
                                <td className="px-6 py-4">{formatDate(usuario.created_at)}</td>
                                <td className="px-6 py-4 text-center">
                                    {usuario.admin === false && (
                                        <>
                                            {usuario.blocked ? (
                                                <button onClick={() => handleShowUnblockModal(usuario)} className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none">
                                                    <img src="/img/iconos/unlock.svg" alt="Icono Desbloquear" className="w-4 h-4" />
                                                </button>
                                            ) : (
                                                <button onClick={() => handleShowBlockModal(usuario)} className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none">
                                                    <img src="/img/iconos/lock.svg" alt="Icono Bloquear" className="w-4 h-4" />
                                                </button>
                                            )}
                                            <button type="button" onClick={() => handleShowDeleteModal(usuario)} className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none ml-2">
                                                <img src="/img/iconos/trash.svg" alt="Icono Borrar" className="w-4 h-4" />
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Paginación */}
                <div className="flex justify-center mt-4 mb-4">
                    {Array.from({ length: Math.ceil(filteredUsuarios.length / itemsPerPage) }).map((_, index) => (
                        <button key={index} onClick={() => paginate(index + 1)} className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{index + 1}</button>
                    ))}
                </div>
            </div>
            {/* Modal de Confirmación de Borrado */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold mb-4">¿Estás seguro de que quieres borrar este usuario?</p>
                        <div className="flex justify-center">
                            <button className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={handleDeleteUser}>Borrar</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400" onClick={() => setShowDeleteModal(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Confirmación de Bloqueo */}
            {showBlockModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold mb-4">¿Estás seguro de que quieres bloquear a este usuario?</p>
                        <div className="flex justify-center">
                            <button className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={handleBlockUser}>Bloquear</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400" onClick={() => setShowBlockModal(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Confirmación de Desbloqueo */}
            {showUnblockModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold mb-4">¿Estás seguro de que quieres desbloquear a este usuario?</p>
                        <div className="flex justify-center">
                            <button className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={handleUnblockUser}>Desbloquear</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400" onClick={() => setShowUnblockModal(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
