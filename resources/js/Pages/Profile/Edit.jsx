import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdateDatosUsuario from './Partials/UpdateDatosUsuario';
import { Head } from '@inertiajs/react';
import { BreadcrumbPerfilOtros } from "@/Components/BreadCrumb";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Perfil</h2>}
        >
            <Head title="Editar perfil" />

            <div className="ml-20 pt-40">
                <BreadcrumbPerfilOtros nombre="Editar Perfil" />
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">

                <div className="p-4 sm:p-8 bg-gray-900 text-gray-50 shadow sm:rounded-lg">
                        <UpdateDatosUsuario className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-gray-900 text-gray-50 shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-gray-900 text-gray-50 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-gray-900 text-gray-50 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
