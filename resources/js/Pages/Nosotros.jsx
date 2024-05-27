import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Encabezado from '@/Components/Encabezado';
import { BreadcrumbOtros } from '@/Components/BreadCrumb';

export default function Nosotros({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Nosotros</h2>}
        >
            <Head title="Nosotros" />

            <div class=" ml-20 pt-40">
                <BreadcrumbOtros nombre="Nosotros" />
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Encabezado texto="Nosotros" />
                    <div className="bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="p-6 text-white font-lato">
                            <p>
                                Bienvenido a TTT, tu plataforma en línea de confianza para comprar y vender diseños 3D de alta calidad. Nos especializamos en proporcionar un espacio donde los creadores pueden compartir sus modelos 3D y los usuarios pueden adquirirlos para diversas aplicaciones, desde proyectos personales hasta necesidades profesionales.
                            </p>
                            <Encabezado texto="Quienes Somos" />
                            <p>
                                TTT es una plataforma innovadora dedicada a la comercialización de diseños 3D creados por una comunidad global de talentosos diseñadores. Fundada con la misión de hacer accesibles los modelos 3D de calidad superior a usuarios de todo el mundo, operamos exclusivamente en línea, lo que nos permite ofrecer una amplia variedad de modelos a precios competitivos y con la máxima comodidad para nuestros usuarios.
                            </p>
                            <Encabezado texto="Nuestra Mision" />
                            <p>
                                En TTT, creemos que el diseño 3D es una herramienta poderosa que puede transformar ideas en realidades. Nuestra misión es proporcionar a los diseñadores un lugar para compartir su trabajo y a los usuarios un espacio para encontrar modelos 3D de alta calidad para sus proyectos.
                            </p>
                            <Encabezado texto="Nuestros Valores" />
                            <ul className="list-disc list-inside">
                                <li>Calidad: Nos comprometemos a ofrecer una plataforma con modelos 3D de alta calidad, creados por diseñadores talentosos.</li>
                                <li>Innovación: Nos mantenemos a la vanguardia de la tecnología de diseño 3D para ofrecerte siempre lo mejor y lo más novedoso.</li>
                                <li>Comunidad: Fomentamos una comunidad vibrante donde diseñadores y usuarios pueden interactuar, compartir y aprender unos de otros.</li>
                                <li>Satisfacción del Cliente: Tu satisfacción es nuestra prioridad. Nos esforzamos por proporcionar un servicio excepcional y una experiencia de compra inigualable.</li>
                            </ul>
                            <Encabezado texto="Que Ofrecemos" />
                            <ul className="list-disc list-inside">
                                <li>Marketplace de Modelos 3D: Una plataforma donde los diseñadores pueden subir y vender sus modelos 3D, y los usuarios pueden comprar y descargar estos diseños.</li>
                                <li>Valoraciones y Comentarios: Los usuarios pueden valorar los modelos con likes y comentarios, proporcionando feedback útil para los diseñadores y ayudando a otros usuarios a tomar decisiones informadas.</li>
                                <li>Amplia Biblioteca de Diseños: Una extensa colección de modelos listos para descargar y utilizar en tus proyectos.</li>
                            </ul>
                            <Encabezado texto="Por Que Elegirnos" />
                            <p>
                                Elegir TTT significa optar por una plataforma comprometida con la excelencia, la innovación y el fortalecimiento de una comunidad global de diseñadores y usuarios. Nuestra interfaz fácil de usar está diseñada para que encuentres exactamente lo que necesitas sin complicaciones. Además, nuestro equipo de soporte está siempre disponible para ayudarte en cada paso del camino.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
