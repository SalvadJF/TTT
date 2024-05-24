export default function ProfileHeader({admin}) {
    return (
        <div class="flex items-center gap-4 m-20 p-10 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg">
            <img class="text-white w-20 h-20 rounded-full" src={admin.avatar} alt="imagen del Administrador" />
            <div class="font-medium text-white">
                <div class="font-koulen">{admin.name}</div>
                <div class="font-lato text-sm text-gray-100 dark:text-gray-400">Monedero {admin.monedero}</div>
            </div>
          </div>
    );
 }
