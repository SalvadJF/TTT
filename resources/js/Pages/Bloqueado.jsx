import { Link, Head } from '@inertiajs/react';
import { ApplicationLogoGrande } from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />

            <div id="fondo" className="flex items-center justify-center min-h-screen">
                <div className="text-center p-10 rounded-lg shadow-lg fade-in w-3/4 bg-opacity-10 bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150">
                    <div className="flex justify-center mb-4">
                        <ApplicationLogoGrande className="text-white" /> {/* Uso del logotipo grande */}
                    </div>
                    <h1 className="font-koulen text-4xl font-bold text-white mb-4">No Puedes Entrar en la Aplicacion</h1>
                    <h2 className="font-koulen text-3xl font-bold text-white mb-4">Un Administrador a bloqueado tu cuenta</h2>
                    <p className="font-lato text-lg text-white mb-8">Ponte en contacto con nosotros a traves de nuestro Email</p>
                    <p className="font-lato text-lg text-white mb-8">TTT@gmail.com</p>
                    <Link href={route('logout')} method="post" as="button">
                                            Cerrar sesión
                    </Link>
                </div>
            </div>
        </>
    );
}
