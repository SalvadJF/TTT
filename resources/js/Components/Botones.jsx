const BotonPrincipal = ({ ruta, texto }) => {
    return (
        <div className="flex justify-center p-5 gap-10 relative group">
            <a
                href={ruta}
                className="text-center font-koulen w-60 py-2.5 px-5 mt-5 text-l font-medium text-white focus:outline-none bg-red-800 rounded-lg border border-black hover:bg-red-900 focus:z-10 focus:ring-4 focus:ring-gray-100 no-underline transform transition-transform duration-300 group-hover:scale-150"
            >
                {texto}
            </a>
        </div>
    );
};

const BotonSecundario = ({ ruta, texto }) => {
    return (
        <div className="flex justify-center p-5 gap-10 relative group">
            <a
                href={ruta}
                className="text-center font-koulen w-60 py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-gray-700 rounded-lg border border-white hover:bg-red-900 focus:z-10 focus:ring-4 focus:ring-gray-100 no-underline transform transition-transform duration-300 group-hover:scale-150"
            >
                {texto}
            </a>
        </div>
    );
};

const BotonTipo = ({ texto }) => {
    return (
        <div className="">
            <div className="flex justify-center text-center p-2 m-4 gap-2 w-1/5 font-koulen bg-orange-900 rounded-lg border border-white focus:z-10 focus:ring-4 focus:ring-gray-100 text-white">
            <h5>
                {texto}
            </h5>
        </div>
        </div>

    );
}

const BotonTipoModal = ({ texto, onClick }) => {
    return (
        <div
            className="relative group flex justify-center text-center p-2 m-4 gap-2 w-1/5 font-koulen bg-green-600 hover:bg-green-800 rounded-lg border border-white focus:z-10 focus:ring-4 focus:ring-gray-100 text-white transform transition-transform duration-300 group-hover:scale-150"
            onClick={onClick}
        >
            <button>
                {texto}
            </button>
        </div>
    );
}

const BotonTipoRuta = ({ ruta, texto }) => {
    return (

        <div className="flex justify-left p-1 ml-5 gap-10 relative group">
            <a
                href={ruta}
                className="flex justify-center text-center p-2 m-4 gap-2 w-1/6 font-koulen bg-orange-900 hover:bg-orange-800 rounded-lg border border-white focus:z-10 focus:ring-4 focus:ring-gray-100 text-white transform transition-transform duration-300 group-hover:scale-110"
            >
            <button>
                {texto}
            </button>
            </a>
        </div>
    );
}

const BotonEtiqueta = ({ texto }) => {
    return (
        <div className="flex p-2 m-4  font-koulen bg-green-900 rounded-lg border border-white focus:z-10 focus:ring-4 focus:ring-gray-100 text-white transform transition-transform duration-300 group-hover:scale-150">
                {texto}
        </div>
    );
}

const BotonCategoria = ({ texto }) => {
    return (
        <div className="flex p-2 m-4  font-koulen bg-blue-900 rounded-lg border border-white focus:z-10 focus:ring-4 focus:ring-gray-100 text-white transform transition-transform duration-300 group-hover:scale-150">
                {texto}
        </div>
    );
}


export { BotonPrincipal, BotonSecundario, BotonTipo, BotonTipoModal, BotonTipoRuta, BotonEtiqueta, BotonCategoria };
