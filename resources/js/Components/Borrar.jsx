export default function Borrar () {
    return (
        <button
            className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
        >
            <img src="/img/iconos/trash.svg" alt="Icono Borrar" className="w-4 h-4" />
        </button>
    );
};

