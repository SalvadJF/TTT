import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Encabezado from '@/Components/Encabezado';

export default function Derechos({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Derechos</h2>}
        >
            <Head title="Derechos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <p>
                                Todo el contenido presente en este sitio web, incluyendo pero no limitado a los diseños 3D, imágenes, textos, gráficos y cualquier otro material, es propiedad exclusiva de TTT y está protegido por las leyes de derechos de autor y otras leyes de propiedad intelectual aplicables.
                            </p>
                            <Encabezado texto="Normas de Uso" />
                            <ul className="list-disc list-inside">
                                <li>Respeto y cortesía: No se permite el uso de lenguaje ofensivo, insultos, acoso o cualquier comportamiento que promueva el odio o la discriminación en cualquier parte de nuestro sitio web, incluidos los comentarios y foros de discusión.</li>
                                <li>Prohibición de plagio: Queda estrictamente prohibido copiar, reproducir, distribuir, transmitir o utilizar de cualquier manera los contenidos de este sitio web sin la autorización expresa y por escrito del Usuario dueño de esta.</li>
                                <li>Contribuciones de Usuarios: Los usuarios que contribuyan con contenidos al sitio, como comentarios o diseños, garantizan que dichos contenidos no infringen derechos de terceros y que tienen todos los derechos necesarios para conceder a TTT una licencia mundial, no exclusiva y gratuita para usar, reproducir, modificar y distribuir dichos contenidos.</li>
                                <li>Política de Enlaces: No se permite enlazar nuestro contenido en otros sitios web sin nuestra autorización previa y por escrito.</li>
                            </ul>
                            <p>
                                <Encabezado texto="Protección de Datos" />
                                Nos comprometemos a proteger la privacidad de nuestros usuarios. Toda la información personal recopilada se utilizará de acuerdo con nuestra Política de Privacidad.
                            </p>
                            <Encabezado texto="Actualizaciones y Cambios" />
                            <p>
                                TTT se reserva el derecho de actualizar y modificar estos términos en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en el sitio web. Se recomienda a los usuarios revisar regularmente esta sección para estar al tanto de cualquier cambio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

