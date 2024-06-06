export default function LicenciaCC ({ licencia }) {
    // Generar la ruta del archivo SVG basándose en el valor de la licencia
    const iconPath = `/img/iconos/${licencia}.svg`;

    return (
        <div >
            <img src={iconPath} alt={`Icono de licencia ${licencia}`} className="w-100 h-14" />
        </div>
    );
};

