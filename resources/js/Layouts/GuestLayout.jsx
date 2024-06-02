import {ApplicationLogoGrande} from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div id="fondo" className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogoGrande />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-900 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
