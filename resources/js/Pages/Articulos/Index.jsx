import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ArticuloExposicion from '@/Components/ArticuloExposicion';
import Encabezado from '@/Components/Encabezado';
import  Boton  from '@/Components/Botones';
import { BreadcrumbArticulos } from '@/Components/BreadCrumb';

export default function Index({ auth, articulos }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Articulos</h2>}
        >
            <Head title="Articulos" />
            <div class=" ml-20 pt-40">
                <BreadcrumbArticulos />
            </div>
                <div>
                    <ArticuloExposicion articulos={articulos} />
                </div>

                <div className="mt-4">
                <nav aria-label="Page navigation">
                    <ul className="inline-flex items-center -space-x-px">
                        {articulos.links.map((link, index) => (
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
