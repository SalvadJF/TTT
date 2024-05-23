import { useState, useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import NavBar from '@/Components/NavBar';
import ModalCookies from '@/Components/ModalCookies';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showCookieModal, setShowCookieModal] = useState(false);

    useEffect(() => {
        // Verificar si el usuario ya aceptó las cookies
        const cookiesAccepted = document.cookie.includes("cookies_accepted=true");
        if (!cookiesAccepted) {
            // Mostrar el modal si las cookies no han sido aceptadas
            setShowCookieModal(true);
        }
    }, []);

    const handleCloseCookieModal = () => {
        setShowCookieModal(false);
    };

    return (
        <div id="fondo" className="min-h-screen">
            <NavBar user={user} />

            {header && (
                <header className="hidden bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
            <Footer />

            {showCookieModal && <ModalCookies onClose={handleCloseCookieModal} />}
        </div>
    );
}
