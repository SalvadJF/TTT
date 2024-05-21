import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import NoticiasExposicion from '@/Components/NoticiaExposicion';
import Encabezado from '@/Components/Encabezado';
import  Boton  from '@/Components/Botones';
import { BreadcrumbNoticias } from '@/Components/BreadCrumb';

export default function Index({ auth, noticias }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Noticias</h2>}
        >
            <Head title="Noticias" />
            <div class=" ml-20 pt-40">
                <BreadcrumbNoticias />
            </div>
            <div >
                <NoticiasExposicion noticias={noticias} />
            </div>

                <div className="mt-4">
                <nav aria-label="Page navigation">
                    <ul className="inline-flex items-center -space-x-px">
                        {noticias.links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.url || '#'}
                                    className={`px-3 py-2 leading-tight ${link.active ? 'text-blue-600' : 'text-gray-500'} ${link.url ? 'hover:bg-gray-200' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </AuthenticatedLayout>
    );
}
