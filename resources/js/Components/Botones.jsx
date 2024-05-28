const BotonPrincipal = ({ ruta, texto }) => {
    return (
        <div className="flex justify-center p-5 gap-10">
            <a
                href={ruta}
                className="text-center font-koulen w-60 py-2.5 px-5 mt-5 text-l font-medium text-white focus:outline-none bg-red-800 rounded-lg border border-black hover:bg-red-900 focus:z-10 focus:ring-4 focus:ring-gray-100 no-underline"
            >
                {texto}
            </a>
        </div>
    );
};

const BotonSecundario = ({ ruta, texto }) => {
    return (
        <div className="flex justify-center p-5 gap-10">
            <a
                href={ruta}
                className="text-center font-koulen w-60 py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-gray-700 rounded-lg border border-white hover:bg-red-900 focus:z-10 focus:ring-4 focus:ring-gray-100 no-underline"
            >
                {texto}
            </a>
        </div>
    );
};

const BotonTipo = ({ texto }) => {
    return (
        <div className="flex justify-center text-center p-2 m-4 gap-2 w-1/5 font-koulen bg-orange-900 rounded-lg border border-white focus:z-10 focus:ring-4 focus:ring-gray-100 text-white">
            <h5>
                {texto}
            </h5>
        </div>
    );
}

const BotonEtiqueta = ({ texto }) => {
    return (
        <div className="flex p-2 m-4  font-koulen bg-green-900 rounded-lg border border-white focus:z-10 focus:ring-4 focus:ring-gray-100 text-white">
                {texto}
        </div>
    );
}


export { BotonPrincipal, BotonSecundario, BotonTipo, BotonEtiqueta };
