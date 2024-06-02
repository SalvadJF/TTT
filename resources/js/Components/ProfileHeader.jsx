export default function ProfileHeader({ user }) {
    // Formatea la fecha de nacimiento
    const formattedDate = user.fecha_nacimiento
        ? new Date(user.fecha_nacimiento).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
        : 'Sin información';

    return (
        <div className="flex items-center gap-4 m-20 p-10 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg">
            <img className="text-white w-20 h-20 rounded-full" src={user.avatar} alt="imagen del Administrador" />
            <div className="font-medium text-white">
                <div className="font-koulen text-2xl">{user.name}</div>
                <div className="font-koulen flex items-center gap-4 mb-2 mt-2">
                    <img
                        src="/img/iconos/comprador-de-billetera.svg"
                        alt="Icono Monedero"
                        className="w-4 h-4"
                    />
                    Monedero {user.monedero}
                </div>
                <div className="font-koulen flex items-center gap-4 mb-2">
                    <img
                        src="/img/iconos/torta-cumpleanos.svg"
                        alt="Icono Cumpleaños"
                        className="w-4 h-4"
                    />
                    Fecha de Nacimiento: {formattedDate}
                </div>
                <div className="flex items-center gap-4 mb-2 font-koulen border-b border-white">
                    <img
                        src="/img/iconos/libro-marcador.svg"
                        alt="Icono Descripción"
                        className="w-4 h-4"
                    />
                    Descripcion
                </div>
                <div className="font-lato text-sm text-gray-100">
                    <p>{user.descripcion ? user.descripcion : 'Sin información'}</p>
                </div>


            </div>
        </div>
    );
}
