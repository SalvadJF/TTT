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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    };

    const filteredUsuarios = useMemo(() => {
        return usuarios.data.filter(usuario => {
            const searchTermLower = searchTerm.toLowerCase();
            return (
                usuario.id.toString().includes(searchTermLower) ||
                usuario.name.toLowerCase().includes(searchTermLower) ||
                usuario.email.toLowerCase().includes(searchTermLower) ||
                (usuario.admin ? "administrador" : "usuario").includes(searchTermLower) ||
                (usuario.blocked ? "bloqueado" : "libre").includes(searchTermLower) ||
                formatDate(usuario.created_at).includes(searchTermLower)
            );
        });
    }, [usuarios.data, searchTerm]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsuarios.slice(indexOfFirstItem, indexOfLastItem);

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
            await axios.post(`/usuarios/blockUser/${usuarioToBlock.id}`);
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
            await axios.post(`/usuarios/unBlockUser/${usuarioToUnblock.id}`);
            setShowUnblockModal(false);
            // Actualiza el estado del usuario desbloqueado
            usuarioToUnblock.blocked = false;
        } catch (error) {
            console.error('Error unblocking user:', error);
        }
    };

    return (
        <div className="m-5 p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border rounded-md ml-4  text-white outline-none focus:border-opacity-0 bg-red-900 mb-4"
            />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {filteredUsuarios.length === 0 ? (
                    <div className="text-center font-koulen py-4 text-gray-700 dark:text-gray-400">
                        No hay resultados
                    </div>
                ) : (
                    <table className="w-full text-sm text-center rtl:text-right text-gray-500 ">
                        <thead className="text-sm font-koulen text-black uppercase bg-red-300">
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
                                <tr
                                    className="border-b hover:bg-blue-100"
                                    key={usuario.id}
                                >
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
                                                    <div className="relative group inline-block">
                                                        <button
                                                            onClick={() => handleShowUnblockModal(usuario)}
                                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none"
                                                        >
                                                            <img src="/img/iconos/unlock.svg" alt="Icono Desbloquear" className="w-4 h-4" style={{ minWidth: "12px", minHeight: "12px" }} />
                                                        </button>
                                                        <span className="font-koulen absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                            Desbloquear usuario
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="relative group inline-block">
                                                        <button
                                                            onClick={() => handleShowBlockModal(usuario)}
                                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none"
                                                        >
                                                            <img src="/img/iconos/lock.svg" alt="Icono Bloquear" className="w-4 h-4" style={{ minWidth: "12px", minHeight: "12px" }} />
                                                        </button>
                                                        <span className="font-koulen absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                            Bloquear usuario
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="relative group inline-block">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleShowDeleteModal(usuario)}
                                                        className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none ml-2"
                                                    >
                                                        <img src="/img/iconos/trash.svg" alt="Icono Borrar" className="w-4 h-4" style={{ minWidth: "12px", minHeight: "12px" }} />
                                                    </button>
                                                    <span className="font-koulen absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                        Borrar usuario
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {/* Paginación */}
                {filteredUsuarios.length > 0 && (
                    <div className="flex justify-center mt-4 mb-4">
                        {Array.from({ length: Math.ceil(filteredUsuarios.length / itemsPerPage) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`px-3 py-1 mx-1 border rounded ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {/* Modales para eliminar, bloquear y desbloquear */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-4">Confirmar eliminación</h2>
                        <p>¿Estás seguro de que deseas eliminar al usuario {usuarioToDelete.name}?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={handleDeleteUser} className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Eliminar</button>
                            <button onClick={() => setShowDeleteModal(false)} className="bg-gray-300 px-4 py-2 rounded-md">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
            {showBlockModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-4">Confirmar bloqueo</h2>
                        <p>¿Estás seguro de que deseas bloquear al usuario {usuarioToBlock.name}?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={handleBlockUser} className="bg-purple-500 text-white px-4 py-2 rounded-md mr-2">Bloquear</button>
                            <button onClick={() => setShowBlockModal(false)} className="bg-gray-300 px-4 py-2 rounded-md">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
            {showUnblockModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-4">Confirmar desbloqueo</h2>
                        <p>¿Estás seguro de que deseas desbloquear al usuario {usuarioToUnblock.name}?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={handleUnblockUser} className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Desbloquear</button>
                            <button onClick={() => setShowUnblockModal(false)} className="bg-gray-300 px-4 py-2 rounded-md">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
