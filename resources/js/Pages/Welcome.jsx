import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />

            <div id="fondo" className="flex items-center justify-center min-h-screen">
                <div className="text-center p-10 rounded-lg shadow-lg fade-in w-3/4 bg-opacity-10 bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150">
                    <div className="mb-8">
                        <img src="path/to/your/logo.png" alt="Logo" className="mx-auto w-48 h-48 object-contain" />
                    </div>
                    <h1 className="font-koulen text-6xl font-bold text-white mb-4">Trazos, Texturas y Tecnología 3D</h1>
                    <h2 className="font-koulen text-4xl font-bold text-white mb-4">Bienvenido</h2>
                    <p className="font-lato text-lg text-white mb-8">Únete a nuestra comunidad y explora una amplia colección de modelos 3D de alta calidad</p>
                    <p className="font-lato text-lg text-white mb-8">¡Regístrate ahora y empieza a comprar, vender y compartir tus diseños!</p>
                    {auth.user ? (
                        <Link href="/dashboard" className="font-koulen rounded-md px-10 py-4 text-white bg-black hover:bg-red-900 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:bg-gray-700">
                            Home
                        </Link>
                    ) : (
                        <>
                            <Link href="/login" className="font-koulen rounded-md px-10 py-4 text-white bg-black hover:bg-red-900 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:bg-gray-700">
                                Log in
                            </Link>
                            {auth.canRegister && (
                                <Link href="/register" className="font-koulen rounded-md px-10 py-4 text-white bg-black hover:bg-red-900 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:bg-gray-700">
                                    Registrate
                                </Link>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
