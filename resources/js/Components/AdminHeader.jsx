export default function AdminHeader({admin}) {
    return (
        <div className="flex items-center gap-4 m-20 p-10 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg">
            <img className="text-white w-20 h-20 rounded-full" src={admin.avatar} alt="imagen del Administrador" />
            <div className="font-medium text-white">
                <div className="font-koulen">{admin.name}</div>
                <div className="font-lato text-sm text-gray-100 dark:text-gray-400">Bienvenido Administrador</div>
            </div>
          </div>
    );
 }
