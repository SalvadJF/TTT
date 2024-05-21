import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NoticiaCarta from '@/Components/NoticiaCarta';

export default function Dashboard({ auth, noticias, articulos }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>

            <div>  {noticias.data.map(noticia => (
                        <tr key={noticia.id}>
                            <td>{noticia.titulo}</td>
                            <td>{noticia.contenido}</td>
                        </tr>
                    ))}</div>

        </AuthenticatedLayout>
    );
}
