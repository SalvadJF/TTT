import { Link, Head } from '@inertiajs/react';
import { ApplicationLogoGrande } from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {
    const buttonStyle = {
        fontFamily: 'Koulen, sans-serif',
        borderRadius: '0.375rem',
        padding: '1rem 2.5rem',
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid transparent',
        transition: 'background-color 0.3s, border-color 0.3s',
        cursor: 'pointer',
    };

    const buttonHoverStyle = {
        backgroundColor: '#7b0000',
        borderColor: '#ff2d20',
    };

    return (
        <>
            <Head title="Welcome" />

            <div id="fondo" className="flex items-center justify-center min-h-screen">
                <div className="text-center p-10 rounded-lg shadow-lg fade-in w-3/4 bg-opacity-10 bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150">
                    <div className="flex justify-center mb-4">
                        <ApplicationLogoGrande className="text-white" /> {/* Uso del logotipo grande */}
                    </div>
                    <h1 className="font-koulen text-6xl font-bold text-white mb-4">Trazos, Texturas y Tecnología 3D</h1>
                    <h2 className="font-koulen text-4xl font-bold text-white mb-4">Bienvenido</h2>
                    <p className="font-lato text-lg text-white mb-8">Únete a nuestra comunidad y explora una amplia colección de modelos 3D de alta calidad</p>
                    <p className="font-lato text-lg text-white mb-8">¡Regístrate ahora y empieza a comprar, vender y compartir tus diseños!</p>
                    {auth.user ? (
                        <Link
                            href="/dashboard"
                            style={buttonStyle}
                            onMouseEnter={e => Object.assign(e.target.style, buttonHoverStyle)}
                            onMouseLeave={e => Object.assign(e.target.style, buttonStyle)}
                        >
                            Home
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                style={{ ...buttonStyle, margin: '1.25rem' }} // m-5
                                onMouseEnter={e => Object.assign(e.target.style, buttonHoverStyle)}
                                onMouseLeave={e => Object.assign(e.target.style, buttonStyle)}
                            >
                                Log in
                            </Link>

                            <Link
                                href="/register"
                                style={{ ...buttonStyle, margin: '1.25rem' }} // m-5
                                onMouseEnter={e => Object.assign(e.target.style, buttonHoverStyle)}
                                onMouseLeave={e => Object.assign(e.target.style, buttonStyle)}
                            >
                                Regístrate
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
